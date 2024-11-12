import { model, Schema ,Types} from "mongoose"
import { boolean, string } from "zod"
import { Iuser } from "./user"

export interface Icandidate extends Document{
    name:string
    image:string
    votes:number

}

const candidateSchema = new Schema<Icandidate>({
    name:{
        type:String,
        unique:true
    },
    image:String,
    votes:{
        type:Number,
        default:0
    }
})

export default model<Icandidate>("candidate" ,candidateSchema)