import React from 'react'

function Practice() {
     const Sum =()=>{
      let list = [
        {name: "title1", price: 400},
        {name: "title2", price: 600},
        {name: "title3", price: 300},
        {name: "title4", price: 200},
        {name: "title5", price: 800}
      ]
      let priceList = list.map((i)=> i.price)
    let sum=0
    for(let i =0 ;i<list.length;i++){
        sum = sum + list[i].price
    }
   
    console.log(sum);
    
   
} 

  return (
    <div>{Sum()}</div>
  )
}

export default Practice
//   let list = [2, 6, 1, 3, 4, 8, 5];
//   let result = [];
//   let num = 0;
//   for (let i of list) {
//      num = num + i;
//       result.push(num)
    
//   }
//   console.log(result);

//   return <div>Practice</div>;
// }


//   let checkStr = (str) =>{
//     if( typeof str == "string")
// {
//  alert(" true")
// }
// else {
//   alert("false")
// }
//   }
//<div>{checkStr(345)}</div>
//

// if(str.length== 0){
//   alert("string is blank")
// }
// else{
//   alert("string is not  blank")
// }
// }

// let result =  str.split(" ")
// console.log(result);
// let remove = (str) =>{
//   let result = str.replace("%&*#@$!*&^%$" ,"")
//   console.log(result);

//   }
//   return (
//     <div>{remove("urvashi %&*#@$!*&^%$ parkhey")}</div>
//   )
// import React,{useState} from 'react'

// function Todo() {
//     const [list,setList]= useState([])
//     const [task,setTask] = useState("")
//   return (
//  <div>
//  {task}
//  <br></br>
//  {JSON.stringify(list)}
//  <br></br>
// <input value={task} onChange={(e)=> setTask(e.target.value)}  className='border-3 px-3 py-2  border-blue-900' placeholder='Enter your name'></input>
// <button className='px-6 py-3 bg-[gray] ml-12' onClick={()=> {setList([...list,task]); setTask("")}} >Submit</button>
// <table>
//     <thead>
//         <th>S. no.</th>
//         <th>Task</th>
//         <th>Action</th>
//     </thead>
//     <tbody>
//         {list.map((i, index)=>
//         <tr>
//             <td>{index+1}. </td>
//             <td>{i}</td>
//             <td onClick={()=> setList(list.filter((j, jindex)=> jindex!=index))}>Delete</td>
//         </tr>)}
//     </tbody>
// </table>
// </div>
//   )
// }
// export default Todo
{/* <div className="border-[black] w-[100%] flex gap-[20px]">
      <button className="w-[5%] h-[4vh]  border-2" onClick={() => navigate("/practice")}>Practice</button>
      <button className="w-[5%] h-[4vh] border-2" onClick={() => navigate("/calci")}>calculator</button>
      <button className="w-[10%] h-[4vh] border-2" onClick={() => navigate("/snakeladder")}>Snake and ladder</button>
      <button className="w-[5%] h-[4vh] border-2" onClick={() => navigate("/tictac")}>Tictactoe</button>
      <button className="w-[5%] h-[4vh] border-2" onClick={() => navigate("/sidebar")}>SideBar</button>
      <button className="w-[5%] h-[4vh] border-2" onClick={() => navigate("/slider")}>Slider</button>
      <button className="w-[5%] h-[4vh] border-2" onClick={() => navigate("/function")}>Function</button>
      <button className="w-[5%] h-[4vh] border-2" onClick={() => navigate("/slider2")}>Slider2</button>
      <button className="w-[5%] h-[4vh] border-2" onClick={() => navigate("/todo")}>Todo</button>
      <button className="w-[5%] h-[4vh] border-2" onClick={() => navigate("/logicque")}>Logicque</button>
      <button className="w-[5%] h-[4vh] border-2" onClick={() => navigate("/clock")}>Clock</button>

    </div> */}