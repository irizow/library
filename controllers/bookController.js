const db = require('../db')

class BookController {
    constructor() {

    }

    read(req, res) {
        console.log("reading jjj")
        try {
            db.query(`SELECT * FROM books
                                JOIN authors ON books.author_id = authors.author_id`, 
                (err, rows) => {
                    if(err) {
                        res.status(400).send(err);
                    }
                    console.log("internal reading" + rows)
                    res.render('books', {info: rows})
                }
        );

        }
        catch(err) {
            res.status(500).send(err);
        }
    }

    readDetail(req, res) {
        const { id } = req.params
        const query = `SELECT * FROM books 
                            JOIN authors ON books.author_id = authors.author_id
                            JOIN genres ON books.genre_id = genres.genre_id
                             WHERE book_id = ${id}`
        try {
            db.query(query,
                (err, rows) => {
                    if(err) {
                        res.status(400).send(err)
                    }
                    res.render('bookdetail', { book: rows[0]})
                }
            )
            
        }
        catch(err) {
            res.status(500).send(err)
        }
    }

    create(req, res) {
        const { title, year, pages, author, genre } = req.body;
        const query = `INSERT INTO books (book_name, book_year, pages, author_id, genre_id)
                VALUES (?, ?, ?, ?, ?)`
        console.log("creating");
        try {
            db.query(query, [ title, year, pages, author, genre ],
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
                          <p>New book added successfully</p>
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
            res.status(500).send(err);
        }
    }

    update(req, res) {
        res.send("updating book")
    }

    delete(req, res) {
        res.send("deleting book")
    }
}

module.exports = new BookController();