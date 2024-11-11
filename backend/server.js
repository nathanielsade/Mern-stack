require('dotenv').config()
const mongoose  = require('mongoose')
const express = require('express')
const router =  require('./routs/workouts')

const app = express()
app.use(express.json())

app.use((req,res,next) => {
    console.log( req.path , req.method)
    next()
})

mongoose.connect(process.env.MONGO_URI).then(() =>{
    app.listen(4000,() =>{
        console.log('connected to db & listening on port', process.env.PORT)
    })
}).catch((err) =>{
    console.log(err)
})

app.use('/api/workouts', router)


