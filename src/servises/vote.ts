import candidate from "../models/candidate"
import user from "../models/user"
import { VoteDto } from "../types/vote";

export const voteById = async (vote:VoteDto)=>{
    try {
        console.log(vote)
        await candidate.findByIdAndUpdate(vote.candidateId, {
          $inc: {
            votes: 1,
          },
        });
        await user.findByIdAndUpdate(vote.userId, {
          $set: {
            hasVoted: true,
            votedFor: vote.candidateId,
          },
        });
    
        return {
          status: "DONE",
        };
      } catch (err) {
        return {
          status: "ERROR",
          err: err as Error,
        };
      }
}