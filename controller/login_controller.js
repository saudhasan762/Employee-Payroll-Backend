const service = require('../services/login_service.js');

exports.registration = (req, res) => {
    console.log(req.body);
    req.check('phoneNumber').not().isEmpty().withMessage('Phone Number is required')
        .isNumeric().withMessage('Phone Numbers can only be in Numeric')
        .isLength({ min: 10, max: 10 }).withMessage('Exactly 10 digits are Required');
    req.check('password').not().isEmpty().withMessage('Password is Required')
        .isLength({ min: 8 }).withMessage('Minimum 6 characters for Password are required');

    const errors = req.validationErrors();
    if (errors.length > 0) {
        return res.status(422).json({
            success: false, Message: errors[0].msg
        })
    } else {
        service.registration(req.body, (err, data) => {
            if (err) {
                console.log("Error", err);
                return res.status(500).send(err);
            } else {
                console.log("Data", data);
                return res.status(200).send(data);
            }
        });
    }
}

exports.findAll = (req, res) => {
    const errors = req.validationErrors();
    if (errors.length > 0) {
        return res.status(422).json({
            success: false, Message: errors[0].msg
        })
    } else {
        service.findAll(req.body, (err, data) => {
            if (err) {
                return res.status(500).send(err);
            } else {
                return res.status(200).send(data);
            }
        });
    }
}


exports.login = (req, res) => {
    console.log(req.body);
    req.check('phoneNumber').not().isEmpty().withMessage('Phone Number is required')
        .isNumeric().withMessage('Phone Numbers can only be in Numeric')
        .isLength({ min: 10, max: 10 }).withMessage('Exactly 10 digits are Required');
    req.check('password').not().isEmpty().withMessage('Password is Required')
        .isLength({ min: 8 }).withMessage('Minimum 6 characters for Password are required');

    const errors = req.validationErrors();
    if (errors.length > 0) {
        return res.status(422).json({
            success: false, Message: errors[0].msg
        })
    } else {
        service.login(req.body, (err, data) => {
            if (err) {
                console.log("Error", err);
                return res.status(500).send(err);
            } else {
                console.log("Data", data);
                return res.status(200).send(data);
            }
        });
    }
}