import mongoose from "mongoose";


const taskSchema = new mongoose.Schema({

companyName: {
    type: String,
    required: true 
},

issue: {
    type: String,
    required: true 
},

description: {
    type: String,
    required: true 
},

submitted: {
    type: Date,
    required: date.Now 
}, 

})


const Task = mongoose.model('Task', taskSchema);
