export default function Intro({ image, text, style }) {
  return (
    <div className='introCards' style={style}>
      <div className='imageContainer'>{image}</div>
      <div className='textContainer'>{text}</div>
    </div>
  );
}
