import React, { useState } from 'react';
import case1 from '../../public/cases-details-img-1.jpg';
import case2 from '../../public/cases-details-img-2.jpg';
import case3 from '../../public/cases-details-img-3.jpg';
import case4 from '../../public/cases-details-img-4.jpg';
import case5 from '../../public/cases-details-img-5.jpg';
import case6 from '../../public/cases-details-img-6.jpg';
import case7 from '../../public/cases-details-img-7.jpg';
import case8 from '../../public/cases-details-img-8.jpg';
import { Link } from 'react-router-dom';
const data=[
  {
    id:1,
    title: 'Trademark Infringement',
    moreInfo: 'Intellectual Property',
    pic : case1
  },
  {
    id:2,
    title: 'Patent Infringement',
    moreInfo: 'Intellectual Property',
    pic : case2
  },
  {
    id:3,
    title: 'Breach of Warranty',
    moreInfo: 'Consumer Protection',
    pic : case3
  },
  {
    id:4,
    title: 'False Advertisement',
    moreInfo: 'Consumer Protection',
    pic : case4
  },
  {
    id:5,
    title: 'Drug Possession',
    moreInfo: 'Criminal Defense',
    pic : case5
  },
  {
    id:6,
    title: 'Fraud',
    moreInfo: 'Criminal Defense',
    pic : case6
  },
  {
    id:7,
    title: 'Defamation',
    moreInfo: 'Personal Injury',
    pic : case7
  },
  {
    id:8,
    title: 'Workplace Injury',
    moreInfo: 'Personal Injury',
    pic : case8
  }
]
function CaseDetail() {
  const [isHovered,setIsHovered]=useState(false);

  const handleMouseOn=()=>{
    setIsHovered(true)
  };

  const handleMouseOff=()=>{
    setIsHovered(false)
  }
  return (
    <div
    className="flex"
    onMouseEnter={handleMouseOn}
    onMouseLeave={handleMouseOff}
  >
    
   <Link className=' w-80 h-80 md:w-60 md:h-60 flex lg:w-96 lg:h-96 bg-cover bg-center relative'  style={{ backgroundImage: `url(${case1})` }}>
   
    {isHovered && (
      <div className='absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent rounded-2xl '>
        <p className="text-3xl text-white font-bold">Trademark Infringement</p>
        <p className='text-[#b68c5a] text-2xl'>Intellectual Property</p>
      </div>
    )}
   </Link>
   <Link className=' w-80 h-80 md:w-60 md:h-60 flex lg:w-96 lg:h-96 bg-cover bg-center relative'  style={{ backgroundImage: `url(${case1})` }}>
    <div  className='absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent rounded-2xl '>
    {isHovered && (
      <div>
        <p className="text-3xl text-white font-bold">Trademark Infringement</p>
        <p className='text-[#b68c5a] text-2xl'>Intellectual Property</p>
      </div>
    )}
    </div>
   </Link>
  </div>
  )
}

export default CaseDetail