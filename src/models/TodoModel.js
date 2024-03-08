const mongoose = require("mongoose")

const DatabaseSchema = mongoose.Schema({
    title:{type:String, unique:true, require:true},
    description:{type:String, unique:false, require:true},
    status:{type:String, unique:false, require:true},

}, {versionKey:false});

const TodoModel = mongoose.model("todo", DatabaseSchema)

module.exports = TodoModel;