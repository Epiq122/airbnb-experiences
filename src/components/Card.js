import './Card.css';

import star from '../../src/images/star.png';

function Card(props) {
  return (
    <div className='card'>
      <img src={props.img} className='katie--img' alt='img' />
      <div className='card--stats'>
        <img src={star} alt='' className='star--img' />
        <span>{props.rating}</span>
        <span className='gray'>{props.reviewCount}</span>
        <span className='gray'> {props.location}</span>
      </div>
      <p>{props.title}</p>
      <p>
        <strong className='bold'>From ${props.price}</strong> / person
      </p>
    </div>
  );
}

export default Card;
