const jwt = require("jsonwebtoken");

const verifyJWT = (req, res, next) => {
  const authHeader =
    req.headers.authorization || req.headers.Authorization; //check for both capitalization

  if (!authHeader?.startsWith("Bearer")) {
    return res.status(401).json({ message: "Not Authorized" });
  }
//access token
  const token = authHeader.split(" ")[1];
  

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    
    if (err) {
      return res.status(403).json({ message: "Forbidden" }); //this is not a valid token
    }
    (req.user = decoded.UserInfo.userName),
      (req.role = decoded.UserInfo.role);
    next();
  });
};

module.exports = verifyJWT;
