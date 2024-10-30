import * as React from 'react';
import { GitHub, LinkedIn } from '@mui/icons-material';
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
            backgroundColor: 'rgba(40, 40, 40, 1.0)',
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
          <Box>
            <GitHub
              onClick={() =>
                window.open(
                  'https://github.com/oslabs-beta/Pod-Pulse',
                  '_blank'
                )
              }
              sx={{
                marginRight: 2,
                color: 'rgb(240,240,240)',
                borderRadius: '4px 0 0 4px',
                height: 35,
                width: 35,
                '&:hover': {
                  cursor: 'pointer',
                  color: logoRedColor,
                  backgroundColor: 'transparent',
                },
              }}
            />
            <LinkedIn
              onClick={() =>
                window.open(
                  'https://www.linkedin.com/company/pod-md/',
                  '_blank'
                )
              }
              sx={{
                marginRight: 2,
                color: 'rgb(240,240,240)',
                borderRadius: '4px 0 0 4px',
                height: 35,
                width: 35,
                '&:hover': {
                  cursor: 'pointer',
                  color: logoRedColor,
                  backgroundColor: 'transparent',
                },
              }}
            />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
