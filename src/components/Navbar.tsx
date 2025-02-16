'use client'

import Link from 'next/link'
import React, { useEffect } from 'react'

import linkedinicon from '@/assets/Linkedin.svg'
import leetcodeicon from '@/assets/leetcode.svg'
import githubicon from '@/assets/Github.svg'
import geeksforgeeks from '@/assets/Geeks.svg'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
const Navbar = () => {
  const path = usePathname();
    const [currentColor, setCurrentColor] = React.useState('rgb(227, 149, 253)')
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false)
  const [currentitem , setCurrentItem] = React.useState(path)
    const navitems =[
        {
            name: 'Home',
            link: '/'
        },
        {
            name: 'About',
            link: '/about'
        },
        {
            name: 'Skills',
            link: '/skills'
        },
        {
            name: 'Works',
            link: '/work'
        },
        {
            name: 'Contact',
            link: '/contact'
        }
    ]
     const socials =[
        {
            name: 'linkedin',
            link: 'https://www.linkedin.com/in/nandhakrishnanp/',
            logo: linkedinicon
        },
        {
            name: 'github',
            link: 'https://github.com/nandhakrishnanp',
            logo: githubicon
        },
        {
            name: 'leetcode',
            link: 'https://leetcode.com/u/nandhakrishnan/',
            logo: leetcodeicon
        },
        {
            name: 'geeksforgeeks',
            link: 'https://www.geeksforgeeks.org/user/nandhakrishnanp/',
            logo: geeksforgeeks
        }
        
     ]
    useEffect(() => {

        setInterval(() => {
            const colors = ['rgb(227, 149, 253)', 'rgb(255, 0, 0)', 'rgb(0, 255, 0)', 'rgb(0, 0, 255)', 'rgb(255, 255, 0)', 'rgb(255, 0, 255)', 'rgb(0, 255, 255)', 'rgb(255, 255, 255)']
            const randomColor = colors[Math.floor(Math.random() * colors.length)]
            setCurrentColor(randomColor)
        }, 1000)

    },[])

    useEffect(()=>{
         setCurrentItem(path)
    },[path])
  return (
   <nav className='flex sticky bg-black backdrop-blur-lg z-20 top-0 w-full items-center   py-6' >
  
  <div className="flex px-6 items-center justify-center sm:justify-start  sm:w-1/4 w-full text-center sm:text-start">
      <svg
        stroke={currentColor}
        fill="none"
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-3xl sm:mr-4 mr-2"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
        style={{ color: "rgb(227, 149, 253)" }}
      >
        <path d="m18 16 4-4-4-4"></path>
        <path d="m6 8-4 4 4 4"></path>
        <path d="m14.5 4-5 16"></path>
      </svg>
      <div className="flex flex-col font-space sm:hidden md:block text-white ">
        <h1 className="font-bold text-md font-space">Nandha Krishnan P</h1>
        <p className="text-xs text-gray-300  font-space hidden md:block">
          Fullstack Developer
        </p>
      
      </div>
    </div>

    <div className='flex max-md:hidden text-white items-center justify-center flex-1' >
    <ul className=' flex gap-3 font-space  bg-[#222222]  rounded-full p-1'>

{
       navitems.map((item, index) => {
         return (
              <li onClick={()=> {
                setCurrentItem(item.link)
              } } className={`${currentitem==item.link ?"bg-black" :""}  transition-all duration-500  ease-in-out px-3 rounded-full py-2`}  key={index}>
                   <Link href={item.link}>
                   <p className=' text-[18px]'>{item.name}</p>
                     </Link>
                 </li>
         )
}  
)}

</ul>
    </div>
   
     <div className='mx-7 md:hidden'>
        <Image onClick={()=>setIsSidebarOpen(true)} src="https://img.icons8.com/ios11/512/FFFFFF/menu--v2.png" alt='linkedin' width={30} height={30} className='hidden max-md:block hover:scale-90 transition-all duration-300 cursor-pointer' />
     </div>

     {
          isSidebarOpen && (
              <div className='fixed top-0 left-0 w-full h-screen backdrop-blur-md bg-black bg-opacity-50 z-50'>
                  <div className='flex flex-col items-center justify-center h-full'>
                      <div className='flex justify-end w-full'>
                      <Image onClick={()=>setIsSidebarOpen(false)} src="https://img.icons8.com/ios11/512/FFFFFF/menu--v2.png" alt='linkedin' width={30} height={30} className='max-md:hidden hover:scale-90 transition-all duration-300 cursor-pointer' />
                      </div>
                      <ul className='flex flex-col gap-4 font-space text-2xl text-white'>
                          {
                              navitems.map((item, index) => {
                                  return (
                                      <li onClick={()=> {
                                        setCurrentItem(item.link)
                                        setIsSidebarOpen(false)
                                      }} key={index} className={`${currentitem==item.link ?"bg-black" :""}  transition-all duration-500  ease-in-out px-3 rounded-full py-2`}>
                                          <Link href={item.link}>
                                          <p>{item.name}</p>
                                          </Link>
                                      </li>
                                  )
                              })
                          }
                      </ul>
                  </div>
              </div>
          )

     }
   <div className=' flex bg-black  max-md:hidden items-center justify-center '>
   <div className="flex items-center space-x-2 mx-8 ">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-100"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
        </span>
        <p className="text-green-500 font-space text-sm">Available</p>
      </div>

  
       <div className=' flex gap-4 mx-8'>
        {
            socials.map((item, index) => {
                return (
                    <Link   target="_blank" href={item.link} key={index}>
                    <Image  src={item.logo} alt={item.name} width={30} height={30} className=' hover:scale-90 transition-all duration-300 cursor-pointer' />
                    </Link>
                )
            })
        }
       </div>
   </div>
   </nav>
  )
}

export default Navbar