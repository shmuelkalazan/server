"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleSocketIo = void 0;
const vote_1 = require("../servises/vote");
const handleSocketIo = (client) => {
    console.log(`[socket io] New connection ${client.id}`);
    client.on('disconnect', () => {
    }),
        client.on('newVote', (vote) => {
            console.log(vote);
            (0, vote_1.voteById)(vote);
            console.log("entered new vote");
            client.emit('returnVote', vote);
        });
};
exports.handleSocketIo = handleSocketIo;
