const service = require('../services/empService');
exports.registration = (req, res) => {
    console.log(req.body);
    req.check('name').not().isEmpty().withMessage('Name is required')
        .isLength({ min: 3 }).withMessage('Minimum 3 characters Required');
    req.check('profile').not().isEmpty().withMessage('Pofile Pic needs to be selected');
    req.check('gender').not().isEmpty().withMessage('Gender needs to be selected');
    req.check('department').not().isEmpty().withMessage('Department needs to be Selected');
    req.check('salary').not().isEmpty().withMessage('Salary is Required')
        .isNumeric().withMessage('Salary must be in a number')
        .isInt({ min: 40000, max: 50000 }).withMessage('Salary must be in given range');
    req.check('date').not().isEmpty().withMessage('Date needs to be entered')
        .isAfter('2021-01-01').withMessage('Date needs to be after the specified')
        .isBefore('2021-05-19').withMessage('Date needs to be before the current Date');
    req.check('notes').not().isEmpty().withMessage('Notes are required')
        .isLength({ min: 10 }).withMessage('Minimum 10 Characters Required');

    // const errors = req.validationErrors();
    // if (errors.length > 0) {
    //     return res.status(422).json({
    //         success: false, Message: errors[0].msg
    //     })
    // } else {
    //     service.registration(req.body, (err, data) => {
    //         if (err) {
    //             return res.status(500).send(err);
    //         } else {
    //             return res.status(200).send(data);
    //         }
    //     });
    // }
}
