import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({

author: {
    type: ObjectId,
    ref: "" 
},

created: {
    type: Date,
    required: date.Now 
},

text: {
    type: String,
    maxlength: 500,
    required: true 
},

comments: {
    text: {
        type: String,
        required: true,
        maxlength: 200 
    },

    author: {
        type: ObjectId,
        ref: 'User' 
    },

    created: {
        type: Date,
        default: Date.now 
    },
},

}, {timestamps: true} )




const Message = mongoose.model('Message', messageSchema);