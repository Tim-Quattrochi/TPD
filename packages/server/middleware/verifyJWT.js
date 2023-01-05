const asyncHandler = require("express-async-handler");

const jwt = require("jsonwebtoken");

const verifyJWT = asyncHandler((req, res, next) => {
  const authHeader =
    req.headers.authorization || req.headers.Authorization; //check for both capitalization

  if (!authHeader?.startsWith("Bearer")) {
    return res.status(401).json({ message: "Not Authorized" });
  }
  //access token
  const token = authHeader.split(" ")[1];
  console.log(token);

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    console.log(decoded);
    if (err) {
      console.log(err);
      return res.status(403).json({ message: "Forbidden" }); //this is not a valid token
    }
    (req.user = decoded.userName),
      (req.role = decoded.role),
      (req.id = decoded.id),
      next();
  });
});

module.exports = verifyJWT;
