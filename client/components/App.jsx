import React from 'react'
import Navbar from './Navbar'
import Info from './Info'
// import Install from './Install'
// import BiosContainer from './containers/BiosContainer'
import '../App.css'

let infoOne = "Current methods available in Kubernetes that control automatic restarts are very limited and non-customizable. We've created a tool that evaluates pod health and can automatically restart a pod based on user's custom parameters."
let infoTwo = 'As a software engineer tasked with maintaining our Kubernetes clusters I want to be able to further customize pod restarts to recieve notifcations when a pod is having issues but more importantly NOT receive alerts and have to manually handle an issue when I could have automated it with custom restart parameters beyond the limited default Kubernetes criteria. '
function App() {

  return (
    <div id='body'>
      <Navbar />
      <h1 id='tagline'>Optimize your Kubernetes Cluster</h1>
      <div id='infoContainer'><Info text={infoOne} title='Problem/Solution'/><Info text={infoTwo} title="We're Impressive"/></div>
      {/* <Install /> */}
      {/* <BiosContainer /> */}
    </div>
  )
}

export default App
