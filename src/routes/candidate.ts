import { json, Request, Response } from "express";
import { getListOfCandidate, initDataBase } from "../servises/candidate";

export const sid = async(req:Request ,res:Response) =>{
    try {
        await initDataBase()
        res.sendStatus(201)
        
    } catch (error) {
        console.log(error)
        res.sendStatus(400)
    }
}

export const list = async(req:Request ,res:Response) =>{
    try {    
        const respons = await getListOfCandidate()
        res.status(200).json(respons)
    } catch (error) {
        console.log(error)
        res.sendStatus(400)
    }
}

