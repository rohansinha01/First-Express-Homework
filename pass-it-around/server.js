const express = require("express")
const app = express()
const startingBeer = 99
const remainingBeer = []
for(let a = 0; a < 99; a++ ){
    remainingBeer.push(a)
}
console.log(remainingBeer)


app.get('/', (req,res) => {  
     res.send(`<h1>99 Bottles of beer on the wall</h1><h1><a href="${startingBeer - 1}">Take one down, pass it around</a></h1>`)
    })
   
app.get('/:number_of_bottles', (req,res) => { 
    const number_of_bottles = req.params.number_of_bottles
    const beer = remainingBeer[number_of_bottles]
    if (beer > 0){
    res.send(`<h1>${beer} Bottles of beer on the wall</h1><h1><a href="${beer - 1}">Take one down, pass it around</a></h1>`)
    } else {
        res.send(`<h1><a href="${'/'}">Buy More Beer</a></h1>`)
    }
})




app.listen(3000, () => {console.log("server is listening on port 3000")})
