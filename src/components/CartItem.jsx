import { Link } from 'react-router-dom';
import { useRecoilState} from 'recoil';
import { cartState } from './cart/atom.js';
import { addItemSelector, removeItemSelector, decreaseItemSelector } from './cart/selectors';
import '../styles.css';


const CartItem = (props) => {
	const [_, addItem] = useRecoilState(addItemSelector);
	const [__, removeItem] = useRecoilState(removeItemSelector);
	const [___, decreaseItem] = useRecoilState(decreaseItemSelector);
  const { title, image, price, quantity, id } = props.item;
	return (
  	<div className="cartProductCard">
  		<img src={image} className="cartImage" />
			<Link className="title" to={`/products/${id}`}>{title}</Link>
			<h3>{price}:-</h3>
			<div className="cartOptions">
        <button onClick={_ => decreaseItem({id: id, quantity: 1})}>&lt;</button>
        <b>{quantity}X</b>
        <button onClick={_ => addItem({id: id, quantity: 1})}>&gt;</button>
        <button onClick={_ => removeItem(id)}>Ta bort</button>
      </div>
  </div>
	)
}

export default CartItem;
