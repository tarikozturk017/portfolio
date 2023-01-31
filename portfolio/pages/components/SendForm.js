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
      <h2 className=' text-white mb-5 text-xl'>Name</h2>
      <input type="text" name="user_name" style={{ backgroundColor: "#8C92AC", borderRadius: "8px", height: "2rem"}} autocomplete="off"/>
      &nbsp
      <h2 className=' text-white mb-5 text-xl'>Message</h2>
      <textarea name="message" style={{ backgroundColor: "#8C92AC", borderRadius: "8px", height: "15rem", width: "25rem"}} autocomplete="off"/>
      <input className=' cursor-pointer bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 mt-2 rounded-md ml-8' type="submit" value="Send"  />
    </form>
  );
};

export default SendForm;