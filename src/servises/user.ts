import { compare, hash } from "bcrypt"
import user, { Iuser } from "../models/user"
import  Jwt  from "jsonwebtoken";

export const registers = async (useri:Iuser) => {
    try {
        if (!useri?.username || !useri?.password){
            return "enter uesrname & password"
        }
        const encPass = await hash(useri.password, 10);
        if (!encPass){
            return "wrong password"
        }
        const user1 =  
            {
            username:useri.username,
            password:encPass,
            isAdmin:useri.isAdmin,
            hasVoted:false,
            votedFor:null
        }
        const newCand = new user(user1)
        await newCand.save()
    } catch (error) {
        console.log("we dont can to crate new user " ,error) 
    }
}

export const logins = async (useri:Iuser) => {
    try {
        if (!useri){
            return "enter username"
        }
        const dbUser  = await user.findOne({username:useri.username}).lean();
        if (!dbUser) return("user not fuond")
            const match = await compare(useri.password, dbUser.password);
        if (!match) return("wrong password");
        const token = await Jwt.sign({ 
            user_id:dbUser._id ,
            isAdmin:dbUser.isAdmin ,
            username:dbUser.username
        },process.env.JWT_SECRET as string ,{expiresIn:"3h"})
        return {...dbUser ,token ,password:"*****"};
    } catch (error) {
        console.log("we dont can to crate new user " ,error) 
    }
}
