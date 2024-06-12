const express = require('express');
const app = express();
const PORT = 6500
const bookRoutes = require('./routes/bookRoutes')
const authorRoutes = require('./routes/authorRoutes')
app.set("view engine", "pug");


app.get('/', (req, res)=> {
    res.send("Welcome to the library")
} )


app.use('/books', bookRoutes)
app.use('/authors', authorRoutes)

app.listen(PORT, ()=> {
    console.log("servidor activo")
})