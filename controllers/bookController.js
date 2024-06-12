class BookController {
    constructor() {

    }

    read(req, res) {
        res.send("reading books")
    }

    readDetail(req, res) {
        const { id } = req.params
        console.log("id: " +  id);
        res.send(`reading book ${id}`)
    }

    create(req, res) {
        res.send("creating book")
    }

    update(req, res) {
        res.send("updating book")
    }

    delete(req, res) {
        res.send("deleting book")
    }
}

module.exports = new BookController();