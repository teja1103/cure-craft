// BMICalculatorPage.tsx
import React, { useState } from 'react';

function BMICalculatorPage() {
  const [height, setHeight] = useState<string>('');
  const [weight, setWeight] = useState<string>('');
  const [bmi, setBMI] = useState<string>('');

  const calculateBMI = () => {
    // Perform BMI calculation logic here
    const bmiResult = +weight / ((+height / 100) * (+height / 100));
    setBMI(bmiResult.toFixed(2));
  };

  return (
    <div>
      <h1>BMI Calculator</h1>
      <input
        type="text"
        placeholder="Height (in cm)"
        value={height}
        onChange={(e) => setHeight(e.target.value)}
      />
      <br/>
      <input
        type="text"
        placeholder="Weight (in kg)"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
      />
    <br/>
      <button onClick={calculateBMI}>Calculate</button>
      {bmi && <p>Your BMI is: {bmi}</p>}
    </div>
  );
}

export default BMICalculatorPage;
