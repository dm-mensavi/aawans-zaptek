import React from 'react'
import Header from '../components/Header'
import { Helmet } from "react-helmet";

function Contact() {
  return (
    <div>
      <Helmet>
				<title>Contact - AawAans</title>
			</Helmet>
      <Header pageTitle="Contact Us" name="Contact Us" />
    </div>
  )
}

export default Contact