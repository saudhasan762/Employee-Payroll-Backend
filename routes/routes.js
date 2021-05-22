const router = require('express').Router();
const controller = require('../controller/employee_controller.js');
router.post('/',controller.registration);
router.get('/',controller.findAll);
router.delete('/:id',controller.delete);
router.put('/:id',controller.update);

module.exports = router;