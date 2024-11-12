import { Socket } from "socket.io";
import { io } from "../app";
import { VoteDto } from "../types/vote";
import { voteById } from "../servises/vote";

export const handleSocketIo = (client:Socket)=>{
    console.log(`[socket io] New connection ${client.id}`)
    client.on('disconnect' ,() =>{

    }),
    client.on('newVote',(vote:VoteDto)=>{
        console.log(vote)
        voteById(vote)
        console.log("entered new vote")
        client.emit('returnVote',vote)
    })
}
