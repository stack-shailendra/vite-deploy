import logo from '../assets/name-logo.svg'
import image from "../assets/image.jpg";
import { motion } from "framer-motion";
const Hero = () => {
    return (
        <div id="home" className="px-16 flex min-h-screen w-full items-center justify-center  py-28 md:px-32">

            <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}

                className="flex max-w-full flex-col items-center justify-center gap-3 text-center">
                <h1 className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text
            text-transparent text-5xl font-light md:text-7xl z-10 ">Shailendra Gautam</h1>
                <h3 className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text
            text-transparent text-2xl  md:text-3xl z-10 ">
                    UI/UX Software Developer
                </h3>
                <p className="md:text-base text-pretty text-sm text-gray-400 z-10 " >
                    Hello! I’m Shailendra Gautam, a UI Software Developer passionate about designing and building user-friendly, high-performance interfaces that elevate the digital experience. With a strong foundation in both front-end and back-end technologies, I strive to create applications that are as efficient and scalable as they are engaging and accessible.
                    Over the years, I’ve honed my skills in technologies like JavaScript, React, HTML, CSS, Bootstrap, Jquery, alongside design tools like Figma. My approach blends clean, maintainable code with a keen eye for aesthetics, ensuring each project I work on delivers value to both end-users and stakeholders.
                    Check out my portfolio to see some of my recent work, and let’s connect to discuss how I can help bring your next idea to life!


                </p>
            </motion.div>
        </div>


    )
}

export default Hero