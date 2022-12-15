import mongoose from "mongoose";


const projectsSchema = new mongoose.Schema({

companyName: {
    type: String,
    required: true 
},

companyEmail: {
    type: String,
    required: true 
},

requestBody: {
    type: String,
    required: true 
},

missionStatement: {
    type: String,
    required: true 
},

deadlines: {
    type: String,
    required: true
},

})


export default projectsSchema;
