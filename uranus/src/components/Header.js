import React from 'react';
import '../App.css';
import image from './image.png'; // Correct relative path to the image

function Header() {
  return (
    <div>
      <div>
        <img src={image} alt='logo' className='logo' />
        <p className='main'>$URANUS Web</p>
      </div>
      {/* Add more elements as needed */}
    </div>
  );
}

export default Header;
