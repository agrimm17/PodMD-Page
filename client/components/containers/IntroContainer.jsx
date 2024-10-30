import Intro from '../Intro.jsx';

import anxiousFace from '../../assets/anxiousFace.png';
import sliderImage from '../../assets/sliders.png';
import clockImage from '../../assets/clock.png';

const IntroContainer = () => {
  return (
    <div className='introContainer'>
      <h2 className='section-title'>Why PodMD?</h2>
      <Intro
        image={<img src={anxiousFace} width='50px' />}
        text={
          <p>
            When your pods crash, Kubernetes automatically restarts them. But
            what happens when your pods are consuming resources due to data
            leaks or poorly managed processes?
          </p>
        }
      />
      <Intro
        image={<img src={sliderImage} width='90px' />}
        text={
          <p>
            Introducing PodMD, a 100% open-source solution that allows you to
            set custom parameters for pod restarts, helping you manage resource
            consumption proactively.
          </p>
        }
      />
      <Intro
        image={<img src={clockImage} width='45px' />}
        text={
          <p>
            With PodMD, you can save valuable time by automating restarts based
            on defined thresholds, ensuring your applications remain responsive
            without constant monitoring.
          </p>
        }
      />
    </div>
  );
};

export default IntroContainer;
