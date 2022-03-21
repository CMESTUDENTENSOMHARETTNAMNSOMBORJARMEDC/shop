import { useReducer, useState } from 'react';
import { useParams } from "react-router-dom";
import { useProducts } from '../hooks/useProducts';
import { useRecoilState } from 'recoil';
import cartState from '../components/cart/atom.js';
import { addItemSelector } from '../components/cart/selectors';
import '../styles.css';


const Product = () => {
	const params = useParams();
	const [_, addItem] = useRecoilState(addItemSelector);
	const { result, status } = useProducts('../resources/products.json', {product: [parseInt(params.id)]});

  const [quantity, setQuantity] = useState(1);
	const [addStatus, setAddStatus] = useState('');

	const handleAdd = (value) => {
		const validatedValue = parseInt(value);
		if (validatedValue > 0) {
  		addItem({id: id, quantity: validatedValue});
			setAddStatus(`Lade till ${validatedValue} var${quantity > 1 ? 'or' : 'a'}`);
		} else {
  		setAddStatus('Error');
		}
	}

	if (status !== 'success'){
  	return 'laddar';
	}

	const { price, title, image, description, id } = result[0];

  return (
    <div>
    	{
      	<div>
					<img src={image} width="200px" height="300px"/>
  				<h1>{title}</h1>
  				<p>{description}</p>
  				<h2>{price}:-</h2>
  				<input type="text" value={quantity} onChange={e => setQuantity(e.target.value)} />
  				<button onClick={_ => handleAdd(quantity)}>
    				Lägg i varukorg
  				</button>
  				<p>{addStatus}</p>
				</div>
    	}
    </div>
  )
}

export default Product
