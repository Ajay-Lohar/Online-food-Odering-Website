import axios from "axios"
import { REGISTER_REQUEST } from "./ActionType"

export const registerUser = (reqData)=>async(dispatch)=>{
    dispatch({type:REGISTER_REQUEST})
    
    try{
        const {data}=await axios.post()
    }catch(eror){
    
        console.log("error" ,error )
    }
}