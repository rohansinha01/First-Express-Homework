const express = require("express")
const app = express()

app.get("/greeting", (req,res) => {
    res.send("<h1>Hello, Stranger</h1>")  
})

app.get("/greeting/:name", (req,res) => {
    const name = req.params.name
    res.send(`<h1>Hello there, ${name} </h1>`)

})

app.listen(3000, () => {console.log("server is listening on port 3000")})