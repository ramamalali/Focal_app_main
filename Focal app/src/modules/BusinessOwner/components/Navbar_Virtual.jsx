import React from 'react'

const Navbar_Virtual = ({toggle}) => {
  return (
   
    <nav>
      <div id='OS-Collapse' className="container-fluid">
        <i className="navbar-brand bi bi-justify-left" onClick={toggle}></i>
      </div>
    </nav>
     
  );
}

export default Navbar_Virtual