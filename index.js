const express = require('express');
const app = express();
const PORT = 6500
const bookRoutes = require('./routes/bookRoutes')
const authorRoutes = require('./routes/authorRoutes');
const genreRoutes = require('./routes/genreRoutes')
const instanceRoutes = require('./routes/instanceRoutes')
const db = require('./db');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'))

app.set('views', __dirname + '/public/views');
app.set('view engine', 'pug');


app.get('/', (req, res) => {
    try{
        const bookQuery = `SELECT COUNT(*) AS bookCount FROM books`;
        const genreQuery = `SELECT COUNT(*) AS genreCount FROM genres`;
        const authorQuery = `SELECT COUNT(*) AS authorCount FROM authors`
        db.query(bookQuery + ';' + genreQuery + ';' + authorQuery,
                (err, results) => {
                    if(err) {
                        res.status(400).send(err)
                    }
                    console.log(results)
                    res.render('index', {books: results[0][0].bookCount, genres: results[1][0].genreCount, authors: results[2][0].authorCount})
                }
        )
    }
    catch(err) {
        res.status(500).send(err)
    }
})


app.use('/books', bookRoutes)
app.use('/authors', authorRoutes)
app.use('/genres', genreRoutes)
app.use('/instances', instanceRoutes)

app.listen(PORT, ()=> {
    console.log("servidor activo")
})
