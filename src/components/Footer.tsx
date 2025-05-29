import { Github, Instagram, Linkedin, Mail } from 'lucide-react'

function Footer() {
  return (
    <div className='pt-10 w-screen'>
      <div className=' border-t-gray-50/10 py-8 border-t border-white/10 flex flex-col justify-center '>
        <div className='flex justify-around items-center p-3'>
          <div>
            <h2 className='text-3xl text-orange-500 font-bold'>Cristian Castro</h2>
            <p className='text-gray-500'>Sofware Developer</p>
          </div>
          <div className='flex gap-4 '>
            <button >
              <a href="https://github.com/SRTENEBROSO00" target='_blank'>
                <Github className='hover:text-orange-500 cursor-pointer' />
              </a>
            </button>
            
            <button>
              <a href="https://www.instagram.com/dev_crist?igsh=NW1kZ2pxZzE1OG5h" target='_blank'>
                <Instagram className='hover:text-orange-500 cursor-pointer' />
              </a>
            </button>
            <button>
              <a href="#contact">
              <Mail className='hover:text-orange-500 cursor-pointer' />
              </a>
            </button>
            <button>
              <a href="https://www.linkedin.com/in/cristian-castro-%C3%A1ngeles-965000363/">
              <Linkedin className='hover:text-orange-500 cursor-pointer' />
              </a>
            </button>
          </div>
        </div>
        <div>
          <p className='text-center pt-5 p-16 border-t border-t-gray-900'> &copy; 2025 Cristian Castro. All rights reserved  </p>
        </div>
      </div>
    </div>
  )
}

export default Footer