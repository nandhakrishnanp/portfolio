import React from "react";

const Skills = () => {

    const tools = [
        { name: "Git", description: "Version control", imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/2048px-Git_icon.svg.png" },
        { name: "GitHub", description: "Code hosting", imgUrl: "https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_960_720.png" },
        { name: "Postman", description: "API testing", imgUrl: "https://cdn.icon-icons.com/icons2/3053/PNG/512/postman_macos_bigsur_icon_189815.png" },
      ];
      
      const backend = [
        { name: "Node.js", description: "JavaScript runtime", imgUrl: "https://cdn.iconscout.com/icon/free/png-256/free-node-js-logo-icon-download-in-svg-png-gif-file-formats--nodejs-programming-language-pack-logos-icons-1174925.png?f=webp&w=256" },
        { name: "Express.js", description: "Web framework", imgUrl: "https://www.peanutsquare.com/wp-content/uploads/2024/04/Express.png" },
        { name: "MongoDB", description: "NoSQL database", imgUrl: "https://cdn.iconscout.com/icon/free/png-256/free-mongodb-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-company-vol-5-pack-logos-icons-2945120.png?f=webp" },
        { name:"redis", description:"in-memory Cache", imgUrl:"https://cdn.iconscout.com/icon/free/png-256/free-redis-logo-icon-download-in-svg-png-gif-file-formats--programming-langugae-freebies-pack-logos-icons-1175103.png?f=webp&w=256"},,
        {name:"firebase", description:"BaaS", imgUrl:"https://brandeps.com/logo-download/F/Firebase-logo-02.png"},
     // { name: "Docker", description: "App containerization", imgUrl: "https://www.docker.com/wp-content/uploads/2023/05/symbol_blue-docker-logo.png" },
      ];
// devops - docker , nginx ,  azure ,  
      const devops = [
        { name: "Docker", description: "App containerization", imgUrl: "https://www.docker.com/wp-content/uploads/2023/05/symbol_blue-docker-logo.png" },
        { name: "Nginx", description: "Web server", imgUrl: "https://www.svgrepo.com/show/373924/nginx.svg" },
        { name: "Azure", description: "Cloud platform", imgUrl: "https://seeklogo.com/images/M/microsoft-azure-logo-85055C44BE-seeklogo.com.png" },
      ];
      
      const frontend = [
        { name: "HTML", description: "Web structure", imgUrl: "https://static-00.iconduck.com/assets.00/html-icon-1451x2048-69sehqrp.png" },
        { name: "CSS", description: "Web styling", imgUrl: "https://kintinstitute.org/wp-content/uploads/2016/03/css-logo.png" },
        { name: "JavaScript", description: "Interactivity", imgUrl: "https://img.icons8.com/color/512/javascript.png" },
        { name: "TypeScript", description: "Typed JavaScript", imgUrl: "https://static-00.iconduck.com/assets.00/typescript-icon-icon-2048x2048-2rhh1z66.png" },
        { name: "React.js", description: "library", imgUrl: "https://static-00.iconduck.com/assets.00/react-icon-512x512-u6e60ayf.png" },
        { name: "React Native", description: "App framework", imgUrl: "https://images.seeklogo.com/logo-png/27/2/react-logo-png_seeklogo-273845.png" },
        { name: "Next.js", description: "SSR framework", imgUrl: "https://img.icons8.com/fluent-systems-filled/200/FFFFFF/nextjs.png" },
        { name: "Tailwind CSS", description: "Utility-first CSS", imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2560px-Tailwind_CSS_Logo.svg.png" },
        { name: "Bootstrap CSS", description: "Responsive design", imgUrl: "https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg" },
        { name: "Vite", description: "Build tool", imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Vitejs-logo.svg/255px-Vitejs-logo.svg.png" },
        { name: "Redux-Toolkit", description: "State management", imgUrl: "https://cdn.worldvectorlogo.com/logos/redux.svg" },
      ];
      
      
  return (
    <div className="  w-full relative font-space md:px-12 text-white ">
      <div className="   flex items-center justify-center">
        <div className=" max-w-4xl max-md:m-6">

        <h1 className='text-5xl max-md:text-4xl font-bold'>Frontend Technologies</h1>
        
        <div className=" flex flex-wrap py-8">
          {
            frontend.map((item, index) => (
              <div key={index} className="flex gap-5 items-center p-5">
                <img src={item.imgUrl} alt={item.name} className="w-12 object-contain h-12" />
                <div >
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))
          }
        </div>
        <h1 className='text-5xl max-md:text-4xl font-bold'>Backend Technologies</h1>
        <div className=" flex flex-wrap py-8">
          {
            backend.map((item, index) => (
              <div key={index} className="flex gap-5 items-center p-5">
                <img src={item.imgUrl} alt={item.name} className="w-12 object-contain h-12" />
                <div >
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))
          }
        </div>
        <h1 className='text-5xl max-md:text-4xl font-bold'>DevOPs</h1>
        <div className=" flex flex-wrap py-8">
          {
            devops.map((item, index) => (
              <div key={index} className="flex gap-5 items-center p-5">
                <img src={item.imgUrl} alt={item.name} className="w-12 object-contain h-12" />
                <div >
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))
          }
        </div>
        <h1 className='text-5xl max-md:text-4xl font-bold'>Tools</h1>
        <div className=" flex flex-wrap py-8">
          {
            tools.map((item, index) => (
              <div key={index} className="flex gap-5 items-center p-5">
                <img src={item.imgUrl} alt={item.name} className="w-12 object-contain h-12" />
                <div >
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))
          }
        </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
