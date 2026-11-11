import { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Icon from '../components/Icon';
import ProductCard from '../components/ProductCard';
import { categories, products } from '../data/products';

export default function ShopPage({ language, onAdd }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState('');
  const selected = searchParams.get('category') || 'all';
  const somali = language === 'so';
  const visibleProducts = useMemo(() => {
    const normalQuery = query.trim().toLowerCase();
    return products.filter((product) => {
      const matchesCategory = selected === 'all'
        ? product.category !== 'pharmacy'
        : product.category === selected;
      const matchesSearch = !normalQuery || `${product.name} ${product.kind} ${product.en} ${product.so}`.toLowerCase().includes(normalQuery);
      return matchesCategory && matchesSearch;
    });
  }, [query, selected]);

  function chooseCategory(id) {
    const next = new URLSearchParams(searchParams);
    if (id === 'all') next.delete('category');
    else next.set('category', id);
    setSearchParams(next);
  }

  return (
    <div className="inner-page shop-page">
      <section className="page-intro shop-intro">
        <div>
          <span className="eyebrow">{somali ? 'SUUQA SHAFICI' : 'THE SHAFICI MARKET'}</span>
          <h1>{somali ? <>Alaabta guriga,<br /><em>hal meel.</em></> : <>Everyday market,<br /><em>one easy stop.</em></>}</h1>
          <p>{somali ? 'Raashin, qurux, daryeelka qofka iyo waxyaabaha guriga. Daawooyinka ka eeg qaybta Daawooyin.' : 'Browse groceries, beauty, personal care and home essentials. Visit Drugs for pharmacy products.'}</p>
        </div>
        <label className="shop-search"><Icon name="search" size={19} /><span className="sr-only">{somali ? 'Alaabta raadi' : 'Search products'}</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder={somali ? 'Maxaad raadineysaa?' : 'Search the shelves…'} /></label>
      </section>
      <div className="catalog-note"><Icon name="shield" size={18} /><span>{somali ? 'Qiimaha iyo helitaanka alaabta waa tusaale. Fadlan WhatsApp ku xaqiiji ka hor dalabka.' : 'Starter catalogue only: all example prices and product availability must be confirmed on WhatsApp.'}</span></div>
      <div className="filter-row" role="group" aria-label={somali ? 'Qaybaha alaabta' : 'Product categories'}>
        {categories.filter((category) => category.id !== 'pharmacy').map((category) => (
          <button type="button" key={category.id} className={`filter-chip${selected === category.id ? ' selected' : ''}`} onClick={() => chooseCategory(category.id)}>
            <Icon name={category.icon} size={16} /> {somali ? category.so : category.en}
          </button>
        ))}
      </div>
      <div className="catalog-meta"><span>{somali ? `${visibleProducts.length} alaabood` : `${visibleProducts.length} ${visibleProducts.length === 1 ? 'thoughtful pick' : 'thoughtful picks'}`}</span><span>{somali ? 'La cusboonaysiiyay: WhatsApp ku xaqiiji' : 'Prices shown in USD · confirm before ordering'}</span></div>
      {visibleProducts.length ? (
        <div className="product-grid catalog-grid">{visibleProducts.map((product) => <ProductCard key={product.id} product={product} language={language} onAdd={onAdd} />)}</div>
      ) : (
        <div className="no-results"><span><Icon name="search" size={25} /></span><h2>{somali ? 'Wax natiijo ah lama helin' : 'Nothing on these shelves'}</h2><p>{somali ? 'Isku day eray kale ama qayb kale.' : 'Try another search or browse a different category.'}</p><button className="button button-dark" type="button" onClick={() => { setQuery(''); chooseCategory('all'); }}>{somali ? 'Dhammaan alaabta' : 'See all products'}</button></div>
      )}
    </div>
  );
}
