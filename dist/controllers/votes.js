"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const vote_1 = require("../routes/vote");
const verifyUser_1 = __importDefault(require("../middlewares/verifyUser"));
const router = (0, express_1.Router)();
router.post("/", verifyUser_1.default, vote_1.vote); //verifyuser
exports.default = router;
