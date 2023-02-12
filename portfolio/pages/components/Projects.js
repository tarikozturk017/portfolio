import { useState } from "react";

import Image from "next/image";
import img from "../../public/auctionhub.jpg"
import ProjectDetail from "./ProjectDetail";
import data from "./data"



const Projects = () => {

  const [projectDisplay, setProjectDisplay] = useState(data[0])
  
  const handleMouse = (name) => {
    data.map((project) => {
      if(project.name == name) {
        // console.log(project)
        setProjectDisplay(project)
      }
    })
  }

  return (
        <div>
          <div className=" flex justify-around">
          <h3 className="text-xl font-medium  dark:text-gray-200">List of My Projects</h3>
          {/* <h3 className="text-xl font-medium  dark:text-gray-200">Project Details</h3> */}
          </div>
        <div className="w-auto lg:flex gap-10">
            
            <div className="text-center lg:flex p-10 rounded-xl my-10 flex-1 dark:text-gray-200">
                {/* <div className=" text-left p-10 rounded-xl my-10 flex-1 dark:text-gray-200" >
                <ul className="list-disc">
                    <li>Reasype</li>
                    <li>AuctionHub</li>
                    <li>PlanetBlue</li>
                    <li>Pomodoro Clock</li>
                </ul>
                
                </div>
                <div className=" text-left p-10 rounded-xl my-10 flex-1 dark:text-gray-200" >
                <ul className="list-disc">
                    <li>Reasype</li>
                    <li>AuctionHub</li>
                    <li>PlanetBlue</li>
                    <li>Pomodoro Clock</li>
                </ul>
                
                </div> */}
                <ul className="list-disc">
                  {data.map((project) => {
                    let pImg = project.images.static
                    return (
                      <li onMouseOver={e => handleMouse(e.target.innerText)}>{project.name}</li>
                    )
                  })}
                </ul>
            </div>

            <div className="text-center shadow-xl shadow-gray-200 dark:shadow-gray-700 p-10 rounded-xl my-10   flex-1">
            
              {/* <div className=" block">
                <Image className=" mx-auto max-w-2xl h-auto transition-shadow ease-in-out duration-300 shadow-none hover:shadow-xl rounded" 
                width={"100%"}  height={"100%"} alt='' src={projectDisplay.images.static} />
                
              </div>

              <h3 className="text-lg font-medium pt-8 pb-2 dark:text-gray-200">
                Reasype
              </h3>
              <p className="py-2 dark:text-gray-200">
                Creating elegant designs suited for your needs following core
                design theory.
              </p> */}
              <ProjectDetail project={projectDisplay} />
            </div>
            
          </div>
          </div>
  );
};

export default Projects;