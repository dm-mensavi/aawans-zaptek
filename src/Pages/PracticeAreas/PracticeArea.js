import React from 'react'
import Header from '../../components/Header'
import { Helmet } from "react-helmet";

function PracticeArea() {
  return (
    <div>
      <Helmet>
				<title>Practice Areas - AawAans</title>
			</Helmet>
      <Header pageTitle="Practice Areas" name="Practice Areas" />
    </div>
  )
}

export default PracticeArea