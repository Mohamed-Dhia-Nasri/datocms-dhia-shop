import { ProductType } from '../../types';
import './Product.css';

export default function Product({ product }: { product: ProductType }) {
  const { id, image, name, description, price } = product;

  return (
    <div key={id} className={'product'}>
      <img
        src={image.url}
        alt={image.alt}
        title={image.title}
        className={'product-image'}
      />
      <h3>{name}</h3>
      <p>{description}</p>
      <span>${price}</span>
      <div>
        <button
          className="snipcart-add-item"
          data-item-id={id}
          data-item-image={image.url}
          data-item-name={name}
          data-item-url="/"
          data-item-price={price}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
