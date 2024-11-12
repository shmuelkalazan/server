import { json, Request, Response } from "express";
import { logins, registers } from "../servises/user";

export const login = async (req:Request ,res :Response) =>{
    try {
        const rr = await logins(req.body)
        if (typeof rr == "string"){
            res.status(400).json(rr)
        }
        else{
            res.status(200).json(rr)
        }
    } catch (error) {
        console.log(error)
        res.sendStatus(400)
    }
}

export const register = async (req:Request ,res :Response) =>{
    try {
        const rr = await registers(req.body)
        if (typeof rr == "string"){
            res.status(400).json(rr)
        }
        res.sendStatus(201)   
     } catch (error) {
        console.log(error)
        res.sendStatus(400)
    }
}

