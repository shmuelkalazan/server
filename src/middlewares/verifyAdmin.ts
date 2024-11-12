import { NextFunction, Request, Response } from "express";
import  Jwt  from "jsonwebtoken";

export default (req:Request ,res:Response ,next:NextFunction) => {
    try {
        const token = req.headers["authorization"]
        if (!token){
            res.status(400).json({
                err:"token must be provaided"
            })
            return
        }
        const payload = Jwt.verify(token! ,process.env.JWT_SECRET!);
        (req as any).user = payload
        if(!(payload as any).isAdmin){
            res.status(403).json({
                err:"you are not admin"
            })
        }
        next()
    } catch (error) {
        console.log(error)
        res.sendStatus(401).json(error)
    }
}