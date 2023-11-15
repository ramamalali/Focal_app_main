import React, { useState } from 'react';
import Stepper from '../../../../node_modules/react-stepper-horizontal/lib/Stepper'
import './StepperLogin.css'
import Step1 from '../components/Step1';
import Step2 from '../components/Step2';
import Step3 from '../components/Step3';
import Step4 from '../components/Step4';
/*import AllNav from '../../../../src/components/COPMPO/NavBarAll/NavBar'*/

function StepperLogin() {
  const [activeStep, setActiveStep] = useState(0);
  /************** FOR THE FIRST FORM*****************/
  const [values, setValue] = useState({});
  /************** FOR THE Secound FORM*****************/
  const [InputValues, setInputValues] = useState({});

  function FormValue() {
    if (steps[activeStep].submit) {
      /************ TO SEND DATA IN BDCLICK NEXT BUTTON***************/
      console.log(values);
      console.log(InputValues);
      setValue({});
    } else {
      console.log("error");
    }

  }

  const steps = [
    { title: 'Complete Information' },
    { title: 'Contact Information', submit: true },
    { title: 'Payment Information' },
    { title: 'Terms & Conditions' },
  ];

  function getSectionComponent() {
    switch (activeStep) {
      case 0: return <Step1
        setValue={setValue}
        values={values} />
      case 1: return <Step2
        setInputValues={setInputValues}
        InputValues={InputValues} />;
      case 2: return <Step3 />;
      case 3: return <Step4 />;
      default: return null;
    }
  }
  return (
    <div className='Ah-StepperLogin'>
      <Stepper
        completeBarColor='#ff8500'
        completeBarBackgroundColor='#938c8c'
        completeBarHeight='100px'
        completeTitleColor='#eee'
        activeColor='#ff8500'
        completeColor='#ff8500'
        activeTitleColor='#938c8c'
        steps={steps}
        activeStep={activeStep} />

      <div className='buttons'>
        {getSectionComponent()}
        {(activeStep !== 0 && activeStep !== steps.length - 1)
          && <button className='nb-buttons1' onClick={() => { setActiveStep(activeStep - 1) }}>Previous</button>
        }
        {activeStep !== steps.length - 1
          ? <button className='nb-buttons2' onClick={() => {
            setActiveStep(activeStep + 1)
            FormValue()
          }}>Next</button>
          : <>
            <button className='nb-buttons1' onClick={() => setActiveStep(activeStep - 1)}>Previous</button>
            <button className='nb-buttons3'>Confirm</button>
          </>
        }
      </div>
    </div>
  );
}

export default StepperLogin