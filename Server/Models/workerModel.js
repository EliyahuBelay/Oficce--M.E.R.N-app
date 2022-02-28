const mongoose = require('mongoose');
const schema = mongoose.Schema;


const Worker = new schema({
    firstName:String,
    lastName:{type:String},
    email:String,
    age:Number

},
{
    timestamps:true
})

module.exports = mongoose.model('worker',Worker);