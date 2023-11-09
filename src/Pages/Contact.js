import React from 'react'
import Header from '../components/Header'
import { Helmet } from "react-helmet";
import ContactForm from '../components/ContactForm';
import { fadeIn } from '../variants';
import { motion } from "framer-motion";
import Map from '../components/Map';

function Contact() {
  return (
    <div className='contact-page-body'>
      <Helmet>
				<title>Contact - AawAans</title>
			</Helmet>
      <Header pageTitle="Contact Us" name="Contact Us" />
      
      <section className='py-14 md:py-36 md:px-10'>
        <div className='section-content px-4 sm:px-14 md:px-24'>
          <div className="section-header text-center mb-20">
            <motion.h2
              variants={fadeIn("up", 0.5, 0)}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0 }}
              className="px-7 py-2 bg-primary inline-block text-white rounded-md"
            >
              Contact Us
            </motion.h2>

            <motion.h3 
              variants={fadeIn("up", 0.5, 0)}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0 }}
              className="mt-10 mb-[20px] font-serif text-3xl leading-10 font-bold lg:text-4xl lg:mt-12 lg:mb-[26px]"
            >
              How Can We Help You?
            </motion.h3>
          </div>

          <ContactForm />

          <Map />
        </div>
      </section>
    </div>

    
  )
}

export default Contact