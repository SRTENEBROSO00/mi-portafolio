import React from 'react'
import { ReactNode } from 'react'
import NavBar from './navBar'
import Footer from './Footer'

// 

// Esto tienes que estudiarlo porque se te da muy mal
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-screen h-full flex flex-col justify-between bg-black">
      <NavBar />
      <main className="pt-10">{children}</main>
      <Footer  />
    </div>
  )
}