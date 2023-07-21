import { useState } from "react"

function App() {
  const [val, setVal] = useState("");
  const clear = () => { try { setVal("") } catch (error) { alert("error") } };
  const calculate = () => { try { setVal(eval(val)) } catch (error) { alert("error") } };
  return (
    <div className="border p-2 w-50 m-5 mx-auto shadow">
      <input placeholder="Enter Number" className="p-2 w-100" value={val} />
      <div className="row p-3">
        <button className="col-3 bg-light border-1 py-2" onClick={(e) => setVal(val + e.target.value)} value="1">1</button>
        <button className="col-3 bg-light border-1 py-2" onClick={(e) => setVal(val + e.target.value)} value="2">2</button>
        <button className="col-3 bg-light border-1 py-2" onClick={(e) => setVal(val + e.target.value)} value="3">3</button>
        <button className="col-3 bg-light border-1 py-2" onClick={(e) => setVal(val + e.target.value)} value="4">4</button>
        <button className="col-3 bg-light border-1 py-2" onClick={(e) => setVal(val + e.target.value)} value="5">5</button>
        <button className="col-3 bg-light border-1 py-2" onClick={(e) => setVal(val + e.target.value)} value="6">6</button>
        <button className="col-3 bg-light border-1 py-2" onClick={(e) => setVal(val + e.target.value)} value="7">7</button>
        <button className="col-3 bg-light border-1 py-2" onClick={(e) => setVal(val + e.target.value)} value="8">8</button>
        <button className="col-3 bg-light border-1 py-2" onClick={(e) => setVal(val + e.target.value)} value="9">9</button>
        <button className="col-3 bg-light border-1 py-2" onClick={(e) => setVal(val + e.target.value)} value="0">0</button>
        <button className="col-3 bg-light border-1 py-2" onClick={(e) => setVal(val + e.target.value)} value="-">-</button>
        <button className="col-3 bg-light border-1 py-2" onClick={(e) => setVal(val + e.target.value)} value="+">+</button>
        <button className="col-3 bg-light border-1 py-2" onClick={(e) => setVal(val + e.target.value)} value="/">/</button>
        <button className="col-3 bg-light border-1 py-2" onClick={(e) => setVal(val + e.target.value)} value="*">*</button>
        <button className="col-3 bg-light border-1 py-2" onClick={(e) => setVal(val + e.target.value)} value=".">.</button>
<button className="col-3 bg-light border-1 py-2" onClick={()=>clear()} value="C">C</button>
<button className="col-3 bg-light border-1 py-2" onClick={()=> calculate()} value="=">=</button>
      </div>

    </div>
  )
}

export default App
