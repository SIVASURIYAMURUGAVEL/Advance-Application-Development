import React,{useState} from "react";
import "./Ott.css";

const Ott = () => {


   const [input, setInput] = useState("");

   const handleInput = (e) => {
     const newValue = e.target.value;

     console.log(newValue);

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
                <p>"Subscribe to the Best OTT Content "</p>
                <h5>Just a Few Clicks!</h5>
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
              src="https://support.appsflyer.com/hc/article_attachments/4410336840977/7435_CTV_image.png"
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
                src="https://w7.pngwing.com/pngs/153/31/png-transparent-netflix-macos-bigsur-icon-thumbnail.png"
                alt=""
              />
              <h3 className="provider-name">Netflix</h3>
            </li>
            <li className="provider-item">
              <img
                src="https://dmx246cm6p7k8.cloudfront.net/content/images/circular-operator-logos/bills/SONY00000NAT0P.webp"
                alt=""
              />
              <h3 className="provider-name">SonyLIV</h3>
            </li>
            <li className="provider-item">
              <img
                src="https://dmx246cm6p7k8.cloudfront.net/content/images/circular-operator-logos/bills/POCK00000NATDZ.webp"
                alt=""
              />
              <h3 className="provider-name">Pocket FM</h3>
            </li>
            <li className="provider-item">
              <img
                src="data:image/jpeg;base64,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"
                alt=""
              />
              <h3 className="provider-name">Hotstar</h3>
            </li>
            <li className="provider-item">
              <img
                src="data:image/png;base64,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"
                alt=""
              />
              <h3 className="provider-name">Spotify</h3>
            </li>
            <li className="provider-item">
              <img
                src="https://dmx246cm6p7k8.cloudfront.net/content/images/circular-operator-logos/bills/ZEEE00000NATIS.webp"
                alt=""
              />
              <h3 className="provider-name">ZEE5</h3>
            </li>

            <li className="provider-item">
              <img
                src="https://dmx246cm6p7k8.cloudfront.net/content/images/circular-operator-logos/bills/BYJU00000NATWK.webp"
                alt=""
              />
              <h3 className="provider-name">BYJUS</h3>
            </li>

            <li className="provider-item">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Aha_OTT_Logo.svg/1024px-Aha_OTT_Logo.svg.png"
                alt=""
              />
              <h3 className="provider-name">Aha</h3>
            </li>
          </ul>
        </div>
      </section>

      {/* description */}
      <section className="description">
        <h2 style={{ color: "black" }}>What Is An OTT Platform?</h2>
        <p>
          OTT, the abbreviation of "Over-the-Top"- refers to a modern-day
          technological method of serving movie and television content delivery
          online. It enables the viewers' to stream these contents at any time
          as per their convenience. The modern age OTT platforms take away the
          requirements of conventional broadcasting cable connections. OTT also
          renders the satellite pay-TV providing services redundant since the
          viewers may stream content online from any device using their internet
          connectivity sources. One can get rid of overwhelming cable bills per
          month by taking an OTT subscription.
        </p>
        <h1 style={{ color: "black" }}>
          The Best OTT Platforms' Delivery Services
        </h1>
        <p>
          The nationwide accessibility feature makes the best OTT Platforms in
          India deserve every bit of its hype. The top OTT platforms in India do
          not take anything except for a stable internet connection to access.
          Any electronic device that can load browsers and OTT applications can
          load these shows through the internet.
        </p>
        <h1 style={{ color: "black" }}>Renew OTT Subscription On QuickCharge</h1>
        <p>
          For ott subscription renewal through QuickCharge, a customer needs to
          enter the QuickCharge app by signing up there. After that, tap through
          the payment gateway for making payments for the ott subscription. One
          may also get these options on any browser. Then, tap on the OTT
          platforms you wish to get subscribed with for the OTT renewal. While
          making payments from the browser, one must put the mobile number for
          the subscription process. And choosing the duration of the
          subscription, one may choose to pay the subscription in whichever
          payment mode suits one's preferences.
        </p>
      </section>
    </>
  );
};

export default Ott;
