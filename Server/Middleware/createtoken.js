import dotenv from "dotenv";
import jwt from "jsonwebtoken"

dotenv.config()
const SECRETE_KEY="OWIRSJASKLFJLK23"

export const Create_token=(data)=>{

    const token = jwt.sign({id:data._id},SECRETE_KEY,{expiresIn:'2h'})
    return token
}

export const getuserIdfromtoken = (data)=>{
    const decodedid= jwt.verify(data,SECRETE_KEY)
    return decodedid
}





