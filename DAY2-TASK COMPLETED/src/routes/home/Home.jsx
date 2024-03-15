import React from "react";
import { GoDeviceMobile } from "react-icons/go";
import {
  MdMobileScreenShare,
  MdOutlineAddHomeWork,
  MdGasMeter,
  MdOutlinePolicy,
  MdSlowMotionVideo,
} from "react-icons/md";
import { RiLightbulbFlashLine } from "react-icons/ri";
import { GiAerialSignal, GiGasStove, GiWaterTank } from "react-icons/gi";
import { AiOutlineCar } from "react-icons/ai";
import { TbDeviceLandlinePhone } from "react-icons/tb";

import { Link } from "react-router-dom";
import "./home.css";

// payment options
const nav_links = [
  {
    Path: "mobile-recharge",
    display: "MobileRecharge",
    icon: <GoDeviceMobile />,
    offer: "Flat₹20CB",
  },
  {
    Path: "education",
    display: "Education Fee",
    icon: <MdOutlinePolicy />,
  },
  {
    Path: "dth",
    display: "DTH",
    icon: <GiAerialSignal />,
    offer: "Flat₹20CB",
  },
  {
    Path: "water",
    display: "Water",
    icon: <GiWaterTank />,
  },
  {
    Path: "cylinder",
    display: "Book A CYLINDER",
    icon: <GiGasStove />,
    offer: "Flat₹20CB",
  },
  {
    Path: "rentVie",
    display: "Rent Via Credit Card ",
    icon: <MdOutlineAddHomeWork />,
  },
  {
    Path: "electricity",
    display: "Electricity",
    icon: <RiLightbulbFlashLine />,
  },

  {
    Path: "fastTag",
    display: "FastTagRecharge",
    icon: <AiOutlineCar />,
    offer: "Flat₹20CB",
  },

  {
    Path: "landline",
    display: "LandLine",
    icon: <TbDeviceLandlinePhone />,
  },
  {
    Path: "ott",
    display: "OTT",
    icon: <MdSlowMotionVideo />,
    offer: "Flat₹20CB",
  },
];

const Home = () => {
  return (
    <div>
      <h2 className="payment-txt">Payments</h2>
      <ul className="nav-list">
        {nav_links.map((item, Index) => {
          return (
            <li key={Index}>
              <Link to={item.Path}>
                <p className="nav-icon">{item.icon}</p>
              </Link>
              <p className="icon-title">{item.display}</p>
              <p className="icon-title" style={{ color: "#1E8AD3" }}>
                {item.offer}
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Home;
