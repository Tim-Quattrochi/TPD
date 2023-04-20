const mongoose = require("mongoose");

const { ObjectId } = mongoose.Schema.Types;

const projectsSchema = new mongoose.Schema(
  {
    projectName: {
      type: String,
      required: true,
    },
    companyName: {
      type: String,
    },
    author: {
      type: ObjectId,
      required: true,
      ref: "User",
    },

    companyEmail: {
      type: String,
      required: true,
    },

    projectDetails: {
      type: String,
      required: true,
    },

    missionStatement: {
      type: String,
      required: true,
    },

    deadlines: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Project", projectsSchema);
