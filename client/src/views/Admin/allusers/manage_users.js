import axios from "axios"
import { useEffect, useState } from "react"
import Adminnavbar from "../../../components/adminNavbar/adminnavbar"


export default function ManageUsers() {
    const [allusers, setAllusers] = useState([])

    const getallusers = async () => {
        const userdata = await axios.get("http://localhost:9999/user/getusers")
        console.log(userdata.data.data)
        setAllusers(userdata.data.data)
    }

    useEffect(() => {
        getallusers()
    }, [])

    return (
        <>
        <Adminnavbar/>
        <h3 className="adminpagehead">ALL COSTUMERS</h3>
            <div className='tablediv'>
                <table>
                    <tr>
                        <th>NAME</th>
                        <th>EMAIL</th>
                        <th>PASSWORD</th>
                        <th>Created At</th>
                        
                    </tr>
                    {allusers.map((user) => {
                        
                        return (
                            <tr>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.password}</td>
                                <td>{user.createdAt}</td>
                            </tr>


                        )
                    }
                    )}
                </table >

            </div>



        </>
    )
}
