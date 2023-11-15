
function InputOne(props) {
    function handleValue(e) {
        const target = e.target;
        const { name, value } = target;
        props.setInputValues1(element => ({ ...props.InputValues1, [name]: value }));
    }
    // ************** Not Working **************
    function incExperince(e) {
        e.preventDefault()
        props.InputValues1.experince = props.InputValues1.experince + 1
    }
    // ************** Not Working **************
   
    const buttons = [
        { name: 'Male', color: 'black' },
        { name: 'Female', color: 'black' },
        { name: 'No Profrence', color: 'black' },
    ]

    return (
        <div>
            <div className="Ah-container">
                <div className="Ah-container-white">
                    <div className="Ah-title">
                        <h1>Employee Specification</h1>
                    </div>
                    <form action="">
                        <div className="row">
                            <div className="col-lg-6 col-sm-12 d-flex flex-column">
                                <label className='mb-1 star'>Job Title</label>
                                <input
                                    className="Ah-AddJob-input"
                                    id='jobtitle'
                                    type="text"
                                    value={props.InputValues1?.jobTitle ?? ''}
                                    placeholder='Example: Art Director'
                                    name='jobTitle'
                                    onChange={handleValue}
                                />
                            </div>
                            <div className=' col-lg-6 col-sm-12 d-flex flex-column'>
                                <label htmlForm="jobrole" className="star mb-2">Job Role</label>
                                <select
                                    className="OS-AddJob-Select"
                                    name="jobRole"
                                    value={props.InputValues1?.jobRole ?? ''}
                                    onChange={handleValue}
                                    id="jobrole"
                                >
                                    <option selected disabled value="1">Select</option>
                                    <option value="API">From API</option>
                                    <option value="osama">osama</option>
                                    <option value="API">From API</option>
                                </select>
                            </div>
                            <div className=' col-lg-6 col-sm-12 d-flex flex-column'>
                                <label htmlForm="joblevel" className="star mb-2">Job Level </label>
                                <select
                                    name="joblevel"
                                    className="OS-AddJob-Select"
                                    id="joblevel"
                                    value={props.InputValues1?.joblevel ?? ''}
                                    onChange={handleValue}>
                                    <option selected disabled value="">Select</option>
                                    <option value="Junior">Junior</option>
                                    <option value="Mid Level">Mid Level</option>
                                    <option value="Senior">Senior</option>
                                    <option value="Expert">Expert</option>
                                </select>
                            </div>
                            <div className=' col-lg-6 col-sm-12 d-flex flex-column'>
                                <label htmlForm="Experince" className="star mb-2">Job Experince </label>
                                <div className='position-relative'>
                                   
                                    <input
                                        className="Ah-AddJob-input"
                                        id='Experince'
                                        type="number"
                                        name='Experince'
                                        value={props.InputValues1?.Experince ?? ''}
                                        placeholder='Experince'
                                        onChange={handleValue}
                                    />
                                   
                                </div>
                            </div>
                            <div className=' col-lg-6 col-sm-12 d-flex flex-column'>
                                <label htmlForm="educationlevel" className="star mb-2">Education Level </label>
                                <select
                                    className="OS-AddJob-Select"
                                    name="educationlevel"
                                    id="educationlevel"
                                    value={props.InputValues1?.educationlevel ?? ''}
                                    onChange={handleValue}
                                >
                                    <option selected disabled value="">Select</option>
                                    <option value="baccalaureate">Baccalaureate(School)</option>
                                    <option value="institute">Institute</option>
                                    <option value="bachelor">Bachelor</option>
                                    <option value="master">Master</option>
                                    <option value="doctorate">Doctorate</option>
                                </select>
                            </div>
                            <div className=' col-lg-6 col-sm-12 d-flex flex-column'>
                                <label htmlForm="Languages" className="star mb-2">Languages</label>
                                <select
                                    className="OS-AddJob-Select"
                                    name="Languages"
                                    id="Languages"
                                    value={props.InputValues1?.Languages ?? ''}
                                    onChange={handleValue}
                                >
                                    <option selected disabled value="">Select</option>
                                    <option value="En">English</option>
                                    <option value="Ar">Arabic</option>

                                </select>
                            </div>
                            <div className=' col-lg-6 col-sm-12 d-flex flex-column'>
                                <label htmlForm="agerange" className="star mb-2">Age Range </label>
                                <select 
                                    className="OS-AddJob-Select"
                                    name="agerange"
                                    id="agerange"
                                    value={props.InputValues1?.agerange ?? ''}
                                    onChange={handleValue}
                                >
                                    <option selected disabled value="">Select</option>
                                    <option value="15to20">15-20</option>
                                    <option value="20to25">20-25</option>
                                    <option value="25to30">25-30</option>
                                    <option value="30to35">30-35</option>
                                    <option value="35to40">35-40</option>
                                    <option value="40to45">40-45</option>
                                    <option value="+45">+45</option>
                                </select>
                            </div>
                            <div className=' col-lg-6 col-sm-12 d-flex flex-column'>
                                <label className='mb-1 star'>Gender</label>
                                <div className='radio-buttons-container'>
                                    {buttons.map((button, index) => (
                                        <label key={index}>
                                            <input 
                                                className="Ah-AddJob-input"
                                                type="radio"
                                                name="gender"
                                                value={button.name}                                            
                                                onChange={handleValue}
                                            />
                                            <span style={{ color: button.color }} className='ms-1'>{button.name}</span>
                                        </label>
                                    ))}
                                </div>                              
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default InputOne