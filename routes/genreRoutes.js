const express = require('express')
const router = express.Router();
const genreController = require('../controllers/genreController.js');
const forms = require('../controllers/formsController.js')

router.route('/add')
    .get(forms.genres)

router.route('/')
    .get(genreController.read) 
    .post(genreController.create)


router.route('/:id')
    .get(genreController.readDetail)
    .put(genreController.update)
    .delete(genreController.delete);
    





module.exports = router;