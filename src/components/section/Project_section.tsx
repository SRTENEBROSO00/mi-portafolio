import { Github, SquareArrowOutUpRight } from "lucide-react";
import { Badge } from "@mui/material";

import Image from "../../assets//noImageYet.webp"
import Mikens from "../../../public/systemImagenMikens.png"



function Project_section() {
  // Los datos dentro de los proyectos
  const projectData = [{
    projectName: 'Mikens',
    image: Mikens,
    status: true,
    github: "https://github.com/jeremyda173/sistem-fact-2",
    linkProject: "https://sistem-fact-2.vercel.app/",
    decription: "System to build systems",
    badge: ["React", "Chakra", "Next.js", "VSCode"]
  },
  {
    projectName: 'Building one...',
    image: Image,
    status: false,
    github: "",
    linkProject: "",
    decription: "I'll add all my future new projects soon",
    badge: []
  },
  {
    projectName: 'Building one...',
    image: Image,
    status: false,
    github: "",
    linkProject: "",
    decription: "I'll add all my future new projects soon",
    badge: []

  }
  ]

  return (
    <div id='projects' data-aos="fade-up" className=' w-screen'>
      <div className="bg-black text-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">My projects</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              A selection of the projects I've worked on, showcasing my skills and experience.
            </p>
          </div>

          {/* Projects Grid */}
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 '>
            {/* Render */}
            {projectData.map((projectGroup, index) => (
              <div key={index} className=' group h-96 flex flex-col justify-around items-start bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden hover:border-orange-500/50 transition-all hover:shadow-orange-500/10 hover:shadow-lg p-5 hover:animate-pulse cursor-pointer'>
                <div className='relative w-full h-40 flex items-center justify-center overflow-hidden rounded-lg bg-gray-900'>
                  <div className='absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 h-full transition-opacity flex items-end justify-between p-4'>
                    {projectGroup.github && (
                      <a href={projectGroup.github} target="_blank" rel="noopener noreferrer">
                        <Github className='hover:text-white hover:bg-amber-700 hover:rounded-1xl pointer-events-auto w-8 h-8' />
                      </a>
                    )}
                    {projectGroup.linkProject && (
                       <a href={projectGroup.linkProject} target="_blank" rel="noopener noreferrer">
                        <SquareArrowOutUpRight className='hover:text-white hover:bg-amber-700 hover:rounded-1xl pointer-events-auto w-8 h-8' />
                      </a>
                    )}
                  </div>
                  <img
                    src={projectGroup.image}
                    alt="imagen del proyecto"
                    className='object-cover w-full h-full'
                  />
                </div>

                <div className='grid gap-1'>
                  <div className=' p-2'>

                    <h3 className='text-xl font-bold mb-2 group-hover:text-orange-500 transition-colors '>{projectGroup.projectName}</h3>
                    <p className='text-gray-400 text-opacity-70'> {projectGroup.decription}</p>

                    {/* Status */}
                    {projectGroup.status ? (
                      <div className="flex items-center gap-2">
                      <div className="flex items-center gap-2 bg-green-500/10 border border-green-500/20 rounded-full px-3 py-0.5">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                        <span className="text-green-400 text-sm font-medium">In progress</span>
                      </div>
                    </div>
                    ) : (
                      <div className="flex items-center gap-2">
                      <div className="flex items-center gap-2 bg-red-500/10 border border-red-500/20 rounded-full px-3 py-0.5">
                        <div className="w-2 h-2 bg-red-400 rounded-full" />
                        <span className="text-red-400 text-sm font-medium">Backlog</span>
                      </div>
                    </div>
                    ) }
                    

                  </div>
                  <div className=''>
                    {projectGroup.badge.map((filtrar, filterIndex) => (
                      <Badge key={filterIndex} className='className="bg-orange-950/30 text-orange-500 border-orange-800 hover:bg-orange-950/50 m-2 text-xs p-1 border inline-block rounded-full px-3 '>
                        {filtrar}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

            ))}
          </div>
          <div className='text-center m-4'>
            <Badge className='className="bg-orange-950/30 text-orange-500 border-orange-800 cursor-pointer hover:bg-orange-950/50 m-2 text-sm p-1  border inline-block rounded-full px-3 '>
              Projects soon
            </Badge>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Project_section