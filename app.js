 require('dotenv').config();
const express = require('express')
const app = express();
const people = require('./route/routes')
const {StatusCodes} = require('http-status-codes')
const notFoundMiddleware = require('./middleware/notFound')
const errorHandlerMiddleware = require('./middleware/error-handler')

//MONGODB CONNECTION
const mongoose = require('mongoose')
const connectDB = require('./db/connect')

app.use(express.json())

//routes
app.get('/', (req, res)=>{
    res.status(StatusCodes.OK).send('people...')
})

app.use('/api/:id', people)
app.use('/api', people)



app.use(errorHandlerMiddleware)
app.use(notFoundMiddleware)

const port = process.env.PORT || 1335

const start = async(req, res)=>{
    try {
     await mongoose.connect(process.env.MONGO_URI)
        app.listen(port, ()=>{
            console.log(`Server is listening on port ${port}. . .`);
        })
    } catch (error) {
        
    }
}

start()