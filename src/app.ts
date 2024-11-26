import express, { request } from"express"
import dotenv from "dotenv";
import userController from "./controllers/users"
import adminController from "./controllers/admin"
import votesController from "./controllers/votes"
import candidatesController from "./controllers/candidates"
import { conectToMongo } from "./config/db"
import cors from "cors"
import http from 'http'
import {Server} from 'socket.io'
import { handleSocketIo } from "./sokets/io"
import { json, Request, Response } from "express";
import { Router } from "express";

dotenv.config({
    path: process.env.NODE_ENV == 'stg' ? './.env.staging': './.env',
})

const router = Router()

const port = process.env.PORT || 8000
export const app = express()

const httpServer = http.createServer(app)
export const io = new Server(httpServer ,{
    cors: {
        origin :'*',
        methods :'*'
    }
})

io.on('connection' ,handleSocketIo)

conectToMongo()

app.use(express.json())
app.use(cors())
app.use("/api/users" ,userController)
app.use("/api/admin" ,adminController)
app.use("/api/votes" ,votesController)
app.use("/api/candidates" ,candidatesController)
app.use("/" ,router.get("/ping",(req:Request , res:Response)=>{
    res.send('pong')
}))


// httpServer.listen(port , ()=> {
//     console.log("server run on port " +port)
// })

