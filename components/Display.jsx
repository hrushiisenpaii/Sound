import React from 'react'

import Navbar from './Navbar';
import Footer from './Footer';
import Image from 'next/image'
import Head from 'next/head';

const Display = ({children}) => {
  return (
   

<div className="layout">
      <Head>
        <title>Sound Store</title>
      </Head>

      <header>
        <Navbar />
      </header>
      <main className="main-container">
        {children}
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
 
  
  )
}

export default Display