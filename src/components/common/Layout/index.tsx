import React from 'react'
import Navbar from '../navbar'

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main className='container mx-auto p-4'>
        {children}
      </main>
    </>
  )
}

export default Layout