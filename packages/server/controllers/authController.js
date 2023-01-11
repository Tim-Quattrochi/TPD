const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const {
  JWT_EXPIRES_IN,
  REFRESH_TOKEN_SECRET,
  REFRESH_EXPIRES_IN,
  JWT_SECRET,
} = require("../config/constants");

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

  const { firstName, lastName, email, id } = user; //information to send back to the client

  if (!user) {
    return res
      .status(401)
      .json({ message: "not authorized. Check credentials." });
  }
  console.log(user);
  const passMatch = await bcrypt.compare(password, user.passwordHash);

  if (!passMatch) {
    return res
      .status(401)
      .json({ Error: "Please check credentials" });
  }
  if (passMatch) {
    //this is the access token
    const payload = {
      id: user._id,
      userName: user.userName,
      role: user.role,
    };

    const options = {
      expiresIn: JWT_EXPIRES_IN,
    };

    const token = jwt.sign(payload, secret, options);

    const refreshToken = jwt.sign(
      {
        userName: user.userName,
        id: user._id,
      },

      REFRESH_TOKEN_SECRET,
      {
        expiresIn: REFRESH_EXPIRES_IN,
      }
    );

    user.refreshToken = refreshToken;
    const result = await user.save();

    //create http cookie containing refresh token.
    res.cookie("jwt", refreshToken, {
      httpOnly: true,
      secure: true,
      sameSite: "None",
      maxAge: 7 * 24 * 60 * 60 * 1000, //7 days
    });

    //Send access token containing userName and role
    return res.json({ token, firstName, lastName, userName, email });
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

  const user = await User.findOne({ refreshToken })
    // .select("id refreshToken")
    .exec();

  if (!user) {
    return res.status(401).json({ message: "Not authorized." });
  }

  jwt.verify(
    refreshToken,
    REFRESH_TOKEN_SECRET,
    asyncHandler(async (err, decoded) => {
      if (err || user.userName !== decoded.userName) {
        return res.status(403).json({ message: "Forbidden." });
      }

      const token = jwt.sign(
        {
          userName: user.userName,
          role: user.role,
          id: user._id,
        },

        JWT_SECRET,
        { expiresIn: JWT_EXPIRES_IN }
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
