import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";



const LettersPage = ({wordLetters}) => {

   const [result, setResult] = useState(0);
   const [vowel, setVowels] = useState("");
   const [alph, setAlphabet] = useState("");

   const [vowels, alphabet ]= wordLetters;

   const handleOnClick = (letter) => {
        setVowels(letter)
   }


      return ( 
            <>
              <div className="homeWrapper justify-cente text-3xl flex flex-col h-screen w-screen bg-black text-white">                 
                  <div className="headerWrapper">
                      <h1 className="font-bold  py-6 m-2">
                          Learning Letters
                       </h1>  
                   </div>
                   <div className="resultWrapper flex flex-col justify-center items-center font-bold ">
                       <h1 className="font-bold  py-6 m-6">
                              images
                       </h1>
                       <div className="result bg-green-400 w-max py-3 rounded-md text-6xl px-4">
                                   {vowel && vowel? vowel:"vowels"}
                           <span className="inWordsWrap   text-2xl h-10">
                              <h2 className="bg-red-700 w-full py-2 px-2">sound</h2>
                           </span>                        
                       </div>

                   </div>                

               <div className="homeWrapper justify-center items-center h-full text-3xl flex  text-white"> 

                  
                   <div className="flex flex-col">

                       <div className="countNumberWrapper flex justify-center flex-row flex-wrap">

                          {
                            vowels && vowels.vowels.map((el, i) => {
                               console.log(el)
                              return (
                                 <React.Fragment key={i}>
                                      <div  className="numberWrapper flex justify-center bg-green-800 text-3xl font-bold 
                                                   text-white py-1 px-3 w-16 space-x-1 m-2"
                                         onClick={() => handleOnClick(el.letter)}          
                                       >
                                           {el.letter}
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
       


export default LettersPage;