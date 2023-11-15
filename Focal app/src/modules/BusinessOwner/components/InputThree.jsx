import { useRef, useState } from 'react'
import JoditEditor from 'jodit-react'

function InputThree(props) {
    const editor = useRef(null)
    const [content , setContent]= useState('')
    // ***************** Not Complete , i can not send value of Ckeditor *****************
    function handleValue(e) {
        const target = e.target;
        const { name, value } = target;
        props.setInputValues3({ ...props.InputValues3, [name]: value });
    }

   function handle(e) {
        const target = e.target;
        // const { value } = target;
        props.setInputValues3({ ...props.InputValues3, 'ckeditor': e.target});
    }
    return (
        <div>
            <div className="Ah-container">
                <div className="Ah-container-white">
                    <div className="Ah-title mb-3">
                        <h1 className='mb-3'>Job Information</h1>
                        <p>Additional information about the job vacancy.</p>
                    </div>
                    <div className=' d-flex flex-column mb-4'>
                        <label htmlFor="ckeditor" className='mb-3 star'>Job Description</label>
                        <JoditEditor 
                        className='ckeditor'
                        ref={editor}
                        value={props.InputValues3.content}
                        onChange={handle}
                        />
                    </div>
                    <div className=" d-flex flex-column  mb-4 ">
                        <label className='mb-3 star' for="jobrjobRequirementsole">Job Requirements</label>
                            <select  
                                className='OS-AddJob-Select'
                                name="job_requirement" 
                                value={props.InputValues3?.job_requirement ?? ''} 
                                onChange={handleValue} 
                                id="jobrole">
                                <option selected disabled value="">Select</option>
                                <option  value="IDK">IDK</option>
                            </select>
                    </div>
                    <div className="Ah-title mb-5 pt-3">
                        <h1 className='mb-4'>Questions for applicants</h1>
                        <p>Add some questions to make it easier for you to select an employee.</p>
                    </div>
                    <button className='Ah-Send-button' >Add Question</button>
                </div>
            </div>
        </div>
    )
}

export default InputThree