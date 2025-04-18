import React from 'react'
import { Button } from '@mui/material'
import { Github, Linkedin, Mail, Download } from 'lucide-react'
import doingImg from '../../assets/doing.png'

function PortafolioHero() {
  return (
    <div id='hero'>
      {/* El Apartado donde me presento */}
      <div className="relative overflow-hidden" data-aos="zoom-in">
        {/* Fondo con gradiente y efecto */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent z-0"></div>
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl"></div>

        <div className="container relative z-10 mx-auto px-4 py-16 md:py-24">
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div className="space-y-6">
              <div className="inline-block px-3 py-1 rounded-full bg-orange-500/10 text-orange-500 font-medium text-sm">
                Software Developer
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight">
                Bienvenido, soy <span className="text-orange-500">Cristian Castro</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-md">
                Apasionado por aprender cosas nuevas. Mi área favorita es el frontend en el cual puedo destacar por mis
                habilidades de manipular cosas.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href="#contact" >
                  <Button sx={{ backgroundColor: '#F97316', border: 'orange', color: 'white', '&:hover': { backgroundColor: 'white', 'color': 'orange' } }}>
                    Contáctame
                  </Button>
                </a>

                <a href="/documentos/CV_CristianCastro.pdf" download>
                  <Button sx={{ backgroundColor: 'white', border: 'orange', color: 'orange', '&:hover': { backgroundColor: '#F97316', 'color': 'white' } }}>
                    <Download className="mr-2 h-4 w-4" /> Descargar CV
                  </Button>

                </a>



              </div>
              <div className="flex items-center gap-4 pt-2">
                <a href="#" className="text-muted-foreground hover:text-orange-500 transition-colors">
                  <Github className="h-5 w-5" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-orange-500 transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-orange-500 transition-colors">
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>
            <div>
              {/* Imagen doin */}
              <img src={doingImg} alt="imagen de landing" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PortafolioHero