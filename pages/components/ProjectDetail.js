import HoverBox from "./HoverBox"
import React from "react"

const ProjectDetail = (props) => {
    const p = props.project

    const content = typeof p !== 'undefined' ? 
        <>
            <div className=" block">
                <HoverBox static={props.project.images.static} playGif={props.project.images.dynamic} />
            </div>
            {props.project.technologies[1] ? 
            <ul className=" justify-between flex px-16 my-8 dark:text-gray-200">
                {props.project.technologies.map((technology) => {
                    return (
                        <li className=" bg-slate-500 text-white font-bold py-2 px-4 rounded-3xl opacity-70 cursor-not-allowed">
                            {technology}
                        </li>
                    )
                })}
            </ul>
             : <ul className=" justify-between flex px-16 my-8 dark:text-gray-200"><li className=" mx-auto bg-slate-500 text-white object-center font-bold py-2 px-4 rounded opacity-70 cursor-not-allowed">
                {props.project.technologies[0]}
            </li></ul>}
            <h3 className="text-3xl my-10 font-medium  pb-2 dark:text-gray-200">
                {props.project.name}
            </h3>
            <p className="py-2 dark:text-gray-200">
            {props.project.description}
            </p>
            <p className=" dark:text-gray-200">Live app: <a href="" target={'_blank'}></a></p>
        </>
    
     : <></>

    return (
        
        <>
            {content}
        </>
    
    )
}

export default ProjectDetail;