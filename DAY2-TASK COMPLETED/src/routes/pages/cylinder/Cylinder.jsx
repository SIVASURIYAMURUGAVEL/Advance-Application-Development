import React,{useState} from "react";
import "./cylinder.css";

const Cylinder = () => {

  const [input, setInput] = useState("");

  const handleInput = (e) => {
    const newValue = e.target.value;

    if (/\d/.test(newValue)) {
      alert("please enter Alphabet only!");
      setInput(newValue.replace(/\d/g, ""));
    } else {
      setInput(newValue);
    }
  };
  return (
    <>
      <section>
        <div className="recharge-container">
          <div className="left-content">
            <div className="title-box">
              <div className="title">
                <p>Pay your cylinder bills anytime</p>
              </div>
            </div>
            {/* input container */}
            <form>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Enter Your Provider"
                  value={input}
                  onChange={handleInput}
                />
                <p>Please Enter a Provider</p>
              </div>
              <button type="button" className="btn-submit">
                Next
              </button>
            </form>
          </div>
          {/* RIGHT CONTAINER */}
          <div className="right-content">
            <img
              src="https://pwa-cdn.freecharge.in/pwa-static/pwa/images/operators/gas.png"
              alt=""
              className="lady-img"
            />
          </div>
        </div>
      </section>
      {/* provider  */}
      <section>
        <div className="provider-container">
          <ul className="provider-list">
            <li className="provider-item">
              <img
                src="https://dmx246cm6p7k8.cloudfront.net/content/images/circular-operator-logos/bills/Bharat_Gas_(BPCL).webp"
                alt=""
              />
              <h3 className="provider-name">Bharat Gas</h3>
            </li>
            <li className="provider-item">
              <img
                src="https://dmx246cm6p7k8.cloudfront.net/content//images/circular-operator-logos/bills/HPCL_LPG_GAS.webp"
                alt=""
              />
              <h3 className="provider-name">HP Gas</h3>
            </li>
            <li className="provider-item">
              <img
                src="https://dmx246cm6p7k8.cloudfront.net/content/images/circular-operator-logos/bills/Indane_Gas_(Indian_Oil).webp"
                alt=""
              />
              <h3 className="provider-name">Indane Gas</h3>
            </li>
          </ul>
        </div>
      </section>
      {/* description */}
      <section className="description">
        <h1>Online Cylinder Bill With Quickcharge</h1>
        <p>
          Imagine you are just preparing to cook your favourite veggies soup and
          turn on the flame just to find out that you are left with an empty
          cylinder. Well, with Freecharge, you do not need to worry about
          cylinder gas booking. No need to step out of your home. Simply make
          your LPG gas cylinder booking from the comfort of you r home in just a
          few minutes.
        </p>
        <h2>How To Book LPG Gas Online On Quickcharge?</h2>
        <ol type="1">
          <li>
            You can make a payment for a cylinder booking using UPI, Debit card,
            Credit card or Freecharge Wallet.
          </li>
          <li>
            Once you make a gas cylinder booking, it cannot be canceled. For any
            further assistance contact your distributor/ agency or gas provider.
          </li>
          <li>
            If you are eligible for the government subsidy on gas cylinder, it
            will be credited to your bank account by your gas provider within 2
            working days. The amount you pay at the time of booking the cylinder
            does not include this subsidy. In case you have not received this
            subsidy, contact your distributor/ agency or gas provider for
            assistance.
          </li>
        </ol>
      </section>
    </>
  );
};

export default Cylinder;
