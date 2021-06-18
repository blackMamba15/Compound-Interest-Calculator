import React, { useState } from "react";
import './style.css';

function CompoundInterest () {
  const [principal, setPrincipal] = useState(0);
  const [years, setYears] = useState(0);
  const [interest, setInterest] = useState(0);
  const[frequency,setFrequency]=useState(0);
  const [result, setResult] = useState(0);



  function calculate () {

    const result = principal * Math.pow(1 + interest/frequency, frequency*years);
    setResult(result.toFixed(2));
  };

  
  return (
      <div>
        
        <form className="interest">
          <label for="principal">Enter the Initial Investment </label>
          <input type="number" placeholder="Principal Amount" onChange={(e) => setPrincipal(e.target.value)}/>
          <br />
          <br />
         <label for="year">Enter no. of Years </label>
         <input type="number" placeholder="Years" onChange={(e) => setYears(e.target.value)} />
         <br />
          <br />     
          <label for="year">Compound Frequency in a year</label>
         <input type="number" placeholder="Frequency" onChange={(e) => setFrequency(e.target.value)} />
         <br />
          <br />        
         <label for="interest">Rate of Interest (in %) </label>
         <input type="number" placeholder="Interest" onChange={(e) => setInterest(e.target.value/100 )}  />
          <br />
          <br />
          <button  className="button" onClick={(e) => { e.preventDefault(); calculate() }} > Calculate</button>
          <br />
          <br />
          <div className="ci">The Compound Interest is <br/> Rs. {result}</div>
        </form>
      </div>
  );
};


export default CompoundInterest