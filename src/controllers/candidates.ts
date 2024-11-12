import { Router } from "express";
import { list, sid } from "../routes/candidate";
import verifyUser from "../middlewares/verifyUser";

const router = Router()
router.post("/sid" , sid)

router.get("/" ,verifyUser,list)//verifyUser

export default router