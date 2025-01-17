import express from 'express'
import { connectDb } from './database.js'

const app = express()
connectDb()

const port = 8000



app.get("/", (req, res) => {
    res.json({
        "name": "nodejsmagh2",
        "version": "1.0.0",
    })
})

app.get("/api/users", (req, res)=>{
    res.json({
        "name":"Sudam Shrestha",
        "address":"Dharan"
    })
})



app.listen(port, () => {
    console.log(`app running at port : [http://localhost:${port}]...`)
})

// http methods
//post->create
//get->read
//put->update
//delete->delete