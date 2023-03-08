import './App.css';
import logo from './logo.svg';
import React, { useState } from 'react'; 

function Btn(props) {
  return (
    <button style={{
      backgroundColor : "tomato",
      color : "wheat",
      padding : "10px 20px",
      border : 0,
      borderRadius : 10,
      fontSize : props.fontSize
    }}
    onClick={props.changeValue}
    >
      {props.text}
    </button>
  )
}

const MemoriazeBtn =React.memo(Btn)

function App() {
  const [value, setValue] = useState("Save Change");
  const changeValue = () => setValue("Revert Change");
  return (
    <div className="App">
      <MemoriazeBtn text={value} changeValue={changeValue} />
      <MemoriazeBtn text="Contines" fontSize={18}/>
    </div>
  );
}

export default App;
