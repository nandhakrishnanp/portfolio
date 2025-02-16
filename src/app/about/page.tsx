import Image from "next/image";
import React from "react";
import svm from "@/assets/logo.jpg"
const About = () => {
  return (
    <div className=" flex flex-col w-full text-white   items-center    font-space">

      <div className=" max-md:m-7 max-md:text-pretty">
      <div className=" max-w-4xl items-start flex flex-col justify-start">
        <h1 className=" font-bold text-4xl py-2">About Me</h1>

        <p className=" text-lg mt-4 text-accent">
          Hello! I’m Nandhakrishnan, a 19-year-old UG student and passionate
          developer. I specialize in web development and cross-platform mobile
          app development, and I love building impactful products that solve
          real-world problems. With a strong entrepreneurial mindset, I thrive
          on challenges and constantly look for opportunities to learn and grow.
          I’m an enthusiastic hackathon participant, where I can push my skills
          to the limit and collaborate with like-minded individuals to create
          innovative solutions. <br /> <br /> When I’m not coding, I’m diving into the world
          of computer networks and astronomy, always curious to explore how
          systems connect and how the universe works. My goal is to build
          amazing products and contribute to projects that make a real
          difference. Let’s create something awesome together!
        </p>
      </div>
      <div className=" max-w-4xl   mt-4">
        <h1 className=" font-bold text-4xl py-2">Education</h1>
         
         <div className=" flex  justify-start py-2 px-4 rounded-md cursor-pointer bg-[#222222]">
      
            <div className="flex items-center gap-4  py-4 ">
                 <div>
                     <Image className="" src="https://gmeet.skcet.ac.in/assets/images/Institution-Logo.png" alt="Skcet Logo" width={80} height={80} />  
                 </div>
                 <div>
                      <h1> Sri Krishna College of Engineering and Technology</h1>

                      <div className=" flex gap-4">
                      <p> B.E in Mechatronics Engineering </p> 
                      <p> 2023 - 2027</p>
                      </div>
                   
                      <p>CGPA - 9.59</p>
                 </div>
            </div>

         </div>
         <div className=" flex  justify-start py-2 px-4 rounded-md cursor-pointer mt-2 bg-[#222222]">
      
      <div className="flex items-center gap-4  py-4 ">
           <div>
               <Image className=" rounded-full" src={svm} alt="SVM Logo" width={80} height={80} />  
           </div>
           <div>
                <h1>Swami Vivekananda Vidyalaya Mat Hr Sec School</h1>

                <div className=" flex gap-4">
                <p>Computer Science Topper</p> 
                </div>
             
                <p>Grade - 90.1 %</p>
           </div>
      </div>

   </div>
      </div>
      </div>
      
      
    </div>
  );
};

export default About;
