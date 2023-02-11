import Image from "next/image";
import img from "../../public/auctionhub.jpg"


const Projects = () => {
  
  return (
        <div>
          <div className=" flex justify-around">
          <h3 className="text-xl font-medium  dark:text-gray-200">List of My Projects</h3>
          {/* <h3 className="text-xl font-medium  dark:text-gray-200">Project Details</h3> */}
          </div>
        <div className="w-auto lg:flex gap-10">
            
            <div className="text-center lg:flex p-10 rounded-xl my-10 flex-1 dark:text-gray-200">
                <div className=" text-left p-10 rounded-xl my-10 flex-1 dark:text-gray-200" >
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
                
                </div>
            </div>

            <div className="text-center shadow-xl shadow-gray-200 dark:shadow-gray-700 p-10 rounded-xl my-10   flex-1">
            {/* <img className=" object-center m-auto" width={"300px"} src="https://az837918.vo.msecnd.net/publishedimages/articles/1733/en-CA/images/cover/1/free-download-this-stunning-alberta-scene-for-your-device-background-image-L-6.jpg" alt="" /> */}
              <div className=" block">
                <Image className=" mx-auto max-w-2xl h-auto transition-shadow ease-in-out duration-300 shadow-none hover:shadow-xl rounded" width={"100%"}  height={"100%"} layout={"responsive"} src={img} />
              </div>

              <h3 className="text-lg font-medium pt-8 pb-2 dark:text-gray-200">
                Reasype
              </h3>
              <p className="py-2 dark:text-gray-200">
                Creating elegant designs suited for your needs following core
                design theory.
              </p>
              
            </div>
            
          </div>
          </div>
  );
};

export default Projects;