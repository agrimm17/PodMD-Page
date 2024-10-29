import BiosCard from '../BiosCard';
import { Grid2, Typography } from '@mui/material';

const BioContainer = () => {
  return (
    <>
      <Typography
        sx={{
          color: 'rgb(240,240,240)',
          fontSize: 30,
          fontWeight: 700,
          textAlign: 'center',
          paddingBottom: 2,
          paddingTop: 5,
        }}
      >
        The Team
      </Typography>
      <Grid2
        id='teamInfo'
        container
        spacing={8}
        sx={{ display: 'flex', justifyContent: 'center', paddingBottom: 5 }}
      >
        <BiosCard
          name='Aaron Jacobs'
          imgPath='../../../teamPhotos/aaronJacobs.jpg'
          gitHubUrl='https://github.com/AaronJacobs/'
          linkedInUrl='https://www.linkedin.com/in/aaronmjacobs/'
          emailAddress='aaronj313@gmail.com'
        />
        <BiosCard
          name='Alex Grimm'
          imgPath='../../../teamPhotos/alexGrimm.jpeg'
          gitHubUrl='https://github.com/agrimm17'
          linkedInUrl='https://www.linkedin.com/in/-alexander-grimm/'
          emailAddress='alexandergrimm17@gmail.com'
        />
        <BiosCard
          name='Mason Meyer'
          imgPath='../../../teamPhotos/masonMeyer.jpeg'
          gitHubUrl='https://github.com/mmeyer23/'
          linkedInUrl='http://www.linkedin.com/in/-mason-meyer/'
          emailAddress='mason.meyer@gmail.com'
        />
        <BiosCard
          name='RJ McCarthy'
          imgPath='../../../teamPhotos/rjMccarthy.jpeg'
          gitHubUrl='https://github.com/mccarthyrj/'
          linkedInUrl='https://www.linkedin.com/in/rj-mccarthy/'
          emailAddress='rj_mccarthy@icloud.com'
        />
        <BiosCard
          name='Timothy Cheng'
          imgPath='../../../teamPhotos/timothyCheng.jpeg'
          gitHubUrl='https://github.com/timothychengg'
          linkedInUrl='https://www.linkedin.com/in/timothyychengg/'
          emailAddress='teecheng5@gmail.com'
        />
      </Grid2>
    </>
  );
};

export default BioContainer;
