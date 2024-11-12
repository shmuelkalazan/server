"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.vote = void 0;
const vote_1 = require("../servises/vote");
const vote = async (req, res) => {
    try {
        const data = await (0, vote_1.voteById)(req.body);
        res.json({ data });
    }
    catch (err) {
        res.status(500).json({ err });
    }
};
exports.vote = vote;
