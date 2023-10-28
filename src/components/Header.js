import React from 'react';

function Header({ pageTitle, name }) {
  return (
    <div className='flex flex-col items-center'>
      <h1 className='h1'>{pageTitle}</h1>
      <div className='flex'>
        <h2>Home //<span className='text-primary'> {name}</span></h2>
      </div>
    </div>
  );
}

export default Header;
