import axios from "axios"
import "./bookinghistory.css"
import { useEffect, useState } from "react"
import moment from "moment"
import DefaultLayout from "../../components/DefaultLayout/Navbar";

export function UserBookingHistory() {
    const userD = JSON.parse(localStorage.getItem('userdata'));

    const [carhistory, setCarhistory] = useState([])
    const allhistory = async () => {
        const historydata = await axios.get("http://localhost:9999/vehicleBooking/carbookinghistory")
        console.log(historydata.data.data)
        setCarhistory(historydata.data.data)
    }

    useEffect(() => {
        allhistory()
    }, [])

    return (
        <>
            <DefaultLayout />
            <div >

                <h3 className="adminpagehead">CAR BOOKINGS</h3>

                {carhistory.map((value) => {

                    if(value.user_id._id == userD._id) {
                        const bookingdate = (moment(value.createdAt).format("MMM Do YYYY H:mm a"))
                        return (
                            <>
                               
                                < div className="historydiv">
                                <div className="Hdiv3">
                                    <h5>{value.vehicle_id.model} - {value.vehicle_id.brand}  </h5>
                                    <p>Total hours:<b>{value.totalhours}</b> </p>
                                    <p>Rent Per hour:<b>{value.vehicle_id.hourlyRate}</b> </p>
                                    <p>Total amount : <b>₹ {value.totalamount}</b></p>
                                </div>

                                <div className="Hdiv3">
                                    <p >Driver Required : <b>{`${value.driverRequired}` ? `Yes` : 'No'}</b> </p>
                                    {value.bookedTimeSlots.map((slot) => {
                                        const from = (moment(slot.starttime).format("MMM Do YYYY H:mm a"))
                                        const To = (moment(slot.endDate).format("MMM Do YYYY H:mm a"))
                                        return (
                                            <>
                                                <p>From : {from}</p>
                                                <p>To : {To}</p>
                                            </>
                                        );
                                    })}
                                    <p>Date of Booking :{bookingdate} </p>
                                </div>
                                <div className="Hdiv3"> <img className="vehicleimg" src={value.vehicle_id.img1} alt="carimg" /> </div>


                            </div >
                              
                        </> )
                    }
                    else{
                        <div className="historydiv">
                            <h3 style={{textAlign:"center", color:"lightgray"}}>No Bookings </h3>
                        </div>
                    }
                }
               
                )
                }
        </div >


        </>

    )
}




