import { formatPrice } from '../data/products';
import Icon from './Icon';

export default function ProductCard({ product, language, onAdd }) {
  const somali = language === 'so';
  const imageUrl = `https://images.unsplash.com/${product.image}?auto=format&fit=crop&w=720&q=82`;

  return (
    <article className="product-card">
      <div className={`product-visual product-${product.tone}`}>
        <img
          src={imageUrl}
          alt=""
          loading="lazy"
          onError={(event) => { event.currentTarget.style.display = 'none'; }}
        />
        <span className="product-tag">{product.tag}</span>
        <span className="product-kind">{product.kind}</span>
      </div>
      <div className="product-info">
        <h3>{product.name}</h3>
        <p>{somali ? product.so : product.en}</p>
        <div className="product-bottom">
          <div>
            <strong>{formatPrice(product.price)}</strong>
            <span>{somali ? 'Qiime qiyaas ah' : 'Example price'}</span>
          </div>
          <button
            type="button"
            className="add-button"
            aria-label={`${somali ? 'Ku dar' : 'Add'} ${product.name} ${somali ? 'dambiisha' : 'to basket'}`}
            onClick={() => onAdd(product)}
          >
            <Icon name="plus" size={18} />
          </button>
        </div>
      </div>
    </article>
  );
}
