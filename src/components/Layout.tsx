import React, { useEffect } from 'react'
import NavBar from './navBar'
import Footer from './Footer'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useState } from 'react';
import LoadPage from './Loadin'


// Esto tienes que estudiarlo porque se te da muy mal
export default function Layout({ children }: { children: React.ReactNode }) {
  const [showSplash, setShowSplash] = useState(true);
  useEffect(() => {
    // Oculta el splash después de 3 segundos
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 1500);

    return () => clearTimeout(timer); // Limpia el temporizador al desmontar
  }, []);
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    })
  })


  return (
    <div className=" flex flex-col justify-between bg-black w-screen overflow-x-hidden">
      {showSplash ? (
        <LoadPage />
      ) : (
        <>
          <NavBar />
          <main className="pt-10 w-screen lg:w-full ">{children}</main>
          <Footer />
        </>

      )}
    </div>
  )
}