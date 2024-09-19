import React, { useState } from "react";

function Slider() {
    const  [move,setMove]= useState(0)
 return (
    <div  className="w-[100%] h-[100vh]    bg-white ">
      <div  style={{transform: `translateX(-${move}%)`}} className=" w-[400%]  h-[100vh] flex justify-center items-center ">
        <img
          src="https://i0.wp.com/picjumbo.com/wp-content/uploads/magical-spring-forest-scenery-during-morning-breeze-free-photo.jpg?w=2210&quality=70"
          className="w-[100%] h-[100vh]"
        ></img>

        <img
          src="https://media.istockphoto.com/id/1322277517/photo/wild-grass-in-the-mountains-at-sunset.jpg?s=612x612&w=0&k=20&c=6mItwwFFGqKNKEAzv0mv6TaxhLN3zSE43bWmFN--J5w="
          className="w-[100%]  h-[100vh]"
        ></img>

        <img
          src="https://i0.wp.com/picjumbo.com/wp-content/uploads/magical-spring-forest-scenery-during-morning-breeze-free-photo.jpg?w=2210&quality=70"
          className="w-[100%] h-[100vh]"
        ></img>

        <img
          src="https://media.istockphoto.com/id/1322277517/photo/wild-grass-in-the-mountains-at-sunset.jpg?s=612x612&w=0&k=20&c=6mItwwFFGqKNKEAzv0mv6TaxhLN3zSE43bWmFN--J5w="
          className="w-[100%] h-[100vh]"
        ></img>
      </div>

     

    <div  className=" flex absolute gap-4 left-[45%] top-[90%]">
      <div onClick={()=> setMove(0)} style={{backgroundColor : move==0 ?"blue" :null}} className="w-[23px] h-[3vh] border  rounded-full"></div>
      <div onClick={() => setMove(25)} style={{backgroundColor : move==25 ?"black" :null}} className="w-[24px] h-[3vh] border  rounded-full"></div>
      <div  onClick={() => setMove(50)} style={{backgroundColor : move==50 ?"white" :null}} className="w-[23px] h-[3vh] border  rounded-full"></div>
      <div onClick={()=> setMove(75)} style={{backgroundColor : move==75 ?"orange" :null}} className="w-[23px] h-[3vh] border  rounded-full"></div>

    </div>
    <i onClick={()=> move>0 ? setMove( move - 25):null} class="fa fa-long-arrow-left text-[60px]  left-[10%] top-[60%] absolute" aria-hidden="true"></i>
        <i onClick={()=> move<75 ? setMove(move+25) : null} class="fa fa-long-arrow-right text-[60px]  right-[10%] top-[60%] absolute" aria-hidden="true"></i>
    </div>
  );
}

export default Slider;
