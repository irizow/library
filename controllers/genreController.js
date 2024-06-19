const db = require('../db')

class GenreController {
    constructor() {

    }

    read(req, res) {
        console.log("reading jjj")
        try {
            db.query(`SELECT * FROM genres`,               
                (err, rows) => {
                    if(err) {
                        res.status(400).send(err);
                    }
                    console.log("internal reading" + rows)
                    res.render('genres', {info: rows})
                }
        );

        }
        catch(err) {
            res.status(500).send(err);
        }
    }

    readDetail(req, res) {
        const { id } = req.params
        const booksQuery = `SELECT book_name, book_id FROM books
                            WHERE genre_id = ${id}`
        const genreQuery = `SELECT genre FROM genres
                            WHERE genre_id = ${id}`
        try {
            db.query(booksQuery,
                (err, books) => {
                    if(err) {
                        res.status(400).send(err)
                    }
                    db.query(genreQuery,
                        (err, genre) => {
                            if(err) {
                                res.status(400).send(err)
                            }
                            res.render('genredetail', {genre: genre[0], books: books})
                        }
                    )
                }
            )
        }
        catch(err) {
            res.status(500).send(err)
        }
    }

    create(req, res) {
        const { genre } = req.body;
        const query = `INSERT INTO genres ( genre ) VALUES (?)`;

        try {
            db.query(query, genre, 
                (err, rows) => {
                    if(err) {
                        res.status(400).send(err);
                    }
                    res.send(`
                        <!DOCTYPE html>
                        <html>
                        <head>
                          <title>Update Successful</title>
                        </head>
                        <body>
                          <p>New genre added successfully</p>
                          <script>
                            setTimeout(() => {
                              window.location.href = '/';
                            }, 2000);
                          </script>
                        </body>
                        </html>
                      `);

            })
        }
        catch(err) {
            res.status(500).send(err)
        }
    }

    update(req, res) {
        res.send("updating genre")
    }

    delete(req, res) {
        res.send("deleting genre")
    }
}

module.exports = new GenreController();


