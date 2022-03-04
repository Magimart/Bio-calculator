import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "react-router-dom";


const HomePage = () => {

  const [letterBtn, setLetter] = useState(false);
  const [numBtn, setNumBtn] = useState(false);


        const handleOnClick = () => {
          setLetter(true);
        }
        const handleNumberOnClick = () => {
          setNumBtn(true);
        }
        const endBTnOnClick = () => {
          setLetter(false)
          setNumBtn(false)
        }

      return ( 
            <>
              <div className="homeWrapper justify-center items-center text-3xl flex h-screen w-screen bg-black text-white">                 
                   <div className="flex flex-col">
                        <h1 className="font-bold ">
                          fredApp
                       </h1> 
                       <h2 className="text-red-400 p-3 m-1" >home of learning</h2>  
                       <div className="flex space-x-6 focus-bg-green-500  " >
                             {/* numbers */}
                             <a href="/learning/numbers">
                             <button className={`${numBtn && "animate-wiggle"} bg-green-900 bg-opacity-30 w-max  hover:bg-yellow-600 px-6 rounded-lg`}
                                     onAnimationEnd={() => endBTnOnClick()}
                                     onClick={() => handleNumberOnClick() }
                             >             
                               <span className="font-bold flex justify-center  py-1 m-2">
                                  <h1 className="hover:text-black px-.3 h-full w-full">
                                      <span className=" pr-1 text-yellow-400 ">1</span>
                                      <span  className=" pr-1 text-blue-500">2</span>
                                      <span className=" pr-1"> 3</span>
                                      <span className=" pr-1 text-red-500 ">4</span>
                                      <span className=" pr-2 text ">...</span>
                                  </h1>
                                 </span>  
                             </button>
                             </a>
                             {/* letters */}
                            <a href="learning/letters">
                             <button className={`${letterBtn && "animate-wiggle"} bg-green-900 bg-opacity-30 w-max  hover:bg-yellow-600 px-6 rounded-lg`}
                                  onAnimationEnd={() => endBTnOnClick()}
                                  onClick={() => handleOnClick() }
                             >             
                               <span className="font-bold flex justify-center  py-1 m-2">
                                  <h1 className="hover:text-black  ">
                                      <span className=" pr-1 text-indigo-500 ">A</span>
                                      <span  className=" pr-1 ">B</span>
                                      <span className=" pr-1  text-yellow-500"> C</span>
                                      <span className=" pr-1 text-pink-700 ">D</span>
                                      <span className=" pr-2 text ">...</span>
                                  </h1>
                                 </span>  
                             </button>
                            </a>
                       </div>
                   </div>
              </div>                
            </>
         );
} ;
       


export default HomePage;