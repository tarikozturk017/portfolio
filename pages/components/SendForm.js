import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Alert from 'react-bootstrap/Alert';
import { GiCancel } from 'react-icons/gi'

const SendForm = () => {
  const [show, setShow] = useState(false);
  const [failShow, setFailShow] = useState(false);
  const [email, setEmail ] = useState({
    user_name:'',
    user_contact: '',
    message: ''
  })

  const handleChange = (e) => {
    console.log(e.target.name + '  :  ' + e.target.value)
    setEmail({ ...email, [e.target.name]: e.target.value })
  }

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    if(email.message != '' && email.user_contact != '' && email.user_name != '') {
      emailjs.sendForm('service_9dq05ch', 'template_p6b4c9q', form.current, 'a3fO_vAMQm2O1ye9t')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        }).then(setFailShow(false)).then(setShow(true)).then(setEmail({
          user_name:'',
          user_contact: '',
          message: ''
        }));
      }
      else {
        setFailShow(true);
        setShow(false);
      }
  };

  return (
    <>
    { failShow && <Alert variant="success" className=' bg-gradient-to-r from-red-300 to-rose-300 rounded-xl px-5 pt-0 pb-5' 
     dismissible>
        <GiCancel className=' float-right mt-2 text-lg cursor-pointer' onClick={() => setFailShow(false)}/>
        <Alert.Heading className=' font-burtons under '>Invalid Input!</Alert.Heading>
        <p>
          Please fill out the Name, Contact & Message boxes. 
        </p>
    </Alert>}
    { show && <Alert variant="success" className=' bg-gradient-to-r from-cyan-200 to-teal-200 rounded-xl px-5 pt-0 pb-5' 
     dismissible>
        <GiCancel className=' float-right mt-2 text-lg cursor-pointer' onClick={() => setShow(false)}/>
        <Alert.Heading className=' font-burtons under'>Thank you for contacting me!</Alert.Heading>
        <p>
          Your message has been received and I will get back to you as soon as possible. 
        </p>
    </Alert>}
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
      " type="text" name="user_name" autoComplete='off' placeholder="Name" value={email.user_name} onChange={handleChange} />
      <h2 className=' text-white mb-2 mt-4 text-xl'>Contact</h2>
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
      " type="text" name="user_contact" autoComplete='off' placeholder="Your email address" value={email.user_contact} onChange={handleChange}/>
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
      value={email.message} onChange={handleChange}
    ></textarea>
      <input className=' cursor-pointer bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 mt-4 rounded-md ' type="submit" 
      value={'submit'} 
      
      />
    </form>
    </>
  );
};

export default SendForm;