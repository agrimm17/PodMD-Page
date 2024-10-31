import React, { useEffect } from 'react';
import Navbar from './Navbar';
import FadeTagline from './FadeTagline';
import BioContainer from './containers/BioContainer';
import InstallInstructionsContainer from './containers/InstallContainer';
import IntroContainer from './containers/IntroContainer';
import '../App.css';

function App() {

  useEffect(() => {
    const resizeOps = () => {
      document.documentElement.style.setProperty("--vh", `${window.innerHeight * 0.01}px`);
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
      <Navbar id='navbar' />
      <div style={{ display: 'flex', justifyContent: 'center' }}>
      <FadeTagline />
      </div>
      <section id='overview'>
        <IntroContainer />
      </section>
      <div style={{ height: '500px', width: 'auto', display: 'flex', justifyContent: 'center' }}>
      <section id='videoDemo' className='section' style={{ height: '100%', width: '100%', marginLeft: '20px', marginRight: '20px' }}>
        <iframe
          style={{ width: '100%', height: '100%' }}
          src='https://www.youtube.com/embed/U9UMWqnvxTA?si=R_CeAa0XLHiFnyj5'
          title='YouTube video player'
          frameBorder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          referrerPolicy='strict-origin-when-cross-origin'
          allowFullScreen
        ></iframe>
      </section>
      </div>
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
