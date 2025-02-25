'use client'

import React from 'react'
import bhuvan from "@/assets/bhuvan1.png";
import home from "@/assets/home.png";

import nike from '@/assets/nike.png'
import wog from '@/assets/worthofgeeks.png'
import uniteio from '@/assets/uniteio.png'
import waytogo from "@/assets/waytogo.png"
import cofound from "@/assets/COFoundIo.png"
import agrichain from '@/assets/agrichain.png'
import Image from 'next/image';
import dump from"@/assets/DumpDynamiX.png"
import cgpa from "@/assets/image.png"
const Work = () => {
    const project = [
      {
        name: "Agri Chain",
        tech: ["React.js", "Express.js" , "MongoDb"],
        description: "A Decentralized Platform For Consumers Connecting With Farmers",
        github: "https://github.com/nandhakrishnanp/agriChain",
        livePage: null,
        image: agrichain,
      },
        {
          name: "DumpDynamix",
          tech: ["React.js", "Express.js", "MongoDB", "React Native"],
          description: "a cross-platform mobile application built with React Native, complemented by a web-based dashboard. It is designed for real-time monitoring, maintenance, and management of truck tyres",
          github: "https://github.com/nandhakrishnanp/DumpDynamix",
          image: dump,
        },
        {
          name: "Cofound.io",
          tech: ["React.js", "Express.js", "MongoDB", "Socket.io"],
          description: "Networking Platform for Students, to create teams, share journeys, realtime chats, and more.",
          github: "https://github.com/nandhakrishnanp/CofoundIo",
          livePage: "https://cofound-io.vercel.app/",
          image: cofound,
        },
        {
          name: "WayToGo.Ai",
          tech: ["React.js", "TailwindCSS"],
          description: "AI-powered assistant for article writing built with React.js and TailwindCSS.",
          github: "https://github.com/nandhakrishnanp/WayToGo.Ai",
          livePage: "https://waytogoai.vercel.app/",
          image: waytogo,
        },
        {
          name: "Collaborative CGPA Calculator",
          tech: ["Next.js", "TailwindCSS","MongoDB"],
          description: "An CGPA Caluculator for students to calculate their CGPA based on their grades and credits with Custom Departments Adding features.",
          github: "https://github.com/nandhakrishnanp/cgpaCalculator",
          livePage: "https://cgpa-calculator-amber.vercel.app/",
          image: cgpa,
        },{
          name: "Nike WebPage",
          tech: ["TailwindCSS", "React.js"],
          description: "Nike Landing Page featuring product sections, reviews, and more.",
          github: "https://github.com/nandhakrishnanp/Nike-Ui-TailwindCss",
          livePage: "https://nike-nine-rust.vercel.app",
          image: nike,
        },
        
        {
          name: "BhuvanChatBot",
          tech: ["React", "Express.js", "NLP"],
          description: "Virtual guide for Bhuvan websites with Natural Language Processing and voice recognition.",
          github: "https://github.com/nandhakrishnanp/Bhuvan",
          livePage: null,
          image: bhuvan,
        },
        {
          name: "Uniteio",
          tech: ["TailwindCSS",  "React", "Vite.js"],
          description: "Responsive Landing Page for Uniteio WebPage using TailwindCSS, React, and Vite.js.",
          github: "https://github.com/nandhakrishnanp/Uniteio-Ui-design",
          livePage: null,
          image: uniteio,
        },
        
        {
          name: "Worthofgeeks",
          tech: ["Web Scraping", "React.js" ,"Express.js", "Cheerio"],
          description: "Webpage using Express.js and Cheerio for scraping GeekForGeeks profile data.",
          github: "https://github.com/nandhakrishnanp/Geeksforgeeks",
          livePage: "https://worthofgeeks.vercel.app/",
          image: wog,
        },
        {
          name: "CometCharge",
          tech: ["React.js", "Leaflet.js"],
          description: "EV-charging platform with reservation-enabled stations, AI-driven analysis, and reward integration.",
          github: "https://github.com/nandhakrishnanp/Comet",
          livePage: null,
          image: home,
        },
      ];

    
      
  return (
   <div className=' w-full flex  justify-center text-white font-space items-center'>
    <div className=' md:max-w-4xl max-md:m-8 '>


       {
        project.map((item)=>(
          <article className='m-2 my-8 md:flex gap-8 items-center '   key={item.name}>
              <div className=''>
                  <Image className='  object-cover w-[300px] ' src={item.image} width={300} height={300} alt={item.description}/>
              </div>
              <div className='md:w-1/2 flex flex-col items-start justify-start'>
                  <h2 className=' text-lg font-bold text-purple-400'>{item.name}</h2>
                  <div className=' flex gap-3'>
                  {item.tech.map((tech)=>(
                      <span className=' underline underline-offset-4  cursor-pointer text-[#c7c7c7]' key={tech}>{tech}</span>
                  ))}
                  </div>
                 
                  <p className=' text-[#c7c7c7] py-2'>{item.description}</p>
                  <div className=' mt-2 flex gap-4 items-center'>
                      <a href={item.github} className=' bg-white py-1 px-2 mt-2 rounded-full text-black' target='_blank' rel='noreferrer'>Github</a>
                      {item.livePage && 
                      <a href={item.livePage} target='_blank' rel='noreferrer'>Live</a>
                      }
                      </div>
              </div>
          </article>
        ))
       }
           </div>
   </div>
  )
}

export default Work