import express from"express"
import "dotenv/config"
import userController from "./controllers/users"
import adminController from "./controllers/admin"
import votesController from "./controllers/votes"
import candidatesController from "./controllers/candidates"
import { conectToMongo } from "./config/db"
import cors from "cors"
import http from 'http'
import {Server} from 'socket.io'

const port = process.env.PORT || 11223
const app = express()

const httpServer = http.createServer(app)
const io = new Server(httpServer)

conectToMongo()

app.use(express.json())
app.use(cors())
app.use("/api/users" ,userController)
app.use("/api/admin" ,adminController)
app.use("/api/votes" ,votesController)
app.use("/api/candidates" ,candidatesController)


httpServer.listen(port , ()=> {
    console.log("server run on port " +port)
})

