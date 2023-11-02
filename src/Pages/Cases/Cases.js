import React from 'react'
import Header from '../../components/Header'
import { Helmet } from "react-helmet";

function Cases() {
  return (
    <div>
      <Helmet>
				<title>Cases - AawAans</title>
			</Helmet>
      <Header pageTitle="All Cases" name="Cases" />
    </div>
  )
}

export default Cases