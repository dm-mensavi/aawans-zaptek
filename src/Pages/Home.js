import React from 'react';
import leftbg from '../public/breadcrumb-shape-1.png'
import rightbg from '../public/breadcrumb-shape-2.png'

export const sectionStyles = {
  background: `url(${leftbg}), url(${rightbg})`,
  backgroundColor: "#f8f3e8",
  backgroundPosition: 'top left, top right',
  backgroundSize: 'auto, auto',
  backgroundRepeat: 'no-repeat, no-repeat',
  // Add any other styles you need for the section
  width: '1540px',
  height: '500px',
};
function Home() {

  return (
    <div style={sectionStyles} className='bg-primary -ml-20'>
      <section >
        {/* Content for this section */}
      </section>
    </div>
  );
}

export default Home;
