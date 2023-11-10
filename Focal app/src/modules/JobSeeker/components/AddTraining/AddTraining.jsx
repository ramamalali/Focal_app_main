
import React, { useState } from 'react'
import "../Training/Training.css"
const AddTraining = ({ onSubmit }) => {
  const [name1, setName1] = useState('');
  const [name2, setName2] = useState('');
  const [inputdata, setInputdata] = useState('');
  const dates = ((new Date().getFullYear()))
  const [startDate, setStartDate] = useState(dates);

{/* ------------------------------------ */}
  const handleSubmit = () => {
    onSubmit(name1, name2, inputdata, startDate);
    setName1('');
    setName2('');
    setInputdata('');
    setStartDate('')

  };
{/* ------------------------------------ */}
  const datachange = (e) => {
    setInputdata(e.target.value)

  }
  console.log(inputdata)

{/* ------------------start return------------------ */}
  return (
    <div className='KO-Add-Items'>
      <input
        className='br-value1'
        type="text"
        placeholder="Enter Data"
        value={name1}
        onChange={(e) => setName1(e.target.value)}
      />
      <input
        className='br-value2'
        type="text"
        placeholder="Enter Data"
        value={name2}
        onChange={(e) => setName2(e.target.value)}
      />

      <input
        className='br-value3'
        type="date"
        placeholder="Enter DataTime"
        value={inputdata}
        onChange={datachange}
      />
      <button onClick={handleSubmit} className='br-main-button2'>+</button>
    </div>
  );
};
export default AddTraining