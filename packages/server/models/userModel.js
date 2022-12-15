import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({

companyName: {
type: String,
unique: true,
required: true 
},

username: {
type: String,
unique: true,
required: true 
},

password: {
type: String,
required: true 
},

email: {
type: String,
unique: true,
required: true 
},

profileImage: {
type: String,
default: "" 
},

posts: {
type: ObjectID,
ref: ""
},


commissions: {
type: ObjectId,
ref: "" },

tickets: {
type: ObjectId,
ref: ""
},

projects: {
type: ObjectId,
ref: "" 
},

authorizedUsers: {
    username: {
    type: String,
    unique: true,
    required: true },

    password: {
    type: String,
    required: true },

    email: {
    type: String,
    unique: true,
    required: true },
},

})

export default userSchema;