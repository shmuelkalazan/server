"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logins = exports.registers = void 0;
const bcrypt_1 = require("bcrypt");
const user_1 = __importDefault(require("../models/user"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const registers = async (useri) => {
    try {
        if (!(useri === null || useri === void 0 ? void 0 : useri.username) || !(useri === null || useri === void 0 ? void 0 : useri.password)) {
            return "enter uesrname & password";
        }
        const encPass = await (0, bcrypt_1.hash)(useri.password, 10);
        if (!encPass) {
            return "wrong password";
        }
        const user1 = {
            username: useri.username,
            password: encPass,
            isAdmin: useri.isAdmin,
            hasVoted: false,
            votedFor: null
        };
        const newCand = new user_1.default(user1);
        await newCand.save();
    }
    catch (error) {
        console.log("we dont can to crate new user ", error);
    }
};
exports.registers = registers;
const logins = async (useri) => {
    try {
        if (!useri) {
            return "enter username";
        }
        const dbUser = await user_1.default.findOne({ username: useri.username }).lean();
        if (!dbUser)
            return ("user not fuond");
        const match = await (0, bcrypt_1.compare)(useri.password, dbUser.password);
        if (!match)
            return ("wrong password");
        const token = await jsonwebtoken_1.default.sign({
            user_id: dbUser._id,
            isAdmin: dbUser.isAdmin,
            username: dbUser.username
        }, process.env.JWT_SECRET, { expiresIn: "3h" });
        return { ...dbUser, token, password: "*****" };
    }
    catch (error) {
        console.log("we dont can to crate new user ", error);
    }
};
exports.logins = logins;
