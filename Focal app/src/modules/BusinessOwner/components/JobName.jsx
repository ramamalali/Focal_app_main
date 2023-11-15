import StatusCard from './StatusCard'
function JobName() {
    return (
        <div className='Ah-Name-container'>
            <div className='Ah-container-white'>
                <div className="Ah-Job-title">
                    <h1>Job Name</h1>
                </div>
                <div className="job-status mt-2">
                    <div className='d-flex gap-1 Active Ah-green'  >
                        <div className='Ah-status-point Ah-bg-green'></div>
                        <p>Active</p>
                    </div>
                    <div className='Ah-date '>
                        <p>02.17pm</p>
                        <p>17/9/2023</p>
                    </div>
                </div>
                <hr />
                <div className='Ah-statusCard-container d-flex justify-content-between flex-wrap'>
                    <StatusCard title='views'/>
                    <StatusCard title='candidates'/>
                    <StatusCard title='interviews'/>
                </div>
                <div className='Ah-complaint'>
                    <button className='Ah-job-button mb-3'>Add Complaint</button>
                    <button className='Ah-delete-button mb-1'>Delete</button>
                </div>
            </div>
        </div>
    )
}

export default JobName