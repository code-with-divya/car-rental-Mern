import "./bookingcar.css"

import { useParams,useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";

import moment from "moment"


import { useEffect, useState } from "react";
import { getallcars } from "../../redux/actions/carActions";

import BookCar from "../../redux/actions/BookingActions.js";
import DefaultLayout from "../../components/DefaultLayout/Navbar.js";

export default function Bookingcar({ match }) {
    const userD = JSON.parse(localStorage.getItem('userdata'));

    console.log("userD", userD._id)
const navigate=useNavigate()

    const { carid } = useParams()
    const [starttime, Setstarttime] = useState()
    const [endtime, Setendtime] = useState()
    const [Totalhours, SetTotalhours] = useState()
    const [driver, Setdriver] = useState(false)
    const [totalamount, Settotalamount] = useState(0)

    const [cardata, setCarData] = useState([]);

    const { cars, loading } = useSelector(state => state.carReducer)
    const dispatch = useDispatch()
    useEffect(() => {

        if (cars.length == 0) {    // khup vela render hot hot tyamule if else lavl ahe
            dispatch(getallcars())
        }
        else {
            cars.map((car) => {
                let foundCarData = null;
                if (car._id === carid) {
                    // Store the car data if the ID matches
                    foundCarData = car;
                    // console.log(car)
                    setCarData(foundCarData);

                }
            });
        }

        // Set the found car data to state

        console.log(cardata)
    }, [cars])

    const BookingTimeSlots = () => {
        if (moment(endtime).isBefore(starttime)) {
            alert("End time must be after start time");
            return;
        }

        console.log(moment(starttime).format("MMM DD YYYY HH:mm"))
        console.log(moment(endtime).format("MMM DD YYY HH:mm"))
        let totaltime = moment(endtime).diff(starttime, 'hours')
        SetTotalhours(totaltime)

    }

    useEffect(() => {
        const now = moment();
        const tomorrow = moment().add(1, 'days');

        Setstarttime(now.format('YYYY-MM-DDTHH:mm'));
        Setendtime(tomorrow.format('YYYY-MM-DDTHH:mm'));
    }, []);


    useEffect(() => {
        if (Totalhours && cardata.hourlyRate) {
            let amount = Totalhours * cardata.hourlyRate;
            if (driver) {
                amount += (Totalhours * 50);
            }
            Settotalamount(amount);
        }
    }, [driver, Totalhours, cardata]);



    const booknow = async () => {
        try{
        const carobj = await {
            user_id: userD._id,
            vehicle_id: carid,
            totalhours: Totalhours,
            totalamount: totalamount,
            driverRequired: driver,
            bookedTimeSlots: {
                startDate: starttime,
                endDate: endtime
            }
        }
        dispatch(BookCar(carobj))
        navigate("/home/carspage")
    }
    catch(e){
        console.log(e)
    }
    }

    return (
        <>
            <DefaultLayout />
            <h1 style={{ textAlign: "center", color: "#365ad8" }}>Car Booking</h1>
            <div>

                <div className="carinfo">
                    <div>
                        < img className="bookingcarimg" src={cardata.img1} />
                    </div>
                    <div>
                        <div style={{ margin: "0 20px" }}>
                            <h3>{cardata.model} - {cardata.brand}</h3>
                            <h4 >₹ {cardata.hourlyRate}.00 / per hour</h4>
                            <p>Features : <br /> {cardata.features}</p>
                            <p>Fuel : {cardata.fueltype}</p>
                        </div>

                        <p style={{ fontSize: "20px", fontWeight: "bold", textAlign: "center" }}>Book Vehicle</p>
                        <div >

                            <div className=" bookingdiv">
                                <div className="Bd1">
                                    <input className="bookingdate"
                                        type="datetime-local"
                                        id="carbooking"
                                        name="carbooking"
                                        value={starttime}
                                        min={moment().format("YYYY-MM-DDTHH:mm")}
                                        onChange={(e) => {
                                            Setstarttime(e.target.value)
                                            console.log(e.target.value)
                                        }} />

                                    <input className="bookingdate"
                                    type="datetime-local"
                                    id="carbooking"
                                    name="carbooking"
                                    value={endtime}
                                    min={moment().format("YYYY-MM-DDTHH:mm")}
                                    onChange={(e) => {
                                        Setendtime(e.target.value)
                                        console.log(e.target.value)
                                    }} />

                                    <button className="DBbutton" onClick={BookingTimeSlots}>Total hours</button>


                                    <label style={{ fontSize: "20px" }} > driver required (Rs. 1000)</label>
                                    <input className="Dcheck" style={{ borderRadius: "none" }} type="checkbox" id="vehicle1" name="vehicle1" value="Bike" onChange={(e) => {
                                        if (e.target.checked) { Setdriver(true) }
                                        else { Setdriver(false) }
                                    }} />
                                    <h4 style={{ margin: "0 20px" }}>Total hours: {Totalhours}</h4>
                                </div>

                                <div className="Bd2">
                                    <h2>totalamount:{totalamount}</h2>
                                    <button className="bookingbutton" onClick={booknow}>Book Now</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <hr />
                <div>
                    <h3>Booked Time Slots:</h3>
                    {cardata.brand && (

                        <div className="BTdiv">
                            {cardata.bookedTimeSlots.map((slot) => {
                                const from = (moment(slot.startDate).format("DD MMM YYYY HH:mm"))
                                const To = (moment(slot.endDate).format("DD MMM YYYY HH:mm"))
                                return (
                                    <h6>
                                        {from} - {To}
                                    </h6>
                                );
                            })}

                        </div>
                    )}
                </div>


            </div>
        </>)
}