import React, { useState } from "react";

function Calci() {
    let [value, setValue] = useState("")
  return (
    <div className="container">
      <div className="inner">
        <div className="screen">
            {value}
        </div>
        <div className="btn-div">
    
      
          <button onClick={()=> setValue( value + 7)}className="btn">7</button>
          <button onClick={()=> setValue(value + 8)} className="btn">8</button>
          <button  onClick={()=> setValue( value + 9)}className="btn">9</button>

          <button onClick={()=> setValue( value +4)}className="btn">4</button>
          <button onClick={()=>  setValue( value + 5)}className="btn">5</button>
          <button onClick={()=> setValue( value + 6)}className="btn">6</button>
          <button onClick={()=> setValue(value + "0")} className="btn">00</button>
         
          <button  onClick={()=> setValue(value + 3)}className="btn">3</button>
          <button onClick={()=> setValue(value + 1)} className="btn">1</button>
          <button onClick={()=> setValue(value + 2)} className="btn">2</button>
    

          
          <button onClick={()=> setValue ("")}className="btn">c</button>
          <button onClick={()=> setValue(value + "-")} className="btn">-</button>            
          <button  onClick={()=> setValue(value + "+")}className="btn">+</button>
          <button  onClick={()=> setValue(value + "*")}className="btn">*</button>
          <button onClick={()=> setValue(eval(value))}className="btn">=</button>
          <button onClick={()=> setValue(value+ '%')}className="btn">%</button>

          {/* <button onClick={()=> setValue(value')}className="btn">C</button> */}

        
        </div>
      </div>
    </div>
  )
}

export default Calci;
