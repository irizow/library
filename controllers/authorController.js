class AuthorController {
    constructor() {

    }

    read(req, res) {
        res.send("reading author")
    }

    readDetail(req, res) {
        const { id } = req.params
        console.log("id: " +  id);
        res.send(`reading author ${id}`)
    }

    create(req, res) {
        res.send("creating author")
    }

    update(req, res) {
        res.send("updating author")
    }

    delete(req, res) {
        res.send("deleting author")
    }
}

module.exports = new AuthorController();