const mongoose = require('mongoose');

const empSchema = new mongoose.Schema({
    name: {
        type: String,
        require: [true, "Name is required"]
    },
    profile: {
        type: mongoose.Schema.Types.Mixed,
        require: [true, "profile is required"]
    },
    gender: {
        type: String,
        require: [true, "Gender is Required"]
    },
    department: {
        type: Object,
        require: [true, "Department is required"]
    },
    salary: { type: Number },
    date: {
        type: Date,
        require: [true, "Department is required"]
    },
    notes: {
        type: String,
        require: [false]
    }
}, { timestamp: true })

const empModel = mongoose.model("emp", empSchema);

function empOperations() { }

empOperations.prototype.register = (obj, callback) => {
    empModel.find({ name: obj.name }, (error, data) => {
        if (error) {
            callback(error, null);
        } else {
            if (data.length > 0) {
                callback({ success: false, message: 'User already Exist', data: "" })
            } else {
                var newEmp = new empModel(obj);
                newEmp.save((err, data) => {
                    if (err) {
                        callback(err, null);
                    } else {
                        callback(null,{success: true, message: 'User Registered successfully', data: "" })
                    }
                });
            }
        }
    })
}

module.exports = new empOperations();

empOperations.prototype.findAll = (obj, callback) => {
    empModel.find({},(err, data) => {
        if(err){
            callback(err,null);
        }else {
            callback(null,{success: true, message : 'Data retrieved succesfully',data});
            console.log(data);
        }
    });
}

empOperations.prototype.delete = (id,callback) => {
    empModel.findByIdAndDelete(id,(err, data) => {
        if(err){
            callback(err, null);
        } else {
            callback(null,{success: true, message : 'Data deleted successfully'});
        }
    });
}

empOperations.prototype.update = (id,obj, callback) => {
    empModel.findByIdAndUpdate(id, obj, {useFindAndModify: false}, (err, data) => {
        if(err){
            callback(err, null);
        } else {
            callback(null,{success: true, message : 'Data Updated successfully',data})
        }
    })
}



