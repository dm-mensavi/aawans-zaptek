import React from 'react';
import { sectionStyles } from '../Styles/HeaderStyle';

function Header({ pageTitle, name }) {
  return (
    <div style={sectionStyles} className='relative top-0'>
      <div className='w-full mx-auto'>
        <div className='flex flex-col items-center pt-48'>
          <h1 className='h2 md:h1'>{pageTitle}</h1>
          <div className='flex'>
            <h2>Home //<span className='text-primary'> {name}</span></h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
