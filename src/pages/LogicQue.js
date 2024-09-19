// --------------------------------------sum------------------------------------------------
// import React from 'react'

// function Practice() {
// (1.)  const SumofTwonum =(a,b)=>{
//    return a+b;
//   }
//   return (
//     <div>{SumofTwonum(23,33)}</div>
//   )
// }
// -------------------------------------------------------------------------------------------




// function Practice() {
//     const PalindromeNum =(str)=>{
//         let reverseStr = ""
//      for(let i of str){
//         reverseStr = i + reverseStr
//      }
    
//      if(str == reverseStr){
//         return "true"
//      }
//      else{
//         return "false"
//      }
//     }
  

//   return (

//     <div>{PalindromeNum("nitin")}</div>
//   )
// }

// export default Practice

// ---------------------------------------------------------MAX NUM IN ARRAY-------------------------------------
// import React from 'react'

// function Practice() {
//     const maxNum =(arr)=>{
//         let Number = arr[0]
//         for(let i of arr){
//            if(i > Number) { 
//            Number = i    
//            }
          
//         }
//         return Number
//     }
//   return (
//     <div>{maxNum([-23,-333,-425,-109,-11,-888,-1001,-22,-19])}</div>
//   )
// }

// export default Practice
// import React from 'react'

// function Practice() {
//     const FactofNum = (num) =>{
//         let result = 1
        
//         for(let i=2;i<=num;i++)
//             {
//            result =  result * i 
//         }
//         return result
//     }
//   return (
//     <div>{FactofNum(5)}</div>
//   )
// }

// -----------------------------------------------------PRIME------------------------------------------

// function Practice() {
//     const PrimeorNot = (num) => {
//         for(let i=2 ; i<num ; i++){
//             if(num%i == 0){
//                 return("NOT PRIME")
//                 break;
//             }
//             else if(i<num-1){
//                 return ("PRIME")
//             }
//         }
//   }
//   return (
   
//     <div>{PrimeorNot(11)}</div>
//   )
// }
 


// -------------------------------------------------STAR PRYAMID -------------------------------------------------
//     let star = "*"
//     for(let i=0 ; i<6  ; i++){
//         console.log (star)
//         star = star + "*";
//     }
// *
// **
// ***
// ****

//  

// let star = "*"
// let i=0
// while( i<5){
   
//     console.log (star)
//     star = star + "*";
//     i++
// }


    
// let star = " * "
// for(let i=1 ; i<=5 ; i++){
//     console.log(" ".repeat(5-i) + star)
//     star = star + "* "
        // output
//          *
    //     * *
    //   *  *  * 
    //  * *  *  * 





// let star = "*****"                            
//     for(let i=5 ; i>0 ; i--){
//         star = star.slice(0,star.length-1)
//         console.log(star);
 //  output
 // ****
 // ***
 // **
 // *

  
// let star = "* "                                         
// for(let i=7;i>0;i--){
//    console.log(" " . repeat(7-i)+star.repeat(i))
//     }   output
  //   * * * *
    //  * * *
    //   * * 
     //   *  
//      let star = "*"
//   for(let i=1 ; i<=5 ; i++){
//       console.log(" ".repeat(5-i) + star)
//       star = star + "*"
          
//       }
    //    *
    //   **
    //  ***
    // ****
    // let star ="****"
    // for ( let i =0 ; i<5 ; i++){
    // console.log(" ".repeat(i+1) + star)
    // }

    // *****
    //  *****
    //   ****
    
    // let star="* "
    // for(let i=0 ; i<7 ;i++){
    //  if(i<4){
    //    console.log(" ".repeat(3-i)+ star.repeat(i+1));
    //     }
    //    else{
    //  console.log(" ".repeat(i-3) + star.repeat(7-i))
    //    }
    // }


    // let star = "* "                                         
    // for(let i=7;i>0;i--){
    //   if(i>3){
    //    console.log(" " . repeat(7-i) + star.repeat(i-3))
    //     } 
    //   else{
    //     console.log(" ". repeat(i-1)+ star.repeat(5-i));
        
    //   }
  //   //   }
  //   if(i==0 || i==5){
  //     console.log(star.repeat(5));
  //     }
  //     else{
  //       console.log(star + "   "+ star);
        
  //     }
  // }












//   let star= "*"
//   for(let i = 0 ; i<5 ;i++){
//     if( i == 0){
//       console.log("    *")
//     }
//     else if(i==4){
// console.log(" *".repeat(5));

//     }
//     else{
//       console.log(" ".repeat(4-i) + "*" + " ".repeat(2*i-1) + " *");
      
//     }







// import React from 'react'

// function Practice() {
//   let star= "*"
//   for(let i = 5 ; i>0 ;i--){
//     if( i == 4){
//       console.log("    *")
//     }
//     else if(i==1){
// console.log(" *".repeat(5));

//     }
//     else{
//       console.log(" ".repeat(4-i) + "*" + " ".repeat(2*i-1) + " *");
      
//     }
//   }
//   return (
//     <div>Practice</div>
//   )
// }
      
// let number = "1
// for(let i =0 ; i<6 ; i++){
//   console.log(number + number.repeat(i+1) + number);
  
// }


  // let number = " 1 "
  // for(let i = 0; i<6 ; i++){
  //  console.log( number.repeat(i+1) + " ".repeat(i) );
   
  // }

export default Practice
// let str = "Deepak"
// let substr = "e"

// let myinclude = ()=>{
//   let count = 0
//   for (let i of str){
//     if(i== substr){
//       count = count + 1
//     }
//   }
//   console.log(count)
// import React from 'react'

// function Practice() {
//   let str = "Deepak"
//   let substr = "e"
  
//   let myinclude = ()=>{
//     let count = 0
//     for (let i of str){
//       if(i== substr){
//         count = count + 1
//       }
//     }
//     console.log(count)
//   }
//   return (
//     <div>{myinclude()}</div>
//   )
// }

// export default Practice

// let checkstr = (str) =>{
//   alert(typeof(str))
// let checkstr = (str) =>{
//   {
//     if (str.length === 0){
//     alert( true);
//     }
//     else {
//     return false;
//     }
//   }