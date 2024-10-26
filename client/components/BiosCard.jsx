import * as React from 'react';
import { useState } from 'react';
import { GitHub, LinkedIn, ContentCopy } from '@mui/icons-material';
import EmailIcon from '@mui/icons-material/Email';
import { Avatar, Card, Typography, Grid2 } from '@mui/material';

export default function BiosCard({ name, imgPath, gitHubUrl, linkedInUrl, emailAddress }) {
  const [showCopy, setShowCopy] = useState(false);

  const handleEmailClick = () => {
    navigator.clipboard.writeText(emailAddress)
    setShowCopy(true);
    setTimeout(()=> {setShowCopy(false)},2500);
  }


  return (
    <Card className='bioCard' id={`bioCard${name}`} sx={{ display: "flex", flexDirection: 'column', justifyContent: "center", alignItems: 'center', width: 200, height: 250, backgroundColor: "rgb(225,225,225)" }}>
      <Avatar sx={{ width: 125, height: 125, border: 1, boxShadow: 5, zIndex: 1000 }} alt={name} src={imgPath} />
      <Typography className='bioCardName' variant='subtitle2' sx={{ fontWeight: 600, paddingTop: 2, paddingBottom: 2 }} >{name}</Typography>
      <Grid2 container spacing={1.5} >
        <GitHub className='gitHubIcon' onClick={() => window.open(gitHubUrl, "_blank")} />
        <LinkedIn className='linkedInIcon' onClick={() => window.open(linkedInUrl, "_blank")} />
        {showCopy ? (<ContentCopy className='copyIcon'/>) :  (<EmailIcon className='emailIcon' onClick={handleEmailClick} />)}
      </Grid2>
    </Card>
  );
}
