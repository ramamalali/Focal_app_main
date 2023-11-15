import React, { useRef, useState } from "react";
import RecipientInformation from "../components/RecipientInformation.jsx";
import './WithdrawalMoney.css'
/*import Footer from '../../../../src/components/COPMPO/Footer/Footer'
import AllNav from '../../../../src/components/COPMPO/NavBarAll/NavBar'*/


const WithdrawalMoney = () => {
  const [recipientInfo, setRecipientInfo] = useState({
    recipientName: "",
    paymentMethod: "",
    amountWithdrawn: "",
    recipientNumber: "",
    recipientAddress: "",
    password: "",
  });
  const chiledRef = useRef();
  //API
  const [Values, setValues] = useState({});

  ///SEND DATA TO DATABASE
  function FormVlaue() {
    console.log(Values);
  }

  return (
    <>
      <div className="ms-wm-main">
        <p className="ms-wm-title">Withdrawal Money</p>
        <p className="ms-wm-des">
          The money will be transferred within the shortest time.
          Please make sure to enter the data correctly.
        </p>
        <RecipientInformation
          recipientInfo={recipientInfo}
          setRecipientInfo={setRecipientInfo}
          ref={chiledRef}
          Values={Values}
          setValues={setValues}

        />
        <div className="ms-wm-buttuns">
          <div className="ms-wm-cancel-btn">Cancel</div>
          <div
            className="ms-wm-confirm-btn"
            onClick={() => {
              let isAllFill = true;

              for (const key of Object.keys(recipientInfo)) {
                if (recipientInfo[key] == "") {
                  isAllFill = false;
                  if (key == "recipientName") {
                    chiledRef.current.changeError();
                  } else if (key == "paymentMethod") {
                    chiledRef.current.changeError1();
                  } else if (key == "amountWithdrawn") {
                    chiledRef.current.changeError2();
                  } else if (key == "recipientNumber") {
                    chiledRef.current.changeError3();
                  } else if (key == "recipientAddress") {
                    chiledRef.current.changeError4();
                  } else if (key == "password") {
                    chiledRef.current.changeError5();
                  }
                }
              }
              if (isAllFill) {
                console.log(JSON.stringify(recipientInfo));
              } else {
              }
              FormVlaue()
            }}
          >
            Confirm Payment
          </div>
        </div>
      </div>
    { /* <footer>
        <Footer />
     </footer>*/}
    </>
  );
};

export default WithdrawalMoney;
