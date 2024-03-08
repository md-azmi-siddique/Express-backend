const mongoose = require("mongoose")

const DatabaseSchema = mongoose.Schema({
    email:{type:String, unique:true, require:true},
    firstName:{type:String, unique:false, require:true},
    lastName:{type:String, unique:false, require:true},
    mobile:{type:String, unique:true, require:true},
    password:{type:String, unique:false, require:true}
}, {versionKey:false});

const UsersModel = mongoose.model("users", DatabaseSchema)

module.exports = UsersModel;