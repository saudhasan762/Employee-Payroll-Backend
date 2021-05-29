const router = require('express').Router();
const controller = require('../controller/employee_controller.js');
const login_controller = require('../controller/login_controller.js');
const jwt = require('../Middleware/token_service.js');

router.post('/register',controller.registration);
router.get('/get',jwt.verifyToken,controller.findAll);
router.delete('/delete/:id',jwt.verifyToken,controller.delete);
router.put('/update/:id',jwt.verifyToken,controller.update);

router.post('/adminRegister',login_controller.registration);
router.post('/login',login_controller.login);

module.exports = router;