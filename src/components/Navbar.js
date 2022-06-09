import airbnb from '../../src/images/airbnb-logo.png';
import './Navbar.css';

function Navbar() {
  return (
    <nav>
      <img src={airbnb} alt='airbnb logo' className='airbnb--img' />
    </nav>
  );
}

export default Navbar;
