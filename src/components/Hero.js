import group from '../images/photo-grid.png';
// import group from '/images/photo-grid.png';
import './Hero.css';
function Hero() {
  return (
    <div className='hero'>
      <img src={group} alt='' className='group' />
      <h1>Online Experiences</h1>
      <p className='hero--p'>
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </div>
  );
}

export default Hero;
