import React, { useState } from 'react';
import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@mui/material';
import '../assets/css/Add_On.css'
import Navbar from '../components/Navbar';

const Add_On = () => {
  const [selectedAddOn, setSelectedAddOn] = useState('');
  const [mobileNumber, setmobileNumber] = useState('');

  const handleAddOnSelection = (addOn) => {
    setSelectedAddOn(addOn);
  };

  const handlemobileNumberChange = (e) => {
    setmobileNumber(e.target.value);
  };

  const handleRecharge = () => {
    
    alert(`Recharging mobile number ${mobileNumber} with ${selectedAddOn} add-on`);
  };

  return (
    <div className="container">
      <Navbar />
      <h1 className="heading">Recharge Add-Ons</h1><br></br>
      <label htmlFor="mobileNumber">Enter Mobile Number:</label>
      <input
        className="inputField"
        type="tel"
        id="mobileNumber"
        placeholder="Enter your mobile number"
        value={mobileNumber}
        onChange={handlemobileNumberChange}
      />
      <br />

      <div>
        <FormControl>
          <FormLabel style={{ color: 'white' }} className="radioGroupLabel">Choose Add-On:</FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            name="radio-buttons-group"
            value={selectedAddOn}
            onChange={(e) => handleAddOnSelection(e.target.value)}
          >
            <FormControlLabel value="datapack" control={<Radio />} label="Data Pack" />
            <FormControlLabel value="talktime" control={<Radio />} label="Talktime" />
            <FormControlLabel value="sms" control={<Radio />} label="SMS Pack" />
          </RadioGroup>
        </FormControl>
      </div>

      <br />

      <button style={{ backgroundColor: '#be43fb' }} className="rechargeButton" type="button" onClick={handleRecharge}>
        Recharge Now
      </button>
    </div>
  );
};

export default Add_On;
