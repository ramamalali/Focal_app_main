import Group_1 from '../images/Group_1.svg';
import { useState } from 'react';

const Card_Information = (props) => {
    let BroderClass = 'OS-AddBorder';
    const [Border, setBorder] = useState();
    let selectClass = "OS-AddJob-Selects"
    const [selectAddClass, setselectAddClass] = useState('OS-AddJob-Selectss');

    ///////////FOR API EDIT INFORMATION (BusinessOwner)
    function handleBusinessOwner(e) {
        const name = e.target.name;
        const value = e.target.value;
        props.setBusinessOwners(prev => ({ ...prev, [name]: value }))
    }
    ///////////FOR API EDIT INFORMATION (userInfo)
    function handleUserInfo(e) {
        const name = e.target.name;
        const value = e.target.value;
        props.setUserInfo(prev => ({ ...prev, [name]: value }))
    }

    return (
        <div className={`row ${props.margin_2} d-flex flex-column align-items-center`}>
            <div className="col-lg-10 col-sm-12">
                <div id='OS-card'>
                    {
                        props.paragraphe_1 ?
                            <div>
                                <div className='d-flex flex-wrap'>
                                    <h2 className="OS-card-title">{props.title}</h2>
                                    <img
                                        style={{ cursor: "pointer" }}
                                        src={Group_1}
                                        className='px-3'
                                        alt="this is icon"
                                        onClick={() => {
                                            setBorder(BroderClass)
                                            setselectAddClass(selectClass)
                                        }}
                                    />
                                </div>
                                <div id='OS-felx'>
                                    <div className="row">
                                        <div className="col">
                                            <div className='d-flex flex-column gab-3'>
                                                <div>
                                                    <p className='OS-Card-paragraphe'>{props.paragraphe_1}*</p>
                                                    <input
                                                        name='company_name'
                                                        onChange={(e) => { handleBusinessOwner(e) }}
                                                        className={Border}
                                                        style={{ border: 'none' }}
                                                        type='text'
                                                        Value={props.paragraphe_2}
                                                    />
                                                </div>
                                                <div>
                                                    <p className='OS-Card-paragraphe'>{props.paragraphe_3}</p>
                                                    <select
                                                        name="city_id"
                                                        className={selectAddClass}
                                                        
                                                        // value={props.cities.id}
                                                        onChange={handleUserInfo}
                                                    >
                                                        {
                                                            props.cities.map(city => {                                                         
                                                                return (
                                                                    <>
                                                                        <option
                                                                             key={city.id}
                                                                             value={city.id}
                                                                             //selected={props.userInfo.city_id}
                                                                             >
                                                                             {city.city_name}
                                                                        </option>
                                                                    </>
                                                                )
                                                            })
                                                        }
                                                    </select>
                                                    {/*<input
                                                        className={Border}
                                                        style={{ border: 'none' }}
                                                        type='text'
                                                        Value={props.paragraphe_4}
                                                    />*/}
                                                </div>
                                                <div>
                                                    <p className='OS-Card-paragraphe'>{props.paragraphe_5}</p>
                                                    <input
                                                        name='year_founded'
                                                        onChange={(e) => { handleBusinessOwner(e) }}
                                                        className={Border}
                                                        style={{ border: 'none' }}
                                                        type='data'
                                                        Value={props.paragraphe_6} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div>
                                                <div>
                                                    <p className='OS-Card-paragraphe'>{props.paragraphe_7}*</p>
                                                    <input
                                                        name="company_field"
                                                        onChange={(e) => { handleBusinessOwner(e) }}
                                                        className={Border}
                                                        style={{ border: 'none' }}
                                                        type='text'
                                                        Value={props.paragraphe_8}
                                                    />
                                                </div>
                                                <div>
                                                    <p className='OS-Card-paragraphe'>{props.paragraphe_9}</p>
                                                    <input
                                                        name='company_size'
                                                        onChange={(e) => { handleBusinessOwner(e) }}
                                                        className={Border}
                                                        style={{ border: 'none' }}
                                                        type='text'
                                                        Value={props.paragraphe_10}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            :
                            <div>
                                <div className='d-flex flex-wrap'>
                                    <h2 className="OS-card-title">{props.title}</h2>
                                    <img
                                        style={{ cursor: "pointer" }}
                                        src={Group_1}
                                        className='px-3'
                                        alt="this is icon"
                                        onClick={() => {
                                            setBorder(BroderClass)
                                        }}
                                    />
                                </div>
                                <div id='OS-felx'>
                                    <div className="row">
                                        <div className="col">
                                            <div className='d-flex flex-column gab-3'>
                                                <div>
                                                    <p className='OS-Card-paragraphe'>{props.paragraphe_11}*</p>
                                                    <input
                                                        name='phone_number'
                                                        onChange={(e) => { handleUserInfo(e) }}
                                                        className={Border}
                                                        style={{ border: 'none' }}
                                                        type='number'
                                                        Value={props.paragraphe_22}
                                                    />
                                                </div>
                                                <div>
                                                    <p className='OS-Card-paragraphe'>{props.paragraphe_33}</p>
                                                    <input
                                                        name='facebook_account'
                                                        onChange={(e) => { handleUserInfo(e) }}
                                                        className={Border}
                                                        style={{ border: 'none' }}
                                                        type='email'
                                                        Value={props.paragraphe_44}
                                                    />
                                                </div>
                                                <div>
                                                    <p className='OS-Card-paragraphe'>{props.paragraphe_55}</p>
                                                    <input
                                                        name='linked_in_account'
                                                        onChange={(e) => { handleUserInfo(e) }}
                                                        className={Border}
                                                        style={{ border: 'none' }}
                                                        type='email'
                                                        Value={props.paragraphe_66} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div>
                                                <div>
                                                    <p className='OS-Card-paragraphe'>{props.paragraphe_77}*</p>
                                                    <input
                                                        name="website"
                                                        onChange={(e) => { handleBusinessOwner(e) }}
                                                        className={Border}
                                                        style={{ border: 'none' }}
                                                        type='text'
                                                        Value={props.paragraphe_88}
                                                    />
                                                </div>
                                                <div>
                                                    <p className='OS-Card-paragraphe'>{props.paragraphe_99}</p>
                                                    <input
                                                        name='behanc_account'
                                                        onChange={(e) => { handleUserInfo(e) }}
                                                        className={Border}
                                                        style={{ border: 'none' }}
                                                        type='email'
                                                        Value={props.paragraphe_100}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    }
                </div>
            </div>
        </div>

    )
}

export default Card_Information