const jwt = require('jsonwebtoken');
const secretKey = "jwtsecret";

module.exports = { createToken  (data) {
    console.log("inside create",data);
    var token = jwt.sign(data.phoneNumber,secretKey);
    console.log("inside create",token);
    return token;
},

verifyToken  (req,res,next) {
    const headerToken = req.header("token");
    console.log("token",headerToken);
    if(headerToken == undefined){
        var result = {success:false,message :'Token is required',data:""};
        return res.status(401).send(result);
    } else {
        jwt.verify(headerToken,secretKey,(err,data) =>{
            if(err){
                var result = {success:false,message :'Token is invalid',data:""};
                return res.status(401).send(result);  
            }else{
                next();
            }
        })
    }
}
}

