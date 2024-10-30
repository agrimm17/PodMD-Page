import * as React from 'react';
import { useState } from 'react';
import { Box, Typography } from '@mui/material';
import { shadows } from '@mui/system';
import { ContentCopy, Check } from '@mui/icons-material';

export default function InstallInstructions({ instructions, index }) {
  const [showCheck, setShowCheck] = useState(false);

  const handleCopyClick = () => {
    navigator.clipboard.writeText(instructions);
    setShowCheck(true);
    setTimeout(() => {
      setShowCheck(false);
    }, 2500);
  };

  return (
    <Box
      className='installInstructionBox'
      id={`installInstructions${index}`}
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignContent: 'center',
        padding: 1,
        marginBottom: 2,
        marginLeft: 5,
        marginRight: 5,
        backgroundColor: 'rgb(189,189,189)',
      }}
    >
      <Typography className='instructionText'>{instructions}</Typography>
      {showCheck ? (
        <Check sx={{ color: 'green' }} className='checkIcon' />
      ) : (
        <ContentCopy className='copyButton' onClick={handleCopyClick} />
      )}
    </Box>
  );
}
