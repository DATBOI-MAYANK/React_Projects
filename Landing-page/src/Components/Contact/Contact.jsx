import React from 'react'
import Header from '../Header/Header'

function Contact() {
  return (
  <>
  <body className='bg-trueGray-400'>
  <Header/>
    
  <div className='flex-col  text-center'>
    <h1 className='font-black text-3xl'>Contact Us</h1>
    <p>Any question or remarks? Just write us a message!</p>
  </div>
 <div className='border-2 border-red-700 w-5/6 h-[32rem] ml-24' >
    <div></div>
    <div></div>
  </div>

  </body>
  
  </>
  )
}

export default Contact