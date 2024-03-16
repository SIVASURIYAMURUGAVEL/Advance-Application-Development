import React,{useState} from "react";
import "./water.css";

const Water = () => {



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
                <p>Let's Get Your</p>
                <h5>Water Bill Payment Done!</h5>
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
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoJeTSQQKAAFlITgiag6yzEEYjqlS-E69tBA&usqp=CAU"
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
                src="https://dmx246cm6p7k8.cloudfront.net/content/images/circular-operator-logos/bills/CHEN00000TNDAC.webp"
                alt=""
              />
              <h3 className="provider-name">
                Chennai Metropolitan Water Supply
              </h3>
            </li>
            <li className="provider-item">
              <img
                src="                https://dmx246cm6p7k8.cloudfront.net/content/images/circular-operator-logos/bills/KERA00000KERMO.webp
"
                alt=""
              />
              <h3 className="provider-name">Coimbatore water Authority</h3>
            </li>
          </ul>
        </div>
      </section>
      {/* description */}
      <section className="description">
        <h1>Instant Water Bill Payment</h1>
        <p>
          Your water bill payment is just a click away with Freecharge. Trusted
          by over 27 million users, Freecharge is your one-stop shop for online
          recharge! Online water bill payment is a useful method, especially
          when one is running short of time. You do not need to stress over
          paper bills and cheques. Online water bill payment can give you the
          complete flexibility of paying anytime, anywhere; all you need is
          internet access. In the event that you are running late and need
          assistance in paying the water bill, online portals like Quickcharge
          give quick relief. Utilise the assistance that Quickcharge offers, as
          we provide a flexible solution that enables you to securely transfer
          your money using credit card, debit card, or net banking.
        </p>
        <h1>Quickcharge For Online Water Bill Payment</h1>
        <p>
          Above all, you can save a lot of time and avoid paying late charges.
          It is also more secure than paying through the mail. Moreover, you can
          deal with your funds more effectively by paying water bills via
          Freecharge using your debit or credit card. Besides, you can also
          avail various rewards for online recharge.
        </p>
      </section>
    </>
  );
};

export default Water;
