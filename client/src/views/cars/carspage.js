import './carspage.css'

import moment from "moment"


import { useDispatch, useSelector } from "react-redux";
import DefaultLayout from "../../components/DefaultLayout/Navbar";
import { useEffect, useState } from "react";
import { getallcars } from "../../redux/actions/carActions";
import { Link } from 'react-router-dom';

import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import axios from 'axios';

export default function Carspage() {
    const [totalcars, settotalcars] = useState([])
    const [filtercars, setfiltercars] = useState([])
    const [starttime, Setstarttime] = useState(new Date())
    const [endtime, Setendtime] = useState(new Date())
    const { cars } = useSelector(state => state.carReducer)
    const dispatch = useDispatch()

    const userD = JSON.parse(localStorage.getItem('userdata'));

    const getallcars = async ()=> {
        try{
            const allcars = await axios.get("http://localhost:9999/vehicle/getallcars",{
                headers:{
                    Authorization:`fafs ${userD}`
                }
            })
            settotalcars(allcars.data.data)
            console.log(allcars) 
        }
        catch(e){
            console.log(e.message)
        }
    
    }

    useEffect(() => {
        getallcars()

    }, [])


    // useEffect(() => {
    //     dispatch(getallcars())

    // }, [])

    // useEffect(() => {
    //     settotalcars(cars)
    // }, [cars])



    const setFilter = () => {
        const selectedFrom = moment(starttime, "MMM DD yyyy HH:mm");
        const selectedTo = moment(endtime, "MMM DD yyyy HH:mm");
    
        const temp = cars.filter((cardata) => {
            // If the car has no bookings, it is available
            if (cardata.bookedTimeSlots.length === 0) {
                return true;
            }
    
            // Check if the selected dates overlap with any of the existing bookings
            const isCarAvailable = cardata.bookedTimeSlots.every((booking) => {
                const bookingStart = moment(booking.startDate, "MMM DD yyyy HH:mm");
                const bookingEnd = moment(booking.endDate, "MMM DD yyyy HH:mm");
    
                // If the selected date range overlaps with the booking, the car is not available
                return (
                    selectedTo.isBefore(bookingStart) || 
                    selectedFrom.isAfter(bookingEnd)
                );
            });
    
            return isCarAvailable; // Include the car only if it is available
        });
    
        setfiltercars(temp);
        console.log("filtercars", temp);
    };
    
    

    const [search, setSearch] = useState('')

    const searchData = totalcars.filter(
        (cardata) => {

            return (

                cardata.brand.toLowerCase().includes(search.toLowerCase()) ||
                cardata.type.toLowerCase().includes(search.toLowerCase()) ||
                cardata.model.toLowerCase().includes(search.toLowerCase())

            )

        }
    )


    const Lowtohigh = cars.sort((a, b) => b.hourlyRate - a.hourlyRate).map((item)=> item.hourlyRate)


    console.log("Lowtohigh",Lowtohigh);

    const HightoLow = cars.sort((a, b) => a.hourlyRate - b.hourlyRate).map((item)=> item.hourlyRate)

    console.log("HightoLow" ,HightoLow);

    return (
        <>
            <DefaultLayout />
            {/* <h3>Filter</h3> */}
            <div className='searchdiv'>
                <div>
                    <input
                        type="text"
                        placeholder='Search Vehicle'
                        class="inputsearch"

                        onChange={(e) => {
                            setSearch(e.target.value)
                            console.log(e.target.value)
                        }}
                    />
                </div>

                {/* <div>
                   <h5 style={{display:"inline"}}>From : </h5> 
                    <input className='inputdate' type="datetime-local" id="carbooking" name="carbooking"
                        onChange={(e) => {
                            Setstarttime(e.target.value)
                        }} />
                
                     <h5 style={{display:"inline"}}>To : </h5><input className='inputdate' type="datetime-local" id="carbooking" name="carbooking" onChange={(e) => {
                        Setendtime(e.target.value)
                        console.log(e.target.value)
                    }} />


                    <button onClick={setFilter} className='CFbutton'>filter cars</button>
                </div> */}


            </div>


            {/* <div>
                filter cars
                {filtercars.map((item) => {

                    <h1>{item.model} - {item.brand}</h1>
                })

                }
            </div> */}
            <h1 className='Vtype'>Car</h1>
            <div className="Cardiv">

                {searchData.map((item) => {
                    if (item.type.toLowerCase() == "car") {
                        return (
                            <div>


                                <div class="Carcard">
                                    <div class="card-body">
                                        <img src={item.img1} alt="BMW UX" class="car-image" />
                                    </div>
                                    <div class="card-footer">
                                        <div class="car-details">
                                            <span class="car-name">{item.model} - {item.brand}</span>
                                            <span class="car-price">{item.hourlyRate}/perHours</span>
                                        </div>
                                        <div class="car-action">
                                            <span><Link className='details' to={`/booking/${item._id}`}>Details </Link></span>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        )
                    }
                })
                }

            </div >

            <h1 className='Vtype'>Bike</h1>
            <div className="Cardiv">

                {searchData.map((item) => {
                    if (item.type.toLowerCase() == "bike") {
                        return (
                            <div>


                                <div class="Carcard">
                                    <div class="card-body">
                                        <img src={item.img1} alt="BMW UX" class="car-image" />
                                    </div>
                                    <div class="card-footer">
                                        <div class="car-details">
                                            <span class="car-name">{item.model} - {item.brand}</span>
                                            <span class="car-price">{item.hourlyRate}/perHours</span>
                                        </div>
                                        <div class="car-action">
                                            <span ><Link className='details' to={`/booking/${item._id}`}>Details </Link></span>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        )
                    }
                })
                }

            </div >


        </>

    )
}