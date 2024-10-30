import React, { useState, useEffect } from 'react';
import { Fade, Box } from '@mui/material';

const FadeTagline = ({ src, alt, duration = 1000 }) => {

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log('loaded');
      setLoaded(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', maxWidth: '2000px', maxHeight: '750px', overflow: 'hidden' }}>
      <Fade in={loaded} timeout={duration}>
        <Box component='span' sx={{ display: 'flex', justifyContent: 'center' }}>
          <h1 id='tagline'>
        <div className='taglineText'>
          Transform your Kubernetes Management With
          <span id='pod'>Pod</span>
          <span id='md'>MD</span>
        </div>
        <div className='subText'>
          Custom pod restart configurations for smarter resource management.
        </div>
        <div className='buttonBox'>
          <button
            onClick={() => {
              document
                .getElementById('overview')
                .scrollIntoView({ behavior: 'smooth' });
            }}
            className='navButton'
          >
            Learn More
          </button>
          <button
            onClick={() => {
              document
                .getElementById('installInstructions')
                .scrollIntoView({ behavior: 'smooth' });
            }}
            className='navButton'
          >
            Get Started
          </button>
        </div>
      </h1>         
        </Box>
      </Fade>
    </Box>
  );
}

export default FadeTagline;