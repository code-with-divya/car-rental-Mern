

export default function Adminnavbar() {

    return (
        <nav className="mainNav">
        <div>
            <h2 className="logoname">Car Rental</h2>
        </div>
        <div className="divlist">
            <ul className="navlist">
                <li><a href="/admin">HOME</a></li>
                <li><a href="/addvehicle">Add Vehicles</a></li>
                <li><a href="/adminbookinghistory">Booking History</a></li>
                <li><a href="/manageusers">ManageUsers</a></li>
                <li><a href="" >Logout</a></li>
            </ul>
        </div>
    </nav>
    )
}