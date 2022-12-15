import mongoose from 'mongoose';

import projectsSchema from './projectModel';


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
    default: "needsimg.jpg" 
},

posts: {
    type: ObjectId,
    ref: ""
},

projects: {
    type: ObjectId,
    ref: projectsSchema, 
},

tasks: {
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