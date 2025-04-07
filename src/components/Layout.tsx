import React, { useEffect } from 'react'
import NavBar from './navBar'
import Footer from './Footer'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useState } from 'react';
import LoadPage from './Loadin'


// 

// Esto tienes que estudiarlo porque se te da muy mal
export default function Layout({ children }: { children: React.ReactNode }) {
  const [showSplash, setShowSplash] = useState(true);
  useEffect(() => {
    // Oculta el splash después de 3 segundos
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000);

    return () => clearTimeout(timer); // Limpia el temporizador al desmontar
  }, []);
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    })
  })


  return (
    <div className=" min-h-screen flex flex-col justify-between bg-black xl:w-screen sm:w-full  overflow-x-hidden ">
      {showSplash ? (
        <LoadPage />
      ) : (
        <>
          <NavBar />
          <main className="pt-10 w-full ">{children}</main>
          <Footer />
        </>

      )}
    </div>
  )
}