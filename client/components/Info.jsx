import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

function Info({ text, title }) {
  return (
    <CardContent className='infoBox'>
      <Typography sx={{ fontSize: 25, fontFamily: "Aldrich" }}>
        <div className='infoTitle'>{title}:</div><br />{text}
      </Typography>
    </CardContent>
  );
}

export default Info;
