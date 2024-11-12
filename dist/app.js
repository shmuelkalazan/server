"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("dotenv/config");
const users_1 = __importDefault(require("./controllers/users"));
const admin_1 = __importDefault(require("./controllers/admin"));
const votes_1 = __importDefault(require("./controllers/votes"));
const candidates_1 = __importDefault(require("./controllers/candidates"));
const db_1 = require("./config/db");
const port = process.env.PORT || 11223;
const app = (0, express_1.default)();
(0, db_1.conectToMongo)();
app.use(express_1.default.json());
app.use("/api/users", users_1.default);
app.use("/api/admin", admin_1.default);
app.use("/api/votes", votes_1.default);
app.use("/api/candidates", candidates_1.default);
app.listen(port, () => {
    console.log("server run on port " + port);
});
