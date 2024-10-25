import * as React from 'react';
import { GitHub } from '@mui/icons-material';
import { Avatar, Card } from '@mui/material';


export default function BiosCard({ name, imgPath, gitHubUrl, linkedInUrl, emailAddress, Grid2 }) {
  return (
    <Card sx={{ width: 200, height: 300 }}>
      console.log({JSON.stringify(imgPath)})
      <Avatar sx={{ width:125, height:125 }} alt={name} src={imgPath} />
      {/* <Grid2> */}
      <GitHub onClick={event => window.location.href = gitHubUrl} />
      {/* <LinkedInIcon />
        <MailOutlineIcon /> */}
      {/* </Grid2> */}
    </Card>
  );
}
