import { NextFunction, Request, Response } from "express";
import  Jwt  from "jsonwebtoken";

export default (req:Request ,res:Response ,next:NextFunction) => {
    try {
        // console.log("in")
        const token = req.headers["authorization"]
        // console.log(token)
        if (!token){
            res.status(403).json({
                err:"token must be provaided"
            })
            return
        }
        const payload = Jwt.verify(token ,process.env.JWT_SECRET!);
        (req as any).user = payload
        next()
    } catch (error) {
        console.log(error)
        res.sendStatus(401).json(error)
    }
}