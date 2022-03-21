import { Link } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import cartStatus from '../components/cart/selectors';
import '../styles.css';

const Navigation = () => {
  const { totalItems, totalPrice } = useRecoilValue(cartStatus);

	return (
    <div className="nav">
			<Link to="/">Hem</Link>
			<Link to="/products">Produkter</Link>
			<Link to="/cart">Varukorg {totalItems > 0 && totalItems}</Link>
    </div>
)
}

export default Navigation
