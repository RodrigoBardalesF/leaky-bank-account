import express from 'express'

const app=express()
const port = 3000

app.get('/', (req, res) => {
    res.send("Page working.")
})

app.listen(port, ()=> {
    console.log(`app running on http//:localhost:${port}`)
})