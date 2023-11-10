
import './Sidebar.css'
import camera from './../../imgs/camera.png'
import { Link, NavLink } from "react-router-dom";
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
 {/* ------------------------------------------- */}
const Sidebar = () => {
  const [show, setshow] = useState(true);
  /* const [tgg, settgg] = useState(!show); */

  return (
    <>
      
         <div className='br-Sidebarss'>
     
        {/* ---------------------icon bars-------------------- */}
        
        <button onClick={() => setshow(show => !show)} className="br-Asclickbtn">
        <FontAwesomeIcon icon={faBars} className="br-Asclickicon" />
        </button>

         {/* ------------------------------------------- */}
        
        {show && <div className="br-Asmain">

        <div className="br-img-top">
          <label>
            <input type="file" name="name" accept=".png, .jpg, .jpeg" style={{ display: 'none' }} />
            <img src={camera} alt="camera" className='br-img' />
          </label>
        </div>
        {/* ----------------------------------------- */}
        <div className="br-Asname">
          <h4 className="br-Astitle">Karem Ahmed</h4>
          <p className="br-Aspargr">Web Development</p>
          <button className="br-Asbtn1">Professional advice</button>
          <hr className='br-Ashorizontal' />
        </div>
        {/* ----------------------------------------- */}
        <div className="br-AsLinkss">
          <div className='br-Aslink1'>
            <Link className='br-Aslink11'>INFORMATION  </Link>
          </div>

          <div className='br-Aslink1'>
            
          <NavLink  id="br-Aslink10"
           to="/messages" 
            className= {({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
          }
         >
        RESUMS
        </NavLink> 
      </div>
        
            
         
          <div className='br-Aslink1'>
            <Link className='br-Aslink11'>BLOGS  </Link>
          </div>
        </div>
        <hr className='br-Ashorizontal2' />

        <div className="br-Aslogout">
          <Link className='br-Aslink13'> log out  </Link>
        </div>
        <div className="br-AsTerms">
          <Link className='br-Aslink14'>Terms and Conditions </Link>
        </div>

      </div>

      
       }
      </div>
    </>
  )
}

export default Sidebar