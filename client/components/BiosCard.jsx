import * as React from 'react';
import { useState } from 'react';
import { GitHub, LinkedIn, ContentCopy, Check } from '@mui/icons-material';
import EmailIcon from '@mui/icons-material/Email';
import { Avatar, Card, Typography, Grid2 } from '@mui/material';

export default function BiosCard({
  name,
  imgPath,
  gitHubUrl,
  linkedInUrl,
  emailAddress,
}) {
  const [showCheck, setShowCheck] = useState(false);

  const [showCopy, setShowCopy] = useState(false);

  const handleEmailClick = () => {
    navigator.clipboard.writeText(emailAddress);
    setShowCheck(true);
    setShowCopy(false);
    setTimeout(() => {
      setShowCheck(false);
    }, 2500);
  };

  const handleMouseEnter = () => {
    setShowCopy(true);
  };

  const handleMouseLeave = () => {
    setShowCopy(false);
  };

  return (
    <Card
      className='bioCard'
      id={`bioCard${name}`}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: 200,
        height: 250,
        backgroundColor: 'rgb(240,240,240)',
      }}
    >
      <Avatar
        sx={{ width: 125, height: 125, border: 1, boxShadow: 5, zIndex: 1000 }}
        alt={name}
        src={imgPath}
      />
      <Typography
        className='bioCardName'
        variant='subtitle2'
        sx={{ fontWeight: 600, paddingTop: 2, paddingBottom: 2 }}
      >
        {name}
      </Typography>
      <Grid2 container spacing={1.5}>
        <GitHub
          className='gitHubIcon'
          onClick={() => window.open(gitHubUrl, '_blank')}
        />
        <LinkedIn
          className='linkedInIcon'
          onClick={() => window.open(linkedInUrl, '_blank')}
        />
        {showCheck ? (
          <Check sx={{ color: 'green' }} className='checkIcon' />
        ) : showCopy ? (
          <ContentCopy
            className='copyIcon'
            onClick={handleEmailClick}
            onMouseLeave={handleMouseLeave}
          />
        ) : (
          <EmailIcon className='emailIcon' onMouseEnter={handleMouseEnter} />
        )}
      </Grid2>
    </Card>
  );
}
