import React from 'react';
import { sectionStyles } from '../Pages/Home';

function Header({ pageTitle, name }) {
  return (
    <div style={sectionStyles} className='w-[1400px] box-border'>

    <div  className='flex flex-col items-center'>
      <h1 className='h2 md:h1'>{pageTitle}</h1>
      <div className='flex'>
        <h2>Home //<span className='text-primary'> {name}</span></h2>
      </div>
    </div>
    </div>
  );
}

export default Header;
