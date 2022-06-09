import './Card.css';
import katie from '../img/image 12.png';
import star from '../img/Star 1.png';

function Card() {
  return (
    <div className='card'>
      <img src={katie} alt='' className='katie--img' />
      <div className='card--stats'>
        <img src={star} alt='' className='star--img' />
        <span>5.0</span>
        <span className='gray'>(6) •</span>
        <span className='gray'>USA</span>
      </div>
      <p>Life Lessons with Katie Zaferes</p>
      <p>
        <strong className='bold'>From $136</strong> / person
      </p>
    </div>
  );
}

export default Card;
