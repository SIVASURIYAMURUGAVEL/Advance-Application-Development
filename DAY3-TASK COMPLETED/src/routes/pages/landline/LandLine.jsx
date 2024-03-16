import React, { useState } from "react";
import "./landline.css";

const LandLine = () => {
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
                <p>Effortlessly</p>
                <h5>" Pay Your Landline Bill"</h5>
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
              src="https://dm0qx8t0i9gc9.cloudfront.net/watermarks/image/rDtN98Qoishumwih/illustration-of-a-man-speaking-in-phone_SB_PM.jpg"
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
                src="https://dmx246cm6p7k8.cloudfront.net/content/images/circular-operator-logos/bills/ATPOST000NAT02.webp"
                alt=""
              />
              <h3 className="provider-name">Airtel Landline</h3>
            </li>
            <li className="provider-item">
              <img
                src="https://dmx246cm6p7k8.cloudfront.net/content/images/circular-operator-logos/bills/BSNLMOB00NAT01.webp"
                alt=""
              />
              <h3 className="provider-name">BSNL Landline</h3>
            </li>
            <li className="provider-item">
              <img
                src="https://dmx246cm6p7k8.cloudfront.net/content/images/circular-operator-logos/bills/TATADLLI0NAT01.webp"
                alt=""
              />
              <h3 className="provider-name">Tata Teleservices</h3>
            </li>
          </ul>
        </div>
      </section>
      {/* description */}
      <section className="description">
        <h2>ONLINE LANDLINE BILL PAYMENTS MADE EASY</h2>
        <p style={{ color: "grey", fontSize: "13px" }}>
          Your landline bill payment is just a click away with QuickCharge.
          Trusted by over 27 million users, QuickCharge is your one-stop shop for
          online recharge! Paying bills every month can be a real problem at
          times, especially when you are running short of time or have urgent
          meetings. Sometimes you might even have to pay a late fee due to a
          missed deadline and now that you know, you are on the edge; you simply
          can't pay it as the bill payment office is closed. So what is the
          solution? Online bill payments come as a big relief! And landline bill
          payment is definitely not an exception. QuickCharge greatly reduces
          your troubles in such extreme situations. We offer landline bill
          payment for major service providers including Airtel landline, Tata
          landline, and MTNL landline.
        </p>
        <h2>WHY PAY LANDLINE BILLS WITH QuickCharge?</h2>
        <p style={{ color: "grey", fontSize: "13px" }}>
          You can save a lot of precious time by paying your landline bill with
          QuickCharge. It is definitely more secure than paying through the mail;
          as your personal information is at risk of falling into wrong hands.
          You could be entertaining friends, sitting in the office, travelling
          on vacation, or simply relaxing at home; just pick up your laptop,
          tablet, or smartphone, fill your basic information, and pay your bill
          in a jiffy! You get an option to save your card and other personal
          details. This means you do not have to re-enter them every time you
          pay your landline bill. Most people go for this option because they
          trust QuickCharge. In addition, you may get selected for special
          rewards.
        </p>
      </section>
    </>
  );
};

export default LandLine;
