import { Link } from 'react-router-dom';
import logoImg from '../../../assets/images/carelogo.png';
const Logo = () => {
    return (
      <Link to="/">
        <img className='hidden md:block' src={logoImg} alt="Through Travels" width="70" height="70" />
      </Link>
    );
};

export default Logo;