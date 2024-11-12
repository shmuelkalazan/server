import { model, Schema ,Types} from "mongoose"
import { boolean, string } from "zod"

export interface Iuser extends Document{
    username:string
    password:string
    isAdmin:boolean
    hasVoted:boolean
    votedFor:Types.ObjectId | null
}

const userSchema = new Schema<Iuser>({
    username:{
        type:String,
        unique:true
    },
    password:String,
    isAdmin:{
        type:Boolean,
        default:false
    },
    hasVoted:{
        type:Boolean,
        default:false
    },
    votedFor:{
        type:Schema.Types.ObjectId,
        default:null,
        ref:"candidate",
    }
})

export default model("User" ,userSchema)