import React, { useState } from 'react'

function Tictac() {
  const [turn,setTurn]=useState("1")   
  const [a1, setA1] = useState("")
  const [a2, setA2] = useState("")
  const [a3, setA3] = useState("")
  const [a4, setA4] = useState("")
  const [a5, setA5] = useState("")
  const [a6, setA6] = useState("")
  const [a7, setA7] = useState("")
  const [a8, setA8] = useState("")
  const [a9, setA9] = useState("")

  const blockFun1 = () => {
    if (turn == 1 && a1 == "" ){
      setA1("X")
      setTurn(2)
    }
    else if(turn == 2 && a1 == ""){
       setA1("O")
       setTurn(1)
    }
   }
   const blockFun2 = () => {
    if (turn == 1 && a2 == "" ){
      setA2("X")
      setTurn(2)
    }
    else if(turn == 2 && a2 == ""){
       setA2("O")
       setTurn(1)
    }
   }
   const blockFun3 = () => {
    if (turn == 1 && a3 == "" ){
      setA3("X")
      setTurn(2)
    }
    else if(turn == 2 && a3 == ""){
       setA3("O")
       setTurn(1)
    }
   }
    const blockFun4 = ()=> {
      if( turn ==1 &&  a4 == ""){
        setA4("X")
        setTurn(2)
      }
      else if( turn == 2 && a4 =="")
      {
        setA4("O")
        setTurn("1")
      }
    }
    const blockFun5 = ()=> {
      if( turn ==1 &&  a5 == ""){
        setA5("X")
        setTurn(2)
      }
      else if( turn == 2 && a5 =="")
      {
        setA5("O")
        setTurn("1")
      }
    }
    const blockFun6 = ()=> {
      if( turn ==1 &&  a6 == ""){
        setA6("X")
        setTurn(2)
      }
      else if( turn == 2 && a6 =="")
      {
        setA6("O")
        setTurn("1")
      }
    }
    const blockFun7 = ()=> {
      if( turn ==1 &&  a7 == ""){
        setA7("X")
        setTurn(2)
      }
      else if( turn == 2 && a7 =="")
      {
        setA4("O")
        setTurn("1")
      }
    }
    const blockFun8 = ()=> {
      if( turn ==1 &&  a8 == ""){
        setA8("X")
        setTurn(2)
      }
      else if( turn == 2 && a8 =="")
      {
        setA8("O")
        setTurn("1")
      }
    }
    const blockFun9 = ()=> {   
      if( turn ==1 &&  a9 == ""){     
        setA9 ("X")
        setTurn(2)
      } 
      else if( turn == 2 && a9 =="")
      {
        setA9("O")
        setTurn("1")
      }
     
    }

  return (
    <div className='ttt'>
      {a1=="X" && a2=="X" && a3 == "X" ? setTimeout(()=>{alert("Player 1 won")}, 500): null}
      {a1=="O" && a2=="O" && a3 == "O" ? setTimeout(()=>{alert("Player 2 won")}, 500) : null}

      {a4=="X" && a5=="X" && a6 == "X" ? setTimeout(()=>{alert("Player 1 won")}, 500): null}
      {a4=="O" && a5=="O" && a6 == "O" ? setTimeout(()=>{alert("Player 2 won")}, 500): null}

      {a7=="X" && a8=="X" && a8 == "X" ? setTimeout(() =>{alert("Player 1 won")}, 500): null}
      {a7=="O" && a8=="O" && a8 == "O" ? setTimeout(()=>{alert("Player 2 won")}, 500): null}

      {a1=="X" && a4=="X" && a7 == "X" ? setTimeout(()=>{alert("Player 1 won")}, 500): null}
      {a1=="O" && a4=="O" && a7 == "O" ? setTimeout(()=>{alert("Player 2 won")}, 500): null}

      {a2=="X" && a5=="X" && a8 == "X" ? setTimeout(()=>{alert("Player 1 won")}, 500): null}
      {a2=="O" && a5=="O" && a8 == "O" ? setTimeout(()=>{alert("Player 1 won")}, 500): null}

      {a3=="X" && a6=="X" && a9 == "X" ? setTimeout(()=>{alert("Player 1 won")}, 500): null}
      {a3=="O" && a6=="O" && a9 == "O" ? setTimeout(()=>{alert("Player 1 won")}, 500): null}

      {a1=="X" && a5=="X" && a9 == "X" ? setTimeout(()=>{alert("Player 1 won")}, 500): null}
      {a1=="O" && a5=="O" && a9 == "O" ? setTimeout(()=>{alert("Player 1 won")}, 500): null}
      
      {a3=="X" && a5=="X" && a7 == "X" ? setTimeout(()=>{alert("Player 1 won")}, 500): null}
      {a3=="O" && a5=="O" && a7 == "O" ? setTimeout(()=>{alert("Player 1 won")}, 500): null}


      <div className='button-div'>
        <button onClick={()=> blockFun1()} className='t-btn'>{a1}</button>
        <button onClick={()=> blockFun2()} className='t-btn'>{a2}</button>
        <button onClick={()=> blockFun3()}className='t-btn'>{a3}</button>
        <button onClick={()=> blockFun4()}className='t-btn'>{a4}</button>
        <button  onClick={()=> blockFun5()}className='t-btn'>{a5}</button>
        <button  onClick={()=> blockFun6()}className='t-btn'>{a6}</button>
        <button onClick={()=> blockFun7()} className='t-btn'>{a7}</button>
        <button  onClick={()=> blockFun8()}className='t-btn'>{a8}</button>
        <button onClick={()=> blockFun9()}className='t-btn'>{a9}</button>
      </div>
    </div>
  )
}

export default Tictac