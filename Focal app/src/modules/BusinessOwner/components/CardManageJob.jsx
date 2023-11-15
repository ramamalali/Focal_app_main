
function CardManageJob(props) {
    console.log(props.id)
    let cardContent 
    if (props.title !== 'Financial Accountant'){
        cardContent = (
            <div className='Ah-card'>
                <div className="Ah-card-title">
                    <p>{props.title}</p>
                </div>
                <div className="Ah-card-status ">
                    <div className={`d-flex gap-1 + ${props.status === 'Active' ? 'Ah-green' : 'Ah-orange'}`} >
                        <div className={`Ah-status-point + ${props.status ==='Active' ? 'Ah-bg-green' : 'Ah-bg-orange'}`}></div>
                        <p>{props.status}</p>
                    </div>
                    <div className='Ah-card-date '>
                        <p>{props.time}</p>
                        <p>{props.date}</p>
                    </div>
                </div>
                <div className="Ah-card-content">
                    <div className="Ah-views">
                        <p className='Ah-views-num'>{props.views_num}</p>
                        <p>Viwes</p>
                    </div>
                    <div className="Ah-line"></div>
                    <div className="Ah-candidate">
                        <p className={`Ah-candidate-num + ${props.candidate_num> 0 ? 'Ah-green' : ''}`} >{props.candidate_num}</p>
                        <p>Candidate</p>
                    </div>
                </div>
                <div className="d-flex justify-content-center align-items-center flex-column ">
                    <button className='Ah-candidate-button mb-3'>View Candidates</button>
                    <button className='Ah-information-button mb-2'>View Information</button>
                    <button className='Ah-cancel-button'>Cancel</button>
                </div>
            </div>
        )
    }else{
        cardContent =(
            <div className='Ah-card'>
                <div className="Ah-card-title">
                    <p>{props.title}</p>
                </div>
                <div className="Ah-card-status ">
                    <div className={`d-flex gap-1 + ${props.status === 'Active' ? 'Ah-green' : 'Ah-orange'}`} >
                        <div className={`Ah-status-point + ${props.status === 'Active' ? 'Ah-bg-green' : 'Ah-bg-orange'}`}></div>
                        <p>{props.status}</p>
                    </div>
                    <div className='Ah-card-date '>
                        <p>{props.time}</p>
                        <p>{props.date}</p>
                    </div>
                </div>
                <div className="Ah-card-text d-flex justify-content-center align-items-center">
                    <p style={{padding:"10px"}}>
                        Employee No. 10 has been hired
                    </p>
                </div>
                <div className="d-flex justify-content-center align-items-center flex-column ">
                    <button className='Ah-candidate-button mb-3'>Employee Evaluation</button>
                    <button className='Ah-information-button mb-2'>Add Complaint</button>
                </div>
            </div>
        )
    }
    return <>{cardContent}</>
}

export default CardManageJob