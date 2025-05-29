import { Button } from '@mui/material'
import { Github, Download, Instagram, Mail, Linkedin } from 'lucide-react'
import doingImg from '../../assets/doing.png'


function PortafolioHero() {
  return (
    <div id='hero' className=' w-screen'>
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
                Welcome, I'm <span className="text-orange-500">Cristian Castro</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-md">
                Passionate about learning new things. My favorite area is the front-end, where I can excel with my manipulative skills.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href="#contact" >
                  <Button sx={{ backgroundColor: '#F97316', border: 'orange', color: 'white', '&:hover': { backgroundColor: 'white', 'color': 'orange' } }}>
                    Hire me
                  </Button>
                </a>

                <a href="/documents/CV_CristianCastro.pdf" download=''>
                  <Button sx={{ backgroundColor: 'white', border: 'orange', color: 'orange', '&:hover': { backgroundColor: '#F97316', 'color': 'white' } }}>
                    <Download className="mr-2 h-4 w-4" /> Download CV
                  </Button>

                </a>

              </div>
              <div className="flex items-center gap-4 pt-2">
                <a href="https://www.instagram.com/dev_crist?igsh=NW1kZ2pxZzE1OG5h" target='_blank' className="text-muted-foreground hover:text-orange-500 transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="https://github.com/SRTENEBROSO00" target='_blank' className="text-muted-foreground hover:text-orange-500 transition-colors">
                  <Github className="h-5 w-5" />
                </a>
                <a href="https://www.linkedin.com/in/cristian-castro-%C3%A1ngeles-965000363/" target='_blank' className="text-muted-foreground hover:text-orange-500 transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>

                <a href="#contact">
                  <Mail className='hover:text-orange-500 cursor-pointer' />
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