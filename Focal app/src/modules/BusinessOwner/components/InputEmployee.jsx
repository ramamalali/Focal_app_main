import React from 'react';
function InputEmployee(props) {
  const { title, content, showDivider, dividerText } = props;

  return (
    <div>
      <div className="SM-container">
        <div className="SM-container-white">
          <div className="SM-title">
            <h1>Employee Specification</h1>
            <p>Select the employee information you are looking for.</p>
          </div>
          <div className="row SM-content">
            {title.map((item, index) => {
              const isAddress = item === 'Address:';
              const colClass = isAddress ? 'col-12' : 'col-lg-6 col-sm-12';
              
              return (
                <div className={colClass} key={index}>
                 <h6 className='OS-employee'>{item}</h6>
                  <p>{content[index]}</p>
                </div>
              );
            })}
          </div>
          {showDivider && <hr />}
          {showDivider && <p>{dividerText}</p>}
        </div>
      </div>
    </div>
  );
}

export default InputEmployee;