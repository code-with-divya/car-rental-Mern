import axios from "axios"

// get all Cars
export const getallcars = () => async dispatch => {
    dispatch( {  type: "LOADING",
            payload:true} )

    try{
        const allcars = await axios.get("http://localhost:9999/vehicle/getallcars")
        dispatch({type:"GetAllCarData",   payload:allcars.data.data})
        dispatch({type:"LOADING",   payload:false})

        //type konti action ghyaychi ahe or konti , Payload madhey data store karat ahe
        
    }
    catch(e){
        console.log(e.message)
        dispatch({type:"LOADING", payload:true})
       
    }

}

// add new cars

export const Addcar= (carobj)=> async dispatch =>{
    dispatch({type:"LOADING" , payload:true})
    try{
        const vehicledata= await axios.post("http://localhost:9999/vehicle/addvehicle",  carobj)
        console.log( "carcation", vehicledata)
        dispatch({type:"LOADING", payload:false})
    }
    catch(e){
        console.log(e)
        dispatch({type:"LOADING", payload:false})
    }
}



//update vehicle
export const UpdateVehicle = (updateobj)=> async dispatch =>{
    dispatch({type:"LOADING" , payload:true})
    try{
        const updatedata = await axios.put("http://localhost:9999/vehicle/updatevehicle", updateobj)
        console.log( "carcation", updatedata)
        dispatch({type:"LOADING", payload:false})
    }
    catch(e){
        console.log(e)
        dispatch({type:"LOADING", payload:false})
    }
}

//delete Vehicle
export const deleteVehicle = (deleteobj)=> async dispatch =>{
    dispatch({type:"LOADING" , payload:true})
    try{
        const deletdata =  await axios.delete(`http://localhost:9999/vehicle/deleteVehicle/${deleteobj}`)
        console.log( "carc action deleted", deleteobj,deletdata)
        dispatch({type:"LOADING", payload:false})
    }
    catch(e){
        console.log(e)
        dispatch({type:"LOADING", payload:false})
    }
}
