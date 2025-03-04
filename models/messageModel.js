const mongoose = require('mongoose')
const messageModel = mongoose.Schema({
    sender:{
        type: mongoose.Schema.Types.ObjectId, ref: "user"
    },
    content:{
        type:String
    },
    chat:{
        type: mongoose.Schema.Types.ObjectId, ref: "chat"
    }
})
const message = mongoose.model('message',messageModel)
module.exports = message