import express from 'express'
import { connectDb } from './database.js'
import bodyParser from 'body-parser'
import { Company } from './models/Company.js'

const app = express()
connectDb()

const port = 8000

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


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

app.post("/api/company", async(req, res)=>{
    try {
        await Company.create(req.body)
        res.json({
            "success":true,
            "message":"Company created successfully",
        })
    } catch (e) {
        res.json({
            "success":false,
            "message":e.message,
        })
    }
})



app.listen(port, () => {
    console.log(`app running at port : [http://localhost:${port}]...`)
})

// http methods
//post->create
//get->read
//put->update
//delete->delete