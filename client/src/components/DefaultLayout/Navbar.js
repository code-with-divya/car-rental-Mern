import "./defaultlayout.css"
import { useNavigate } from 'react-router-dom';

export default function DefaultLayout(props) {

    const userD = JSON.parse(localStorage.getItem('userdata'));
    console.log(userD)
    const navigate = useNavigate()
       
    const handleLogout = () => {
        localStorage.clear()
        navigate('/login');
    };

    return (
        <>
        <h2 className="logoname" >Car Rental</h2>
            <nav className="mainNav">
                <div>
                    {/* <h2 className="username" >Welcome, {userD.name}</h2> */}
                </div>
                <div className="divlist">
                    <ul className="navlist">
                        <li><a className="navlink" href="/home">HOME</a></li>
                        <li><a className="navlink"  href="/home/carspage">CARS</a></li>
                        <li><a className="navlink"  href="/about">ABOUT</a></li>
                        <li><a className="navlink"  href="/userbookinghistory">BOOKING</a></li>
                        <li><a className="navlink"  href="" onClick={handleLogout}>LOGOUT</a></li>
                    </ul>
                </div>
            </nav>
        </>
    )
}