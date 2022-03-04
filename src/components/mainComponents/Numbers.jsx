import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";



const NumbersPage = ({countNumbers}) => {

   const [result, setResult] = useState(0);
   const [word, setWord] = useState("");
   const [number, setNumber] = useState(0);


  console.log( countNumbers && countNumbers)
  const [toTen, tenToTwenty, twentyToThirty] = countNumbers;

   const handleClick = (num, word) => {
      setNumber(num)
      setWord(word)
   }

console.log(result)


      return ( 
            <>
         <div className="homeWrapper justify-cente text-3xl flex flex-col h-screen w-screen bg-black text-white">                 
                  <div className="headerWrapper">
                      <h1 className="font-bold  py-6 m-2">
                          Numbers
                       </h1>  
                   </div>
                   <div className="resultWrapper flex flex-col justify-center items-center font-bold ">
                       <h1 className="font-bold  py-6 m-6">
                              results
                       </h1>
                       <div className="result bg-green-400 w-48 py-3 rounded-md text-6xl ">
                                  {number && number}
                           <span className="inWordsWrap   text-2xl h-10">
                              <h2 className="bg-red-700 w-full py-2">{word && word? word:"zero"}</h2>
                           </span>                        
                       </div>

                   </div>                

               <div className="homeWrapper justify-center items-center h-full text-3xl flex  text-white"> 

                  
                   <div className="flex flex-col">

                       <div className="countNumberWrapper flex justify-center flex-row flex-wrap">

                         {
                            toTen && toTen.toTen.map((el, i) => {

                              return (
                                 <React.Fragment key={i}>
                                      <div  className="numberWrapper flex justify-center bg-green-800 text-3xl font-bold 
                                                   text-white py-1 px-3 w-16 space-x-1 m-2"
                                         onClick={() => handleClick(el.number, el.inWord)}          
                                       >
                                        {el.number}
                                      </div>
                                 </React.Fragment>
                              )
                             })
                          }   
                      </div>                      
                   </div>
               </div> 
            </div>                
               
            </>
         );
} ;
       


export default NumbersPage;