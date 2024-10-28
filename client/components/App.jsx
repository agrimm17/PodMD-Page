// import React from 'react'
import Navbar from './Navbar';
import Info from './Info';
// import Install from './Install'
import BioContainer from './containers/BioContainer';
import logoDesign from '../assets/logoDesign.png';
import InstallInstructionsContainer from './containers/InstallContainer'

import '../App.css';

let infoOne =
  'When your pods crash, Kubernetes is designed to automatically restart them to maintain cluster health.  But what if your pods aren’t crashing? What if they’re sucking resources because of data leaks or unexpected background processes? Or you simply want to proactively manage your cluster’s resources?';

let infoTwo =
  'PodMD allows you to set custom parameters to trigger pod restarts, allowing you to prevent excessive resource consumption BEFORE it becomes a problem, helping to maintain overall cluster health. With dynamic, easy-to-read graphs that display your pod’s metrics across various time periods, you can make informed decisions based on real-time data.';

function App() {
  return (
    <div id='body'>
      <Navbar />
      <h1 id='tagline'>
        <img
          src={logoDesign}
          alt='PodMD Logo'
          style={{
            width: '300px',
          }}
        />
        <br />
        Automate your Kubernetes
        {/* <span className='MD'>M</span>onitoring for <span className='MD'>D</span>
        evelopers */}
      </h1>
      <section id='PodMDInfo' className='section'>
        <Info text={infoOne} title='PROBLEM / SOLUTION' />
        <Info text={infoTwo} title='WHY CARE' />
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
      <section id='installInstructions' className='section'><div><InstallInstructionsContainer/></div></section>
      <section id='teamInfo' className='section'><BioContainer/></section>

    </div>
  );
}

export default App;
