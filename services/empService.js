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