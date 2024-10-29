import React, { useEffect, useRef } from 'react';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

function Info({ text, title, direction }) {
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible');
        }
      });
    });

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <CardContent className={`infoBox ${direction}`} ref={cardRef}>
      <Typography sx={{ fontSize: 25, fontFamily: 'Aldrich' }}>
        <div className='infoTitle'>{title}:</div>
        <br />
        {text}
      </Typography>
    </CardContent>
  );
}

export default Info;
