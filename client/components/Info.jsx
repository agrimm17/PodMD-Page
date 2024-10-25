import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

function Info({ text, title }) {
  return (
    <CardContent className='infoBox'>
      <Typography sx={{ fontSize: 25 }}>
        {title}: <br /> {text}
      </Typography>
    </CardContent>
    // <div className='infoBox'>{title}: {text}</div>
  );
}

export default Info;
