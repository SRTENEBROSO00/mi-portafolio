import React from 'react'
import { ReactNode } from 'react'
import NavBar from './navBar'
import Footer from './Footer'

// 

// Esto tienes que estudiarlo porque se te da muy mal
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-screen h-screen flex flex-col  bg-black">
      <NavBar />
      <main className="pt-16 border">{children}</main>
      <Footer  />
    </div>
  )
}