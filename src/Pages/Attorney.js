import React from 'react'
import Header from '../components/Header'
import { Helmet } from "react-helmet";
import { attorneyData } from './AttorneyData';

function Attorney() {
  return (
    <div>
      <Helmet>
				<title>Attorney - AawAans</title>
			</Helmet>
      <Header pageTitle="Our Attorney" name="Attorney" />
     <div className='general-margin'>
         <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 lg:gap-7 gap-5 rounded-xl lg:pt-40 pt-20 pb-20 p-10 lg:p-10 lg:pb-40'>
        {attorneyData.map((attorneys)=>(
          <div className='border-2 lg:p-6 p-6 rounded-lg flex flex-col items-center'>
            <img src={attorneys.pic} alt='attorney pictures' />
            <p className='font-bold font-serif text-2xl pt-4'>{attorneys.name} </p>
            <p className='text-lg text-secondaryLight pt-2'>{attorneys.position} </p>
          </div>
        ))}
      </div>
     </div>
    </div>
  )
}

export default Attorney