const mongoose = require("mongoose")

const DatabaseSchema = mongoose.Schema({
    email:{type:String, unique:true, require:true},
    otp:{type:String, unique:false, require:true},
    status:{type:String, unique:false, require:true},

}, {timestamps:true ,versionKey:false});

const OTPModel = mongoose.model("otp", DatabaseSchema)

module.exports = OTPModel;