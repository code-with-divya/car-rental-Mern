
import axios from "axios"
import { useEffect, useState } from "react"
import "./addvehicle.css"
import { useDispatch, useSelector } from "react-redux"
import { Addcar, UpdateVehicle, deleteVehicle, getallcars } from "../../../redux/actions/carActions"
import { Link } from "react-router-dom"

import deleteicon from "./deleteicon.png"
import editicon from "./editicon.png"
import Adminnavbar from "../../../components/adminNavbar/adminnavbar"


export default function Addvehicle() {
    const dispatch = useDispatch()

    const [vehicleId, setVehicleId] = useState()
    const [type, setType] = useState()
    const [Brand, setBrand] = useState()
    const [Model, setModel] = useState()
    const [regiNum, setregiNum] = useState()
    const [fueltype, setFueltype] = useState()
    const [HourlyRate, setHourlyRate] = useState()
    const [Features, setFeatures] = useState()
    const [img1, setimg1] = useState()
    const [img2, setimg2] = useState()
    const [img3, setimg3] = useState()

    let [edit, setedit] = useState(false)

    const Vehicle_submit = async (e) => {
        if (edit === true) {
            e.preventDefault()
            const vehicledata = await axios.put("http://localhost:9999/vehicle/updatevehicle", {
                vehicleId: vehicleId,
                type: type,
                brand: Brand,
                model: Model,
                registrationNumber: regiNum,
                hourlyRate: HourlyRate,
                fueltype: fueltype,
                features: Features,
                img1: img1,
                img2: img2,
                img3: img3

            })
            console.log(vehicledata)

            // dispatch(getallcars())

            // setType("")
            // setBrand("")
            // setModel("")
            // setFueltype("")
            // setregiNum("")
            // setHourlyRate("")
            // setFeatures("")
            // setimg1("")
            // setimg2("")
            // setimg3("")
        }
        else {
            const vehicledata = await axios.post("http://localhost:9999/vehicle/addvehicle", {
                type: type,
                brand: Brand,
                model: Model,
                registrationNumber: regiNum,
                hourlyRate: HourlyRate,
                fueltype: fueltype,
                features: Features,
                img1: img1,
                img2: img2,
                img3: img3

            })
            console.log(vehicledata)

            // dispatch(getallcars())

            // setType("")
            // setBrand("")
            // setModel("")
            // setFueltype("")
            // setregiNum("")
            // setHourlyRate("")
            // setFeatures("")
            // setimg1("")
            // setimg2("")
            // setimg3("")
        }
    }




    // get all cars
    const { cars } = useSelector(state => state.carReducer)
    useEffect(() => {
        dispatch(getallcars())

    }, [])

    // //update Vehicle
    const update_Vehicle = (cardata) => {
        setVehicleId(cardata._id)
        setType(cardata.type)
        setBrand(cardata.brand)
        setModel(cardata.model)
        setFueltype(cardata.fueltype)
        setregiNum(cardata.registrationNumber)
        setHourlyRate(cardata.hourlyRate)
        setFeatures(cardata.features)
        setimg1(cardata.img1)
        setimg2(cardata.img2)
        setimg3(cardata.img3)
        setedit(true)
    }


    // add and update
    // const Addvehicle = () => {
    //     const cardata = {
    //         vehicleId: vehicleId,
    //         type: type,
    //         brand: Brand,
    //         model: Model,
    //         registrationNumber: regiNum,
    //         hourlyRate: HourlyRate,
    //         fueltype: fueltype,
    //         features: Features,
    //         img1: img1,
    //         img2: img2,
    //         img3: img3
    //     }
    //     if (edit === true) {
    //         dispatch(UpdateVehicle(cardata))
    //         dispatch(getallcars())
    //     } else {
    //         dispatch(Addcar(cardata))
    //         dispatch(getallcars())
    //     }
    // }

    const deletmotor = (deletmotor) => {
        const carid = deletmotor._id
        dispatch(deleteVehicle(carid))
        dispatch(getallcars())

    }

    const [search, setSearch] = useState('')

    const searchData = (cars).filter(
        (cardata) => {

            return (

                cardata.brand.toLowerCase().includes(search.toLowerCase()) ||
                cardata.type.toLowerCase().includes(search.toLowerCase()) ||
                cardata.model.toLowerCase().includes(search.toLowerCase())

            )

        }
    )


    // const deletedata = async (notedata) => {
    //     const carid = notedata._id;
    //     try {
    //         //app delete karnyasathi req.body madhun data send kru shakt nahi te undefined dakhavte 
    //       const deleteid=  await axios.delete(`http://localhost:9999/vehicle/deleteVehicle/${carid}`)
    //         console.log(`${carid} id deleted`,deleteid)
    //         dispatch(getallcars())
    //     }
    //     catch (e) {
    //         console.log(e.message, e.response.data)
    //     }
    // }


    return (
        <>
            <Adminnavbar />
            <div class="formbold-main-wrapper">

                <div class="formbold-form-wrapper">

                    <form >
                        <div class="formbold-form-title">
                            <h2 class="">Add New  Vehicle</h2>
                        </div>

                        <div class="formbold-input">
                            <div>
                                <label for="firstname" class="formbold-form-label">
                                    Vehicle Type
                                </label>
                                <select className="formbold-form-input" value={type} onChange={(e) => { setType(e.target.value) }}  >
                                    <option  >Selected Option</option>
                                    <option value="car">car</option>
                                    <option value="bike">bike</option>
                                </select>
                            </div>
                            <div>
                                <label for="lastname" class="formbold-form-label">Brand</label>
                                <select className="formbold-form-input" value={Brand} onChange={(e) => {
                                    setBrand(e.target.value)
                                }}>
                                    <option  >Selected Option</option>
                                    <option value="Mahindra">Mahindra</option>
                                    <option value="TATA">TATA</option>
                                    <option value="Toyota">Toyota</option>
                                    <option value="Suzuki">Suzuki</option>
                                    <option value="Hyundai">Hyundai</option>
                                    <option value="Kia">Kia</option>
                                    <option value="BMW">BMW</option>
                                    <option value="Land Rover">Land Rover</option>
                                    <option value="Mercedes">Mercedes</option>
                                    <option value="KTM">KTM</option>
                                    <option value="Hero Motor">Hero Motor</option>
                                    <option value="Honda">Honda</option>
                                    <option value="TVS">TVS</option>
                                    <option value="Ducati">Ducati</option>
                                    <option value="Yamaha">Yamaha</option>
                                    <option value="Royal Enfield">Royal Enfield</option>
                                    <option value="Kawaski">Kawaski</option>
                                    <option value="Triumph">Triumph</option>
                                    <option value="OLA">OLA</option>
                                    <option value="Skoda">Skoda</option>
                                    <option value="Volkswagen">Volkswagen</option>
                                </select>
                            </div>
                        </div>

                        <div class="formbold-input-flex">
                            <div>
                                <label for="email" class="formbold-form-label" > Model </label>
                                <input
                                    type="text"

                                    class="formbold-form-input"
                                    value={Model}
                                    onChange={(e) => {
                                        setModel(e.target.value)
                                    }}
                                />
                            </div>
                            <div>
                                <label for="phone" class="formbold-form-label">registration Number</label>
                                <input
                                    type="text"
                                    name="phone"
                                    id="phone"
                                    class="formbold-form-input"
                                    value={regiNum}
                                    onChange={(e) => {
                                        setregiNum(e.target.value)
                                    }}

                                />
                            </div>
                        </div>

                        <div>
                            <label for="firstname" class="formbold-form-label">
                                Fuel Type
                            </label>
                            <select className="formbold-form-input" value={fueltype} onChange={(e) => {
                                setFueltype(e.target.value)
                            }}>
                                <option selected>Selected Option</option>
                                <option value="Petrol">Petrol</option>
                                <option value="Diesel">Diesel</option>
                                <option value="Electric">Electric</option>
                                <option value="CNG">CNG</option>
                            </select>
                        </div>

                        <div class="formbold-mb-3">
                            <label for="address" class="formbold-form-label">
                                Hourly Rate
                            </label>
                            <input
                                type="Number"
                                name="address"
                                id="address"
                                class="formbold-form-input"
                                value={HourlyRate}
                                onChange={(e) => {
                                    setHourlyRate(e.target.value)
                                }}
                            />
                        </div>

                        <div class="formbold-mb-3">
                            <label for="address2" class="formbold-form-label">
                                Features
                            </label>
                            <input
                                type="textarea"
                                name="address2"
                                id="address2"
                                value={Features}
                                class="formbold-form-input" onChange={(e) => {
                                    setFeatures(e.target.value)
                                }}
                            />
                        </div>

                        <div class="formbold-input">
                            <div>
                                <label for="state" class="formbold-form-label"> img1 Source </label>
                                <input
                                    type="text"
                                    name="state"
                                    id="state"
                                    value={img1}
                                    class="formbold-form-input" onChange={(e) => {
                                        setimg1(e.target.value)
                                    }}
                                />
                            </div>
                            <div>
                                <label for="country" class="formbold-form-label"> img2 Source </label>
                                <input
                                    type="text"
                                    name="country"
                                    id="country"
                                    value={img2}
                                    class="formbold-form-input" onChange={(e) => {
                                        setimg2(e.target.value)
                                    }}
                                />
                            </div>
                            <div>
                                <label for="country" class="formbold-form-label"> img3 Source </label>
                                <input
                                    type="text"
                                    name="country"
                                    id="country"
                                    value={img3}
                                    class="formbold-form-input" onChange={(e) => {
                                        setimg3(e.target.value)
                                    }}
                                />
                            </div>
                        </div>


                        {/* <button class="formbold-btn" onClick={Vehicle_submit}>Register Now</button> */}
                        {/* <button class="formbold-btn" onClick={Addvehicle}>Add vehicle Now</button> */}
                        {
                            edit === false ? <button class="formbold-btn" onClick={Vehicle_submit}>Add vehicle</button> : <button class="formbold-btn" onClick={Vehicle_submit}>Update Vehicle</button>
                        }
                    </form>
                </div>
            </div>

            <div>

                <div>

                    <input
                        type="text"
                        placeholder="Search Car"
                        class="adminSearch"
                        onChange={(e) => {
                            setSearch(e.target.value)
                            console.log(e.target.value)
                        }}
                    />
                </div>

                <div>
                    {/* searchData
                    <table>

                        <tr>
                            <th>Vehicle Type</th>
                            <th>Imges</th>
                            <th>Model</th>
                            <th>Brand</th>
                            <th>Fuel Type</th>
                            <th>rate/Hr</th>
                            <th>Details</th>
                            <th>delete</th>
                            <th>edit</th>

                        </tr>
                        {searchData.map((item) => {

                            return (
                                <>
                                    <tr>
                                        <td>{item.type}</td>
                                        <td><img src={item.img1} className="smallcar" alt="carimg" /></td>
                                        <td>{item.model}</td>
                                        <td>{item.brand}</td>
                                        <td>{item.fueltype}</td>
                                        <td>{item.hourlyRate}</td>
                                        <td ><Link className="buy" to={`/booking/${item._id}`}>Details</Link> </td>
                                        <td><img src={deleteicon} className="smallcar" alt="carimg" onClick={() => { deletmotor(item._id) }} /></td>


                                        <td><img src={editicon} className="smallcar" alt="carimg" onClick={() => {
                                            update_Vehicle(item)
                                            console.log(item._id)
                                        }} /></td>

                                    </tr>


                                </>)
                        }
                        )} 
                    </table> */}
                </div>
                <div className='tablediv'>
                    <table>

                        <tr>
                            <th>Vehicle Type</th>
                            <th>Imges</th>
                            <th>Model</th>
                            <th>Brand</th>
                            <th>Fuel Type</th>
                            <th>rate/Hr</th>
                            <th>Details</th>
                            <th>delete</th>
                            <th>edit</th>

                        </tr>
                        {searchData.reverse().map((item) => {

                            return (
                                <>
                                    <tr>
                                        <td>{item.type}</td>
                                        <td><img src={item.img1} className="smallcar" alt="carimg" /></td>
                                        <td>{item.model}</td>
                                        <td>{item.brand}</td>
                                        <td>{item.fueltype}</td>
                                        <td>{item.hourlyRate}</td>
                                        <td ><Link className="buy" to={`/booking/${item._id}`}>Details</Link> </td>
                                        <td><img src={deleteicon} className="editdelte" alt="carimg" onClick={() => { deletmotor(item) }} /></td>


                                        <td><img src={editicon} className="editdelte" alt="carimg" onClick={() => {
                                            update_Vehicle(item)
                                            console.log(item._id)
                                        }} /></td>

                                    </tr>


                                </>)
                        }
                        )}
                    </table>

                </div>
            </div>

        </>
    )
}