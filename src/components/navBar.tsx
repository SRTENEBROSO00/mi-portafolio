import React, { useState } from 'react'
import { Home, Code, Briefcase, Mail, Moon, Sun } from 'lucide-react'
import { Button, IconButton } from '@mui/material'

function NavBar() {
  // Toggle Darkmode
    const[toggleMode, setToggleMode] = useState(true)


  const navItems = [
    { name: 'Inicio', incons: <Home className='h-5 w-5' />, href: '#hero' },
    { name: 'Habilidades', incons: <Code className='h-5 w-5' />, href: '#skills' },
    { name: 'Proyectos', incons: <Briefcase className='h-5 w-5' />, href: '#projects' },
    { name: 'Contáctame', incons: <Mail className='h-5 w-5' />, href: '#contact' }
  ]
  return (
    
    // Barra de navegacion
    <div className='border-gray-700 rounded-xl h-16 flex backdrop-blur backdrop-brightness-50 border fixed w-full top-0 left-0 z-50 '>
      <nav className='flex justify-around items-center w-full p-5'>
        {/* Logo */}
        <div>
          <p className='text-orange-500 text-4xl font-bold'>Cris</p>
        </div>
        <div className='flex'>
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
        <div className='flex w-50 justify-between'>
          <IconButton onClick={() => {setToggleMode(!toggleMode)}}>
            {toggleMode ? (<Moon className='text-gray-500 ' />) : <Sun className='text-gray-500' />  } 
            
          </IconButton>
          <Button
            variant='contained'
            sx={{
              backgroundColor: '#F97316',
            }}
          >
            Contrátame
          </Button>
        </div>
      </nav>
    </div>
  )
}

export default NavBar