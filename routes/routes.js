const router = require('express').Router();
const controller = require('../controller/employee_controller.js');
router.post('/register',controller.registration);
router.get('/findAll',controller.findAll);
router.delete('/delete/:id',controller.delete);

module.exports = router;