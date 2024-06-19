const db = require('../db')
class AuthorController {
    constructor() {

    }

    read(req, res) {
            console.log("reading jjj")
            try {
                db.query(`SELECT * FROM authors`,               
                    (err, rows) => {
                        if(err) {
                            res.status(400).send(err);
                        }
                        console.log("internal reading" + rows)
                        res.render('authors', {info: rows})
                    }
            );
    
            }
            catch(err) {
                res.status(500).send(err);
            }
    }

    readDetail(req, res) {
        const { id } = req.params
        const authorQuery = `SELECT first_name, second_name FROM authors
                            WHERE author_id = ${id}`
        const bookQuery = `SELECT book_name, book_id FROM books
                            WHERE author_id = ${id}`
        try{
            db.query(authorQuery,
                (err, author) => {
                    if(err) {
                        res.status(400).send(err)
                    }
                    db.query(bookQuery,
                        (err, books) => {
                            if(err) {
                                res.status(400).send(err)
                            }
                            console.log(books)
                            console.log(author.first_name)
                            res.render('authordetail', {author: author[0], books: books})
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
        const { firstname, secondname } = req.body;
        const query = `INSERT INTO authors (first_name, second_name) 
                        VALUES (?, ?)`
        try {
        db.query(query, [firstname, secondname], 
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
            res.status(500).send(err)
        }
    }

    update(req, res) {
        res.send("updating author")
    }

    delete(req, res) {
        res.send("deleting author")
    }
}

module.exports = new AuthorController();