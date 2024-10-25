// import React from 'react'
import Navbar from './Navbar';
import Info from './Info';
// import Install from './Install'
// import BiosContainer from './containers/BiosContainer'
import '../App.css';

let infoOne =
  "Current methods available in Kubernetes that control automatic restarts are very limited and non-customizable. We've created a tool that evaluates pod health and can automatically restart a pod based on user's custom parameters.";
let infoTwo =
  'As a software engineer tasked with maintaining our Kubernetes clusters I want to be able to further customize pod restarts to recieve notifcations when a pod is having issues but more importantly NOT receive alerts and have to manually handle an issue when I could have automated it with custom restart parameters beyond the limited default Kubernetes criteria. ';
function App() {
  return (
    <div id='body'>
      <Navbar />
      {/* <img id='tagline'
            src={logoSlogan}
            alt='PodPulse - Your DevOps Companion'
            width='500px'
            height='auto'
            // margin='0.5rem 1.0rem'
          /> */}
      <h1 id='tagline'>Optimize your Kubernetes Cluster <br /> (Insert Canva Here)</h1>
      <section id='PodPulseInfo' className='section'>
        <Info text={infoOne} title='PROBLEM / SOLUTION' />
        <Info text={infoTwo} title="WHY CARE" />
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
      <section id='installInstructions' className='section'><div>Woo!</div></section>
      {/* <BiosContainer /> */}
    </div>
  );
}

export default App;
