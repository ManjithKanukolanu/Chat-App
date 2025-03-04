const mongoose = require('mongoose')
const chatmodel = mongoose.Schema({
   chatname:{
       type:String
   },
   isgroup:{
     type:Boolean,
     default:false
   },
   users:[
     { type: mongoose.Schema.Types.ObjectId,
       ref:"user"
     }
    ],
    latestmessage:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"message"
    },
    groupadmin:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"user"
    }
})
const chat = mongoose.model('chat',chatmodel)
module.exports = chat