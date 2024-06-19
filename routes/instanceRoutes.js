const express = require('express');
const router = express.Router();
const instanceController = require('../controllers/instanceController.js')
const forms = require('../controllers/formsController.js')

router.route('/')
    .get(instanceController.read)
    .post(instanceController.create)

router.route('/add')    
    .get(forms.instances)

module.exports = router;