"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.voteById = void 0;
const candidate_1 = __importDefault(require("../models/candidate"));
const user_1 = __importDefault(require("../models/user"));
const voteById = async (vote) => {
    try {
        console.log(vote);
        await candidate_1.default.findByIdAndUpdate(vote.candidateId, {
            $inc: {
                votes: 1,
            },
        });
        await user_1.default.findByIdAndUpdate(vote.userId, {
            $set: {
                hasVoted: true,
                votedFor: vote.candidateId,
            },
        });
        return {
            status: "DONE",
        };
    }
    catch (err) {
        return {
            status: "ERROR",
            err: err,
        };
    }
};
exports.voteById = voteById;
