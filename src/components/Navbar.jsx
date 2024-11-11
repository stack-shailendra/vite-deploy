
import { BiLogoNodejs, BiMenu, BiX } from "react-icons/bi";
import { BsGithub, BsLinkedin, BsTwitter, BsTwitterX, BsYoutube } from "react-icons/bs"
import { useState } from "react";

const Navbar = () => {
    const [isOpen,setIsOpen] = useState(false);

    const menuOpen=()=>{
        setIsOpen(!isOpen);
    }
    return (
        <nav  className=" fixed top-0 z-20 flex w-full items-center justify-between border-b border-gray-700 bg-black/70 px-16 py-2 text-white backdrop-blur-md md:justify-evenly">
           
        <BiLogoNodejs className="cursor-pointer text-[80px] text-green-400 w-[70px] h-[50px]
        sm:text-[100px] md:text-[120px]" />
    


            <ul className="hidden md:flex gap-10">
            <a href="#home" className="cursor-pointer  opacity-70 transition-all duration-300
                 hover:opacity-100
                ">
                  <li>Home</li>

                </a>
                
                <a href="#tech" className="cursor-pointer opacity-70
                transition-all duration-300 hover:opacity-100">
                    <li>Tech</li>
                </a>
                
                <a href="#projects" className="cursor-pointer opacity-70
                transition-all duration-300 hover:opacity-100">
                    <li>Projects</li>
                </a>
                
                <a href="#contacts" className="cursor-pointer opacity-70
                transition-all duration-300 hover:opacity-100">
                    <li>Contacts</li>
                </a>
                

            </ul>

            <ul className="hidden md:flex gap-5">
                <li className="cursor-pointer text-xl opacity-70 transition-all duration-300
                hover:text-red-500 hover:opacity-100
                ">
                    <a href="https://www.youtube.com/" target="_blank" ><BsYoutube/></a>

                </li>
                <li className="cursor-pointer text-xl opacity-70 transition-all duration-300
                hover:text-red-500 hover:opacity-100
                ">
                   <a href="https://www.linkedin.com/in/shailendra-nakksh625741/" target="_blank"> <BsLinkedin/></a>

                </li>
                <li className="cursor-pointer text-xl opacity-70 transition-all duration-300
                hover:text-red-500 hover:opacity-100
                ">
                    <a href="https://x.com/" target="_blank"><BsTwitterX/></a>

                </li>
                <li className="cursor-pointer text-xl opacity-70 transition-all duration-300
                hover:text-red-500 hover:opacity-100
                ">
                   <a href="https://github.com/stack-shailendra" target="_blank"><BsGithub/></a> 

                </li>

            </ul>
             {isOpen ?(
                 <BiX  className="block md:hidden text-4xl" onClick={menuOpen}/>
             ):(
                 <BiMenu className="block md:hidden text-4xl" onClick={menuOpen}/>
             )}
 
             {isOpen && (
                 <div className={`fixed right-0 top-[84px] flex h-screen w-1/2 flex-col items-start justify-start gap-10
                    border-1 border-gray-800 bg-black/90 p-12 
                    ${isOpen ? "block" : "hidden"}
                 `}>

             <ul className="flex flex-col gap-8" >
             <a href="#home" className="cursor-pointer  opacity-70 transition-all duration-300
                hover:text-red-500 hover:opacity-100
                ">
                  <li>Home</li>

                </a>
                
                <a href="#tech" className="cursor-pointer opacity-70
                transition-all duration-300 hover:opacity-100">
                    <li>Tech</li>
                </a>
                
                <a href="#projects" className="cursor-pointer opacity-70
                transition-all duration-300 hover:opacity-100">
                    <li>Projects</li>
                </a>
                
                <a href="#contacts" className="cursor-pointer opacity-70
                transition-all duration-300 hover:opacity-100">
                    <li>Contacts</li>
                </a>
             </ul>
             <ul className="flex flex-wrap gap-5">
                <li className="cursor-pointer text-xl opacity-70 transition-all duration-300
                hover:text-red-500 hover:opacity-100
                ">
                    <BsYoutube/>

                </li>
                <li className="cursor-pointer text-xl opacity-70 transition-all duration-300
                hover:text-red-500 hover:opacity-100
                ">
                    <BsLinkedin/>

                </li>
                <li className="cursor-pointer text-xl opacity-70 transition-all duration-300
                hover:text-red-500 hover:opacity-100
                ">
                    <BsTwitterX/>

                </li>
                <li className="cursor-pointer text-xl opacity-70 transition-all duration-300
                hover:text-red-500 hover:opacity-100
                ">
                    <BsGithub/>

                </li>

            </ul>
                 </div>
             )} 

        </nav>
    )
}

export default Navbar