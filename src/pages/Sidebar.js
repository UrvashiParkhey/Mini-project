import React, { useState } from 'react'

function Sidebar() {
    const [slidebar,setShowSlidebar]=useState(false)
  return (
      
        <div  className='w-[100%] h-[100vh] flex  flex-row  bg-slate-400'>
       <label onClick={()=>setShowSlidebar(true)} className='w-[30%] h-[7vh]  text-center py-3 ml-7  text-[white] bg-black'> menu</label>
       <div style={{"right" : slidebar== true ? "0%" : "-30%" }} className='w-[30%]  duration-500 absolute h-[100vh] bg-white'>
       <button onClick={()=> setShowSlidebar(false)} className='w-[40%] bg-blue-500 h-[10%]'>cancle</button>
       </div>
        </div>
    

  )
}

export default Sidebar