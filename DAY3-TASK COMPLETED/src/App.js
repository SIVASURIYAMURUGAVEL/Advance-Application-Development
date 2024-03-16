import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/Home";
import NavLayout from "./routes/nav-layout/NavLayout";
import Recharge from "./routes/pages/recharge/Recharge";
import CreditCard from "./routes/pages/creditcard/CreditCard";
import Dth from "./routes/pages/dth/Dth";
import Electricity from "./routes/pages/electricity/Electricity";
import FastTag from "./routes/pages/fasttag/FastTag";
import Cylinder from "./routes/pages/cylinder/Cylinder";
import LandLine from "./routes/pages/landline/LandLine";
import Ott from "./routes/pages/gas/Ott";
import Water from "./routes/pages/water/Water";
import Education from "./routes/pages/education/Education";

const App = () => {
  return (
    // it define all the routes of the application
    <Routes>
      {/* route define a single route */}

      {/* nav-layout provides a consistent navigation */}
      {/* parent path true then home also came */}
      <Route path="/" element={<NavLayout />}>
        <Route index={true} element={<Home />} />
        <Route path="cylinder" element={<Cylinder />} />
        <Route path="electricity" element={<Electricity />} />
        <Route path="fastTag" element={<FastTag />} />
        <Route path="dth" element={<Dth />} />
        <Route path="ott" element={<Ott />} />
        <Route path="landline" element={<LandLine />} />
        <Route path="mobile-recharge" element={<Recharge />} />
        <Route path="rentVie" element={<CreditCard />} />
        <Route path="water" element={<Water />} />
        <Route path="education" element={<Education />} />
      </Route>
    </Routes>
  );
};

export default App;
