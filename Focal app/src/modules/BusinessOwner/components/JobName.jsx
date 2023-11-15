import { useState } from 'react'
import StatusCard from './StatusCard'

function JobName() {
    const [type, setType] = useState('')
    const [reason, setReason] = useState('')
    const [deletReason, setDeletReason] = useState('')
    const [modal, setModal] = useState(false)
    const [deleteModal, setDeleteModal] = useState(false)
    const [confirmDeleteModal, setConfirmDeleteModal] = useState('')
    function toggleModal() {
        setModal(!modal)
    }
    if (modal) {
        document.body.classList.add('Ah-active-modal')
    } else {
        document.body.classList.remove('Ah-active-modal')
    }
    function complaintSend() {
        console.log('data send')
    }
    function toggleDeleteModal() {
        setDeleteModal(!deleteModal)
    }
    if (deleteModal) {
        document.body.classList.add('Ah-active-modal')
    } else {
        document.body.classList.remove('Ah-active-modal')
    }
    function toggleConfirm() {
        setConfirmDeleteModal(!confirmDeleteModal)
    }
    if (confirmDeleteModal) {
        document.body.classList.add('Ah-active-modal')
    } else {
        document.body.classList.remove('Ah-active-modal')
    }
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
                    <StatusCard title='views' />
                    <StatusCard title='candidates' />
                    <StatusCard title='interviews' />
                </div>
                <div className='Ah-complaint'>
                    <button className='Ah-job-button mb-3' onClick={toggleModal}>Add Complaint</button>
                    <button className='Ah-delete-button mb-1' onClick={toggleDeleteModal}>Delete</button>
                </div>
                {modal && (
                    <div className="overlay" >
                        <div className="modal-content">
                            <div className="Ah-complaint-modal">
                                <div className="Ah-copmlai-title text-center">
                                    Add Complain
                                </div>
                                <div className='Ah-type'>
                                    <label for="complaint" className="OS-Star mb-2">Complaint Types </label>
                                    <select className='OS-Complaint' name="complaint" value={type} onChange={e => setType(e.target.value)} id="complaint">
                                        <option selected disabled value="">Select</option>
                                        <option value="API">From API</option>
                                        <option value="second">second</option>
                                    </select>
                                </div>
                                <div className="Ah-type">
                                    <label for="Reason" className="Os-star mb-2">Complaint Reason </label>
                                    <textarea
                                        className='OS-Textarea-complaint'
                                        value={reason}
                                        onChange={e => setReason(e.target.value)}
                                        name='Reason'
                                        rows={8}
                                        placeholder='Write the reason for the complaint here.....'
                                    />
                                </div>
                                <p className='Ah-complaint-text'>The complaint will be reviewed and responded to within 24 hours</p>
                                <div className="Ah-button-c mt-2">
                                    <button className='Ah-complaint-button ' onClick={complaintSend}>Add Complaint</button>
                                    <button className='Ah-close-modal ' onClick={toggleModal}>cancel</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                {deleteModal && (
                    <div className="overlay" >
                        <div className="modal-content">
                            <div className="Ah-complaint-modal">
                                <div className="Ah-copmlai-title text-center mb-4">
                                    Cancel Post
                                </div>
                                <div className="Ah-type">
                                    <textarea
                                        className='OS-Textarea-complaint'
                                        value={deletReason}
                                        onChange={e => setDeletReason(e.target.value)}
                                        name='Reason'
                                        rows={8}
                                        placeholder='Please tell us your problem.....'
                                    />
                                </div>
                                <div className="Ah-button-c mt-2">
                                    <button className='Ah-complaint-button ' onClick={toggleConfirm}>Send</button>
                                    <button className='Ah-close-modal ' onClick={toggleDeleteModal}>cancel</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                {confirmDeleteModal && (
                    <div className="overlay" >
                        <div className="modal-content Ah-co">
                            <div className="Ah-confirm-modal d-flex flex-column align-items-center">
                                <div className="Ah-copmlai-title text-center mb-4">
                                    Close the Post
                                </div>
                                <p className='Ah-confirm-text'>Closing the post will stop the researchers from applying for the job</p>
                                <div className="d-flex flex-column align-items-center gap-3 mt-2">
                                    <button className='Ah-complaint-button ' onClick={complaintSend}>Continue & Close</button>
                                    <button className='Ah-close-modal ' onClick={toggleConfirm}>cancel</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )

}

export default JobName


{/*<div className='Ah-Name-container'>
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
    </div>*/}