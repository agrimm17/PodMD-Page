import React, { useEffect } from 'react';
import Navbar from './Navbar';
import Info from './Info';

// import Install from './Install'
import BioContainer from './containers/BioContainer';
import InstallInstructionsContainer from './containers/InstallContainer';
import IntroContainer from './containers/IntroContainer';

import '../App.css';

function App() {

  useEffect(() => {
    const resizeOps = () => {
      document.documentElement.style.setProperty("--vh", `${window.innerHeight * 0.01}px`);
      console.log('ran func')
    };

    resizeOps();
    window.addEventListener("resize", resizeOps);
    window.addEventListener("orientationchange", resizeOps);

    return () => {
      window.removeEventListener("resize", resizeOps);
      window.removeEventListener("orientationchange", resizeOps);
    };
  }, []);

  return (
    <div id='body'>
      <Navbar />
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

      <section id='overview'>
        <IntroContainer />
      </section>

      <section id='videoDemo' className='section'>
        <iframe
          width='800'
          height='450'
          src='https://www.youtube.com/embed/dQw4w9WgXcQ?si=znqw3MZ_6h5a2X9j'
          title='YouTube video player'
          frameBorder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          referrerPolicy='strict-origin-when-cross-origin'
          allowFullScreen
        ></iframe>
      </section>
      <section id='installInstructions' className='section'>
        <div>
          <InstallInstructionsContainer />
        </div>
      </section>
      <section id='teamInfo' className='section'>
        <BioContainer />
      </section>
    </div>
  );
}

export default App;
