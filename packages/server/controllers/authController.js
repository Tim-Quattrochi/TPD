const User = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');

exports.login = asyncHandler(async (req, res, next) => {
  console.log(req.body);
  const { userName, password } = req.body;

  if (!userName || !password) {
    return res
      .status(400)
      .json({ message: 'Please enter a userName and a password.' });
  }

  const user = await User.findOne({
    userName,
  }).exec();

  console.log(user);

  if (!user) {
    return res.status(401).json({ message: 'not authorized.' });
  }

  const passMatch = await bcrypt.compare(password, user.passwordHash);

  if (!passMatch) {
    return res.status(401).json({ message: 'Not authorized' });
  }

  const token = jwt.sign(
    {
      userInfo: {
        userName: user.userName,
        role: user.role,
      },
    },

    process.env.JWT_SECRET,
    {
      expiresIn: process.env.JWT_EXPIRES_IN,
    }
  );
  const refreshToken = jwt.sign(
    {
      "userName": user.userName,
    },
    
    process.env.REFRESH_TOKEN_SECRET,
    {
      expiresIn: process.env.REFRESH_EXPIRES_IN,
    }
  );

  //create http cookie containing refresh token.
  res.cookie('jwt', refreshToken, {
    httpOnly: true,
    secure: true,
    sameSite: 'none',
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });

  //Send token containing userName and role
  res.json({ token });
});



//refresh token when it has expired.
exports.refresh = (req, res) => {
  const cookies = req.cookies;

  if (!cookies?.jwt) {
    return res.status(401).json({ message: 'Not authorized.' });
  }

  const refreshToken = cookies.jwt;

  jwt.verify(
    refreshToken,
    process.env.REFRESH_TOKEN_SECRET,
    asyncHandler(async (err, decoded) => {
      if (err) {
        return res.status(403).json({ message: 'Forbidden.' });
      }

      const user = await User.findOne({
        userName: decoded.userName,
      }).exec();

      if (!user) {
        return res.status(401).json({ message: 'Not authorized.' });
      }

      const token = jwt.sign(
        {
          "UserInfo": {
            "userName": user.userName,
            "role": user.role,
          },
        },
        process.env.JWT_SECRET,
        { expiresIn: process.env.JWT_EXPIRES_IN }
      );
      res.json({ token });
    })
  );
};

//clear cookies if they exist.
exports.logout = (req, res) => {
    const cookies = req.cookies

    if(!cookies?.jwt){
        return res.sendStatus(204) //no content
    }

    res.clearCookie('jwt', {httpOnly:true, sameSite: 'none', secure: true})
    res.json({message: 'Cookie cleared.'})
}
