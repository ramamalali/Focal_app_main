import Group_1 from '../images/Group_1.svg';
import { useState } from 'react';
const Card_Information = (props) => {
   
   let BroderClass='OS-AddBorder';
   const [Border,setBorder]=useState();
   function handlevalue(){
          
   }
    return (
        <div className={`row ${props.margin_2} d-flex flex-column align-items-center`}>
        <div className="col-lg-10 col-sm-12">
            <div id='OS-card'>
                <div>
                    <div className='d-flex flex-wrap'>
                      <h2 className="OS-card-title">{props.title}</h2>
                      <img 
                          style={{cursor:"pointer"}}  
                          src={Group_1} 
                          className='px-3' 
                          alt="this is icon"
                          onClick={()=>{handlevalue()
                            setBorder(BroderClass)}}
                          />
                    </div>
                    <div id='OS-felx'>
                        <div className="row">
                            <div className="col">
                                <div className='d-flex flex-column gab-3'>
                                    <div>
                                        <p className='OS-Card-paragraphe'>{props.paragraphe_1}</p>                                       
                                        {/*<p className='OS-card-description'>{props.paragraphe_2}</p>*/}
                                        <input className={Border} style={{border:'none'}}  type='text' defaultValue={props.paragraphe_2}/>                               
                                    </div>
                                    <div>
                                        <p className='OS-Card-paragraphe'>{props.paragraphe_3}</p>
                                        {/*<p className='OS-card-description'>{props.paragraphe_4}</p>*/}
                                        <input className={Border} style={{border:'none'}}  type='text' defaultValue={props.paragraphe_4}/>
                                    </div>
                                    <div>
                                        <p className='OS-Card-paragraphe'>{props.paragraphe_5}</p>
                                        {/*<p className='OS-card-description'>{props.paragraphe_6}</p>*/}
                                        <input className={Border} style={{border:'none'}}  type='text' defaultValue={props.paragraphe_6}/>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div>
                                    <div>
                                        <p className='OS-Card-paragraphe'>{props.paragraphe_7}</p>
                                        {/*<p className='OS-card-description'>{props.paragraphe_8}</p>*/}
                                        <input className={Border} style={{border:'none'}}  type='text' defaultValue={props.paragraphe_8}/>
                                    </div>
                                    <div>
                                        <p className='OS-Card-paragraphe'>{props.paragraphe_9}</p>
                                        {/*<p className='OS-card-description'>{props.paragraphe_10}</p>*/}
                                        <input className={Border} style={{border:'none'}}  type='text' defaultValue={props.paragraphe_10}/>                                   
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    )
}

export default Card_Information