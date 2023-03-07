import './App.css';
import React, { useState } from 'react'; 

function App() {
  const [index, setIndex] = useState("xx")
  const onSelect = (event) => {
    setIndex(event.target.value);
  }

  return (
    <div className="App">
      <h1>Super Converter</h1>
      <select value={index} onChange={onSelect}>
        <option value="xx">Select your units</option>
        <option value="0">Minutes & Hours</option>
        <option value="1">Km & Miles</option>
      </select>
      <hr />
      {index === "xx" ? "plese select" : null}
      {index === "0" ? <MinutesToHours/> : null}
      {index === "1" ? <KmToMiles/> : null}
    </div>
  );
}

function KmToMiles(){
  const [amount, setAmount] = useState()
  const [inverted, setInverted] = useState(false);
  const onChange = (event) => {
    setAmount(event.target.value);
  }

  const reset = () =>{setAmount(0)};
  const onFlip = () => {
    reset();
    setInverted((currunt) => !currunt)
  };
  return (
    <div>
       <h3>KM 2 Miles</h3>
       <div>
        <label htmlFor="km">Km</label>
        <input 
          value={inverted ?  amount*1.609344 : amount} 
          id="km" 
          placeholder='Km'
          type="Number"
          onChange={onChange}
          disabled={inverted}
        />
      </div>
      <div>
        <label htmlFor="miles">Miles</label>
        <input 
          value={inverted ? amount : amount/1.609344}
          id="miles" 
          placeholder='Miles' 
          type="Number"
          onChange={onChange}
          disabled={!inverted}
        />
      </div>
      <button onClick={reset}>Reset</button>
      <button onClick={onFlip}>{inverted ? "Turn back" : "Invert"} </button>
    </div>
 )
}
function MinutesToHours () {
  const [amount, setAmount] = useState()
  const [inverted, setInverted] = useState(false);
  const onChange = (event) => {
    setAmount(event.target.value);
  }

  const reset = () =>{setAmount(0)};
  const onFlip = () => {
    reset();
    setInverted((currunt) => !currunt)
  };
  return (
    <div>
      <div>
        <label htmlFor="minutes">Minutes</label>
        <input 
          value={inverted ?  amount*60 : amount}
          id="minutes" 
          placeholder='Minutes'
          type="Number"
          onChange={onChange}
          disabled={inverted}
        />
      </div>
      <div>
        <label htmlFor="hours">Hours</label>
        <input 
          value={inverted ? amount : Math.round(amount/60)}
          id="hours" 
          placeholder='Hours' 
          type="Number"
          onChange={onChange}
          disabled={!inverted}
        />
      </div>
      <button onClick={reset}>Reset</button>
      <button onClick={onFlip}>{inverted ? "Turn back" : "Invert"} </button>
    </div>
  )
}

export default App;
