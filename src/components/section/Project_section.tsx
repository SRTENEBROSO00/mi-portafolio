import React from 'react'
import { Github } from "lucide-react";
import { Badge } from "@mui/material";
import Image from "../../assets/doing.png"


function Project_section() {
  // Los datos dentro de los proyectos
  const projectData = [{
    projectName: 'PTD-Asistencia',
    image: Image,
    decription: "I'll add all my future new projects soon",
    badge: ["React", "Tailwind", "Next.js", "VSCode"]
  },
  {
    projectName: 'There is not projects yet',
    image: Image,
    decription: "I'll add all my future new projects soon",
    badge: ["React", "Tailwind", "Next.js", "VSCode"]
  },
  {
    projectName: 'There is not projects yet',
    image: Image,
    decription: "I'll add all my future new projects soon",
    badge: ["React", "Tailwind", "Next.js", "VSCode"]

  }]

  return (
    <div id='projects' data-aos="fade-up">
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
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8  '>
            {/* Render */}
            {projectData.map((projectGroup, index) => (
              <div key={index} className='  group h-96 flex flex-col justify-around items-start bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden hover:border-orange-500/50 transition-all hover:shadow-orange-500/10 hover:shadow-lg p-5 '>
                <div>
                  <div className=' absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 h-44 transition-opacity flex items-end justify-between p-4'>
                    <Github className='hover:bg-orange-950/50 pointer-events-auto' />
                  </div>
                  <img src={projectGroup.image} alt="imagen del proyecto" className='' />
                </div>
                <div className=''>
                  <h3 className='text-xl font-bold mb-2 group-hover:text-orange-500 transition-colors'>{projectGroup.projectName}</h3>
                  <p className='text-gray-400 text-opacity-70'> {projectGroup.decription}</p>
                </div>
                <div className=''>
                  {projectGroup.badge.map((filtrar, filterIndex) => (
                    <Badge key={filterIndex} className='className="bg-orange-950/30 text-orange-500 border-orange-800 hover:bg-orange-950/50 m-2 text-xs p-1 border inline-block rounded-full px-3 '>
                      {filtrar}
                    </Badge>
                  ))}
                </div>
              </div>

            ))}
          </div>
          <div className='text-center m-4'>
            <Badge className='className="bg-orange-950/30 text-orange-500 border-orange-800 hover:bg-orange-950/50 m-2 text-sm p-1  border inline-block rounded-full px-3 '>
              Projects soon
            </Badge>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Project_section