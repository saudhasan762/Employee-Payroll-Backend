const mongoose = require('mongoose');
const jwt = require('../Middleware/token_service.js');

const loginSchema = new mongoose.Schema({
    phoneNumber: {
        type: Number,
        require: [true, "Phone Number is Required"]
    },
    password: {
        type: String,
        require: [true, "Password is Required"]
    }
}, { timestamps: true })

const loginModel = mongoose.model("login", loginSchema);

function loginOperations() { }

loginOperations.prototype.register = (obj, callback) => {
    loginModel.find({ name: obj.phoneNumber }, (error, data) => {
        if (error) {
            callback(error, null);
        } else {
            if (data.length > 0) {
                callback({ success: false, message: 'User already Exist', data: "" })
            } else {
                var newEmp = new loginModel(obj);
                newEmp.save((err, data) => {
                    if (err) {
                        callback(err, null);
                    } else {
                        callback(null, { success: true, message: 'User Registered successfully', data: "" })
                    }
                });
            }
        }
    })
}

module.exports = new loginOperations();

loginOperations.prototype.findAll = (obj, callback) => {
    loginModel.find({}, (err, data) => {
        if (err) {
            callback(err, null);
        } else {
            callback(null, { success: true, message: 'Data retrieved succesfully', data });
            console.log(data);
        }
    });
}

loginOperations.prototype.login = (obj, callback) => {
    loginModel.find({ phoneNumber: obj.phoneNumber }, (error, data) => {
        if (error) {
            callback(error, null);
        } else {
            // console.log("data",data[0].password);
            console.log("obj",obj.password);
            if (data.length > 0) {
                if (obj.password == data[0].password) {
                    console.log("condition matched");
                    var token = jwt.createToken(obj);
                    console.log(token);
                    callback(null, { success: true, message: 'User Login successfully', data: "",token : token })
                } else {
                    callback({ success: false, message: 'Password is Incorrect', data: "" })
                }
            } else {
                callback({
                    success: false,
                    message : "User not found"
                })
            }
        }
    })
}
