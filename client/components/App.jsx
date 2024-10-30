import React, { useEffect } from 'react';
import Navbar from './Navbar';
import Info from './Info';

// import Install from './Install'
import BioContainer from './containers/BioContainer';
import InstallInstructionsContainer from './containers/InstallContainer';
import anxiousFace from '../assets/anxiousFace.png';
import sliderImage from '../assets/sliders.png';
import clockImage from '../assets/clock.png';

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
            onClick={() => (window.location.hash = '#overview')}
            className='navButton'
          >
            Learn More
          </button>
          <button
            onClick={() => (window.location.hash = '#installInstructions')}
            className='navButton'
          >
            Get Started
          </button>
        </div>
      </h1>

      <section id='overview'>
        <h2 className='section-title'>Why PodMD?</h2>
        <div className='overview-text'>
          <img src={anxiousFace} width='50px'></img>
          <p>
            When your pods crash, Kubernetes automatically restarts them. But
            what happens when your pods are consuming resources due to data
            leaks or poorly managed processes?
          </p>
        </div>
        <div className='overview-text'>
          <img src={sliderImage} width='80px'></img>
          <p>
            Introducing PodMD, a 100% open-source solution that allows you to
            set custom parameters for pod restarts, helping you manage resource
            consumption proactively.
          </p>
        </div>
        <div className='overview-text'>
          <img src={clockImage} width='50px'></img>
          <p>
            With PodMD, you can save valuable time by automating restarts based
            on defined thresholds, ensuring your applications remain responsive
            without constant monitoring.
          </p>
        </div>
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
