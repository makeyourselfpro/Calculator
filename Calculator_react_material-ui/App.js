import { Container, Input, Button } from "@mui/material";
import "./App.css"
import { useState } from "react";
function App() {
  const [val, setVal] = useState("");
  const Clear = () => { try { setVal("") } catch (error) { alert("error") } };
  const calculation = () => { try { setVal(eval(val)) } catch (error) { alert("error") } };
  return (
    <div className="App">
      <div className="container">
        <Input placeholder="Enter Number" style={{ border: "1px solid gray" }} value={val}  className="display"/>
        <div className="grid">
          <Button variant="outlined" value="1" onClick={(e) => { setVal(val + e.target.value) }}>1</Button>
          <Button variant="outlined" value="2" onClick={(e) => { setVal(val + e.target.value) }}>2</Button>
          <Button variant="outlined" value="3" onClick={(e) => { setVal(val + e.target.value) }}>3</Button>
          <Button variant="outlined" value="4" onClick={(e) => { setVal(val + e.target.value) }}>4</Button>
          <Button variant="outlined" value="5" onClick={(e) => { setVal(val + e.target.value) }}>5</Button>
          <Button variant="outlined" value="6" onClick={(e) => { setVal(val + e.target.value) }}>6</Button>
          <Button variant="outlined" value="7" onClick={(e) => { setVal(val + e.target.value) }}>7</Button>
          <Button variant="outlined" value="8" onClick={(e) => { setVal(val + e.target.value) }}>8</Button>
          <Button variant="outlined" value="9" onClick={(e) => { setVal(val + e.target.value) }}>9</Button>
          <Button variant="outlined" value="0" onClick={(e) => { setVal(val + e.target.value) }}>0</Button>
          <Button variant="outlined" value="." onClick={(e) => { setVal(val + e.target.value) }}>.</Button>
          <Button variant="outlined" value="+" onClick={(e) => { setVal(val + e.target.value) }}>+</Button>
          <Button variant="outlined" value="-" onClick={(e) => { setVal(val + e.target.value) }}>-</Button>
          <Button variant="outlined" value="/" onClick={(e) => { setVal(val + e.target.value) }}>/</Button>
          <Button variant="outlined" value="*" onClick={(e) => { setVal(val + e.target.value) }}>*</Button>
          <Button variant="outlined" value="C" onClick={() => { Clear() }}>C</Button>
          <Button variant="outlined" value="=" onClick={() => { calculation() }}>=</Button>
        </div>
      </div>
    </div>
  );
}

export default App;
