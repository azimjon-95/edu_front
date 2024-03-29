import React from 'react';
import './style.css';
import { sidebardata } from '../../utils/sidebarData';
import { Link, useLocation } from "react-router-dom";
import { CiLogout } from "react-icons/ci";

console.log(sidebardata);

const Layout = ({ children, openSidebar }) => {
    const location = useLocation();

    return (
        <div className='Container_sidebar'>
            <div className={`side-Main ${openSidebar ? "side-MainNone" : "side-Main"}`}>
                {
                    sidebardata?.map((item, inx) => {
                        const isActive = location.pathname === item.path;
                        return (
                            <Link key={inx} to={item.path}>
                                <div className={`Side_rows ${isActive && "active"}`}>
                                    <i className={item.icon}></i>
                                    {openSidebar ? "" :
                                        <p>{item.title}</p>
                                    }
                                </div>
                            </Link>
                        )
                    }
                    )
                }
                <div className="Side_rows">
                    <CiLogout />
                    {openSidebar ? "" :
                        <p>Chiqish</p>
                    }
                </div>
            </div>
            <div className="Main_box">
                {children}
            </div>
        </div >
    )
}

export default Layout