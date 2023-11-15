import React from 'react'
import SideBar from '../components/SideBar'
import './Mypage.css'
import { Outlet } from 'react-router-dom'

const Page = ({ Toggle }) => {

    return (
        <div id='OS-page' className='container-fluid'>
            <div className='row'>
                {Toggle && <div className="col-7 col-md-3 vh-100 position-fixed z-3 OS-large-screen">
                    <SideBar />
                </div>}
                {Toggle && <div className="col-7 col-md-3">
                </div>}
                <div className="col">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default Page
