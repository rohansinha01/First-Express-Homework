const express = require("express")
const app = express()
const beer = 99
app.get('/', (req,res) => {
    
     res.send(`<h1>${beer} Bottles of beer on the wall</h1><a href="localhost:3000/">take one down, pass it around</a></h1>`)
})

app.get('/:remainingBeer', (req, res) => {
    const remainingBeer = req.method.remainingbeer - 1
    const remaining = beer - 1
    res.send(`<h1>${remaining} Bottles of beer on the wall</h1><h1><a href="localhost:3000/${remaining}">take one down, pass it around</a></h1>`)
})

app.listen(3000, () => {console.log("server is listening on port 3000")})
