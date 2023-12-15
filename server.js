const express = require("express")
const app = express()

app.get("/greeting", (req,res) => {
    res.send("<h1>Hello, Stranger</h1>")  
})

app.get("/greeting/:name", (req,res) => {
    const name = req.params.name
    res.send(`<h1>Hello there, ${name} </h1>`)

})

app.get("/tip/:total/:tipPercentage", (req, res) => {
    const total = req.params.total
    const tipPercentage = req.params.tipPercentage
    const tipTotal = total * (.01 * tipPercentage)
    res.send(`<h1>${tipTotal}</h1>`)
})
app.get("magic/:question", (req, res) => {
    res.send(`<h1>${question}</h1>`)
})

app.get("/magic/:question", (req,res) => {
    const answers = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"];
    const randomIndex = Math.floor(Math.random() * answers.length)
    const randomAnswer = answers[randomIndex]
    const question = req.params.question

    res.send(`<h1>${question}</h1><h1>${randomAnswer}</h1>`)
})


app.listen(3000, () => {console.log("server is listening on port 3000")})
