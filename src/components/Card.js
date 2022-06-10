import './Card.css';

import star from '../../src/images/star.png';
import katie from '../../src/images/katie-zaferes.png';
import wedding from '../../src/images/wedding-photography.png';
import bike from '../../src/images/mountain-bike.png';

function Card(props) {
  let badgeText;
  if (props.openSpots === 0) {
    badgeText = 'SOLD OUT';
  } else if (props.location === 'Online') {
    badgeText = 'ONLINE';
  }
  return (
    <div className='card'>
      {badgeText === 0 && <div className='card--badge'>{badgeText}</div>}
      <img
        src={`../images/${props.coverImg}`}
        className='photo--img'
        alt='img'
      />
      <div className='card--stats'>
        <img src={star} alt='' className='star--img' />
        <span>{props.stats.rating}</span>
        <span className='gray'>{props.stats.reviewCount}</span>
        <span className='gray'> {props.location}</span>
      </div>
      <p className='card--title'>{props.title}</p>
      <p className='card--price'>
        <strong className='bold'>From ${props.price}</strong> / person
      </p>
    </div>
  );
}

export default Card;
