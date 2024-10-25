import * as React from 'react';
import { GitHub, LinkedIn } from '@mui/icons-material';
import EmailIcon from '@mui/icons-material/Email';
import { Avatar, Card, Typography, Grid2 } from '@mui/material';
import { shadows } from '@mui/system';


export default function BiosCard({ name, imgPath, gitHubUrl, linkedInUrl, emailAddress }) {
  return (
    <Card className='bioCard' id={`bioCard${name}`} sx={{ display: "flex", flexDirection: 'column', justifyContent: "center", alignItems: 'center', width: 200, height: 250, backgroundColor: "rgb(225,225,225)" }}>
      <Avatar sx={{ width: 125, height: 125, border: 1, boxShadow: 5 }} alt={name} src={imgPath} />
      <Typography className='bioCardName' variant='subtitle2' sx={{ fontWeight: 600, paddingTop: 2, paddingBottom: 2 }} >{name}</Typography>
      <Grid2 container spacing={1.5} >
        <GitHub onClick={() => window.open(gitHubUrl, "_blank")} />
        <LinkedIn onClick={() => window.open(linkedInUrl, "_blank")} />
        <EmailIcon style={{ fill: 'black' }} onClick={() => window.open(emailAddress, "_blank")} />
      </Grid2>
    </Card>
  );
}
