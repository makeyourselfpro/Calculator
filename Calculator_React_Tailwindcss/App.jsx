import { useState } from "react"

function App() {
  const [val, setVal] = useState("");
  const clear = () => { try { setVal("") } catch (error) { alert("error") } };
  const calculate = () => { try { setVal(eval(val)) } catch (error) { alert("error") } };
  return (
    <div className="p-2 bg-blue-300 w-2/6 m-5 mx-auto shadow-lg rounded-md">
      <input className="p-2 rounded-lg w-full" placeholder="Enter Number" value={val} />
      <div className="grid grid-cols-4">

        <button className="p-2 hover:bg-yellow-400 m-1 bg-white rounded-md" value="1" onClick={(e) => { setVal(val + e.target.value) }}>1</button>
        <button className="p-2 hover:bg-yellow-400 m-1 bg-white rounded-md" value="2" onClick={(e) => { setVal(val + e.target.value) }}>2</button>
        <button className="p-2 hover:bg-yellow-400 m-1 bg-white rounded-md" value="3" onClick={(e) => { setVal(val + e.target.value) }}>3</button>
        <button className="p-2 hover:bg-yellow-400 m-1 bg-white rounded-md" value="4" onClick={(e) => { setVal(val + e.target.value) }}>4</button>
        <button className="p-2 hover:bg-yellow-400 m-1 bg-white rounded-md" value="5" onClick={(e) => { setVal(val + e.target.value) }}>5</button>
        <button className="p-2 hover:bg-yellow-400 m-1 bg-white rounded-md" value="6" onClick={(e) => { setVal(val + e.target.value) }}>6</button>
        <button className="p-2 hover:bg-yellow-400 m-1 bg-white rounded-md" value="7" onClick={(e) => { setVal(val + e.target.value) }}>7</button>
        <button className="p-2 hover:bg-yellow-400 m-1 bg-white rounded-md" value="8" onClick={(e) => { setVal(val + e.target.value) }}>8</button>
        <button className="p-2 hover:bg-yellow-400 m-1 bg-white rounded-md" value="9" onClick={(e) => { setVal(val + e.target.value) }}>9</button>
        <button className="p-2 hover:bg-yellow-400 m-1 bg-white rounded-md" value="0" onClick={(e) => { setVal(val + e.target.value) }}>0</button>
        <button className="p-2 hover:bg-yellow-400 m-1 bg-white rounded-md" value="." onClick={(e) => { setVal(val + e.target.value) }}>.</button>
        <button className="p-2 hover:bg-yellow-400 m-1 bg-white rounded-md" value="+" onClick={(e) => { setVal(val + e.target.value) }}>+</button>
        <button className="p-2 hover:bg-yellow-400 m-1 bg-white rounded-md" value="-" onClick={(e) => { setVal(val + e.target.value) }}>-</button>
        <button className="p-2 hover:bg-yellow-400 m-1 bg-white rounded-md" value="/" onClick={(e) => { setVal(val + e.target.value) }}>/</button>
        <button className="p-2 hover:bg-yellow-400 m-1 bg-white rounded-md" value="*" onClick={(e) => { setVal(val + e.target.value) }}>*</button>
<button className="p-2 hover:bg-yellow-400 m-1 bg-white rounded-md" value="C" onClick={()=>{clear()}}>C</button>
<button className="p-2 hover:bg-yellow-400 m-1 bg-white rounded-md" value="=" onClick={()=>{calculate()}}>=</button>
      </div>

    </div>
    )
}
export default App
