import React from 'react';
import '../App.css';
import image from './image.png'; // Correct relative path to the image

function Header() {
  
  const redirectToGitHub = () => {
   
    window.location.href = 'https://github.com/manipinnaka1125'; // Replace 'your-username' with your actual GitHub username
  };

  return (
    <div >
      <div>
        <img src={image} alt='logo' className='logo' />
        <p className='main'>$URANUS Web</p>
        
      </div>
      <div className='button-container'>
        {/* Apply button-container class here */}
        <button className='glowing-btn' onClick={redirectToGitHub}><span className='glowing-txt'>built by swaroop</span></button>
      </div>
      {/* Add more elements as needed */}
    </div>
  );
}

export default Header;
