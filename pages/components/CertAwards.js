import Image from 'next/image';
import { MdOutlineKeyboardBackspace } from 'react-icons/md'

import pic1 from "../../public/1.png"
import pic2 from "../../public/2.png"
import pic3 from "../../public/3.png"
import pic4 from "../../public/4.png"
import pic5 from "../../public/5.png"
import pic6 from "../../public/6.png"
import pic7 from "../../public/7.png"
import pic8 from "../../public/8.png"

import a0 from "../../public/a0.png"
import a1 from "../../public/a1.png"
import a2 from "../../public/a2.png"
import a3 from "../../public/a3.png"
import a4 from "../../public/a4.png"
import a5 from "../../public/a5.png"
import a6 from "../../public/a6.png"

const CertAwards = ({ setShowCert }) =>{
    const certs = [pic1, pic2, pic3, pic4 , pic5 , pic6 , pic7, pic8];
    const awrs = [a0, a1, a2, a3, a4, a5, a6]
    
    const awards = awrs.map((pic) => {
        return (
            <>
                <div className=" flex text-center shadow-lg p-8  rounded-xl  shadow-gray-500 flex-1 h-auto ">
                <Image alt='' className=" my-auto transition-shadow ease-in-out duration-300 hover:shadow-gray-500 hover:shadow-xl rounded-xl" 
                max-width={"100%"}  max-height={"100%"}  src={pic} />

                </div>
            </>
        )
    })

    const certificates = certs.map((pic) => {
        return (
            <>
                <div className=" flex text-center shadow-lg p-8  rounded-xl  shadow-gray-500 flex-1 h-auto ">
                <Image alt='' className=" my-auto transition-shadow ease-in-out duration-300 hover:shadow-gray-500 hover:shadow-xl rounded-xl" 
                max-width={"100%"}  max-height={"100%"}  src={pic} />

                </div>
            </>
        )
    })

    return (
        <>
        <div className=' pb-5 dark:text-white lg:text-xl 2xl:text-2xl font-burtons bg-blue-100 px-8 lg:px-20 2xl:px-32 dark:bg-gray-900'>
            <div className='min-h-screen'>
                {/* <div className='text-center lg:p-5 2xl:p-10 container m-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ls-4 gap-10'> */}
                        <div className=' pt-10'>
                            <MdOutlineKeyboardBackspace className='cursor-pointer text-2xl lg:text-4xl xl:text-5xl' 
                            onClick={() => {setShowCert(false)}}/>
                        </div>
                        <p className=' font-burtons text-center pt-10'>Awards</p>
                    <div className='text-center lg:p-5 2xl:p-10 container m-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ls-4 gap-10'>
                        {awards}
                    </div>
                        <p className=' font-burtons text-center'>Certificates</p>
                    <div className='text-center lg:p-5 2xl:p-10 container m-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ls-4 gap-10'>
                        {certificates}
                    </div>
                {/* </div> */}
            </div>
        </div>
        </>
    )
}

export default CertAwards;