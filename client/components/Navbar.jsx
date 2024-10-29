import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import logoDesign from '../assets/logoDesign.png';
import logoSlogan from '../assets/logoSlogan.png';
import { red } from '@mui/material/colors';

const primary = red[500];

let buttonColor = 'grey';

function Navbar() {
  return (
    <Box>
      <AppBar>
        <Toolbar
          sx={{
            backgroundColor: '#282828',
          }}
        >
          <Button href='#tagline'>
            <img
              src={logoDesign}
              alt='PodMD Logo'
              className='logo heartbeat'
              style={{
                width: '40px',
                height: 'auto',
                margin: '0.5rem 1.0rem',
                // transition: 'filter 0.3s',
                // filter: 'grayscale(10%)',
              }}
            />
          </Button>
          {console.log(window, innerWidth)}
          <img
            id='logoSlogan'
            src={logoSlogan}
            alt='PodMD - Your DevOps Companion'
            width='500px'
            height='px'
            display='none'
            // margin='0.5rem 1.0rem'
          />

          <Box id='navButtons' sx={{ marginLeft: 'auto', marginRight: 'auto' }}>
            <Button
              href='#PodMDInfo'
              variant='text'
              sx={{ margin: '15px', color: buttonColor }}
            >
              About PODMD
            </Button>
            <Button
              href='#videoDemo'
              variant='text'
              sx={{ margin: '15px', color: buttonColor }}
            >
              Demo
            </Button>
            <Button
              href='#installInstructions'
              variant='text'
              sx={{ margin: '15px', color: buttonColor }}
            >
              Installation
            </Button>
            <Button
              href='#teamInfo'
              variant='text'
              sx={{ margin: '15px', color: buttonColor }}
            >
              Meet the team
            </Button>
          </Box>
          <ButtonGroup variant='contained' sx={{ marginLeft: 'auto' }}>
            <Button
              href='https://github.com/oslabs-beta/Pod-Pulse' //sx={{ backgroundColor: buttonColor, color: 'black' }}
            >
              Github
            </Button>
            <Button //sx={{ backgroundColor: buttonColor, color: 'black' }}
            >
              LinkedIn
            </Button>
            <Button
              href='https://github.com/oslabs-beta/Pod-Pulse'
              //sx={{ backgroundColor: buttonColor, color: 'black' }}
            >
              Download
            </Button>
          </ButtonGroup>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
