const db = require('../db')

class Forms {
    constructor() {

    }

    books(req, res) {
            try {
                const genreQuery = `SELECT genre_id, genre FROM genres`;
                const authorQuery = `SELECT author_id, first_name, second_name FROM authors`;
        
                db.query(genreQuery,
                        (err, genres) => {
                            if(err) {
                                res.status(400).send(err)
                            }
                        db.query(authorQuery,
                            (err, authors) => {
                                if(err) {
                                    res.status(400).send(err)
                                }
                                res.render('newbook', { genres, authors })
                            }
                        )
                        });
            }
            catch(err) {
                res.status(500).send(err);
            }
        }


    authors(req, res) {
        res.render('newauthor')
    }

    genres(req, res) {
        res.render('newgenre')
    }

    instances(req, res) {
        try {
            const query = `SELECT book_name, book_id, first_name, second_name, availability FROM books
                            JOIN authors ON books.author_id = authors.author_id`
            db.query(query, 
                    (err, rows) => {
                        if(err) {
                            res.status(400).send(err)
                        }
                        res.render('newinstance', {books: rows})
                    })
        }
        catch(err) {
            res.status(500).send(err)
        }
    }
}

module.exports = new Forms();