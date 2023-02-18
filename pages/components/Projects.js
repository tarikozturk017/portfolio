import { useState } from "react";

import ProjectDetail from "./ProjectDetail";
import data from "../../helper/data"



const Projects = () => {

  const [projectDisplay, setProjectDisplay] = useState(data[0])
  
  const handleMouse = (name) => {
    data.map((project) => {
      if(project.name == name) {
        console.log(project.name)
        setProjectDisplay(project)
      }
    })
  }

  return (
        <div>
          <div className=" flex justify-around">
          {/* <h3 className="text-xl font-medium  dark:text-gray-200">Project Details</h3> */}
          </div>
          <div className="w-auto lg:flex gap-10">
            
            <div className=" p-10 rounded-xl my-10 mb-52 flex-1 dark:text-gray-200">
          <h3 className="text-3xl mb-12 text-center font-medium  dark:text-gray-200">All Projects List</h3>
                
                <ul className="list-disc lg:px-24 text-md  md:px-16">
                  {data.map((project) => {
                    return (
                      <li className=" hover:text-teal-500 font-semibold duration-200 my-3 cursor-pointer" onMouseOver={e => handleMouse(e.target.innerText)}>{project.name}</li>
                    )
                  })}
                </ul>
            </div>

            <div className="text-center shadow-xl shadow-gray-500 dark:shadow-gray-700 p-10 rounded-xl my-10   flex-1">
            
              <ProjectDetail project={projectDisplay} />
            </div>
            
          </div>
        </div>
  );
};

export default Projects;