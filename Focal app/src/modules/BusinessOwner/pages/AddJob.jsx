import { useState } from 'react'
import InputOne from '.././components/InputOne'
import InputThree from '.././components/InputThree'
import InputTow from '.././components/InputTwo'
import './AddJob.css'
import axios from 'axios'

/*import Footer from '../../../../src/components/COPMPO/Footer/Footer'
import AllNav from '../../../../src/components/COPMPO/NavBarAll/NavBar'*/

function AddJob() {
    const [InputValues1, setInputValues1] = useState([]);
    /************** FOR THE Secound FORM*****************/
    const [InputValues2, setInputValues2] = useState([]);
    /************** FOR THE Third FORM*****************/
    const [InputValues3, setInputValues3] = useState([]);
    function FormValue() {
        /************ TO SEND DATA IN BDCLICK NEXT BUTTON***************/
        const token = "2|nOrFiMCPVUloCNt1MiwJV0gweefwwmG2Kqs4NQjic5a187d0"
        const data = {
            job_title: InputValues1.job_title,
            job_role: InputValues1.job_role,
            job_level: InputValues1.job_level,
            experience: InputValues1.experience,
            education_level: InputValues1.education_level,
            language: InputValues1.language,
            age_range: InputValues1.age_range,
            gender: InputValues1.gender,
            job_type: InputValues2.job_type,
            address: InputValues2.address,
            work_hour: InputValues2.work_hour,
            salary_range: InputValues2.salary_range,
            help: InputValues2.help,
            job_discription: InputValues3.job_discription,
            job_requirement: InputValues3.job_requirement,
            city_id: InputValues2.city_id
        }
        const headers = {
            'Accept': 'application/json',
            //'Authorization': `Bearer ${token}`
        }

        axios.post("http://127.0.0.1:8000/api/jobs", data, headers)
        //console.log(InputValues1);
        //console.log(InputValues2);
        //console.log(InputValues3);
        setInputValues1({});
        setInputValues2({});
        setInputValues3({});
    }

    return (
        <>
            <div className='Ah-add-jobs'>
                <div className="Ah-title-page text-center mt-2">
                    <h1>Add Job</h1>
                    <p>
                        Find a new employee to be part of your company...
                        Add a post with the requirements you need.
                    </p>
                </div>
                <InputOne
                    setInputValues1={setInputValues1}
                    InputValues1={InputValues1}
                />
                <InputTow
                    setInputValues2={setInputValues2}
                    InputValues2={InputValues2}
                />
                <InputThree
                    setInputValues3={setInputValues3}
                    InputValues3={InputValues3}
                />
                <div className='posted'>
                    <button className='posted-button mb-5' onClick={FormValue}>Posted</button>
                </div>
            </div>
            {/*<footer>
                <Footer />
           </footer>*/}
        </>
    )
}

export default AddJob