
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
  
  return (
    <div className="lg:pt-40 flex justify-center">
    <div className='grid grid-cols-3 gap-12'>
      {data.map((cases)=>(
         <Link className='relative'>
         <img src={cases.pic} alt="case"
           className="w-80 rounded-2xl h-80" />
         <div className="absolute top-0 left-0 w-80 flex flex-col justify-self-end opacity-0 rounded-xl align-bottom text-center transition-opacity duration-300 hover:opacity-100 inset-0 bg-gradient-to-t from-gray-900 ">
         <p className='text-white text-3xl pt-52'>{cases.title} </p>
         <p className='text-2xl text-primary'>{cases.moreInfo} </p>
         </div>
         </Link>
      ))}
    </div>
  </div>
  )
}

export default CaseDetail