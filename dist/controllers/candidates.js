"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const candidate_1 = require("../routes/candidate");
const verifyUser_1 = __importDefault(require("../middlewares/verifyUser"));
const router = (0, express_1.Router)();
router.post("/sid", candidate_1.sid);
router.get("/", verifyUser_1.default, candidate_1.list); //verifyUser
exports.default = router;
