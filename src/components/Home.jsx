import React from "react"
import law from "../assets/law.jpg"
import {MdOutlineKeyboardArrowRight}from "react-icons/md";
import {Link} from 'react-scroll';
export const Home = () => {
  return (
    
<div 
name="Home" 
className="h-screen w-full bg-gradient-to-b
from-black via-black to-gray-800 text-yellow-400">
<div className="max-w-screen-lg mx-auto flex flex-col items-center
justify-center h-full px-4 md:flex-row">
<div className="flex flex-col justify-center h-full mt-40">



<h2 className="text-4xl sm:text-5xl font-bold
text-yellow-400 mt-40"> I'm a Full Stack Developer</h2>
<p className="py-4 max-w-md text-white text-xl">
  Have one year experience  of building and designing software  systems as a freelancer. Currently,  I prefer to 
  work with technologies and tools which include Node JS, eclipse for Java,React JS, MySQL, SpringBoot and Microsoft 
  Visual Studio for C#.   
</p>
<div>
<Link to="Portfolio" smooth duration={500}className="group text-white w-fit px-6 py-3 my-2
flex items-center rounded-md  bg-gradient-to-r
 from-cyan-500 to-blue-500 cursor-pointer text-xl">
                Explore My Work Portfolio?
                <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={30}
                className="ml-1"/>
                </span>
</Link>
    </div>
    
    </div>
    <div>
                <img src={law} 
                alt="my profile"
                className="rounded-2xl mx-auto w-2/3 md:w-full"
              
                />
    </div>
</div>
    </div>
  )
}
