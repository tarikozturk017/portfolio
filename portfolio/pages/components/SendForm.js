import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


const SendForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_9dq05ch', 'template_p6b4c9q', form.current, 'a3fO_vAMQm2O1ye9t')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail} >
      <h2 className=' text-white mb-2 mt-4 text-xl'>Name</h2>
      <input className="
        form-control
        block
        w-52 
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      " type="text" name="user_name" autoComplete='off'/>
      {/* &nbsp */}
      <h2 className=' text-white mb-2 mt-4 text-xl'>Message</h2>
      {/* <textarea className=' indent-2 p-2' name="message" style={{ backgroundColor: "#8C92AC", borderRadius: "8px", height: "15rem", width: "25rem"}} autocomplete="off"/> */}
      <textarea
      className="
        form-control
        block
        w-52 md:w-64 lg:w-80
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
      name="message"
      rows="5"
      placeholder="Your message"
    ></textarea>
      <input className=' cursor-pointer bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 mt-2 rounded-md ml-8' type="submit" value="Send"  />
    </form>
  );
};

export default SendForm;