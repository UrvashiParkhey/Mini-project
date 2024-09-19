import React, { useState } from 'react'

function Snakeladder() {
     const [turn,setTurn]= useState("1") 
     const [p1,setP1]= useState(0)
     const [p2,setP2]= useState(0)
     const[dice,setDice] =useState("")
     const throwDice = () =>{
      let diceValue = Math.ceil(Math.random()*6)
       setDice(diceValue)
       if( turn == 1)
       {
        if (diceValue+p1 <31){
          setP1(diceValue + p1)
        }
        
        setTurn(2)
       }
       else if( turn == 2){
        if (diceValue+p2<31){
          setP2(diceValue + p2)
        }  
         
        setTurn(1)
       }
      }
   return (
        <div className='container'>
          {p1==30 ? alert("Player 1 won") : p2==30 ? alert("Player 2 won") : null}
          {p1 == 3 ? setTimeout(()=> {setP1(22)},500) : p2== 3 ? setTimeout(()=>{setP2(22)},500) :null}
          {p1 == 5 ? setTimeout(()=> {setP1(8)}, 500) : p2 == 5 ? setTimeout(()=> {setP2(8)}, 500) : null}
          {p1 == 11 ? setTimeout(()=> {setP1(26)}, 500) : p2 == 11 ? setTimeout(()=> {setP2(26)}, 500) : null}
          {p1 == 20 ? setTimeout(()=> {setP1(29)}, 500) : p2 == 20? setTimeout(()=> {setP2(29)}, 500) : null}
          {p1 == 27? setTimeout(()=> {setP1(1)}, 500) : p2 == 27 ? setTimeout(()=> {setP2(1)}, 500) : null}
          {p1 == 19 ? setTimeout(()=> {setP1(7)}, 500) : p2 == 19 ? setTimeout(()=> {setP2(7)}, 500) : null}
          {p1 == 21 ? setTimeout(()=> {setP1(9)}, 500) : p2 == 21 ? setTimeout(()=> {setP2(9)}, 500) : null}
          {p1 == 17? setTimeout(()=> {setP1(4)}, 500) : p2 == 17 ? setTimeout(()=> {setP2(4)}, 500) : null}
          {turn}
         <div className='snake-board'>
            <div className={p1 == 25 && p2 == 25 ? "both-goti" : p1 == 25 ? "goti1" : p2 == 25 ? "goti2" : 'snake-btn'}>25</div>
            <div className={p1 == 26 && p2 == 26 ? "both-goti" : p1 == 26 ? "goti1" : p2 == 26 ? "goti2" : 'snake-btn'}>26</div>
            <div className={p1 == 27 && p2 == 27 ? "both-goti" : p1 == 27 ? "goti1" : p2 == 27 ? "goti2" : 'snake-btn'}>27</div>
            <div className={p1 == 28 && p2 == 28 ? "both-goti" : p1 == 28 ? "goti1" : p2 == 28 ? "goti2" : 'snake-btn'}>28</div>
            <div className={p1 == 29 && p2 == 29 ? "both-goti" : p1 == 29? "goti1" : p2 == 29? "goti2" : 'snake-btn'}>29</div>
            <div className={p1 == 30 && p2 == 30 ? "both-goti" : p1 == 30 ? "goti1" : p2 == 30 ? "goti2" : 'snake-btn'}>30</div>
            <div className={p1 == 24 && p2 == 24 ? "both-goti" : p1 == 24 ? "goti1" : p2 == 24 ? "goti2" : 'snake-btn'}>24</div>
            <div className={p1 == 23 && p2 == 23 ? "both-goti" : p1 == 23 ? "goti1" : p2 == 23 ? "goti2" : 'snake-btn'}>23</div>
            <div className={p1 == 22 && p2 == 22 ? "both-goti" : p1 == 22 ? "goti1" : p2 == 22 ? "goti2" : 'snake-btn'}>22</div>
            <div className={p1 == 21 && p2 == 21 ? "both-goti" : p1 == 21 ? "goti1" : p2 == 21 ? "goti2" : 'snake-btn'}>21</div>
            <div className={p1 == 20 && p2 == 20 ? "both-goti" : p1 == 20 ? "goti1" : p2 == 20 ? "goti2" : 'snake-btn'}>20</div>
            <div className={p1 == 19 && p2 == 19 ? "both-goti" : p1 == 19 ? "goti1" : p2 == 19 ? "goti2" : 'snake-btn'}>19</div>
            <div className={p1 == 13 && p2 == 13 ? "both-goti" : p1 == 13 ? "goti1" : p2 == 13 ? "goti2" : 'snake-btn'}>13</div>
            <div className={p1 == 14 && p2 == 14 ? "both-goti" : p1 == 14 ? "goti1" : p2 == 14 ? "goti2" : 'snake-btn'}>14</div>
            <div className={p1 == 15 && p2 == 15 ? "both-goti" : p1 == 15 ? "goti1" : p2 == 15 ? "goti2" : 'snake-btn'}>15</div>
            <div className={p1 == 16 && p2 == 16 ? "both-goti" : p1 == 16 ? "goti1" : p2 == 16 ? "goti2" : 'snake-btn'}>16</div>
            <div className={p1 == 17 && p2 == 17 ? "both-goti" : p1 == 17 ? "goti1" : p2 == 17 ? "goti2" : 'snake-btn'}>17</div>
            <div className={p1 == 18 && p2 == 18 ? "both-goti" : p1 == 18 ? "goti1" : p2 == 18 ? "goti2" : 'snake-btn'}>18</div>
            <div className={p1 == 12 && p2 == 12 ? "both-goti" : p1 == 12 ? "goti1" : p2 == 12 ? "goti2" : 'snake-btn'}>12</div>
            <div className={p1 == 11 && p2 == 11 ? "both-goti" : p1 == 25 ? "goti1" : p2 == 11 ? "goti2" : 'snake-btn'}>11</div>
            <div className={p1 ==10 && p2 == 10? "both-goti" :    p1 == 10 ? "goti1" : p2 ==10 ? "goti2" : 'snake-btn'}>10</div>
            <div className={p1 == 9 && p2 == 9 ? "both-goti" :  p1 ==9 ? "goti1" : p2 == 9 ? "goti2" : 'snake-btn'}>9</div>
            <div className={p1 == 8 && p2 == 8 ? "both-goti" :  p1 == 8 ? "goti1" : p2 == 8 ? "goti2" : 'snake-btn'}>8</div>
            <div className={p1 == 7 && p2 == 7 ? "both-goti" : p1 == 7 ? "goti1" : p2 == 7 ? "goti2" : 'snake-btn'}>7</div>
            <div className={p1 == 1 && p2 == 1 ? "both-goti" :  p1 == 1 ? "goti1" : p2 == 1 ? "goti2" : 'snake-btn'}>1</div>
            <div className={p1 == 2 && p2 == 2 ? "both-goti" :  p1 == 2 ? "goti1" : p2 == 2 ? "goti2" : 'snake-btn'}>2</div>
            <div className={p1 == 3 && p2 == 3 ? "both-goti" :  p1 == 3 ? "goti1" : p2 == 3 ? "goti2" : 'snake-btn'}>3</div>
            <div className={p1 == 4 && p2 == 4 ? "both-goti" :   p1 == 4? "goti1" : p2 ==4 ? "goti2" : 'snake-btn'}>4</div>
            <div className={p1 == 5 && p2 == 5 ? "both-goti" :  p1 == 5 ? "goti1" : p2 == 5 ? "goti2" : 'snake-btn'}>5</div>
            <div className={p1 == 6 && p2 ==  6 ? "both-goti" :   p1 ==  6 ? "goti1" : p2 == 6 ? "goti2" : 'snake-btn'}>6</div>
          </div>
         {p1}
          <div onClick={() => throwDice()} className='snake-btn'>{dice}</div>
         {p2}
        </div>
      )
  
}
    export default Snakeladder
  