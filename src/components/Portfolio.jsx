
import React from "react"
import java from "../assets/java.png"
import react from "../assets/react.png"
import spring  from "../assets/spring.png"

 export const Portfolio = () => {

const portifolios =[
               
                {
                                id:2,
                                src:java
                              },
                              {
                                id:3,
                                src: spring
                              },
          
                            
                              {
                                id:7,
                                src:react
                              },
                
                  
                              
]



  return (
    <div name ="Portfolio" className="bg-gradient-to-b from-black
    to-gray-800 w-full text-white md:h-screen">
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col
        justify-center w-full ">
        <div className="mt-40">
          <p className="text-4xl font-bold inline border-b-4
          border-gray-500">Portfolio</p>  
          <p className="py-6">Check some of my work here:</p>    
        </div>


        
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8
                px-12 sm:px-0">
                {
                portifolios.map(({id,src})=>(
                                <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                                  <img src={src}   alt=""  className="rounded-md duration-200
                                  hover:scale-105 object-fill h-48 w-96 ..."/>
                                  <div className="flex items-center justify-center">
                                  
                  
                                       
                                        <a
                                        
                              href= "https://www.github.com/LawMashira"className="bg-transparent hover:bg-slate-50 text-white font-bold
                                        hover:text-blue-500 py-2 px-4 border border-blue-500 hover:border-transparent rounded">Projects</a>                              
                                  </div> 
                                </div>
                 )) }
                 </div>
        </div>
    </div>
  );
};