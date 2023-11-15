function StatusCard(props) {
    let card ;
if (props.title ==='views'){
    card =(
        <div className='Ah-Status-card Ah-border-orange'>
            <div className="Ah-Status-card-title">
                <p>
                    Views
                </p>
            </div>
            <div className="Ah-Status-card-num Ah-orange">
                <p>
                    120
                </p>
            </div>
            <button className='Ah-card-button mb-3'>Close Post</button>
        </div>
    )
}else if(props.title ==='candidates'){
    card =(
        <div className='Ah-Status-card Ah-border-green'>
            <div className="Ah-Status-card-title">
                <p>
                    Candidates
                </p>
            </div>
            <div className="Ah-Status-card-num Ah-green">
                <p>
                    42
                </p>
            </div>
            <button className='Ah-card-button mb-3'>View Candidates</button>
        </div>
    )
}else{
    card =(
        <div className='Ah-Status-card Ah-border-blue'>
            <div className="Ah-Status-card-title ">
                <p>
                    Interviews
                </p>
            </div>
            <div className="Ah-Status-card-num Ah-blue">
                <p>
                    120
                </p>
            </div>
            <button className='Ah-card-button mb-3'>View Interviews</button>
        </div>
    )
}
    return card
}
export default StatusCard