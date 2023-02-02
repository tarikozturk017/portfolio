import React, { useState } from 'react';
import Image from 'next/image';

function HoverBox(props) {
  const [isShown, setIsShown] = useState(false);

//   let img = isShown ? reasype : staticReasype
  let img = isShown ? props.playGif : props.static
  return (
    <div className="App">
      <button
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}>
        <Image className="max-w-sm h-auto transition-shadow ease-in-out duration-300 shadow-none hover:shadow-xl rounded" width={"100%"}  height={"100%"} layout={"responsive"} src={img} />
      </button>
    </div>
  );
}

export default HoverBox;