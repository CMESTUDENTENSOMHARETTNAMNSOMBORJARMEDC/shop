import { Link } from 'react-router-dom';
import { useProducts } from '../hooks/useProducts';
import ProductPreview from '../components/ProductPreview';
import '../styles.css';

const Products = () => {
	const { result, status } = useProducts('../resources/products.json');

	if (status !== 'success') {
  	return 'laddar...';
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

