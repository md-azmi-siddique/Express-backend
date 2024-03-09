const UsersModel = require("../models/UsersModel");
exports.registration = async (req, res)=>{
    try{
        let reqBody = req.body;
        await UsersModel.create(req.body)
        res.join({status:"success", message:"Registration Compleated"})

    }catch (err){
        res.join({status:"fail", message:err})
    }

}

exports.login = (req, res)=>{

}

exports.profileUpdate = (req, res)=>{

}

exports.profileDetails = (req, res)=>{

}

exports.verifyEmail = (req, res)=>{

}

exports.verifyOTP = (req, res)=>{

}

exports.passwordReset = (req, res)=>{

}

exports.signOut = (req, res)=>{

}