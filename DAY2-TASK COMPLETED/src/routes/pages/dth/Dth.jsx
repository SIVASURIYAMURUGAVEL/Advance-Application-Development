import React from "react";
import "./dth.css";

import { FaSatelliteDish } from "react-icons/fa";

const Dth = () => {
  return (
    <>
      <section>
        <div className="recharge-container">
          <div className="left-content">
            <div className="title-box">
              <FaSatelliteDish />
              <div className="title">
                <p>Let's Get Your</p>
                <h5>DTH Bill done!</h5>
              </div>
            </div>
            {/* input container */}
            <form>
              <div className="form-group">
                <input type="number" placeholder="Enter Your Dish Number" />
                <p>Please Enter Valid DTH Id</p>
              </div>
              <button type="button" className="btn-submit">
                Next
              </button>
            </form>
          </div>
          {/* RIGHT CONTAINER */}
          <div className="right-content">
            <img
              src="https://pwa-cdn.freecharge.in/pwa-static/pwa/images/dcc/dth.svg"
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
                src="https://dmx246cm6p7k8.cloudfront.net/content/images/circular-operator-logos/bills/AIRT00000NAT87.webp"
                alt=""
              />
              <h3 className="provider-name">Airtel Tv</h3>
            </li>
            <li className="provider-item">
              <img
                src="https://dmx246cm6p7k8.cloudfront.net/content/images/circular-operator-logos/bills/VIDEOCON0NAT01.webp"
                alt=""
              />
              <h3 className="provider-name">D2H</h3>
            </li>
            <li className="provider-item">
              <img
                src="https://dmx246cm6p7k8.cloudfront.net/content/images/circular-operator-logos/bills/DISH00000NAT01.webp"
                alt=""
              />
              <h3 className="provider-name">Dish TV</h3>
            </li>
            <li className="provider-item">
              <img
                src="https://dmx246cm6p7k8.cloudfront.net/content/images/circular-operator-logos/bills/SUND00000NAT02.webp"
                alt=""
              />
              <h3 className="provider-name">Sun Direct</h3>
            </li>
            <li className="provider-item">
              <img
                src="https://dmx246cm6p7k8.cloudfront.net/content/images/circular-operator-logos/bills/tata-play.webp"
                alt=""
              />
              <h3 className="provider-name">Tata Play</h3>
            </li>
          </ul>
        </div>
      </section>
      {/* description */}
      <section className="description">
        <h1>Online DTH Recharge For All DTH Operators With Quickcharge</h1>
        <p>
          Quickcharge is one of the best platforms to recharge DTH online. It
          allows you to recharge your DTH within a few clicks for any service
          provider. You might be out of town and don't have time to go to a
          physical store. Even if you don't have a DTH provider nearby, you can
          recharge your TV for any operator online. It is a simple, convenient,
          and quick way to get your disconnected DTH account running quickly
          again. Now, you can use their latest DTH offers for affordable
          recharge services.
        </p>
        <h2>For Desktop</h2>
        <ol type="1">
          <li>Go to QuickCharge homepage, QuickCharge.in</li>
          <li>Navigate to DTH recharge service</li>
          <li>Select you DTH provider and add your subscription ID</li>
          <li>
            Login into QuickCharge with mobile number, if you are not logged in
          </li>
          <li>Enter the 4-digit OTP</li>
          <li>Enter the amount for recharge</li>
          <li>Make the payment for DTH recharge</li>
        </ol>
      </section>
    </>
  );
};

export default Dth;
