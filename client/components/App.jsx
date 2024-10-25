// import React from 'react'
import Navbar from './Navbar';
import Info from './Info';
// import Install from './Install'
import BioContainer from './containers/BioContainer';

import '../App.css';

let infoOne =
  "Current methods available in Kubernetes that control automatic restarts are very limited and non-customizable. We've created a tool that evaluates pod health and can automatically restart a pod based on user's custom parameters.";
let infoTwo =
  'As a software engineer tasked with maintaining our Kubernetes clusters I want to be able to further customize pod restarts to recieve notifcations when a pod is having issues but more importantly NOT receive alerts and have to manually handle an issue when I could have automated it with custom restart parameters beyond the limited default Kubernetes criteria. ';
function App() {
  return (
    <div id='body'>
      <Navbar />
      <h1 id='tagline'>Optimize your Kubernetes Cluster</h1>
      <section id='infoContainer'>
        <Info text={infoOne} title='Problem/Solution' />
        <Info text={infoTwo} title="We're Impressive" />
      </section>
      <section id='videoDemo'>
        <iframe
          width='640'
          height='360'
          src='https://www.youtube.com/embed/dQw4w9WgXcQ?si=znqw3MZ_6h5a2X9j'
          title='YouTube video player'
          frameBorder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          referrerPolicy='strict-origin-when-cross-origin'
          allowFullScreen
        ></iframe>
      </section>
      <section id='installInstructions'><div>Woo!</div></section>
      <Grid2 container spacing={8}>
        <BiosCard name="Aaron Jacobs" imgPath="../assets/teamPhotos/aaronJacobs.jpg" gitHubUrl="https://github.com/AaronJacobs" linkedInUrl="https://www.linkedin.com/in/aaronmjacobs/" emailAddress="aaronj313@gmail.com" grid2={Grid2} />
        <BiosCard name="Alex Grimm" imgPath="../assets/fullLogo.png" gitHubUrl="" linkedInUrl="" emailAddress="" grid2={Grid2} />
        <BiosCard name="Mason Meyer" imgPath="../assets/fullLogo.png" gitHubUrl="" linkedInUrl="" emailAddress="" grid2={Grid2} />
        <BiosCard name="RJ McCarthy" imgPath="../assets/fullLogo.png" gitHubUrl="" linkedInUrl="" emailAddress="" grid2={Grid2} />
        <BiosCard name="Timothy Cheng" imgPath="../assets/fullLogo.png" gitHubUrl="" linkedInUrl="" emailAddress="" grid2={Grid2} />
      </Grid2>

    </div>
  );
}

export default App;
