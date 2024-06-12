const express = require('express')
const router = express.Router();
const authorController = require('../controllers/authorController.js')

router.route('/')
    .get(authorController.read) 
    .post(authorController.create)


router.route('/:id')
    .get(authorController.readDetail)
    .put(authorController.update)
    .delete(authorController.delete);
    





module.exports = router;