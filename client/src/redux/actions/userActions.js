import axios from "axios"

export const Userregister = (objects) => async dispatch => {
    dispatch( {  type: "LOADING",
            payload:true} )

    try{
        const userdata =await axios.post("http://localhost:9999/user/create",objects)
        console.log("register",userdata)
       
        dispatch({type:"LOADING",   payload:false})

        //type konti action ghyaychi ahe or konti , Payload madhey data store karat ahe
        
    }
    catch(e){
        console.log(e.message)
        dispatch({type:"LOADING", payload:false})
       
    }

}



export const Userlogin = (objects) => async dispatch => {
    dispatch( {  type: "LOADING",
            payload:true} )

    try{
        const userdata =await axios.post("http://localhost:9999/user/login",objects)
        console.log("login",userdata)
       localStorage.setItem("user", JSON.stringify(userdata.data))
        dispatch({type:"LOADING",   payload:false})

        //type konti action ghyaychi ahe or konti , Payload madhey data store karat ahe
        
    }
    catch(e){
        console.log(e.message)
        dispatch({type:"LOADING", payload:false})
       
    }

}
