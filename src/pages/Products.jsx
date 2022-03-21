import { Link } from 'react-router-dom';
import { useProducts } from '../hooks/useProducts';
import ProductPreview from '../components/ProductPreview';
import '../styles.css';
const url ='https://gist.githubusercontent.com/sawariz0r/9c5774332ae86071dd0750d877c899ba/raw/2c05a7d73bb0f18b3b0731af1634d856189022fd/fakedata.json';

const Products = () => {
	// const { result, status } = useProducts('../resources/products.json');
	const { result, status } = useProducts(url);

	if (status !== 'success') {
  	return 'laddar...' + status;
	}
  return (
    <div>
    	<h1>Produkter</h1>
      <ul className="productGrid">
        {result.map(product => {
  					return <li key={product.id}><ProductPreview data={product} /></li>;
					})
        }
      </ul>
    </div>
  )
}

export default Products

