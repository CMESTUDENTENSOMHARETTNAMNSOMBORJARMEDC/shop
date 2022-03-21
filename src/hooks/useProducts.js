import { useState, useEffect } from 'react';

export const useProducts = (source, flags = {product: 'all'}) =>  {
  const [result, setResult] = useState(null);
  const [status, setStatus] = useState('loading');
  const { product } = flags;

  const getFetch = async () => {
    try {
      const result = await fetch(source);
      const data = await result.json();
      product !== 'all'
      	? setResult(data.filter(p => product.includes(p.id)))
      	: setResult(data);
			result === []
				? setStatus('failed to find product/s')
        : setStatus('success');
    } catch {
      setResult(null);
      setStatus('error');
    }
  }

  useEffect(() => {
    getFetch();
  }, [source]);

  return { result, status };
}

