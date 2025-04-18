import React from 'react'
import { Github, Linkedin, Instagram, Mail } from 'lucide-react'

function Footer() {
  return (
    <div className='pt-10'>
      <div className=' border-t-gray-50/10 py-8 border-t border-white/10 flex flex-col justify-center '>
        <div className='flex justify-around items-center p-3'>
          <div>
            <h2 className='text-3xl text-orange-500 font-bold'>Cristian Castro</h2>
            <p className='text-gray-500'>Sofware Developer</p>
          </div>
          <div className='flex gap-4 '>
            <button >
              <a href="https://github.com/SRTENEBROSO00">
                <Github className='hover:text-orange-500 cursor-pointer' />
              </a>
            </button>
            <button>
              <Linkedin className='hover:text-orange-500 cursor-pointer' />
            </button>
            <button>
              <a href="https://www.instagram.com/dev_crist?igsh=NW1kZ2pxZzE1OG5h">
                <Instagram className='hover:text-orange-500 cursor-pointer' />
              </a>
            </button>
            <button>
              <Mail className='hover:text-orange-500 cursor-pointer' />
            </button>
          </div>
        </div>
        <div>
          <p className='text-center pt-5 p-16 border-t border-t-gray-900'> &copy; 2025 Cristian Castro. Todos los derechos reservados  </p>
        </div>
      </div>
    </div>
  )
}

export default Footer