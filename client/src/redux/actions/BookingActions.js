import axios from "axios"

const BookCar = (carobj) => async (dispatch) => {
    dispatch( {  type: "LOADING",
            payload:true} )

    try{
        const bookingdata =await axios.post("http://localhost:9999/vehicleBooking/Bookcar",carobj)
        console.log(bookingdata)
        alert("Car booked Sucessfully")
        dispatch({type:"LOADING",   payload:false})
        
        
        //type konti action ghyaychi ahe or konti , Payload madhey data store karat ahe
        
    }
    catch(e){
        console.log(e)
        dispatch({type:"LOADING", payload:false})

       
    }

}

export default BookCar
