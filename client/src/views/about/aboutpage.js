import DefaultLayout from "../../components/DefaultLayout/Navbar";
import './aboutpage.css'

import Aboutpage2 from "./aboutcar2.png"
import cartypes from "./cartypesicon.png"
import multiplecars from "./multiplecars.png"
import journey from "./safejourney.png"
import cutomer from "./customer.png"

import typecars from "./tickcar.png"
import support from "./support.png"
import driver from "./driver.png"
import App from "../../components/Footer/footer";

export default function Aboutpage() {

    return (
        <>
            <DefaultLayout />

            <div class="imgmain">
                <div class=" imgdivcolor">
                    <div ><h2 className="colortext">A Few Words<br /> about us</h2></div>
                </div>
            </div>
            <h1 style={{ fontWeight: "700", fontSize: "50px", marginTop: "15px", textAlign: "center" }}>About <span className="aboutlogo"> Car Rental</span></h1>
            <div className="aboutd2">
                <div className="about2img" >
                    <div className="aboutcar2bg">
                        <img className="aboutcar2" src={Aboutpage2} alt="car img" />
                    </div>
                </div>

                <div className="about2text">

                    <h4 >Comfortable, Safe, and Affordable Cars in India
                    </h4>
                    <p style={{ color: "black", fontSize: "20px" }}>we are committed to providing the best car rental service that suits your needs. Whether for business or leisure, our fleet of high-quality vehicles ensures a comfortable and enjoyable journey. With affordable rental rates, you can enjoy the convenience of having your own transportation without having to spend a lot of money. Safety is our top priority. Our vehicles are maintained to the highest standards to ensure your peace of mind. Explore the beauty of Solo City and its surroundings with joy with Dampit Trans Solo car rental services.</p>
                </div>

            </div>

            <div className="iconsdiv">
                <div className="icon4">
                    <img className="iconstyle" src={cartypes} alt="icns" />
                    <div >
                        <h3 className="iconnum">20+</h3>
                        <p className="iconp">car <br /> types</p>
                    </div>
                </div>

                <div className="icon4">
                    <img className="iconstyle" src={multiplecars} alt="icns" />
                    <div>
                        <h3 className="iconnum">50+</h3>
                        <p className="iconp">Vehicle <br /> types</p>
                    </div>
                </div>
                <div className="icon4">
                    <img className="iconstyle" src={cutomer} alt="icns" />
                    <div>
                        <h3 className="iconnum">100+</h3>
                        <p className="iconp">Loyal <br /> Cutomers</p>
                    </div>
                </div>
                <div className="icon4">
                    <img className="iconstyle" src={journey} alt="icns" />
                    <div >
                        <h3 className="iconnum">500+</h3>
                        <p className="iconp">Happy <br /> journey</p>
                    </div>
                </div>
            </div>
            {/* plan trip*/}

            <div className="Htrip">
                <h5 >Plan your trip now</h5>
                <h3>Quick & easy car rental</h3>
            </div>

<div className="aboutdiv3rd">
            <div className="aboutdiv3">
                <div>
                    <div>
                        <div className="iconbg">
                            <img className="icon3" src={typecars} />
                        </div>
                    </div>
                    <div className="div3T">
                        <h6 >Various Types of Cars
                        </h6>
                        <p>With the various types of cars we provide, you can choose a car that suits your travel needs, so your trip will be more enjoyable.</p>
                    </div>
                </div>
            </div>

            <div className="aboutdiv3">
                <div>
                    <div>
                        <div className="iconbg">
                            <img className="icon3" src={support} />
                        </div>
                    </div>
                    <div  className="div3T">
                        <h6>Responsive Admin</h6>
                        <p>Find responsive and friendly customer service at Dampit Trans Solo, ready to assist you with all your questions and needs regarding your travel plans 24/7.</p>
                    </div>
                </div>
            </div>

            <div className="aboutdiv3">
                <div>
                    <div>
                        <div className="iconbg">
                            <img className="icon3" src={driver} />
                        </div>
                    </div>
                    <div className="div3T">
                        <h6>Experienced Driver</h6>
                        <p>Start your journey in peace and comfort with our experienced drivers who are ready to help you explore Solo City and the entire island of Java safely and comfortably.</p>
                    </div>
                </div>
            </div>
            </div>

            <div className="aboutlast">
        <h3>WE ARE READY TO TAKE YOUR CALL 24 HOURS, 7 DAYS!</h3>
        <h1>+91 99 9000 9000</h1>
            </div>

            <App />
        </>
    )
}