const empModel = require('../models/employee_model');

exports.registration = (data,callback) =>{
    empModel.register(data,(err,result)=>{
        if(err){
            callback(err, null);
        } else {
            callback(null, result);
        }
    })
}

exports.findAll = (data,callback) =>{
    empModel.findAll(data,(err,result)=>{
        if(err){
            callback(err, null);
        } else {
            callback(null, result);
        }
    })
}

exports.delete = (id,callback) =>{
    empModel.delete(id,(err,result)=>{
        if(err){
            callback(err, null);
        } else {
            callback(null, result);
        }
    })
}

exports.update = (id, obj, callback) => {
    empModel.update(id, obj, (err, result) => {
        if(err){
            callback(err, null);
        } else {
            callback(null, result);
        }
    })
}