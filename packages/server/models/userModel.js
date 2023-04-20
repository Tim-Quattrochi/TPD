const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  passwordHash: {
    type: String,
    required: true,
    unique: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
  },
  profileImage: {
    type: String,
  },
  role: {
    type: String,
    required: true,
    enum: ["user", "admin"],
    default: "user",
  },

  refreshToken: String,
});

module.exports = mongoose.model("User", userSchema);

/* Stretch goal for sub users */
//     authorizedUsers: {
//         [
// username: {
// type: String,
// unique: true,
// required: true },
// password: {
// type: String,
// required: true },
// email: {
// type: String,
// unique: true,
// required: true },
// ]},
// )
