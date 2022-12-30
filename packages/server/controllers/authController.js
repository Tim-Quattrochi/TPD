const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");

// asyncHandler: Simple middleware for handling exceptions inside of async express routes and passing them to your express error handlers.
// @requestUrl: http://localhost:3001/api/v1/auth/login
//@method: POST
//@access: PUBLIC
exports.login = asyncHandler(async (req, res, next) => {
  const { userName, password } = req.body;
  console.log(req.body);

  if (!userName || !password) {
    return res
      .status(400)
      .json({ message: "Please enter a userName and a password." });
  }

  const user = await User.findOne({
    userName: userName,
  }).exec();

  const { firstName, lastName, email } = user; //information to send back to the client
  const userInfo = {
    firstName,
    lastName,
    userName,
    email,
  };

  if (!user) {
    return res
      .status(401)
      .json({ message: "not authorized. Check credentials." });
  }

  const passMatch = await bcrypt.compare(password, user.passwordHash);

  if (passMatch) {
    //this is the access token
    const token = jwt.sign(
      {
        UserInfo: {
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
        userName: user.userName,
      },

      process.env.REFRESH_TOKEN_SECRET,
      {
        expiresIn: process.env.REFRESH_EXPIRES_IN,
      }
    );

    user.refreshToken = refreshToken;
    const result = await user.save();
    console.log(result);

    //create http cookie containing refresh token.
    res.cookie("jwt", refreshToken, {
      httpOnly: true,
      secure: true,
      sameSite: "None",
      maxAge: 7 * 24 * 60 * 60 * 1000, //7 days
    });

    //Send access token containing userName and role
    return res.json({ token, userInfo });
  } else {
    res.sendStatus(401);
  }
});

//Postman request url for test. GET. http://localhost:3001/api/v1/auth/refresh
//refresh token when it has expired.
exports.refresh = asyncHandler(async (req, res) => {
  const cookies = req.cookies;

  if (!cookies?.jwt) {
    return res.status(401).json({ message: "Not authorized." });
  }

  const refreshToken = cookies.jwt;

  const user = await User.findOne({
    refreshToken,
  }).exec();

  if (!user) {
    return res.status(401).json({ message: "Not authorized." });
  }

  jwt.verify(
    refreshToken,
    process.env.REFRESH_TOKEN_SECRET,
    asyncHandler(async (err, decoded) => {
      if (err || user.userName !== decoded.userName) {
        return res.status(403).json({ message: "Forbidden." });
      }

      const token = jwt.sign(
        {
          UserInfo: {
            userName: user.userName,
            role: user.role,
          },
        },
        process.env.JWT_SECRET,
        { expiresIn: process.env.JWT_EXPIRES_IN }
      );
      //send back access token
      res.json({ token });
    })
  );
});

// https://expressjs.com/en/api.html#res.clearCookie
//clear cookies if they exist.
exports.logout = (req, res) => {
  const cookies = req.cookies;

  if (!cookies?.jwt) {
    return res.sendStatus(204); //no content
  }

  //maxAge does not need to be in clear cookies per docs
  res.clearCookie("jwt", {
    httpOnly: true,
    sameSite: "None",
    secure: true,
  });
  res.json({ message: "Cookie cleared." });
};
