const mongoose = require('mongoose');
const schema = mongoose.Schema;


const User = new schema({
    firstName:{type:String,required:true},
    lastName:{type:String,required:true},
    password:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    isLogin:{type:Boolean,default:false},
    isAdmin:{type:Boolean,default:false},
    lastLogin:{type:Date,default:Date.now},
},
{
    timestamps:true
})

module.exports = mongoose.model('User',User);