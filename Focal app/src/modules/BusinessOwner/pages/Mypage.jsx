import React, { useState } from 'react'
import SideBar from '../components/SideBar'
import './Mypage.css'
import { Outlet } from 'react-router-dom'



const MyPage = () => {

    const [SidebarCollaps, setsidebarCollaps] = useState(true);
    function handleSidebar() {
        setsidebarCollaps(!SidebarCollaps);
    }
//////////////////State Managment Api

    return (
        <>
            <div id='OS-page' className='container-fluid'>
                <>
                    {
                        SidebarCollaps ?
                            <i onClick={handleSidebar} className="bi bi-caret-left-square OS-Collapse-Sidebar"></i>
                            :
                            <i onClick={handleSidebar} className="bi bi-caret-right-square  OS-Collapse-Sidebar"></i>
                    }
                </>
                <div className='row'>
                    {SidebarCollaps && <div className="col-7 col-md-3  OS-large-screen">
                        <SideBar
                            SidebarCollaps={SidebarCollaps}
                            setsidebarCollaps={setsidebarCollaps}
                          
                        />
                    </div>}
                    <div className="col">
                       <Outlet/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MyPage
