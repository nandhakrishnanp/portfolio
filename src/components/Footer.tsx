import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className="w-full bg-[#010101] flex flex-col justify-center items-center mt-40 relative overflow-hidden">
    <div className="footer-big-in relative py-[100px] flex flex-col justify-center items-center">
      <Image
        src="https://uploads-ssl.webflow.com/64470065adf2a67f8abcbb4d/64470065adf2a6e95cbcbb99_planet-earth.png"
        alt="Planet Earth"
        className="max-w-sm absolute bottom-0 -left-full"
        width={500}
        height={500} // Adjust the width and height based on the image's aspect ratio
      />
      <Image
        src="https://uploads-ssl.webflow.com/64470065adf2a67f8abcbb4d/64470065adf2a60a31bcbbdf_space-men.png"
        alt="Space Men"
        className="sm:max-w-md max-w-lg absolute -top-8 bottom-0 sm:-right-[412px] -right-[360px]"
        width={500}
        height={500} // Adjust the width and height based on the image's aspect ratio
      />
      <h5 className="text-white text-xl font-HedvigLettersSans">Have an idea ?</h5>
      <h1 className="text-white font-bold text-center sm:text-5xl text-3xl font-SpaceGrotesk">
        Let's talk about it
      </h1>
      <div className="mt-3">
        <Link href="/contact">
          <button className="group relative font-thin text-white text-lg font-HedvigLettersSans rounded-full bg-[#222222] px-6 py-2 transition-all duration-1000 hover:left-3 hover:top-3 text-center gap-3 flex items-center">
            Contact
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              className="vibrate-1 opacity-50 group-hover:scale-150 group-hover:opacity-100"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path d="M6 6v2h8.59L5 17.59 6.41 19 16 9.41V18h2V6z"></path>
            </svg>
          </button>
        </Link>
      </div>
    </div>
  </div>
  )
}

export default Footer