import React from "react";

 export const Contact = () => {
  return (
    <div name="Contact" className="w-full h-screen bg-gradient-to-b from-black
    to-gray-800 p-4  text-white mt-80">
<div className="flex flex-col mx-auto p-4 justify-center max-w-screen-lg h-full">
                <div className="">
                                <p className="text-4xl font-bold inline border-b-4 border-gray-500
           ">Contact</p>
                                <p className="py-6">Submit the form below to get in touch with me</p>
                </div>
                <div className="flex justify-center items-center">
                                <form action="https://getform.io/f/b6b95f82-3a22-4321-a484-d2c5ef5332a0" method ="POST"className="flex flex-col w-full md:w-1/2">
                                                <input type="" name="name" placeholder ="Enter
                                                your name" className="p-2 bg-transparent border-2 
                                                rounded-md text-white focus: outline-none"/>
                                                <input type="" name="email" placeholder ="Enter
                                               your email" className=" my-4 p-2 bg-transparent border-2 
                                                rounded-md text-white focus: outline-none"/>
                                               
                                               <textarea name="message" placeholder="enter your message" rows="10" className="p-2 bg-transparent border-2 
                                                rounded-md text-white focus: outline-none"></textarea>
                                                <button className="text-white bg-gradient-to-b from-cyan-500
                                                to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md
                                                hover:scale-110 duration-300">Let's talk</button>
                                </form>
                </div>
</div>
    </div>
  )
}
