class GenreController {
    constructor() {

    }

    read(req, res) {
        res.send("reading genre")
    }

    create(req, res) {
        res.send("creating genre")
    }

    update(req, res) {
        res.send("updating genre")
    }

    delete(req, res) {
        res.send("deleting genre")
    }
}

module.exports = new GenreController();


