const mongoose=require('mongoose');

const chatModels=monggose.Schema({
    chatName:{type:String,trim:true},
    isGroupChat:{type:Boolean ,default:false},
    users:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"User",
        },
    ],
    latestMessage:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
    },

    groupAdmin:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
    }
},{
    timestamps:true,
})

const Chat=mongoose.model("Chat",chatModels);
module.exports=Chat;