"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.list = exports.sid = void 0;
const candidate_1 = require("../servises/candidate");
const sid = async (req, res) => {
    try {
        await (0, candidate_1.initDataBase)();
        res.sendStatus(201);
    }
    catch (error) {
        console.log(error);
        res.sendStatus(400);
    }
};
exports.sid = sid;
const list = async (req, res) => {
    try {
        const respons = await (0, candidate_1.getListOfCandidate)();
        res.status(200).json(respons);
    }
    catch (error) {
        console.log(error);
        res.sendStatus(400);
    }
};
exports.list = list;
