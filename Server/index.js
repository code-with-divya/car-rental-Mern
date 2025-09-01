 import express from "express"
import mongoose from "mongoose"
import cors from "cors"

import cookieParser from "cookie-parser"


import { Allrouter } from "./Router/Router.js"

import Database from "./Database/database.js"

const app =express()
app.use(express.json())
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
}));
app.use(cookieParser())


const port =9999

app.listen(port,()=>{
    Database()
    console.log(`${port} is runnning`)})

app.get("/",(req,res)=>{
    res.send("hiii")
})



app.use("/",Allrouter)