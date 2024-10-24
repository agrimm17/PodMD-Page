import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

function Info({ text, title }) {
  return (
    // <CardContent>
    //   <Typography sx={{ fontSize: 14 }}>{title}</Typography>
    // </CardContent>
    <div className='infoBox'>{title}: {text}</div>
  );
}

export default Info;
