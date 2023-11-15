import { useState } from 'react'
import InputOne from '.././components/InputOne'
import InputThree from '.././components/InputThree'
import InputTow from '.././components/InputTwo'
import './AddJob.css'
/*import Footer from '../../../../src/components/COPMPO/Footer/Footer'
import AllNav from '../../../../src/components/COPMPO/NavBarAll/NavBar'*/

function AddJob() {
    const [InputValues1, setInputValues1] = useState({});
    /************** FOR THE Secound FORM*****************/
    const [InputValues2, setInputValues2] = useState({});
    /************** FOR THE Third FORM*****************/
    const [InputValues3, setInputValues3] = useState({});
    function FormValue() {
        /************ TO SEND DATA IN BDCLICK NEXT BUTTON***************/
        console.log(InputValues1);
        console.log(InputValues2);
        console.log(InputValues3);
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