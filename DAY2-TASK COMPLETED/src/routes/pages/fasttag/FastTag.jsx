import React, { useState } from "react";
import "./fasttag.css";

const FastTag = () => {
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
                <h5>"Pay FastTag bills in seconds"</h5>
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
              src="https://parkplus.io/_next/image?url=https%3A%2F%2Fstrapi-file-uploads.s3.ap-south-1.amazonaws.com%2FGroup_1121_35de7262bd.png&w=1920&q=75"
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
                src="https://dmx246cm6p7k8.cloudfront.net/content//images/circular-operator-logos/bills/Paytm_Payments_Bank_FASTag.webp"
                alt=""
              />
              <h3 className="provider-name">Paytm Payments</h3>
            </li>
            <li className="provider-item">
              <img
                src="https://dmx246cm6p7k8.cloudfront.net/content/images/circular-operator-logos/bills/AIRT00000NATVI.webp"
                alt=""
              />
              <h3 className="provider-name">Airtel Payments</h3>
            </li>
            <li className="provider-item">
              <img
                src="https://dmx246cm6p7k8.cloudfront.net/content//images/circular-operator-logos/bills/Axis_Bank_FASTag.webp"
                alt=""
              />
              <h3 className="provider-name">Axis Bank Payments</h3>
            </li>
            <li className="provider-item">
              <img
                src="https://dmx246cm6p7k8.cloudfront.net/content//images/circular-operator-logos/bills/ICICI_Bank_Fastag.webp"
                alt=""
              />
              <h3 className="provider-name">ICIC Bank</h3>
            </li>
            <li className="provider-item">
              <img
                src="https://dmx246cm6p7k8.cloudfront.net/content/images/circular-operator-logos/bills/2914000SBIFASTAG.webp"
                alt=""
              />
              <h3 className="provider-name">Sbi Payments</h3>
            </li>
            <li className="provider-item">
              <img
                src="https://dmx246cm6p7k8.cloudfront.net/content//images/circular-operator-logos/bills/HDFC_-_FASTag.webp"
                alt=""
              />
              <h3 className="provider-name">HDFC-FASTag </h3>
            </li>
            <li className="provider-item">
              <img
                src="https://dmx246cm6p7k8.cloudfront.net/content//images/circular-operator-logos/bills/The_Federal_Bank_Limited.webp"
                alt=""
              />
              <h3 className="provider-name">Federal Bank</h3>
            </li>
            <li className="provider-item">
              <img
                src="https://dmx246cm6p7k8.cloudfront.net/content/images/circular-operator-logos/bills/UNIO00000NATZW.png"
                alt=""
              />
              <h3 className="provider-name">Union Bank</h3>
            </li>
            <li className="provider-item">
              <img
                src="https://dmx246cm6p7k8.cloudfront.net/content/images/circular-operator-logos/bills/CANA00000NATM9.webp"
                alt=""
              />
              <h3 className="provider-name">Canara Fastag</h3>
            </li>
            <li className="provider-item">
              <img
                src="https://dmx246cm6p7k8.cloudfront.net/content/images/circular-operator-logos/bills/Bank_of_Baroda_-_Fastag.webp"
                alt=""
              />
              <h3 className="provider-name">Bank of Baroda</h3>
            </li>
            <li className="provider-item">
              <img
                src="https://dmx246cm6p7k8.cloudfront.net/content//images/circular-operator-logos/bills/Kotak_Mahindra_Bank_-_Fastag.webp"
                alt=""
              />
              <h3 className="provider-name">Kotak Mahindra</h3>
            </li>
            <li className="provider-item">
              <img
                src="https://dmx246cm6p7k8.cloudfront.net/content/images/circular-operator-logos/bills/IDBI00000NATK7.webp"
                alt=""
              />
              <h3 className="provider-name">IDBI Bank</h3>
            </li>
          </ul>
        </div>
      </section>
      {/* description */}
      <section className="description">
        <h1>Online FASTag Recharge Made Simple With QuickCharge</h1>
        <p>
          Fast Tag is an electronic toll collection system that allows you to
          pay toll fees without stopping at the toll booth. With our Fast Tag
          recharge service, you can easily recharge your Fast Tag account and
          keep it topped up. This will ensure that you have a smooth and
          hassle-free experience while driving on toll roads. Our Fast Tag
          recharge service is fast, secure, and easy to use. Simply enter your
          Fast Tag number and recharge amount, and your account will be credited
          instantly. So, recharge your Fast Tag account today and enjoy a
          seamless driving experience!
        </p>
        <h2>Benefits Of FASTag</h2>
        <ul>
          <li>
            Fastag allows for seamless and cashless payment at toll plazas,
            eliminating the need for physical currency.
          </li>
          <li>
            Saves time: Fast Tag allows you to skip the long lines at toll
            booths, making your journey faster and more convenient.
          </li>
          <li>
            Reduces congestion: With Fast Tag, you can easily pass through toll
            gates without stopping, which helps reduce traffic congestion.
          </li>
          <li>
            Cashless transactions: You don't need to carry cash or wait for
            change while paying toll fees with Fast Tag, making it a hassle-free
            and cashless transaction.
          </li>
          <li>
            Cashless transactions: You don't need to carry cash or wait for
            change while paying toll fees with Fast Tag, making it a hassle-free
            and cashless transaction.
          </li>
          <li>
            Saves money: Fast Tag users can avail of discounts on toll fees,
            helping them save money on their travel expenses.
          </li>
          <li>
            Greater transparency: With Fast Tag, you can easily track your toll
            payments, providing greater transparency and control over your
            expenses.
          </li>
          <li>
            Reduces carbon footprint: By reducing traffic congestion and idling
            time, Fast Tag can help reduce carbon emissions from vehicles
          </li>
          <li>
            Widely accepted: Fast Tag is accepted across all toll plazas on
            national highways, state highways, and select city toll plazas,
            making it a widely accepted mode of payment.
          </li>
          <li>
            Accessibility: Fast Tag can be used by all kinds of vehicles,
            including cars, buses, trucks, and even two-wheelers.
          </li>
          <li>
            Saves energy: With reduced congestion and idling time, Fast Tag can
            help save energy and reduce fuel consumption.
          </li>
        </ul>
        <h2>Frequently Asked Questions On Fastag Recharge Online</h2>
        <ol type="1">
          <li>What Is Fastag Recharge?</li>
          <p>
            FASTag is electronic toll-collection chip operated by National
            Highway Authority of India. Fastag Sticker is affixed on the
            windscreen of the vehicle. This means that you do not have to wait
            at toll gates as charges are deducted electronically.
          </p>
          <li>What Are The Benefits Of Using FASTag?</li>
          <p>
            As per the government offering, toll payments made via FASTag are
            eligible for 2.5 percent cashback. In addition, FASTags ensure
            smoother traffic movement and prevent congestion at toll booths.
          </p>
          <li>Is FASTag Mandatory?</li>
          <p>
            Yes. FASTag has been made mandatory by the government of India for
            all private and commercial vehicles.
          </p>
          <li>How To Buy A FASTag?</li>
          <p>
            The NHAI has authorised 23 banks to provide FASTag cards. These
            banks, in association with NHAI plazas, petrol pumps, and transport
            hubs have set up more than 28000 FASTag sale terminals across the
            country. Apart from this, several digital platforms such as Flipkart
            and Amazon provide these cards online.
          </p>
        </ol>
      </section>
    </>
  );
};

export default FastTag;
