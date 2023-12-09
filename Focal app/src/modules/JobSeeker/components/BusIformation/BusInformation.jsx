// import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import './BusInformation.css';
// import { useState } from 'react';
// import { MdCheck } from 'react-icons/md';

function BusInformation({ formData, setFormData }){
    
    return (
        <div className="Ah_busInfo_container">

            <Form>
                <Row>
                    <Col xs={12} md={6} sm={6}>
                        <div className="Ah_formFullName">
                            <label className='Ah_formLabel' htmlFor="">Full Name<span className='Ah_formStar'> *</span> </label>
                            < input className='Ah_formAllInput' type='text' placeholder='Example: focal X Agency' value={formData.fullName} onChange={(changInfo) => setFormData({ ...formData, fullName: changInfo.target.value })} />
                        </div>

                        <div className="Ah_formCity">
                            <label className='Ah_formLabel' htmlFor="">City <span className='Ah_formStar'> *</span></label>
                            <select className='Ah_formAllInput' type="text" value={formData.city} onChange={(changInfo) => setFormData({ ...formData, city: changInfo.target.value })}>
                                <option >Select</option>
                                <option value="Damascus">Damascus</option>
                                <option value="Latakia">Latakia</option>
                                <option value="Aleppo">Aleppo</option>
                                <option value="Raqqa">Raqqa</option>
                                <option value="Al-Hasakah">Al-Hasakah</option>
                                <option value="Tartus">Tartus</option>
                                <option value="Hama">Hama</option>
                                <option value="Homs">Homs</option>
                                <option value="Deir ez-Zor">Deir ez-Zor</option>
                                <option value="Rif Dimashq">Rif Dimashq</option>
                                <option value="Quneitra">Quneitra</option>
                                <option value="Daraa">Daraa</option>
                                <option value="Al-Suwayda">Al-Suwayda</option>
                                <option value="A country outside Syria">A country outside Syria</option>
                            </select>
                        </div>

                        <div className="Ah_formDateOfBirth">
                            <label className='Ah_formLabel' htmlFor="">Date of Birthday</label>
                            <input className='Ah_formAllInput' type="date" value={formData.dateOfBirt} onChange={(changInfo) => setFormData({ ...formData, dateOfBirt: changInfo.target.value })} />
                        </div>
                    </Col>

                    <Col xs={12} md={6} sm={6}>
                        <div className="Ah_formJopTitle">
                            <label className='Ah_formLabel' htmlFor="">Job Title <span className='Ah_formStar'> *</span></label>
                            <input className='Ah_formAllInput' type="text" placeholder='Example: Backend Developer' value={formData.jobTitle} onChange={(changInfo) => setFormData({ ...formData, jobTitle: changInfo.target.value })} />
                        </div>

                        <div className="Ah_formAddress">
                            <label className='Ah_formLabel' htmlFor="">Address</label>
                            <input className='Ah_formAllInput' type="text" placeholder='Example: Umayyad Square' value={formData.adrdress} onChange={(changInfo) => setFormData({ ...formData, adrdress: changInfo.target.value })} />
                        </div>

                        <div className="Ah_formGender">
                            <label className='Ah_formLabel' htmlFor="">Gender</label>
                            <div className='Ah_radioCurrentJobStatus'>
                                <div className='Ah_radioForm'>
                                    <input type='radio' name='gender' value='mail' checked={formData.gender === 'mail' } onChange={(changInfo) => setFormData({...formData , gender : changInfo.target.value})} />
                                    <label className='Ah_GenderTybe'>Mali</label>
                                </div>
                                <div className='Ah_radioForm'>
                                    <input type='radio' name='gender' value='famil' checked={formData.gender === 'famil' }  onChange={(e) => setFormData({...formData , gender : e.target.value})} />
                                    <label className='Ah_GenderTybe'>Famil</label>
                                </div>
                                <div className='Ah_radioForm'>
                                    <input type='radio' name='gender' value='noProfrence' checked={formData.gender === 'noProfrence' }  onChange={(e) => setFormData({...formData , gender : e.target.value})} />
                                    <label className='Ah_GenderTybe'>No Profrence</label>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>

            </Form>

        </div >
    )
}

export default BusInformation