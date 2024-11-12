"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getListOfCandidate = exports.initDataBase = void 0;
const candidate_1 = __importDefault(require("../models/candidate"));
const initDataBase = async () => {
    try {
        const cands = [
            {
                name: "jonny",
                image: "https://randomuser.me/api/portraits/med/men/31.jpg"
            },
            {
                name: "shmuel",
                image: "https://randomuser.me/api/portraits/med/men/51.jpg"
            }, {
                name: "moshe",
                image: "https://randomuser.me/api/portraits/med/men/21.jpg"
            }, {
                name: "bb",
                image: "https://randomuser.me/api/portraits/med/men/11.jpg"
            }, {
                name: "beni",
                image: "https://randomuser.me/api/portraits/med/men/37.jpg"
            },
        ];
        for (const cand of cands) {
            const newCand = new candidate_1.default(cand);
            await newCand.save();
        }
    }
    catch (error) {
        console.log("we dont can to crate new candidat ", error);
    }
};
exports.initDataBase = initDataBase;
const getListOfCandidate = async () => {
    try {
        const list = await candidate_1.default.find({});
        return list;
    }
    catch (err) {
        console.log(err);
        throw err;
    }
};
exports.getListOfCandidate = getListOfCandidate;
