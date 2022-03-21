import cartState from '../components/cart/atom.js';
import cartStatus from '../components/cart/selectors.js';
import { useProducts } from '../hooks/useProducts';
import { useRecoilState, useRecoilValue } from 'recoil';
import CartItem from '../components/CartItem';
import '../styles.css';
const url ='https://gist.githubusercontent.com/sawariz0r/9c5774332ae86071dd0750d877c899ba/raw/2c05a7d73bb0f18b3b0731af1634d856189022fd/fakedata.json';


const Cart = () => {
  const [cart, setCart] = useRecoilState(cartState);
  const { totalItems } = useRecoilValue(cartStatus);
  const	ids = cart.map(item => item.id);
	const { result, status } = useProducts(url, {product: ids});

	if(status !== 'success') {
  	return 'laddar...';
	}

	const totalPrice = cart.reduce((sum, item) => {
   	const { price } = result.find(p => p.id === item.id);
  	return sum + price * item.quantity;
	}, 0);

  return (
    <div>
    	{cart.length
      	? (<div>
          		<p>{totalItems} var{totalItems > 1 ? 'or' : 'a'} </p>
            	<h3>Summa</h3>
            	<p>{parseInt(totalPrice + 0.5)}:-</p>
           </div>
          )
        : <h3>Varukorgen är tom</h3>
    	}
    	<ul className="cartList">
      	{cart.map((item, index) => {
          	const itemInfo = result.find(p => p.id === item.id);
          	return <li key={item.id}><CartItem item={{...item, ...itemInfo}} /></li>;
        	})
      	}
    	</ul>
    </div>
  )
}

export default Cart


