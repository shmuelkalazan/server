import { Request, Response } from "express";
import { voteById } from "../servises/vote";
import { VoteDto } from "../types/vote";


export const vote = async (req: Request<any, any, VoteDto>, res: Response) => {
  try {
    const data = await voteById(req.body);
    res.json({ data });
  } catch (err) {
    res.status(500).json({ err });
  }
};
