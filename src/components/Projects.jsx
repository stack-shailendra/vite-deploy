

import { div, h1 } from "framer-motion/client"
import portfolio from "../assets/portfolio.png"
import weather from "../assets/weather.png"
import moen from "../assets/moen.png"
import image4 from "../assets/4.png"
import image5 from "../assets/5.png"
import fitclub from '../assets/fitclub.png'
import { motion } from "framer-motion";

const projectsData = [
  {
    image: fitclub,
    title: "FitClub",
    description: "Developed and maintained the FitClub web application using HTML, CSS, JavaScript, and React. This is fully responsive single page application.",
   
    technologies: ["HTML", "CSS", "JavaScript","React"],

  },
  {
    image: portfolio,
    title: "My Portfolio",
    description: "Developed and maintained the Portfolio web application using HTML, TailwindCSS, JavaScript, and React. This is fully responsive single page application, in this project there is a contact service by using this you can directly contact with me.",
    technologies: ["HTML", "TailwindCSS", "JavaScript", "React"],

  },
  {
    image: moen,
    title: "Club Moen",
    description: "Design Ecommerce website using HTML, CSS, JavaScript, and jQuery. In this project user can earn money by completing tasks and earn actions like purchase,birthday,facebook connect etc.",
    technologies: ["HTML", "CSS", "JavaScript",'jQuery'],

  },
  {
    image: weather,
    title: "Weather Application",
    description: "Design and Developed weather application by openweatherapi using HTML, CSS, JavaScript. In this project user can get weather information of any city by entering city name.",
    technologies: ["HTML", "CSS", "JavaScript"],

  }
]

const ScrollReveal = ({children})=>{
  return(
    <motion.div
    initial={{opacity:0,y:100}}
    whileInView={{opacity:1,y:0}}
    viewport={{once:true}}
    transition={{duration:0.8}}
    
    >
      {children}
    </motion.div>
  )
}

const ProjectCard = ({ project }) => {
  return (
    <ScrollReveal>
    <div className="flex flex-col items-center gap-8 md:flex-row md:gap-24">
      <img src={project.image} alt="" className="w-full cursor-pointer
      rounded-2xl transition-all duration-300
      hover:scale-105 md:w-[300px]" />

      <div className="flex flex-col gap-3 ">
        <div className="text-xl font-semibold">{project.title}</div>
        <p className="text-gray-400">{project.description}</p>

        <div className="flex flex-wrap gap-5">
        {
          project.technologies.map((tech, index) => (
            <span className="rounded-lg bg-black p-3" key={index}>{tech}</span>
          ))
        }

      </div>
      </div>
    

    </div>
    </ScrollReveal>
  )
}

const Projects = () => {
  return (
    <>
      <div id="projects" className="flex min-h-screen w-full flex-col items-center justify-center
           gap-16 p-4 md:px-14 md:py-24 ">
        <ScrollReveal>
        <h1 className="text-4xl font-light text-white md:text-6xl">
          My Projects
        </h1>
        </ScrollReveal>
        <div className="flex w-full max-w-[1000px] flex-col gap-16 text-white"                                >
          {
            projectsData.map((project, index) => (
              <ProjectCard  key = {index} project = {project} />
            ))

          }
        </div>
      </div>

    </>
  )
}

export default Projects