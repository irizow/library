const express = require('express')
const router = express.Router();
const bookController = require('../controllers/bookController.js')

router.route('/')
    .get(bookController.read) 
    .post(bookController.create)


router.route('/:id')
    .get(bookController.readDetail)
    .put(bookController.update)
    .delete(bookController.delete);
    






module.exports = router;