import React from 'react'
import About from './AboutJsx/About'
import Head from 'next/head'

export const metadata = {
  title: 'SSLT | ABOUT',
  description: 'This is the about page',
}



function Page() {
  return (
    <div>
     
        <About></About>
    </div>
  )
}

export default Page