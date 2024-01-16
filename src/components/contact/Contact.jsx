import React,{useRef} from 'react';
import './contact.css';
import {MdOutlineEmail} from 'react-icons/md';
import {RiMessengerLine} from 'react-icons/ri';
import {BsWhatsapp, BSWhatsapp} from 'react-icons/bs';
import emailjs from '@emailjs/browser';

const Contact = () => {
const form = useRef();

const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm('service_vto9hwq', 'template_8t91vzh', form.current, '3oJpmQONNsOCuvAW0')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
    e.target.reset();
};


  return (
    <section id='contact'> 
      <h2>We will contact very soon</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>homerennovation2@gmail.com</h5>
            <a href="mailto:dikshadishu1802@gmail.com">Send a message</a>
          </article>

          <article className="contact__option">
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Facebook</h5>
            <a href="https://m.me/dikshamehta.mummypapa" target='_blank'>Send a message</a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+31623042345</h5>
            <a href="https://api.whatsapp.com/send?phone=+917320829249" target='_blank'>Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
            <input type="text" name='name' placeholder='Enter Your Full Name' required />
            <input type="text" name='email' placeholder='Your Email id' required />
            <textarea name="message" id="" rows="10" placeholder='Your Message'> </textarea>
            <button type='submit' className='btn btn-primary'>Send Message</button>
          </form>
      </div>
    </section>
  )
}

export default Contact
