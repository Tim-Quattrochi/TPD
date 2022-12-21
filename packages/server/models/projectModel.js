import mongoose from 'mongoose';
const { ObjectId } = mongoose.Schema.Types;

const projectsSchema = new mongoose.Schema(
  {
    companyName: {
      type: String,
      required: true,
    },

    companyEmail: {
      type: String,
      required: true,
    },

    requestBody: {
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
    author: {
      type: ObjectId,
      ref: 'User',
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Project', projectsSchema);
