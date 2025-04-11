import React from 'react'
import { Phone, LocateIcon, Mail, Send } from "lucide-react";
import { Button } from '@mui/material';


function Contact_section() {
  return (
    <div id='contact' data-aos="fade-up">
      {/* content */}
      <div className=' pt-11 ' >
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 ">
            <h2 className="text-4xl font-bold mb-4">Contact me</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
            Do you have a project in mind or want to discuss job opportunities? I'm available!
            </p>
          </div>
          {/* Main */}
          <div className='grid grid-cols-2 mx-auto'>

            {/* Informacion */}
            <div className='border rounded-2xl border-white/10 h-96 w-96 inline-block p-5'>
              <h2 className='text-center text-xl text-orange-500'>My information</h2>
              <div className='pt-8'>
                <div className='flex items-center  gap-5'>
                  <Mail className="h-5 w-5 text-orange-500 bg-orange-500/10 rounded-full " />
                  <div>
                    <h3 className='text-gray-400 text-opacity-70'>Email</h3>
                    <p>kristian@gmail.com</p>
                  </div>
                </div>

                <div className='flex items-center my-2 gap-5'>
                  <Phone className="h-5 w-5 text-orange-500 bg-orange-500/10 rounded " />
                  <div>
                    <h3 className='text-gray-400 text-opacity-70'>Phone</h3>
                    <p>(829) 246-2158</p>
                  </div>
                </div>

                <div className='flex items-center my-2 gap-5'>
                  <LocateIcon className="h-5 w-5 text-orange-500 bg-orange-500/10 rounded-full " />
                  <div>
                    <h3 className='text-gray-400 text-opacity-70'>Location</h3>
                    <p>Ciudad de La Vega, Rep.Dom.</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Formulario de contacto */}
            <div className='border rounded-2xl border-white/10 p-5'>
              <form action="">
                <div className='grid grid-cols-2 gap-4'>
                  <div className='flex flex-col'>
                    <label htmlFor="" className='text-sm'>Name</label>
                    <input type="text" placeholder='Your name' className='flex h-10 w-full rounded-md border px-3 py-2 text-sm placeholder:text-muted-foreground bg-white/5 border-white/10' />
                  </div>
                  <div className='flex flex-col'>
                    <label htmlFor="" className='text-sm'>Email</label>
                    <input type="text" placeholder='Ejemplo@gmail.com' className='flex h-10 w-full rounded-md border px-3 py-2 text-sm placeholder:text-muted-foreground bg-white/5 border-white/10' />
                  </div>
                </div>
                <div className='flex flex-col mt-4'>
                  <label htmlFor="" className='text-sm'>Affairs</label>
                  <input type="text" placeholder='Type your mesagge' className='flex h-10 w-full rounded-md border px-3 py-2 text-sm placeholder:text-muted-foreground bg-white/5 border-white/10' />
                </div>
                <div className='flex flex-col mt-4'>
                  <label htmlFor="" className='text-sm'>Mesagge</label>
                  <textarea className='flex w-full rounded-md border px-3 py-2 text-sm bg-white/5 border-white/10 min-h-[120px]' placeholder='Type your mesagge here'></textarea>
                </div>
                <Button variant='contained'
                  sx={{
                    backgroundColor: '#F97316',
                    marginTop: '16px',
                  }}>Send <Send className='h-5 w-5 m-2'/> </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

}
export default Contact_section