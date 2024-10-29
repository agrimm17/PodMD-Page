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

const logoRedColor = '#ba1c1d';
const logoWhiteColor = '#e9e9e9';

function Navbar() {
  return (
    <Box>
      <AppBar>
        <Toolbar
          sx={{
            backgroundColor: '#282828',
          }}
        >
          <Button
            href='#tagline'
            sx={{
              padding: 0,
              '&:hover': {
                backgroundColor: 'transparent',
              },
            }}
          >
            <img
              src={logoDesign}
              alt='PodMD Logo'
              className='logo heartbeat'
              style={{
                width: '40px',
                height: 'auto',
                margin: '0.5rem 1.0rem',
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

          <Box
            id='navButtons'
            sx={{
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            <Button
              href='#PodMDInfo'
              variant='text'
              sx={{
                margin: '15px',
                color: logoWhiteColor,
                '&:hover': {
                  color: logoRedColor,
                  backgroundColor: 'transparent',
                },
              }}
            >
              About PODMD
            </Button>
            <Button
              href='#videoDemo'
              variant='text'
              sx={{
                margin: '15px',
                color: logoWhiteColor,
                '&:hover': {
                  color: logoRedColor,
                  backgroundColor: 'transparent',
                },
              }}
            >
              Demo
            </Button>
            <Button
              href='#installInstructions'
              variant='text'
              sx={{
                margin: '15px',
                color: logoWhiteColor,
                '&:hover': {
                  color: logoRedColor,
                  backgroundColor: 'transparent',
                },
              }}
            >
              Installation
            </Button>
            <Button
              href='#teamInfo'
              variant='text'
              sx={{
                margin: '15px',
                color: logoWhiteColor,
                '&:hover': {
                  color: logoRedColor,
                  backgroundColor: 'transparent',
                },
              }}
            >
              Meet the team
            </Button>
          </Box>
          <ButtonGroup
            variant='contained'
            sx={{
              marginLeft: 'auto',
              '& .MuiButton-root': {
                borderColor: 'black',
                borderRadius: '4px',
                '&:hover': {
                  backgroundColor: logoRedColor,
                  color: '#e9e9e9',
                },
              },
            }}
          >
            <Button
              href='https://github.com/oslabs-beta/Pod-Pulse'
              sx={{
                backgroundColor: logoWhiteColor,
                color: 'black',
                borderRight: '1px solid black',
                borderRadius: '4px 0 0 4px',
              }}
            >
              Github
            </Button>
            <Button
              sx={{
                backgroundColor: logoWhiteColor,
                color: 'black',
                borderRight: '1px solid black',
                borderRadius: '0',
              }}
            >
              LinkedIn
            </Button>
            <Button
              href='https://github.com/oslabs-beta/Pod-Pulse'
              sx={{
                backgroundColor: logoWhiteColor,
                color: 'black',
                borderRadius: '0 4px 4px 0',
              }}
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
