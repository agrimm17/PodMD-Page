import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import logoDesign from '../assets/logoDesign.png';
import logoSlogan from '../assets/logoSlogan.png';

function Navbar() {
  return (
    <Box position='sticky'>
      <AppBar>
        <Toolbar
          sx={{
            backgroundColor: '#242424'
          }}
        >
          <Button>
            <img
              src={logoDesign}
              alt='PodPulse Logo'
              className='logo heartbeat'
              style={{
                width: '40px',
                height: 'auto',
                margin: '0.5rem 1.0rem',
                transition: 'filter 0.3s',
                filter: 'grayscale(10%)',
              }}
            />
          </Button>
          {console.log(window, innerWidth)}
          {/* {window.innerWidth > 1550 ? ( */}
          <img
            id='logoSlogan'
            src={logoSlogan}
            alt='PodPulse - Your DevOps Companion'
            width='500px'
            height='auto'
            display='none'
            // margin='0.5rem 1.0rem'
          />
          {/* ) : (
            <div></div>
          )} */}

          <Box id='navButtons' sx={{ marginLeft: 'auto', marginRight: 'auto' }}>
            <Button href='#PodPulseInfo' variant='text' sx={{ margin: '15px' }}>
              About PodPulse
            </Button>
            <Button href='#videoDemo' variant='text' sx={{ margin: '15px' }}>
              Demo
            </Button>
            <Button
              href='#installInstructions'
              variant='text'
              sx={{ margin: '15px' }}
            >
              Installation
            </Button>
            <Button href='#teamInfo' variant='text' sx={{ margin: '15px' }}>
              Meet the team
            </Button>
          </Box>
          <ButtonGroup variant='contained' sx={{ marginLeft: 'auto' }}>
            <Button href='https://github.com/oslabs-beta/Pod-Pulse'>
              Github
            </Button>
            <Button>LinkedIn</Button>
            <Button href='https://github.com/oslabs-beta/Pod-Pulse'>
              Download
            </Button>
          </ButtonGroup>
        </Toolbar>
      </AppBar>
      {/* <style jsx>{`
        @keyframes pulse {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
          100% {
            transform: scale(1);
          }
        }

        .logo:hover {
          animation: pulse 0.6s infinite;
          filter: grayscale(0%);
        }
      `}</style> */}
    </Box>
  );
}

export default Navbar;
