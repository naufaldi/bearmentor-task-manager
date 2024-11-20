import Layout from '@/components/common/Layout'
import Navbar from '@/components/common/navbar'
import React from 'react'
import { useLocation } from 'react-router'

function About() {
  const location = useLocation();
  console.log("about location", location);

  return (
    <>
      <Layout>
        <div>Ini Halaman About</div>
      </Layout>
    </>
  )
}

export default About