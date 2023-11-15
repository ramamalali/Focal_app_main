
function Step2(props) {
    function handleInputValue(e) {
        const target = e.target;
        const { name, value } = target;
        props.setInputValues(element => ({ ...props.InputValues, [name]: value }));
    }

    return (
        <div>
            <div className="Ah-container">
                <div className="Ah-container-white">
                    <div className="Ah-titles">
                        <p>Contact Information</p>
                    </div>
                    <form action="">
                        <div className="row">
                            <div className="col-lg-6 col-sm-12 d-flex flex-column mb-2">
                                <label className='mb-1 star'>Phone Number</label>
                                <input
                                    className="Ah-inputs"
                                    type="tel"
                                    pattern='[0-9]*'
                                    onChange={handleInputValue}
                                    name='Phone_Number'
                                    value={props.InputValues?.Phone_Number ?? ''}
                                    placeholder='+963-'

                                />
                            </div>
                            <div className="col-lg-6 col-sm-12 d-flex flex-column mb-2">
                                <label className='mb-1 star'>Company Website</label>
                                <input
                                    className="Ah-inputs"
                                    type="text"
                                    name='Company_Website'
                                    value={props.InputValues?.Company_Website ?? ''}
                                    onChange={handleInputValue}
                                    placeholder='Example: www.focal-x.com'

                                />
                            </div>
                            <div className="col-lg-6 col-sm-12 d-flex flex-column mb-2">
                                <label className='mb-1 star'>Facebook Account</label>
                                <input
                                    className="Ah-inputs"
                                    type="email"
                                    name='Facebook_Account'
                                    placeholder='Example: @taplin_33'
                                    onChange={handleInputValue}
                                    value={props.InputValues?.Facebook_Account ?? ''}
                                />
                            </div>
                            <div className='col-lg-6 col-sm-12 d-flex flex-column mb-2'>
                                <label className='mb-1 star'>Behance Account</label>
                                <input
                                    className="Ah-inputs"
                                    type="email"
                                    name='Behance_Account'
                                    placeholder='Example: @taplin_33'
                                    onChange={handleInputValue}
                                    value={props.InputValues?.Behance_Account ?? ''}
                                />
                            </div>
                            <div className="col-lg-6 col-sm-12 d-flex flex-column mb-2">
                                <label className='mb-1 star'>Linked-in Account</label>
                                <input
                                    className="Ah-inputs"
                                    type="email"
                                    name='Linked_in_Account'
                                    value={props.InputValues?.Linked_in_Account ?? ''}
                                    placeholder='Example: @taplin_33 '
                                    onChange={handleInputValue}
                                />
                            </div>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default Step2