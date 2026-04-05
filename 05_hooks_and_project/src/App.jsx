import "./App.css";
import { useState } from "react";

function App() {
  let [counter , setCounter] = useState(0)
  const addValue = () => {
    console.log('clicked')
    setCounter(counter+1)
    if(counter>=20){
      setCounter(counter)
    }
  };
  const decreaseValue = () =>{
    setCounter(counter-1)
    if(counter<=0){
      setCounter(counter)
    }
  }
  return (
    <>
      <h1>React By Abdul-Rasheed</h1>
      <h2>Couter Value : {counter}</h2>
      <button onClick={addValue}>Add Value</button>
      <br />
      <p>{counter}</p>
      <button onClick={decreaseValue}>Decrease Value</button>
    </>
  );
}

export default App;
