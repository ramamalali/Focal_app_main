function JobInfo() {
    return (
        <div className='Ah-Name-container'>
            <div className='Ah-container-white'>
                <div className="Ah-Job-title">
                    <h1>Job Information</h1>
                    <p>Additional information about the job vacancy.</p>
                </div>
                <hr />
                <div className="Ah-content-decr">
                    <p className='Ah-decr-title'>
                        Job Description:
                    </p>
                    <p className='Ah-decr-text mb-4'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Etiam eu turpis molestie, dictum est a, mattis tellus.
                        Sed dignissim, metus nec fringilla accumsan, risus sem 
                        sollicitudin lacus, ut interdum tellus elit sed risus. 
                    </p>
                    <p className='Ah-decr-title'>
                        Job Requirements :
                    </p>
                    <div className='Ah-job-require'>
                        <p>UI Designer</p>
                        <p>Figma</p>
                        <p>Adobe XD</p>
                    </div>
                    <hr />
                    <div className="Ah-Job-title">
                        <h1>Questions for applicants</h1>
                    </div>
                    <ul className='Ah-job-question'>
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit ?</li>
                        <li> Etiam eu turpis molestie, dictum est a, mattis tellus ?</li>
                        <li> Sed dignissim,Lorem ipsum dolor sit amet, consectetur adipiscing ?</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default JobInfo