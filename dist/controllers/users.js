"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const users_1 = require("../routes/users");
const router = (0, express_1.Router)();
router.post("/login", users_1.login);
router.post("/register", users_1.register);
exports.default = router;
