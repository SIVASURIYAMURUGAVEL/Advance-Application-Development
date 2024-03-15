import React from "react";
import "../creditcard/creditcard.css";

import { MdMobileFriendly } from "react-icons/md";
import { Link } from "react-router-dom";

const CreditCard = () => {
  return (
    <>
      <div className="creditCard-container">
        <div className="leftContent">
          <div className="titleBox">
            <MdMobileFriendly className="mobileIcon" />
            <div className="title">
              <p>Let's Get Your</p>
              <h5>Credit Card Bill done!</h5>
            </div>
          </div>
          {/* input container */}
          <form>
            <div className="formGroup">
              <input type="number" placeholder="Enter Your Card Number" />
              <p>Please Enter Valid Card Number</p>
            </div>
            <div className="form-group">
              <input type="text" />
              <p>Please Select Valid Operator</p>
            </div>
            <div className="form-group">
              <input type="text" />
              <p>Please Enter Valid Circle</p>
            </div>

            <Link to="/">
              <button type="button" className="btnSubmit">
                Back
              </button>
            </Link>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreditCard;
