import React, { useState } from "react";
import "./education.css";
import { FaUserGraduate } from "react-icons/fa";

const Education = () => {
  const [state, setState] = useState("");
  const [city, setCity] = useState("");

  const handleStateChange = (e) => {
    setState(e.target.value);
  };
  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  const getCityOptions = () => {
    if (state === "TamilNadu") {
      return ["Chennai", "Coimbatore", "Tiruchirappalli","Salem",'Madurai'];
    } else if (state === "Kerala") {
      return ["Thiruvananthapuram", "Kochi", "KozhiKode", "Thrissur"];
    } else if (state === "Karnataka") {
      return ["Bengaluru", "Mysuru", "Hubli", "Mangaluru"];
    } else {
      return [];
    }
  };
  return (
    <>
      <section>
        <div className="recharge-container">
          <div className="left-content">
            <div className="title-box">
              <FaUserGraduate className="mobile-icon" />
              <div className="title">
                <p>Take Care of Your </p>
                <h5>Education Fees Now!</h5>
              </div>
            </div>
            {/* input container */}
            <form>
              <div className="form-group">
                <select
                  className="select"
                  id="state"
                  value={state}
                  onChange={handleStateChange}
                >
                  <option value="" className="option">
                    Select State
                  </option>

                  <option value="TamilNadu">TamilNadu</option>

                  <option value="Kerala">Kerala</option>
                  <option value="Karnataka">Karnataka</option>
                </select>
                <p>Select your State</p>
              </div>
              <div className="form-group">
                <select
                  menu="bottom"
                  className="select"
                  id="city"
                  value={city}
                  onChange={handleCityChange}
                >
                  <option value="" className="option">
                    Select a City
                  </option>
                  {getCityOptions().map((city) => {
                    return (
                      <option value={city} className="option">
                        {city}
                      </option>
                    );
                  })}
                </select>
                <p>Select your City</p>
              </div>
              <button type="button" className="btn-submit">
                Next
              </button>
            </form>
          </div>
          {/* right container */}
          <div className="right-content">
            <img
              src="https://pwa-cdn.freecharge.in/pwa-static/pwa/images/dcc/education-fees.svg"
              alt=""
              className="lady-img"
            />
          </div>
        </div>
      </section>
      {/* description */}
      <section className="description">
        <h1>Make Online Fee Payment For School, Colleges & Tuition Fees</h1>
        <p>
          The global pandemic situation has improved over the last few months. A
          lot of uncommon things are common nowadays. For example, a lot of our
          children are taking classes online nowadays, the schools and other
          institutions are relying on online methods for management sections as
          well. And just like the classes have shifted to online, paying their
          school fees has also shifted to online. You heard it right, now you
          can pay the school fees of your children online right from your home
          with Quickcharge. It's really easy to pay for the tuition fees on
          Quickcharge is one of the trusted platforms that allows you
          to pay online fees. Just like doing a Mobile recharge or FASTag
          recharge or Electricity bill payment, you can also pay your children's
          education fees Online bill payment is very quick, secure, and
          absolutely paperless and supports many ways of payment. Pay your
          school-college bills in no time with Quickcharge.
        </p>
        <h1>Steps To Pay Online School Fees Payment</h1>
        <ol type="1">
          <li>First, go to the Quickcharge application dashboard</li>
          <li>Click on the EducationFeesoption.</li>
          <li>
            Now select your institute’s location and institution name from the
            list of available institutions on Quickcharge.
          </li>
          <li>Enter the Student Unique ID,</li>
          <li>Click on the FetchBilloption.</li>
          <li>
            Quickcharge will show you the Information regarding the student’s
            fees,
          </li>
          <li>Now simply click on Proceed to Payto pay the fees.</li>
        </ol>
        <h1>
          Payment Options Available For Online Fee Payment Using Quickcharge
        </h1>
        <p>
          Usually, payment options in online transactions are through banks.
          However, with Quickcharge, you'll get tons of different payment
          methods—UPI, Quickcharge-wallet, Credit Card, Debit Card, Net Banking
          etc. You can pay large fee amounts safely using Quickcharge Wallet, Net
          Banking, Debit Card, Credit Card, or UPI. But it's recommended to make
          use of Net Banking in case of big transactions (Rs.20000+), since
          there can be daily transaction limits for your UPI, Credit Card, or
          Debit Card.
        </p>
      </section>
    </>
  );
};

export default Education;
