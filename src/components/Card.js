import './Card.css';

import star from '../img/Star 1.png';

function Card(props) {
  return (
    <div className='card'>
      <img src={props.img} className='katie--img' alt='katie' />
      <div className='card--stats'>
        <img src={star} alt='' className='star--img' />
        <span>{props.rating}</span>
        <span className='gray'>{props.reviewCount}</span>
        <span className='gray'> {props.country}</span>
      </div>
      <p>{props.title}</p>
      <p>
        <strong className='bold'>From ${props.price}</strong> / person
      </p>
    </div>
  );
}

export default Card;
