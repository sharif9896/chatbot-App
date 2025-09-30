import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import chatbotRoutes from './routes/chatbotroute.js';

const app = express()
dotenv.config()

const port =process.env.PORT || 3000

// middleware
app.use(express.json());
app.use(cors())

//Database Connection code
mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log("Connected to MongoDB")
}).catch((error)=>{
    console.log("Error connecting to MongoDB:", error)
})

app.use('/', (req,res)=>{
  res.send("Api is Running!");
})
// Defining Routes
app.use("/bot/v1/", chatbotRoutes)

app.listen(port, () => {
  console.log(`Server is Running on Port ${port}`)
})
