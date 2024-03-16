import React from "react";
import "./recharge.css";
import { MdMobileFriendly } from "react-icons/md";
import IMG from "../../../assets/recharge-img.png";
const Recharge = () => {

  return (
    <>
      <section>
        <div className="recharge-container">
          <div className="left-content">
            <div className="title-box">
              <MdMobileFriendly className="mobile-icon" />
              <div className="title">
                <p>"Top up your phone, top up your life</p>
                <h5>"Recharge on go with our app!"</h5>
              </div>
            </div>
            {/* input container */}
            <form>
              <div className="form-group">
                <input type="number" placeholder="Enter Your Mobile Number"/>
                <p>Please Enter Valid Mobile Number</p>
              </div>
              <div className="form-group">
                <select className="select" id="my-input">
                  <option value="option1" className="option">
                    Postpaid
                  </option>
                  <option value="option2">Prepaid</option>
                </select>
                <p>Select your plan</p>
              </div>
              <div className="form-group">
                <select className="select" id="my-input">
                  <option value="option1" className="option">
                    Airtel
                  </option>
                  <option value="option1" className="option">
                    jio
                  </option>
                  <option value="option1" className="option">
                    vodafone
                  </option>
                  <option value="option1" className="option">
                    Bsnl
                  </option>
                </select>
                <p>Please select valid operator</p>
              </div>
              <button type="button" className="btn-submit">
                Next
              </button>
            </form>
          </div>
          {/* right container */}
          <div className="right-content">
            <img src={IMG} alt="" className="lady-img" />
          </div>
        </div>
      </section>
      {/* description */}
      <section className="description">
        <h1>
          Easy And Convenient Mobile Recharge For All Operators In India On
          Quick Charge
        </h1>
        <p>
          QuickCharge is an online platform that provides a quick and convenient
          solution for mobile recharge. With FreeCharge, you can recharge your
          mobile phone from anywhere, at any time, with just a few clicks. The
          platform offers a user-friendly interface, and the process of recharge
          is fast and secure. Quickcharge offers a mobile recharge option through
          which you can make a postpaid, prepaid mobile recharge, utility bill
          payments, cable tv, education fees etc. It is an instant and easy
          recharging process, a secure and safe payment option, and offers a
          hassle-free online experience.
        </p>
        <h1>Some Of The Common Types Of Mobile Recharge Plans Include:</h1>
        <ol type="1">
          <li>
            Talktime Plans: Offer a fixed amount of talk time or calling
            minutes, without any data benefits.
          </li>
          <li>
            Data Plans: Offer a fixed amount of data, without any talk time
            benefits.
          </li>
          <li>
            Combo Plans: Offer a combination of talk time and data benefits.
          </li>
          <li>
            Special Recharge Plans: Offer special benefits, such as discounts on
            international calls, unlimited roaming, or free SMS.
          </li>
          <li>
            Postpaid Plans: Allow customers to recharge after using their
            services, with monthly billing and payment.
          </li>
          <li>
            Prepaid Plans: Allow customers to recharge their phones in advance,
            with a fixed amount of talk time and data.
          </li>
        </ol>
        <p>
          Browse through the Recommended Plans, Data Plans(2G,3G,4G), Full
          Talktime Plans data plans, Roaming Plans, Special Plans, and many more
          and grab the best offers on all recharges. Not only can you get the
          best recharge offers and plans for all the major operators on
          Quickcharge, you also get exclusive offers. These offers are applicable
          on Jio Prepaid recharge offers and plans, Airtel Prepaid plans and
          offers, BSNL recharge plans and offers, VI plans and offers, etc. With
          every mobile recharge through QuickCharge, you earn assured cashback up
          to 100% without any promo code. Additionally, QuickCharge releases
          daily and occasional promo codes from time to time to give you
          additional exclusive benefits on your prepaid mobile recharges. You
          can also take the advantage of exclusive bank offers when available.
        </p>
      </section>
    </>
  );
};

export default Recharge;
