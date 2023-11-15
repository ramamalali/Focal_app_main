import React from 'react'
import Card_Information from './Card_Information'
import { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2'

const Information = (props) => {
    /***********************API **************************/
    ////////My Token & userId ( comming from team 1 by localstorage or cookies )
    localStorage.setItem('user_id', 2);
    localStorage.setItem('access_token', "2|nOrFiMCPVUloCNt1MiwJV0gweefwwmG2Kqs4NQjic5a187d0")
    const user_id = localStorage.getItem('user_id');
    const token = localStorage.getItem('access_token'); 
    const url = "http://127.0.0.1:8000/api";
  
    ////// BusinessOwner Api
    const [businessOwners, setBusinessOwners] = useState([])
    //////////// UserInfo Api
    const [userInfo, setUserInfo] = useState([])
    //// Get cities
    const [cities, setCities] = useState([]);

    ///////////////////Axios GET BusinsessOwner Api
    useEffect(() => {
        axios.request({
            headers: {
                Authorization: `Bearer ${token}`
            },
            url: `${url}/businessOwners/${user_id}`
        }).then(response => {
            setBusinessOwners(response.data.data)
        });
    }, [])

    /////////////Axios GET UserInfo Api
    useEffect(() => {
        axios.request({
            headers: {
                Authorization: `Bearer ${token}`
            },
            url: `${url}/user_info/${user_id}`
        }).then(response => {
            setUserInfo(response.data.data)
        });
    }, [])

    ////////////////////Axios Get cities
    useEffect(() => {
        axios.request({
            headers: {
                Authorization: `Bearer ${token}`
            },
            url: `${url}/city`
        }).then(response => {
            setCities(response.data.data)
        });
    }, [])

    /*******************PUT (BusinessOwner & userInformation ) Requests***********************/
    function handlePutBusinessOwner() {
        // Put (BusinessOwner) request    
        const paramsBusinessOwner = {
            company_name: businessOwners.company_name,
            company_field: businessOwners.company_field,
            company_size: businessOwners.company_size,
            year_founded: businessOwners.year_founded,
            responsible_job_role: businessOwners.responsible_job_role,
            company_number: businessOwners.company_number,
            website: businessOwners.website
        }
        const headers = {
            'Accept': 'application/json',
            'Authorization': `Bearer ${token}`

        };
        axios.put(`${url}/businessOwners/${user_id}`, paramsBusinessOwner, { headers })
        editUserInfo()
    }

    function editUserInfo() {
        const token = '2|nOrFiMCPVUloCNt1MiwJV0gweefwwmG2Kqs4NQjic5a187d0'
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
        const dataToSend = {
            full_name: userInfo.full_name,
            phone_number: userInfo.phone_number,
            facebook_account: userInfo.facebook_account,
            linked_in_account: userInfo.linked_in_account,
            behanc_account: userInfo.behanc_account,
            city_id: parseInt(userInfo.city_id)
        }
        /*  const userData = {...userInfo}
          if(Number.isNaN(parseInt(userData.city_id,10))){
            const city = cities.find((city)=> city.city_name === userData.city_id)      
            if(city){
               userData.city_id = city.id
            }
          }else{
              userData.city_id = +userData.city_id
          }  */
        // const {id, ...dataToSend} = userInfo       

        axios.post(`${url}/user_info/${user_id}`, dataToSend, { headers })
            .then(res => console.log(res))
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Your Edit has been saved",
            showConfirmButton: false,
            timer: 1500
        });
    }

    return (
        <>
            <div>
                <div id='OS-information-largescreen' className='container'>
                    <Card_Information
                        businessOwners={businessOwners}
                        setBusinessOwners={setBusinessOwners}
                        userInfo={userInfo}
                        setUserInfo={setUserInfo}
                        cities={cities}
                        setCities={setCities}
                        title="Basic Information"
                        margin_1="mt-5"
                        paragraphe_1="Company Name"
                        paragraphe_2={businessOwners.company_name}
                        paragraphe_3="City"
                        paragraphe_5="Year Founded"
                        paragraphe_6={businessOwners.year_founded}
                        paragraphe_7="Company Fields"
                        paragraphe_8={businessOwners.company_field}
                        paragraphe_9="Company Size"
                        paragraphe_10={businessOwners.company_size}
                    />
                    <Card_Information
                        businessOwners={businessOwners}
                        setBusinessOwners={setBusinessOwners}
                        userInfo={userInfo}
                        setUserInfo={setUserInfo}
                        cities={cities}
                        setCities={setCities}
                        title="Contact Information"
                        margin_2="my-3"
                        paragraphe_11="Phone"
                        paragraphe_22={userInfo.phone_number}
                        paragraphe_33="Facebook"
                        paragraphe_44={userInfo.facebook_account}
                        paragraphe_55="Linked in"
                        paragraphe_66={userInfo.linked_in_account}
                        paragraphe_77="Company Website"
                        paragraphe_88={businessOwners.website}
                        paragraphe_99="Behance"
                        paragraphe_100={userInfo.behanc_account}
                    />
                </div>
                <div className="col pb-5">
                    <button onClick={() => { handlePutBusinessOwner() }} className="OS-button-card">Save Information</button>
                </div>
            </div>
        </>
    )
}

export default Information