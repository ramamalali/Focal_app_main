
function Step1(props) {
    function handleValue(e) {
        const target = e.target;
        const { name, value } = target;
        props.setValue(element => ({ ...props.values, [name]: value }));
    }
    return (
        <div>
            <div className="Ah-container">
                <div className="Ah-container-white">
                    <div className="Ah-titles">
                        <p>Business Information</p>
                    </div>
                    <form action="">
                        <div className="row">
                            <div className="col-lg-6 col-sm-12 d-flex flex-column mb-2">
                                <label className='mb-1 star'>Company Name</label>
                                <input
                                    className="Ah-inputs"
                                    type="text"
                                    value={props.values?.Company_Name ?? ''}
                                    name='Company_Name'
                                    placeholder='Example: focal X Agency'
                                    onChange={handleValue}
                                />
                            </div>
                            <div className='col-lg-6 col-sm-12 d-flex flex-column mb-2'>
                                <label className='mb-1 star'>Company Fields </label>
                                <input
                                    className="Ah-inputs"
                                    type="text"
                                    value={props.values?.Company_Fields ?? ''}
                                    name='Company_Fields'
                                    placeholder='Example: SoftWare Servives'
                                    onChange={handleValue}

                                />
                            </div>
                            <div className=' col-lg-6 col-sm-12 d-flex flex-column mb-2 '>
                                <label for="city" className="star mb-2">City </label>
                                <select id="city" name='city' onChange={handleValue} >
                                    <option selected value="">Select</option>
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
                            <div className='col-lg-6 col-sm-12 d-flex flex-column mb-2'>
                                <label className='mb-1 star'>Company Size</label>
                                <input
                                    className="Ah-inputs"
                                    type="text"
                                    placeholder='Example: 150 Employees'
                                    name='Company_Size'
                                    value={props.values?.Company_Size ?? ''}
                                    onChange={handleValue}
                                />
                            </div>
                            <div className='col-lg-6 col-sm-12 d-flex flex-column mb-2'>
                                <label className='mb-1 star'>Year Founded</label>
                                <input
                                    className="Ah-inputs"
                                    type="date"
                                    onChange={handleValue}
                                    name='Year_Founded'
                                    value={props.values?.Year_Founded ?? ''}
                                />
                            </div>
                            <div class="col-lg-6 col-sm-12 d-flex flex-column mb-2 position-relative">
                                <label className="star">Company Logo</label>
                                <input
                                    type="text"
                                    className="Ah-custom-input"
                                    readonly
                                />
                                <input
                                    className="Ah-hidden-input"
                                    type="file"                               
                                    onChange={handleValue}
                                    id="file-upload"
                                    name='Company_Logo'
                                    value={props.values?.Company_Logo ?? ''}
                                />
                            </div>
                        </div>
                    </form>
                    <div className="Ah-titles  mt-3">
                        <p>Responsible Person Information</p>
                    </div>
                    <form action="">
                        <div className="row">
                            <div className='col-lg-6 col-sm-12 d-flex flex-column mb-2'>
                                <label className='mb-1 star '>Full Name </label>
                                <input
                                    className="Ah-inputs"
                                    type="text"
                                    placeholder='Example: Osama Ibrahem Faroun'
                                    onChange={handleValue}
                                    name='Full_Name'
                                    value={props.values?.Full_Name ?? ''}
                                />
                            </div>
                            <div className='col-lg-6 col-sm-12 d-flex flex-column mb-2'>
                                <label className='mb-1 star '>Job Role</label>
                                <input
                                    className="Ah-inputs"
                                    type="text"
                                    placeholder='Example: 150 Employees'
                                    onChange={handleValue}
                                    name='Job_Role'
                                    value={props.values?.Job_Role ?? ''}
                                />
                            </div>
                            <div className='col-lg-6 col-sm-12 d-flex flex-column mb-2'>
                                <label className='mb-1 star '>Contact Number </label>
                                <input
                                    className="Ah-inputs"
                                    type="tel"
                                    pattern="[0-9]*"
                                    placeholder='+963'
                                    onChange={handleValue}
                                    name='Contact_Number'
                                    value={props.values?.Contact_Number ?? ''}

                                />
                            </div>

                        </div>
                    </form>
                </div>
            </div>
        </div>
    )


}





export default Step1