import React, { useState, useEffect } from 'react';
import {isMobile} from 'react-device-detect';
import Image from 'next/image';

// const [width, setWidth] = useState<number>(window.innerWidth);

// function handleWindowSizeChange() {
//     setWidth(window.innerWidth);
// }
// useEffect(() => {
//     window.addEventListener('resize', handleWindowSizeChange);
//     return () => {
//         window.removeEventListener('resize', handleWindowSizeChange);
//     }
// }, []);

// const isMobile = width <= 768;

function HoverBox(props) {
  const [isShown, setIsShown] = useState(isMobile);

//   let img = isShown ? reasype : staticReasype
  
  let img = isShown  ? props.playGif : props.static 
  
 

  return (
    <div className="App">
      <button
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}>
        <div className=" text-sm md:text-base font-burtons  text-black dark:text-white px-4 py-3 mx-auto opacity-70 " role="alert" >
          {/* <svg className='animate-bounce w-6 h-6'> </svg> */}

          {!isShown ? <p className=' '>Hover Image</p> : <p>Click to Open Live App</p>}
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className=" mx-auto my-2 animate-bounce w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <Image alt='' className="  h-auto transition-shadow ease-in-out duration-300 hover:shadow-gray-500 hover:shadow-xl rounded-xl" width={"100%"}  height={"100%"}  src={img} />
      </button>
    </div>
  );
}

export default HoverBox;