import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import Button_general from './Button_general'
const SideBar = () => {
    function handleImage(e) {
        var file = e.target.files[0];
        const url = URL.createObjectURL(file)
        setImage(url);

    }
   
    const [Img, setImage] = useState();
    const [color_border_1, setcolor_border_1] = useState(false);
    const [color_border_2, setcolor_border_2] = useState(false);
    const [color_border_3, setcolor_border_3] = useState(false);
    if (color_border_1) {
        var Class_1 = 'OS-Color-Link_1';
    } else {
        Class_1 = '';
    }
    if (color_border_2) {
        var Class_2 = 'OS-Color-Link_2';
    } else {
        Class_2 = '';
    }
    if (color_border_3) {
        var Class_3 = 'OS-Color-Link_3';
    } else {
        Class_3 = '';
    }

    return (
        <div className='OS-sidebar p-2 mt-4'>
            <div className='m-2 d-flex flex-column align-items-center'>
                <div className='OS-border my-2'>                 
                    <img src={Img} className='img-fluid rounded-circle' alt="this is photo" />                  
                    {/*<img src={taplainCompany} className='img-fluid rounded-circle' alt="this is photo" />
                    <img src={Group} className='img-fluid OSAMA-POSITION'  alt="this is photo"/>*/}
                    <div class="input-containers  OSAMA-POSITION">
                        <div class="custom-input-containers">
                            <input  type="text" class="custom-inputs"/>
                            <input onChange={(e) => { handleImage(e) }}   type="file" id="file-upload" class="hidden-inputs"/>
                       </div>
                    </div>
                </div>
                <h2 className='OS-Title_1 my-2'>Taplin Company</h2>
                <p className='OS-paragraphe my-1'>Software Services</p>
                 <Button_general class="OS-button-information" content="Professional advice"/>
               
            </div>
            <hr className='OS-line text-dark' />
            <div className='list-group list-group-flush'>
                <Link
                    onClick={() => {
                        setcolor_border_1(!color_border_1)
                        setcolor_border_3()
                        setcolor_border_2()
                    }}
                    to='/information' className='OS-link-Secondary py-2'>
                    <span className={Class_1}>Infor</span>mation
                </Link>
                <Link
                    onClick={() => {
                        setcolor_border_2(!color_border_2)
                        setcolor_border_1()
                        setcolor_border_3()
                    }}
                    to='/Posts' className='OS-link-Secondary py-2'>
                    <span className={Class_2}>Posted</span> Jobs
                </Link>
                <Link
                    onClick={() => {
                        setcolor_border_3(!color_border_3)
                        setcolor_border_2()
                        setcolor_border_1()
                    }}
                    to='/Blogs' className='OS-link-Secondary py-2'>
                    <span className={Class_3}>Blogs</span>
                </Link>
                <hr className='OS-line text-dark mt-3' />
                <a style={{textDecoration:"none"}} href='#' className='py-2 mt-md-5 mt-0'>
                    <span className='OS-link-Secondary'>Logout</span>
                </a>
                <a href="#" className='OS-link-Secondary-link'>Terms and Conditions</a>
            </div>
        </div>
    )
}

export default SideBar