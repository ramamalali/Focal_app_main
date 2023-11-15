import Section_Head from "./Section_Head"
import photo_1 from '.././images/Rectangle 138.png'
import photo_2 from '.././images/Rectangle 139.png'
import Logo_2 from '.././images/taplinCompany.svg'
import Card_Blogs from "./Card_Blogs"
import Vector_1 from '.././images/Vector_1.svg'
import Vector from '.././images/Vector.svg'
import { Link } from "react-router-dom"
import { useState } from 'react'

const Blogs = () => {
    const [border_11, setborder_11] = useState(false);
    const [border_22, setborder_22] = useState(false);
    if (border_11) {
        var Classs_11 = 'OS-Color-Link_1';
    } else {
        Classs_11 = '';
    }
    if (border_22) {
        var Classs_22 = 'OS-Color-Link_2';
    } else {
        Classs_22 = '';
    }
    return (
        <div>
            <div id="OS-plogs-largescreen" className="container">
                <Section_Head
                    title="My Blogs"
                    paragraphe="One blog brings together a lot ....
                    Be a part of this blog and write your opinions."
                    content="Add Blog"
                />
                <div>
                    <div className="input-container mt-5">
                        <div className="custom-input-container">
                            <input type="text" placeholder="Search" className="custom-input" />
                            <input type="text" className="hidden-input" />
                        </div>
                    </div>
                    <div className="row  d-flex justify-content-center">                 
                    <div className="OS-Links-posts mt-5">
                        <ul className="OS-Ul-Links">
                           <li className="OS-Li-Links p-3 p-lg-4">
                                <Link
                                    onClick={() => {
                                        setborder_11(!border_11)
                                        setborder_22()                                     
                                    }}
                                    className="OS-Links">
                                    <span className={Classs_11}>Posted</span>
                                    Blogs</Link>
                            </li>
                            <li className="OS-Li-Links p-3 p-lg-4">
                                <Link
                                    onClick={() => {
                                        setborder_22(!border_22)
                                        setborder_11()                                    
                                    }}
                                    className="OS-Links ">
                                    <span className={Classs_22}>Draft</span>
                                    </Link>
                            </li>
                        </ul>
                    </div>
                         {/*************I NEED API FROM BACK-END ^_^************/}                
                        <Card_Blogs
                            Vector={Vector_1}
                            img={photo_1}
                            logo={Logo_2}
                            paragraphe="Understanding workflow interviews, one of the best 5-minute reality
                            checks from users"
                            span_1="TapLin Company" 
                            span_2="2022-12-12   03:35 pm" 
                            />
                        <Card_Blogs
                            Vector={Vector}
                            img={photo_2}
                            logo={Logo_2}
                            paragraphe="Understanding workflow interviews, one of the best 5-minute reality
                            checks from users"
                            span_1="TapLin Company" 
                            span_2="2022-12-12   03:35 pm" 
                            />
                    </div>
                </div>
            </div>
        </div>
    );
}



export default Blogs