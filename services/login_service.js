const loginModel = require('../models/login_model.js');

exports.registration = (data,callback) =>{
    loginModel.register(data,(err,result)=>{
        if(err){
            console.log("Service Error",err);
            callback(err, null);
        } else {
            console.log("Service Result",result);
            callback(null, result);
        }
    })
}

exports.findAll = (data,callback) =>{
    loginModel.findAll(data,(err,result)=>{
        if(err){
            callback(err, null);
        } else {
            callback(null, result);
        }
    })
}


exports.login = (data,callback) =>{
    loginModel.login(data,(err,result)=>{
        if(err){
            console.log("Service Error",err);
            callback(err, null);
        } else {
            console.log("Service Result",result);
            callback(null, result);
        }
    })
}