function InputTwo(props) {

    const buttons = [
        { name: 'Yes, I need help' },
        { name: 'No, Thanks', color: 'black' },
    ];
    function handleValue(e) {
        const target = e.target;
        const { name, value } = target;
        props.setInputValues2(element => ({ ...props.InputValues2, [name]: value }));
    }
    return (
        <div>
            <div className='SM-container'>
                <div className="SM-container-white">
                    <div className="Ah-title">
                        <h1 className='mb-3'>Company business details</h1>
                        <h6 className="OS-AddJob-h6">Select vacancy information.</h6>
                    </div>
                    <form action="">
                        <div className='row'>
                            <div className=' col-lg-6 col-sm-12 d-flex flex-column'>
                                <label htmlForm="JobTypes" className="star mb-2">Job Types </label>
                                <select                                  
                                    className="OS-AddJob-Select"
                                    name="job_type" 
                                    value={props.InputValues2?.job_type ?? ''} 
                                    onChange={handleValue} 
                                    id="JobTypes">
                                    <option selected disabled value="">Select</option>
                                    <option value="FullTime">Full Time</option>
                                    <option value="PartTime">Part Time</option>
                                </select>
                            </div>
                            <div className=' col-lg-6 col-sm-12 d-flex flex-column'>
                                <label htmlForm="City" className="star mb-2">City </label>
                                <select 
                                    name="city_id" 
                                    value={props.InputValues2?.city_id ?? ''} 
                                    onChange={handleValue} id="City"
                                    className="OS-AddJob-Select"
                                    >
                                    <option selected disabled value="">Select</option>
                                    <option value="Damascus">Damascus</option>
                                    <option value="Homs">Homs</option>
                                    <option value="Hama">Hama</option>
                                    <option value="Aleppo">Aleppo</option>
                                    <option value="Raqqa">Raqqa</option>
                                    <option value="Daraa">Daraa</option>
                                    <option value="Deir ez-Zor">Deir ez-Zor</option>
                                    <option value="Al-Hasakah">Al-Hasakah</option>
                                    <option value="Latakia">Latakia</option>
                                    <option value="Quneitra">Quneitra</option>
                                    <option value="Rif Dimashq">Rif Dimashq</option>
                                    <option value="Tartus">Tartus</option>
                                    <option value="As-Suwayda">As-Suwayda</option>
                                    <option value="Idlib">Idlib</option>
                                    <option value="Outside Syria">Outside Syria</option>
                                </select>
                            </div>
                            <div className="col-lg-12 col-sm-12 d-flex flex-column">
                                <label className='mb-1 star'>Address</label>
                                <input className='SM-Address Ah-AddJob-input'                                 
                                    type="text"
                                    value={props.InputValues2?.address ?? ''}
                                    name='address'
                                    placeholder='Example: Lattakia near Antar station...'
                                    onChange={handleValue}
                                />
                            </div>
                            <div className=' col-lg-6 col-sm-12 d-flex flex-column'>
                                <label htmlForm="WorkHours" className="star mb-2">WorkHours </label>
                                <select 
                                    name="work_hour" 
                                    value={props.InputValues2?.work_hour ?? ''} 
                                    onChange={handleValue} id="WorkHours"
                                    className="OS-AddJob-Select"
                                    >
                                    <option selected value="">Select</option>
                                    <option value="9 to 4">09:00 - 16:00</option>
                                </select>
                            </div>
                            <div className=' col-lg-6 col-sm-12 d-flex flex-column'>
                                <label htmlForm="SalaryRange" className="star mb-2">SalaryRange </label>
                                <select 
                                   name="salary_range" 
                                   value={props.InputValues2?.salary_range ?? ''} 
                                   onChange={handleValue} id="SalaryRange"
                                   className="OS-AddJob-Select"
                                   >
                                    <option selected disabled value="">Select</option>
                                    <option value="1 to 2">1 Million - 2 Millions</option>
                                    <option value="2 to 3">2 Million - 3 Millions</option>
                                    <option value="3 to 4">3 Million - 4 Millions</option>
                                </select>
                            </div>
                        </div>
                    </form>
                    <div className='SM-paragraph '>
                        <p>Would you like us to help you manage interviews and provide advice according to our extensive experience within the Human Resources Management Department?</p>
                    </div>
                    <div className='radio-buttons-container'>
                        {buttons.map((button, index) => (
                            <label  key={index}>
                                <input 
                                    className="Ah-AddJob-input"
                                    type="radio"
                                    value={button.name}
                                    name='help'                                  
                                    onChange={handleValue}
                                />
                                <span style={{ color: button.color }} className='ms-1'>{button.name}</span>
                            </label>
                        ))}
                    </div>
                    <div className='SM-Text'>
                        <p>Note: Activating the interview management service will increase the cost of publishing the job advertisement by 10,000 SYP</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InputTwo

