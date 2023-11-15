//import Section_Head from "./Section_Head"
import { Link } from "react-router-dom"
import { useState } from 'react'
import Icon_1 from '../images/Ellipse41.svg';
import Icon_2 from '../images/Ellipse41.svg';
import Card_Posts from "./Card_Posts";



const Posts = () => {
    const [border_1, setborder_1] = useState(false);
    const [border_2, setborder_2] = useState(false);
    const [border_3, setborder_3] = useState(false);
    const [border_4, setborder_4] = useState(false);
    if (border_1) {
        var Classs_1 = 'OS-Color-Link_1';
    } else {
        Classs_1 = '';
    }
    if (border_2) {
        var Classs_2 = 'OS-Color-Link_2';
    } else {
        Classs_2 = '';
    }
    if (border_3) {
        var Classs_3 = 'OS-Color-Link_3';
    } else {
        Classs_3 = '';
    }
    if (border_4) {
        var Classs_4 = 'OS-Color-Link_3';
    } else {
        Classs_4 = '';
    }
    return (
        <div>
            <div id="OS-posts-largescreen" className='container'>
                <div className="OS-Post-head">
                    <h2 className="OS-Post-title">My Posts</h2>
                    <p className="OS-Post-paragraphe w-75">
                        Find a new employee to be part of your company.
                        Add a post and manage it from here.
                    </p>
                    <Link to={'/Addjob'} className='OS-button-post mt-3'>Add New Job</Link>
                </div>
                {/* <Section_Head
                     title="My Posts"
                    paragraphe="Find a new employee to be part of your company.
                    Add a post and manage it from here."
                    content="Add New Job"
                />*/}
                <div className="row d-flex justify-content-center">
                    <div className="OS-Links-posts mt-5">
                        <ul className="OS-Ul-Links">
                            <li className="OS-Li-Links p-3 p-lg-4">
                                <Link
                                    onClick={() => {
                                        setborder_1(!border_1)
                                        setborder_2()
                                        setborder_3()
                                        setborder_4()
                                    }}
                                    className="OS-Links">
                                    <span className={Classs_1}>All</span>
                                    Posts</Link>
                            </li>
                            <li className="OS-Li-Links p-3 p-lg-4">
                                <Link
                                    onClick={() => {
                                        setborder_2(!border_2)
                                        setborder_1()
                                        setborder_3()
                                        setborder_4()
                                    }}
                                    className="OS-Links ">
                                    <span className={Classs_2}>Active</span>
                                    Posts</Link>
                            </li>
                            <li className="OS-Li-Links p-3 p-lg-4">
                                <Link
                                    onClick={() => {
                                        setborder_3(!border_3)
                                        setborder_1()
                                        setborder_2()
                                        setborder_4()
                                    }}
                                    className="OS-Links ">
                                    <span className={Classs_3}>Waiting</span>
                                    Posts</Link>
                            </li>
                            <li className="OS-Li-Links p-3 p-lg-4">
                                <Link
                                    onClick={() => {
                                        setborder_4(!border_4)
                                        setborder_1()
                                        setborder_2()
                                        setborder_3()
                                    }}
                                    className="OS-Links ">
                                    <span className={Classs_4}>Closed</span>
                                    Posts</Link>
                            </li>
                        </ul>
                    </div>

                    <Card_Posts
                        img_1={Icon_2}
                        title="UI Designer"
                        span_1="Active"
                        span_3="02:30 pm 2022/08/23"
                        counter_1="155"
                        paragraphe_1="Views"
                        paragraphe_2="candidates"
                        paragraphe_3="Cancel"
                    />

                    <Card_Posts
                        img_2={Icon_1}
                        title="Financial Accountant"
                        span_1="Closed"
                        span_3="02:30 pm 2022/08/23"
                        description=" Employee No. 10 has been hired"
                    />
                </div>
            </div>
        </div>

    )
}

export default Posts