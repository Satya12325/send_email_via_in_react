import logo from './logo.svg';
import './App.css';
import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';

function App() {

  const form = useRef();


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_hg3way6', 'template_c4iy521', form.current, '022NlpnUGTQGoa6oT')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };



  return (
    <div className="App">
     
         <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="from_name" /><br/><br/>
      <label>Email</label>
      <input type="email" name="user_email" /><br/><br/>
      <label>Subject</label>
      <textarea name="subject" /><br/><br/>
      <label>Message</label>
      <textarea name="message" /><br/><br/>
      <input type="submit" value="Send" />
    </form>


    </div>
  );
}

export default App;
