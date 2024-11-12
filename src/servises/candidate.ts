import candidate from "../models/candidate"
import user from "../models/user"

export const initDataBase = async () => {
    try {
        const cands = [ 
            {
            name:"jonny",
            image:"https://randomuser.me/api/portraits/med/men/31.jpg"
        },
        {
            name:"shmuel",
            image:"https://randomuser.me/api/portraits/med/men/51.jpg"
        },            {
            name:"moshe",
            image:"https://randomuser.me/api/portraits/med/men/21.jpg"
        },            {
            name:"bb",
            image:"https://randomuser.me/api/portraits/med/men/11.jpg"
        },            {
            name:"beni",
            image:"https://randomuser.me/api/portraits/med/men/37.jpg"
        },
    ]

    for (const cand of cands) {
        const newCand = new candidate(cand)
        await newCand.save()
    }
        
    } catch (error) {
        console.log("we dont can to crate new candidat " ,error) 
    }
}

export const getListOfCandidate = async ()=>{
    try {
        const list = await candidate.find({})
        return list
    } catch (err) {
        console.log(err)
        throw err
    }
}

