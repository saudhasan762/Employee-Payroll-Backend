const router = require('express').Router();
const controller = require('../controller/employee_controller.js');
router.post('/register',controller.registration);

module.exports = router;