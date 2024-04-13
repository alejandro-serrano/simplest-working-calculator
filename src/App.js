import {
  useState,
  useRef
} from "react"; 
import "./App.css";

function App() { 
  const inputRef = useRef(null);
  const resultRef = useRef(null);
  const [result, setResult] = useState(0);
 
  function plus(e) { 
    e.preventDefault();
    setResult((result) => result + Number(inputRef.current.value)); 
  }; 
 
  function minus(e) { 
    e.preventDefault();
    setResult((result) => result - Number(inputRef.current.value));
  };
 
  function times(e) { 
    e.preventDefault();
    setResult((result) => result * Number(inputRef.current.value));
  }; 
 
  function divide(e) { 
    e.preventDefault();
    setResult((result) => {
      let currentResult = result / Number(inputRef.current.value);
      // Preventing a division by 0
      return Number.isNaN(currentResult) || !Number.isFinite(currentResult) ? 0 : currentResult;
    });
  };
 
  function resetInput(e) {
    e.preventDefault();
    inputRef.current.value = "";
  }; 
 
  function resetResult(e) { 
    e.preventDefault();
    setResult((result) => { 
      let currentResult = result * 0;
      // Preventing a Nan result
      return Number.isNaN(currentResult) || !Number.isFinite(currentResult) ? 0 : currentResult;
    });
  }; 
 
  return ( 
    <div className="App"> 
      <div> 
        <h1>Simplest Working Calculator</h1> 
      </div> 
      <form> 
        <p ref={resultRef}> 
          {result}
        </p> 
        <input
          pattern="[0-9]" 
          ref={inputRef} 
          type="number" 
          placeholder="Type a number" 
        /> 
        <button onClick={plus}>add</button> 
        <button onClick={minus}>substract</button>
        <button onClick={times}>multiply</button>
        <button onClick={divide}>divide</button>
        <button onClick={resetInput}>reset input</button>
        <button onClick={resetResult}>reset result</button>
      </form> 
    </div> 
  ); 
} 
 
export default App; 
