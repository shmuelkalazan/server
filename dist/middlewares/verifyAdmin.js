"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
exports.default = (req, res, next) => {
    try {
        const token = req.headers["authorization"];
        if (!token) {
            res.status(400).json({
                err: "token must be provaided"
            });
            return;
        }
        const payload = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET);
        req.user = payload;
        if (!payload.isAdmin) {
            res.status(403).json({
                err: "you are not admin"
            });
        }
        next();
    }
    catch (error) {
        console.log(error);
        res.sendStatus(401).json(error);
    }
};
