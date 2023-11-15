import React, { useState, forwardRef, useImperativeHandle } from "react";
import { computeHeadingLevel } from "@testing-library/react";
const SenderInformation = ({ senderInfo, setSenderInfo ,valuesForm ,setValuesForm}, ref) => {
  const [error, setError] = useState(false);
  const [error1, setError1] = useState(false);
  const [error2, setError2] = useState(false);
  const [error3, setError3] = useState(false);
  const [error4, setError4] = useState(false);
  const [error5, setError5] = useState(false);
  const [error6, setError6] = useState(false);
  const [error7, setError7] = useState(false);

  useImperativeHandle(ref, () => ({
    changeError,
    changeError1,
    changeError2,
    changeError3,
    changeError4,
    changeError5,
    changeError6,
    changeError7,
  }));
  const changeError = () => {
    setError(true);
  };
  const changeError1 = () => {
    setError1(true);
  };
  const changeError2 = () => {
    setError2(true);
  };
  const changeError3 = () => {
    setError3(true);
  };
  const changeError4 = () => {
    setError4(true);
  };
  const changeError5 = () => {
    setError5(true);
  };
  const changeError6 = () => {
    setError6(true);
  };
  const changeError7 = () => {
    setError7(true);
  };
  
  function handlevalue(e){
     const target = e.target;
     const { name, value } = target;
     setValuesForm(element=> ({...element ,[name]: value})) 
    
  }

  return (
    <div className="ms-sender-information-card">
      <p className="ms-card-title">Sender information</p>
      <p className="ms-card-des">
        Enter your payment information to be verified.
      </p>
      <form>
        <div className="ms-card-input-container">
          <div className="ms-card-column">
            <div>
              {error ? <label className="lbl-error">Can't be empty</label> : ""}
              <input
                type="text"
                onChange={(e) => {
                  e.target.value ? setError(false) : setError(true);
                  //setSenderInfo({ ...senderInfo, companyName: e.target.value });
                  handlevalue(e)}}
                 required
                 placeholder="Enter your Company Name"
                 name="namecompany"
                 value={valuesForm?.namecompany ?? ''}
              />
            </div>
            <div>
              {error1 ? (
                <label className="lbl-error">Can't be empty</label>
              ) : (
                ""
              )}
              <input
                type="text"
                required
                onChange={(e) => {
                  e.target.value ? setError1(false) : setError1(true);
                  setSenderInfo({ ...senderInfo, senderName: e.target.value });
                  handlevalue(e)}}
                placeholder="Enter Sender Full Name"
                name="FullName"
                value={valuesForm?.FullName ?? ''}
              />
            </div>
            <div className="ms-payment">
              <label>
                Payment Method{" "}
                {error2 ? (
                  <label className="lbl-error">Can't be empty</label>
                ) : (
                  ""
                )}
              </label>
              <select
                id="payment-method"
                onChange={(e) => {
                  e.target.value ? setError2(false) : setError2(true);
                  setSenderInfo({
                    ...senderInfo,
                    paymentMethod: e.target.value,
                  });
                  handlevalue(e)}}
                placeholder="Select"
                name="paymentmethod"
                value={valuesForm?.paymentmethod ?? ''}
              >
                <option disabled selected>
                  Select
                </option>
                <option>MTN CASH</option>
                <option>SYRIATEL CASH</option>
                <option>Banque Bemo Saudi Fransi</option>
                <option>AL-HARAM</option>
                <option>FOAD</option>
              </select>
            </div>
            <div>
              {error3 ? (
                <label className="lbl-error">Can't be empty</label>
              ) : (
                ""
              )}
              <input
                type="number"
                onChange={(e) => {
                  e.target.value ? setError3(false) : setError3(true);
                  setSenderInfo({ ...senderInfo, amountPaid: e.target.value });
                  handlevalue(e)}}
                required
                placeholder="Enter amount paid"
                name="amountpaid"
                value={valuesForm?.amountpaid ?? ''}
              />
            </div>
          </div>
          <div className="ms-card-column">
            <div>
              {error4 ? (
                <label className="lbl-error">Can't be empty</label>
              ) : (
                ""
              )}
              <input
                type="text"
                required
                onChange={(e) => {
                  e.target.value ? setError4(false) : setError4(true);
                  setSenderInfo({
                    ...senderInfo,
                    senderAdress: e.target.value,
                  });
                  handlevalue(e) }}
                placeholder="Enter your Address"
                name="Address"
                value={valuesForm?.Address ?? ''}
              />
            </div>
            <div>
              {error5 ? (
                <label className="lbl-error">Can't be empty</label>
              ) : (
                ""
              )}
              <input
                type="number"
                required
                onChange={(e) => {
                  e.target.value ? setError5(false) : setError5(true);
                  setSenderInfo({ ...senderInfo, senderId: e.target.value });
                  handlevalue(e)}}
                placeholder="Enter Sender ID Number"
                name="IDNumber"
                value={valuesForm?.IDNumber ?? ''}
              />
            </div>
            <div>
              {error6 ? (
                <label className="lbl-error">Can't be empty</label>
              ) : (
                ""
              )}
              <input
                type="number"
                required
                onChange={(e) => {
                  e.target.value ? setError6(false) : setError6(true);
                  setSenderInfo({
                    ...senderInfo,
                    receiptNumber: e.target.value,
                  });
                  handlevalue(e)}}
                placeholder="Enter Receipt number"
                name="Receiptnumber"
                value={valuesForm?.Receiptnumber ?? ''}
              />
            </div>
            <div>
              {error7 ? (
                <label className="lbl-error">Can't be empty</label>
              ) : (
                ""
              )}
              <input
                type="number"
                required
                onChange={(e) => {
                  e.target.value ? setError7(false) : setError7(true);
                  setSenderInfo({
                    ...senderInfo,
                    contactNumber: e.target.value,
                  });
                  handlevalue(e) }}
                placeholder="Enter contact number"
                name="contactnumber"
                value={valuesForm?.contactnumber ?? ''}
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default forwardRef(SenderInformation);
