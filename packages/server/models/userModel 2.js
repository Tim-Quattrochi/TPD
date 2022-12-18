/* I think the unique attribute was causing error E11000.. That is the Unique Index 311 on the person’s “name” field. This will not allow an operation to insert a new document with an existing name or update a document with an updated existing name. If such an operation is tried it fails with an "E11000 duplicate key error collection: database.collection index_name … ". */

import mongoose from 'mongoose';

const { ObjectId } = mongoose.Schema.Types;
import { MdAccountCircle } from 'react-icons/md';

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
  },
  profileImage: {
    type: String,
  },
  posts: {
    type: ObjectId,
    ref: 'User',
  },
  commissions: {
    type: ObjectId,
    ref: 'User',
  },
  tickets: {
    type: ObjectId,
    ref: 'User',
  },
});

module.exports = mongoose.model('User', userSchema);

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
