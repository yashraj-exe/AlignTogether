const mongoose = require('mongoose');

const registerSchema = mongoose.Schema({
    id : { type : Number},
    username : {type:String,required :true, trim : true},
    email : {type:String,required :true, trim : true},
    password : {type:String,required:true,trim: true},
    posts : {type:Array},
    createdDate : {type:Date,default : Date.now},
    status : {type : Boolean,default : false}
},{timestamps : true});

const userModel = mongoose.model('align',registerSchema);
module.exports = userModel;