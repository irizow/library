const express = require('express')
const router = express.Router();
const bookController = require('../controllers/bookController.js')
const forms = require('../controllers/formsController.js');


router.route('/add')
    .get(forms.books)

router.route('/')
    .get(bookController.read) 
    .post(bookController.create)


router.route('/:id')
    .get(bookController.readDetail)
    .put(bookController.update)
    .delete(bookController.delete);

    






module.exports = router;