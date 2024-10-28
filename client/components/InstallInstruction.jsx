import * as React from 'react';
import { Box, Typography } from '@mui/material';
import { shadows } from '@mui/system';
import { ContentCopy } from '@mui/icons-material';
import { Modal } from '@mui/joy';



export default function InstallInstructions({ instructions, index }) {
  return (
    <Box className='installInstructionBox' id={`installInstructions${index}`} sx={{ display: "flex", justifyContent: 'space-between', alignContent: 'center', padding: 1, marginBottom: 2, marginLeft: 5, marginRight: 5, backgroundColor: "rgb(225,225,225)" }}>
      <Typography className='instructionText'>{instructions}</Typography>
      <ContentCopy className='copyButton' onClick={() => {
        navigator.clipboard.writeText(instructions);

      }} />
    </Box>
  );
}
