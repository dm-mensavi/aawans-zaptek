import React from 'react'
import Header from '../components/Header'
import { Helmet } from "react-helmet";

function Attorney() {
  return (
    <div>
      <Helmet>
				<title>Attorney - AawAans</title>
			</Helmet>
      <Header pageTitle="Our Attorney" name="Attorney" />
    </div>
  )
}

export default Attorney