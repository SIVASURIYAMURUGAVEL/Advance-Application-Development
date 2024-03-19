import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/css/Recharge_Plans.css';
import Navbar from '../components/Navbar';

const Recharge_Plans = () => {
  const [mobileNumber, setMobileNumber] = useState('');
  const [operator, setOperator] = useState('');
  const [selectedPlan, setSelectedPlan] = useState('');
  const [rechargeType, setRechargeType] = useState('prepaid'); // Default to prepaid
  const [availablePlans, setAvailablePlans] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if there is a selected plan in session storage
    const storedPlan = sessionStorage.getItem('selectedPlan');
    if (storedPlan) {
      setSelectedPlan(storedPlan);
      // Clear the selected plan from session storage once retrieved
      sessionStorage.removeItem('selectedPlan');
    }

    // Check if there is a stored mobile number, operator, and recharge type in session storage
    const storedMobileNumber = sessionStorage.getItem('mobileNumber');
    const storedOperator = sessionStorage.getItem('operator');
    const storedRechargeType = sessionStorage.getItem('rechargeType');
    if (storedMobileNumber && storedOperator && storedRechargeType) {
      setMobileNumber(storedMobileNumber);
      setOperator(storedOperator);
      setRechargeType(storedRechargeType);
      setAvailablePlans(getPlansForOperator(storedOperator));
    }
  }, []); // Empty dependency array ensures this effect runs only once when the component mounts

  const getPlansForOperator = (selectedOperator) => {
    switch (selectedOperator) {
      case 'Airtel':
        return ['Airtel ₹199 Plan: Unlimited calls, 2GB/day data, 100 SMS/day', 'Airtel ₹399 Plan: Unlimited calls, 3GB/day data, 100 SMS/day', 'Airtel ₹599 Plan: Unlimited calls, 4GB/day data, 100 SMS/day'];
      case 'Vodafone':
        return ['Vodafone ₹249 Plan: Unlimited calls, 1.5GB/day data, 100 SMS/day', 'Vodafone ₹349 Plan: Unlimited calls, 2GB/day data, 100 SMS/day', 'Vodafone ₹499 Plan: Unlimited calls, 3GB/day data, 100 SMS/day'];
      case 'Jio':
        return ['Jio ₹149 Plan: Unlimited calls, 1GB/day data, 100 SMS/day', 'Jio ₹349 Plan: Unlimited calls, 3GB/day data, 100 SMS/day', 'Jio ₹599 Plan: Unlimited calls, 2GB/day data, 100 SMS/day'];
      default:
        return [];
    }
  };
  

  const handleChangeOperator = (selectedOperator) => {
    setOperator(selectedOperator);
    sessionStorage.setItem('operator', selectedOperator);
    setAvailablePlans(getPlansForOperator(selectedOperator));
    setSelectedPlan(''); // Reset selected plan when operator changes
  };

  const handleChangePlan = (selectedPlan) => {
    setSelectedPlan(selectedPlan);
    sessionStorage.setItem('selectedPlan', selectedPlan);
  };

  const handleRechargeTypeChange = (e) => {
    setRechargeType(e.target.value);
    sessionStorage.setItem('rechargeType', e.target.value);
  };

  const handleRecharge = () => {
    // Display an alert with the selected plan and recharge type
    alert(`Recharging ${rechargeType === 'prepaid' ? 'Prepaid' : 'Postpaid'} with: ${selectedPlan}`);
  };

  return (
    <div className="container">
      <Navbar />
      
      
      <h1 style={{ color: 'white' }}>Recharge Plans</h1>
      <form>
        <label htmlFor="mobileNumber">Mobile Number:</label>
        <input
          style={{ width: '250px' }}
          type="tel"
          id="mobileNumber"
          name="mobileNumber"
          value={mobileNumber}
          onChange={(e) => {
            setMobileNumber(e.target.value);
            sessionStorage.setItem('mobileNumber', e.target.value);
          }}
          required
        />
          
        {/* Existing form elements... */}

        {/* Add a label and select input for recharge type */}
        <label htmlFor="rechargeType">Select Recharge Type:</label>
        <select
          style={{ width: '250px', height: '35px' }}
          id="rechargeType"
          name="rechargeType"
          value={rechargeType}
          onChange={handleRechargeTypeChange}
          required
        >
          <option value="prepaid">Prepaid</option>
          <option value="postpaid">Postpaid</option>
        </select>
        <label htmlFor="operator">Choose Operator:</label>
        <select
          style={{ width: '250px', height: '35px' }}
          id="operator"
          name="operator"
          value={operator}
          onChange={(e) => handleChangeOperator(e.target.value)}
          required
        >
          <option value="" disabled>
            Select an operator
          </option>
          <option value="Airtel">Airtel</option>
          <option value="Vodafone">Vodafone</option>
          <option value="Jio">Jio</option>
          <option value="BSNL">BSNL</option>
          {/* Add more operators as needed */}
       

        </select>

        {availablePlans.length > 0 && (
          <div>
            <label htmlFor="choosePlans">Choose Plans:</label>
            <select
              style={{ width: '250px', height: '35px' }}
              id="choosePlans"
              name="choosePlans"
              value={selectedPlan}
              onChange={(e) => handleChangePlan(e.target.value)}
              required
            >
              <option value="" disabled>
                Select a plan
              </option>
              {availablePlans.map((plan) => (
                <option key={plan} value={plan}>
                  {plan}
                </option>
              ))}
            </select>
          </div>
        )}
      </form>

      <button
        style={{ backgroundColor: '#be43fb' }}
        onClick={handleRecharge}
        disabled={!selectedPlan}
      >
        Recharge
      </button>
    </div>
  );
};

export default Recharge_Plans;
