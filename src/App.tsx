import Product from './components/Product';
import { ProductType } from './types';
import { buildClient } from '@datocms/cma-client-browser';
import { useCallback, useEffect, useState } from 'react';
import './App.css';

const snipcartApiToken =
  process.env.REACT_APP_SNIPCART_API_KEY ||
  'OWE3MmZmMjQtNTk3Yi00OThhLWEwMmUtZDY4ZWM4NzIwYzZiNjM2NjM0Mzc1NzE0MTUwNzI1';

const client = buildClient({
  apiToken:
    process.env.REACT_APP_DATOCMS_READONLY_API_KEY ||
    '54c731b10e58adae303dc14b37ffff',
});

const fetchUploads = async (p: ProductType) => {
  const upload = await client.uploads.find(p.image.upload_id);

  p.image = { ...p.image, ...upload };
  return p;
};

export default function App() {
  const [products, setProducts] = useState<ProductType[] | null>(null);

  const fetchProducts = useCallback(async () => {
    const products = (await client.items.list({
      filter: { type: 'product' },
    })) as unknown as ProductType[];

    const withImages = await Promise.all(products.map(fetchUploads));

    setProducts(withImages);
  }, [setProducts]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <div className="container">
      <main className="main">
        <h1>E-Commerce built with React + SnipCart + DatoCMS</h1>

        <div className="grid">
          {products &&
            products.map((product, i) => <Product product={product} key={i} />)}
        </div>
      </main>
      <div
        id="snipcart"
        data-config-modal-style="side"
        data-api-key={snipcartApiToken}
        hidden
      ></div>
    </div>
  );
}
