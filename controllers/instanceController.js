const db = require('../db')

class BookInstanceController {
    constructor() {

    }

    read(req, res) {
        try {
            db.query(`SELECT book_name, book_id, availability, first_name, second_name FROM books
                                JOIN authors ON books.author_id = authors.author_id`, 
                (err, rows) => {
                    if(err) {
                        res.status(400).send(err);
                    }
                    console.log("internal reading" + rows)
                    res.render('instances', {books: rows})
                }
        );

        }
        catch(err) {
            res.status(500).send(err);
        }
    }


    create(req, res) {
        const { selectedbook, availability } = req.body;
        const query = `UPDATE books 
                        SET availability = '${availability}'
                        WHERE book_id = ${selectedbook}`
        console.log("creating");
        try {
            db.query(query,
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
                          <p>New instance added successfully</p>
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

module.exports = new BookInstanceController();