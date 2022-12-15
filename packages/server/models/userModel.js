import mongoose from 'mongoose';

const { ObjectId } = mongoose.Schema.Types;
import { MdAccountCircle } from 'react-icons/md';

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
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
    unique: true,
    required: true,
  },
  profileImage: {
    type: String,
    default: MdAccountCircle,
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

const User = mongoose.model('User', userSchema);

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