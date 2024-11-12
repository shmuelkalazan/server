import { Router } from "express";
import { vote } from "../routes/vote";
import verifyUser from "../middlewares/verifyUser";

const router = Router()

router.post("/" ,verifyUser ,vote) //verifyuser

export default router