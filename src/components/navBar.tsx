import { useState } from 'react'
import { Home, Code, Briefcase, Mail, Menu } from 'lucide-react'
import { Button } from '@mui/material'

function NavBar() {
  // Toggle Darkmode
  // const [toggleMode, setToggleMode] = useState(true)
  const [isModalOpen, setIsModalOpen] = useState(false)


  const navItems = [
    { name: 'Home', incons: <Home className='h-5 w-5' />, href: '#hero' },
    { name: 'Skills', incons: <Code className='h-5 w-5' />, href: '#skills' },
    { name: 'Projects', incons: <Briefcase className='h-5 w-5' />, href: '#projects' },
    { name: 'Contact', incons: <Mail className='h-5 w-5' />, href: '#contact' }
  ]
  return (

    // Barra de navegacion
    <div className=' lg:flex border-gray-700 rounded-xl h-16 backdrop-blur backdrop-brightness-50 border fixed w-screen lg:w-full top-0 left-0 z-50 '>

      {/* Nav mobbile */}
      <nav className='lg:hidden flex justify-between items-center h-16 w-full p-5'>
        <div className='lg:hidden'>
          <a href='#hero' className='text-orange-500 text-4xl font-bold'>Cris</a>
        </div>

        {/* Modal Trigger Button */}
        <div className="lg:hidden  p-4">
          <button
            onClick={() => setIsModalOpen(true)}
            className=" text-gray-500 hover:text-orange-500 transition-colors"
          >
            <Menu />
          </button>
        </div>
      </nav>


      {/* Modal */}
      {isModalOpen && (
        <div className=" lg:hidden inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-black rounded-lg shadow-lg p-6 w-80">
            <button
              onClick={() => setIsModalOpen(false)}
              className="relative top-2 left-5/6 hover:text-orange-500 transition-colors"
            >
              ✕
            </button>
            <div className="container mx-auto px-4 py-4">
              <div className="flex flex-col space-y-4">
                <a
                  onClick={() => setIsModalOpen(false)}
                  href="#hero"
                  className="flex items-center gap-3 py-2 text-muted-foreground hover:text-orange-500 transition-colors"
                >
                  <Home className="h-5 w-5" />
                  Inicio
                </a>

                <a
                  onClick={() => setIsModalOpen(false)}
                  href="#projects"
                  className="flex items-center gap-3 py-2 text-muted-foreground hover:text-orange-500 transition-colors"
                >
                  <Briefcase className="h-5 w-5" />
                  Proyectos
                </a>
                <a
                  onClick={() => setIsModalOpen(false)}
                  href="#skills"
                  className="flex items-center gap-3 py-2 text-muted-foreground hover:text-orange-500 transition-colors"
                >
                  <Code className="h-5 w-5" />
                  Habilidades
                </a>
                <a
                  onClick={() => setIsModalOpen(false)}
                  href="#about"
                  className="flex items-center gap-3 py-2 text-muted-foreground hover:text-orange-500 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-user h-5 w-5"
                  >
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                  Sobre mí
                </a>
                <a
                  href="#contact"
                  className="flex items-center gap-3 py-2 text-muted-foreground hover:text-orange-500 transition-colors"
                >
                  <Mail className="h-5 w-5" />
                  Contacto
                </a>
                <a href="#contact">
                  <button
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 text-primary-foreground h-10 px-4 py-2 bg-orange-500 hover:bg-orange-600 mt-4"
                  >
                    Contáctame
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}


      {/* PC screen */}
      <nav className='hidden lg:flex justify-around items-center w-full p-5'>
        {/* Logo */}
        <div className=''>
          <a href='#hero' className='text-orange-500 text-4xl font-bold'>Cris</a>
        </div>
        <div className='hidden sm:flex'>
          {/* Nav */}
          {navItems.map((items, index) => (
            <a
              key={index}
              href={items.href}
              className='m-4 text-gray-500 hover:text-orange-400 transition-colors'
            >
              {items.name}
            </a>
          ))}
        </div>
        <div className=' flex w-50 justify-between'>
          {/* <IconButton onClick={() => { setToggleMode(!toggleMode) }}>
            {toggleMode ? (<Moon className='text-gray-500 ' />) : <Sun className='text-gray-500' />}

          </IconButton> */}
          <a href="#contact">
            <Button
              variant='contained'
              sx={{
                backgroundColor: '#F97316',
              }}
            >
              Hire me
            </Button>
          </a>
        </div>
      </nav>
    </div>
  )
}

export default NavBar