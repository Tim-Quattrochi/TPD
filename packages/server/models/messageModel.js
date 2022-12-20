import mongoose from 'mongoose';
const { ObjectId } = mongoose.Schema.Types;

const messageSchema = new mongoose.Schema(
  {
    author: {
      type: ObjectId,
      ref: 'User',
    },

    created: {
      type: Date,
      default: date.Now,
    },

    text: {
      type: String,
      maxlength: 500,
      required: true,
    },

    comments: {
      text: {
        type: String,
        required: true,
        maxlength: 200,
      },

      author: {
        type: ObjectId,
        ref: 'User',
      },

      created: {
        type: Date,
        default: Date.now,
      },
    },
  },
  { timestamps: true }
);

// const Message = mongoose.model('Message', messageSchema);

module.exports = mongoose.model('Messages', messageSchema);
