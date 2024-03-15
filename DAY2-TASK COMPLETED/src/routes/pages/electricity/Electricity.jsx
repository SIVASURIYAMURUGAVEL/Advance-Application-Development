import React from "react";
import "./electricity.css";

const Electricity = () => {
  return (
    <>
      <section>
        <div className="recharge-container">
          <div className="left-content">
            <div className="title-box">
              <div className="title">
                <p>Fast and Secure Electricity Bill Payment </p>
              
              </div>
            </div>
            {/* input container */}
            <form>
              <div className="form-group">
                <input type="text" placeholder="Enter Your Provider" />
                <p>Please Enter Provider</p>
              </div>
              <button type="button" className="btn-submit">
                Next
              </button>
            </form>
          </div>
          {/* RIGHT CONTAINER */}
          <div className="right-content">
            <img
              src="https://pwa-cdn.freecharge.in/pwa-static/pwa/images/operators/electricity.png"
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
                src="https://dmx246cm6p7k8.cloudfront.net/content/images/circular-operator-logos/bills/TNEB00000TND01.webp"
                alt=""
              />
              <h3 className="provider-name">Tamilnadu Electricty Board</h3>
            </li>
            <li className="provider-item">
              <img
                src="https://dmx246cm6p7k8.cloudfront.net/content/images/circular-operator-logos/bills/THRI00000KER0H.webp"
                alt=""
              />
              <h3 className="provider-name">Kerala Electricity Board</h3>
            </li>
            <li className="provider-item">
              <img
                src="https://dmx246cm6p7k8.cloudfront.net/content/images/circular-operator-logos/bills/DELH00000DEL6Q.webp"
                alt=""
              />
              <h3 className="provider-name">Karnataka Authority</h3>
            </li>
          </ul>
        </div>
      </section>
      {/* description */}
      <section className="description">
        <h1>Electricity Main Category - QuickCharge</h1>
        <p>
          Initially, only sizable towns and cities had significant
          electrification. The supply to dense urban areas was the main focus.
          The many providers did not work together or coordinated little.
          Private plants predominated in the power industry. In Delhi, India,
          the first diesel power station was built in 1905. This was a personal
          facility established by a man from England by the name of M/s John
          Fleming. In accordance with the Indian Electricity Act of 1903's
          stipulations, he received a licence. After receiving a licence, this
          specific company installed a tiny 2 MW diesel set near Lahori Gate in
          Old Delhi. The same business then changed its name to the Delhi
          Electric Supply and Traction Company.
        </p>
        <h2>
          Step-By-Step Guide To Pay Electricity Bill Payment With QuickCharge?
        </h2>
        <ul type="">
          <li>
            Launch the QuickCharge app first, then look in the Recharge & Bill
            Payment section for "Electricity." To go to the following stage, tap
            Electricity.
          </li>
          <li>
            The next step is to locate your electricity provider so you may use
            QuickCharge to pay electricity bill online.
          </li>
          <li>
            You must now input your Consumer Number (CA) in order to view the
            amount of your bill after choosing your electrical service provider.
          </li>
          <li>
            You can verify your information, including the amount of your power
            bill that needs to be paid and its due date, after entering your CA
            Number.
          </li>
        </ul>
        <h3 style={{ fontSize: "1rem" }}>
          How To Check Electricity Bill Online?
        </h3>
        <ul>
          <li>Check out the electrical board's webpage.</li>
          <li>Use your credentials to log in.</li>
          <li>Find the "View Bill" option and select it.</li>
          <li>
            Include other information, such as your customer identification
            number.
          </li>
        </ul>

        <h3 style={{ fontSize: "1rem" }}>
          What Are The Benefits Of Paying Electricity Bill From Quickcharge App?
        </h3>
        <p>
          You have the choice to save the specifics of your transaction. This
          means that each time you pay electricity bill online, you will not
          need to input your information again. The most recent 128-bit
          encryption technology ensures complete security for Quickcharge. Your
          credit card information and other data are fully secure. Additionally,
          you have the option of paying later to complete electricity bill
          payment online transactions at a later time.
        </p>
      </section>
    </>
  );
};

export default Electricity;
