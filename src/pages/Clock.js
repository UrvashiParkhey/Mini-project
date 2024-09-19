import React from 'react'

function Clock() {
    let currentDate = new Date()
    let hour = currentDate.getHours()
    let minute = currentDate.getMinutes()
    let second = currentDate.getSeconds()

  return (
    <div className=' flex items-center justify-center h-[100vh]'>
           <div className='h-[400px] w-[400px] border-[#193c45]  bg-[#b8db92b1] relative  flex justify-center items-center rounded-full'>
            <div className='h-[7px] w-[8px] rounded-full bg-[black]'></div>
            <div style={{transform : `rotate(${30* hour}deg)`, transformOrigin:"bottom"}} className='h-[80px] absolute w-[3px] bg-[#120707] bottom-[50%]'></div>
            <div style={{transform : `rotate(${6* minute}deg)`, transformOrigin:"bottom"}} className='h-[120px]  absolute w-[3px] bg-[#f23b3b] bottom-[50%]'></div>

            <div style={{transform : `rotate(${6* second}deg)`, transformOrigin:"bottom"}} className='h-[120px] absolute w-[2px] bg-[#239690] bottom-[50%]'></div>
            <div className='absolute flex text-[#193c45] font-[700] text-[50px] top-0'>12</div>
            <div className='absolute flex text-[#193c45] font-[700] text-[50px] right-[100px] top-6'>1</div>
            <div className='absolute flex text-[#193c45] font-[700] text-[50px] right-[40px] top-24'>2</div>
            <div className='absolute flex text-[#193c45] font-[700] text-[50px] bottom-0'>6</div>
            <div className='absolute flex text-[#193c45] font-[700] text-[50px] right-[100px] bottom-6'>5</div>
            <div className='absolute flex text-[#193c45] font-[700] text-[50px] right-[40px] bottom-24'>4</div>
            <div className='absolute flex text-[#193c45] font-[700] text-[50px] left-2'>9</div>
            <div className='absolute flex text-[#193c45] font-[700] text-[50px] left-[85px] bottom-6'>7</div>
            <div className='absolute flex text-[#193c45] font-[700] text-[50px] left-[30px] bottom-24'>8</div>
            <div className='absolute flex text-[#193c45] font-[700] text-[50px] left-[85px] top-6'>11</div>
            <div className='absolute flex text-[#193c45] font-[700] text-[50px] left-[30px] top-24'>10</div>
            <div className='absolute flex text-[#193c45] font-[700] text-[50px] right-2'>3</div>


            </div>
    </div>

 
  )
}

export default Clock