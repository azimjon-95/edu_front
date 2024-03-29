import React from 'react'
import { FaBars } from "react-icons/fa6";
import { IoMdNotificationsOutline } from "react-icons/io";
import './style.css'
import user from '../../assets/users/user.jpg';


const Navbar = ({ openSidebar, setOpenSidebar }) => {
    return (
        <div className="ActiveProductsNavbar" >

            <div className="ActiveYozuv">
                <h2>HEMIS Student</h2>
                <button onClick={() => setOpenSidebar(!openSidebar)}>
                    <FaBars />
                </button>
            </div>

            <div className="ActiveNavbar2">
                <div className="ActiveNavbar2Yozuv">
                    <div className="YozuvQisim1">
                        <p>O'zbekcha</p>
                    </div>
                    <div className="YozuvQisim2">
                        <p><IoMdNotificationsOutline /></p>
                    </div>
                    <div className="YozuvQisim3">
                        <div className="YozuvBorder">
                            <img src={user} alt="" />
                        </div>
                    </div>
                    <div className="YozuvQisim4">
                        <p>Sharipov A. N.</p>
                    </div>
                </div>
            </div>
        </ div>
    )
}

export default Navbar
