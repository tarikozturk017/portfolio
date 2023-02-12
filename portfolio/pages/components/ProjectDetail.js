import Image from "next/image"
import HoverBox from "./HoverBox"

const ProjectDetail = (props) => {
    const {
        name,
        description,
        technologies,
        images,
        url
    } = props.project

    return (
        
        <>
            <div className=" block">
            {/* <Image className=" mx-auto max-w-2xl h-auto transition-shadow ease-in-out duration-300 shadow-none hover:shadow-xl rounded" 
                width={"100%"}  height={"100%"} alt='' src={images.static} /> */}
                <HoverBox static={images.static} playGif={images.dynamic} />
            </div>
            <ul className=" justify-between flex px-16 my-8 dark:text-gray-200">
                {technologies.map((technology) => {
                    return (
                        <li className=" bg-slate-500 text-white font-bold py-2 px-4 rounded opacity-70 cursor-not-allowed">
                            {technology}
                        </li>
                    )
                })}
            </ul>
            <h3 className="text-3xl my-10 font-medium  pb-2 dark:text-gray-200">
                {name}
            </h3>
            <p className="py-2 dark:text-gray-200">
            {description}
            </p>
            <p className=" dark:text-gray-200">Live app: <a href="" target={'_blank'}>{url}</a></p>
        </>
    )
}

export default ProjectDetail;