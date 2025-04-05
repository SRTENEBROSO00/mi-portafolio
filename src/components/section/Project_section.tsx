import React from 'react'
import { ArrowUpRight, ExternalLink, Github } from "lucide-react";
import { Button } from "@mui/material";
import { Badge } from "@mui/material";
import Image from "../../assets/doing.png"


function Project_section() {
  // Los datos dentro de los proyectos
  const projectData = [{
    projectName: 'PTD-Asistencia',
    image: Image,
    decription: "Cuando realice más proyectos los iré publicando en esta sección",
    badge: ["React", "Tailwind", "Next.js", "VSCode"]
  },
  {
    projectName: 'No hay proyectos por el momento',
    image: Image,
    decription: "Cuando realice más proyectos los iré publicando en esta sección",
    badge: ["React", "Tailwind", "Next.js", "VSCode"]
  },
  {
    projectName: 'No hay proyectos por el momento',
    image: Image,
    decription: "Cuando realice más proyectos los iré publicando en esta sección",
    badge: ["React", "Tailwind", "Next.js", "VSCode"]

  }]
  // const 
  return (
    <div>
      <div className="bg-black text-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Mis Proyectos</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Una selección de los proyectos en los que trabajé, mostrando mis habilidades y experiencia.
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
              Pronto subiré proyectos
            </Badge>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Project_section