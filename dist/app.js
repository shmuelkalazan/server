"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.io = exports.app = void 0;
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const users_1 = __importDefault(require("./controllers/users"));
const admin_1 = __importDefault(require("./controllers/admin"));
const votes_1 = __importDefault(require("./controllers/votes"));
const candidates_1 = __importDefault(require("./controllers/candidates"));
const db_1 = require("./config/db");
const cors_1 = __importDefault(require("cors"));
const http_1 = __importDefault(require("http"));
const socket_io_1 = require("socket.io");
const io_1 = require("./sokets/io");
const express_2 = require("express");
dotenv_1.default.config({
    path: process.env.NODE_ENV == 'stg' ? './.env.staging' : './.env',
});
const router = (0, express_2.Router)();
const port = process.env.PORT || 44444;
exports.app = (0, express_1.default)();
const httpServer = http_1.default.createServer(exports.app);
exports.io = new socket_io_1.Server(httpServer, {
    cors: {
        origin: '*',
        methods: '*'
    }
});
exports.io.on('connection', io_1.handleSocketIo);
(0, db_1.conectToMongo)();
exports.app.use(express_1.default.json());
exports.app.use((0, cors_1.default)());
exports.app.use("/api/users", users_1.default);
exports.app.use("/api/admin", admin_1.default);
exports.app.use("/api/votes", votes_1.default);
exports.app.use("/api/candidates", candidates_1.default);
exports.app.use("/", router.get("/ping", (req, res) => {
    res.send('pong');
}));
// httpServer.listen(port , ()=> {
//     console.log("server run on port " +port)
// })
