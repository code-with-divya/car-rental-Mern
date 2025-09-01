import './home.css'

import moment from "moment"

import carimg from "./carImg.png"
import carimg2 from "./carimg2.png"
import bestprice from "./bestprice_icon.png"
import convinent from "./convinentcar.png"
import Secure from "./securecar.png"
import Accessible from "./accept-car.png"
import user from './reviewimg.jpeg'
import correct from './correcticon.png'

import { useDispatch, useSelector } from "react-redux";
import DefaultLayout from "../../components/DefaultLayout/Navbar";
import { useEffect, useState } from "react";
import { getallcars } from "../../redux/actions/carActions";
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer/footer'
import Aos from 'aos'

export default function Home() {
    const userD = JSON.parse(localStorage.getItem('userdata'));
    console.log(userD)

    const [totalcars, settotalcars] = useState([])

    const { cars } = useSelector(state => state.carReducer)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getallcars())

    }, [])

    useEffect(() => {

        settotalcars(cars)
    }, [cars])

    useEffect(() => {
        Aos.init();
        Aos.refresh();
    }, []);
    return (
        <>

            <DefaultLayout />
            <div>
                <div className='Herosection'>
                    <div className='herotext'>
                    
                        <div className='HeroTDiv'>
                            <h1 data-aos="fade-up" className='effortless' style={{fontFamily:"Times New Roman !important", color:"#fc0" , letterSpacing: "1px",fontsize: "29px", fontfamily: "Times NewRoman", color: "rgb(255, 204, 0)"}}>Effortless</h1>
                            <h1 data-aos="fade-up" data-aos-delay="600" className="Homename">Car Rental</h1>
                            <p data-aos="fade-up" data-aos-delay="1000">Best In City <br/> TRUSTED CAR SERVIES IN INDIA </p>
                            <button class="carpagebutton" data-aos="fade-up" data-aos-delay="1500" ><Link to={`/home/carspage`}>Get Started</Link></button>
                        </div>

                    </div>
                    <div className='heroimg'>
                        <img style={{paddingleft:"50px"}} data-aos="zoom-in" data-aos-duration="1500" src={carimg} className="homecar" />
                    </div>
                </div>

                <div className='AboutSection'>
                    <div data-aos="slide-right" data-aos-duration="1000" className='heroimg'>
                        <img src={carimg2} className="homecar" />
                    </div>
                    <div className='Abouttext'>
                        <div data-aos="fade-up" data-aos-duration="1500" className='ASDiv'>
                            <h1>About us</h1>
                            <p>We pride ourselves on personalized service, great cars and excellent rates.</p>
                            <button class="aboutpagebutton">Get Started</button>
                        </div>
                    </div>
                </div>

                {/* why choose us */}
                <div className='WhySection'>
                    <div className='Whytext' data-aos="fade-up" data-aos-delay="0"><h2>Why choose Rental Self Drive Cars?</h2></div>
                    <div className='whydiv'>
                        <div className='whydiv4' data-aos="fade-up" data-aos-delay="2000">

                            <img className='Wicon' src={bestprice} alt='img1' />

                            <h3 className='whyH'>Best Price</h3>
                            <p className='whyP'>There are no hidden charges or fees</p>

                        </div>

                        <div className='whydiv4' data-aos="fade-up" data-aos-delay="500">


                            <img className='Wicon' src={Accessible} alt='img1' />


                            <h3 className='whyH'>Accessible
                            </h3>
                            <p className='whyP'>There’s always a Zoomcar near you</p>

                        </div>
                        <div className='whydiv4' data-aos="fade-up" data-aos-delay="900">

                            <img className='Wicon' src={convinent} alt='img1' />

                            <h3 className='whyH'>Convenient
                            </h3>
                            <p className='whyP'>From Hatchbacks to SUVs, choose from 25,000+ cars</p>

                        </div>
                        <div className='whydiv4' data-aos="fade-up" data-aos-delay="1300">

                            <img className='Wicon' src={Secure} alt='img1' />
                            <h3 className='whyH'>Secure
                            </h3>
                            <p className='whyP'>Pay 0 security deposit, get unlimited KMs</p>

                        </div>
                    </div>

                </div>
                <h3 className='carcollectionH'>CAR'S COLLECTION</h3>
                <div data-aos="fade-up" className="Cardiv">

                    {totalcars.slice(0,3).map((item) => {
                        return (
                            <div class="Carcard" >
                                <div class="card-body">
                                    <img src={item.img1} alt="BMW UX" class="car-image" />
                                </div>
                                <div class="card-footer">
                                    <div class="car-details">
                                        <span class="car-name">{item.model}  {item.brand}</span>
                                        <span class="car-price">₹{item.hourlyRate}/perHours</span>
                                    </div>
                                    <div class="car-action">
                                        <span>Details</span>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                    }

                </div>
            </div>


            {/* Review */}
            <h2 className='reviewhead' data-aos="zoom-out-up" data-aos-delay="100"  >What Our Clients Say About Us</h2>
            <div className='reviewdiv'>
                <div className='review3' data-aos="fade-right" data-aos-delay="300"  >


                    <img className='reviewimg' src={user} alt='img' />
                    <h3 className='whyH'>Arvind, Bengaluru  </h3>
                    <img src={correct} className='Whycoma' />
                    <p className='whyP'>Flattered with availability of well maintained cars</p>
                </div>
                <div className='review3' data-aos="fade-up" data-aos-delay="500">
                    <img className='reviewimg' src={user} alt='img' />
                    <h3 className='whyH'>Himanshu, Hyderabad</h3>
                    <img src={correct} className='Whycoma' />
                    <p className='whyP'>Booked a car for a family trip which was very comfortable and in great condition</p>
                </div>
                <div className='review3' data-aos="fade-left" data-aos-delay="700">
                    <img className='reviewimg' src={user} alt='img' />
                    <h3 className='whyH'>Gaurav, Delhi </h3>
                    <img src={correct} className='Whycoma' />
                    <p className='whyP'>XUV with unlimited kms, very happy with Zoomcar's service</p>
                </div>
            </div>
            < Footer />

        </>

    )
}