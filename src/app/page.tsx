import Carosol from '@/components/Carosol'
import Link from 'next/link'
import React from 'react'

const Home = () => {
  return (
 <div className='  w-full bg-black font-space md:px-12 ' >

    <div className=' h-[70vh]   flex items-center justify-center'>
      <div className=' max-w-4xl max-md:m-8'>
   
          <h1 className='text-7xl text-white max-md:text-4xl font-bold'>Fullstack Web And Mobile Application Developer</h1>
          <p className='py-8 text-[#c7c7c7]'>I create Web and Mobile applications that not only look fantastic but also function seamlessly. Whether it's developing innovative apps, or diving into the latest web technologies, I'm all in. Let's connect and turn your ideas into digital reality!</p>

          <Link href='/about'> <p className=' border-2 text-white border-white w-fit px-3 py-2 rounded-full'>About Me</p></Link>
      </div>
   
     </div>
     <Carosol/>
 </div>
  )
}

export default Home