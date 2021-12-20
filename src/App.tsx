import "./index.css";
import "./App.css";
import Product from "./components/Product";
// @ts-ignore
import { SiteClient } from "datocms-client";
import { useEffect } from "react";
import { useState } from "react";
import { ProductType, UploadType } from "./types";

const client = new SiteClient(
  process.env.REACT_APP_DATOCMS_READONLY_API_KEY ||
    "54c731b10e58adae303dc14b37ffff"
);

export default function App() {
  const [products, setProducts] = useState<ProductType[] | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      const allProducts = await client.items.all({
        filter: { type: "product" },
      });

      const withImages = await Promise.all(
        allProducts.map(async (p: ProductType) => {
          const upload: UploadType = await client.upload.find(p.image.uploadId);

          p.image = { ...p.image, ...upload };
          return p;
        })
      );

      setProducts(withImages);
    };

    fetchProducts();
  }, []);

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
        hidden
        id="snipcart"
        data-api-key={process.env.REACT_APP_SNIPCART_API_KEY}
      ></div>
    </div>
  );
}
