import HoverBox from "./HoverBox"
import React from "react"

const ProjectDetail = (props) => {
    const p = props.project
    // console.log(props)

    const content = typeof p !== 'undefined' ? 
        <>
            <div className=" block">
                <HoverBox static={props.project.images.static} playGif={props.project.images.dynamic} />
            </div>
            {props.project.technologies[1] ? 
            
            <ul className=" justify-between flex flex-wrap px-4 my-4 mt-4 xl:mt-12 dark:text-gray-200">
                {props.project.technologies.map((technology, index) => {
                    return (
                        <li key={index} className=" bg-slate-700 text-white text-xs xl:text-sm 2xl:text-base font-medium md:font-bold p-1 md:px-3 m-1 rounded-3xl opacity-90 cursor-not-allowed">
                            {technology}
                        </li>
                    )
                })}
            </ul>
             : <ul className=" justify-between flex px-16 my-8 dark:text-gray-200"><li className=" mx-auto bg-slate-500 text-white object-center font-bold py-2 px-4 rounded opacity-70 cursor-not-allowed">
                {props.project.technologies[0]}
            </li></ul>}
            <h3 className=" text-md md:text-xl 2xl:text-2xl my-4 xl:my-8 font-medium  pb-2 dark:text-gray-200">
                {props.project.name}
            </h3>
            <p className="py-2 text-sm md:text-lg 2xl:text-xl dark:text-gray-200">
            {props.project.description}
            </p>
            {/* <p className=" dark:text-gray-200 text-sm md:text-lg 2xl:text-xl">Live app: <a href="" target={'_blank'}></a></p> */}
        </>
    
     : <></>

    return (
        
        <>
            {content}
        </>
    
    )
}

export default ProjectDetail;