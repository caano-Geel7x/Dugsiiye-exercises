import { Link } from 'react-router-dom';
import Icon from '../components/Icon';
import ProductCard from '../components/ProductCard';
import { categories, products } from '../data/products';

export default function HomePage({ language, onAdd, onOpenCart }) {
  const somali = language === 'so';
  const featured = products.slice(0, 4);

  return (
    <>
      <section className="hero-section">
        <div className="hero-copy">
          <div className="hero-eyebrow"><span className="eyebrow-line" />{somali ? 'DARYEEL WANAAGSAN, MAALIN KASTA' : 'GOOD CARE, EVERY DAY'}</div>
          <h1>
            {somali ? <>Caafimaadkaaga.<br /><em>Gurigaaga.</em></> : <>Good health.<br /><em>Good living.</em></>}
          </h1>
          <p>
            {somali
              ? 'Daawooyinka, waxyaabaha guriga iyo wax kasta oo u dhexeeya—hal meel oo Galkacyo ah.'
              : 'Your neighbourhood stop for pharmacy essentials, everyday groceries and little things that make home.'}
          </p>
          <div className="hero-actions">
            <Link className="button button-dark" to="/market">{somali ? 'Alaabta baadh' : 'Explore the market'} <Icon name="arrow" size={18} /></Link>
            <button className="button button-text" type="button" onClick={onOpenCart}>{somali ? 'Dalabka bilow' : 'Start an order'} <Icon name="basket" size={18} /></button>
          </div>
          <div className="hero-social-proof">
            <span className="proof-icon"><Icon name="plus" size={18} /></span>
            <span><strong>{somali ? 'Farmashiye & dukaan xaafadeed' : 'Your local pharmacy & market'}</strong><small>{somali ? 'Agagaarka Isbitaalka Guud ee Galkacyo' : 'Near Galkayo General Hospital'}</small></span>
          </div>
        </div>
        <div className="hero-art">
          <img src="https://images.unsplash.com/photo-1576602976047-174e57a47881?auto=format&fit=crop&w=1200&q=88" alt={somali ? 'Farmashiiste oo diyaarinaya alaab caafimaad' : 'A pharmacist arranging health and wellness products'} />
          <div className="hero-image-wash" />
          <div className="hero-floating-note">
            <span className="floating-icon"><Icon name="heart" size={18} /></span>
            <span><strong>{somali ? 'Daryeel deggan, kuu dhow' : 'Good care, close by'}</strong><small>{somali ? 'Farmashiistayaal diyaar kuu ah' : 'A friendly team, ready to help'}</small></span>
          </div>
          <span className="hero-image-caption">{somali ? 'GALKACYO · SOOMAALIYA' : 'GALKAYO · SOMALIA'}</span>
        </div>
      </section>

      <section className="benefit-strip" aria-label={somali ? 'Adeegyadeenna' : 'Our services'}>
        <div><span className="benefit-icon"><Icon name="shield" /></span><span><strong>{somali ? 'Daryeel kuu dhow' : 'Care close to home'}</strong><small>{somali ? 'Caawimaad saaxiibtinimo' : 'A friendly local team'}</small></span></div>
        <div><span className="benefit-icon"><Icon name="truck" /></span><span><strong>{somali ? 'Gaarsiin maxalli ah' : 'Local delivery'}</strong><small>{somali ? 'Galkacyo gudaheeda' : 'Across Galkayo · confirm by WhatsApp'}</small></span></div>
        <div><span className="benefit-icon"><Icon name="whatsapp" /></span><span><strong>{somali ? 'WhatsApp ku dalbo' : 'Order on WhatsApp'}</strong><small>{somali ? 'Qiimaha marka hore xaqiiji' : 'Check prices and availability first'}</small></span></div>
      </section>

      <section className="section-block category-section">
        <div className="section-heading">
          <div><span className="eyebrow">{somali ? 'HAL MEEL, WAX BADAN' : 'A LITTLE BIT OF EVERYTHING'}</span><h2>{somali ? 'Maxaad raadineysaa?' : 'What can we help you find?'}</h2></div>
          <Link className="text-link" to="/market">{somali ? 'Dhammaan eeg' : 'See everything'} <Icon name="arrow" size={17} /></Link>
        </div>
        <div className="category-grid">
          {categories.slice(1).map((category, index) => (
            <Link className={`category-card category-card-${index}`} to={category.id === 'pharmacy' ? '/drugs' : `/market?category=${category.id}`} key={category.id}>
              <span className="category-symbol"><Icon name={category.icon} size={22} /></span>
              <span className="category-card-copy"><strong>{somali ? category.so : category.en}</strong><small>{category.id === 'pharmacy' ? (somali ? 'Waxyaabaha caafimaadka' : 'Everyday health essentials') : category.id === 'beauty' ? (somali ? 'Udgoon iyo daryeel' : 'Beauty, fragrance & care') : category.id === 'grocery' ? (somali ? 'Raashin iyo macmacaan' : 'Pantry, snacks & treats') : (somali ? 'Alaabta maalinlaha ah' : 'The little home comforts')}</small></span>
              <Icon name="arrow" size={18} className="category-arrow" />
            </Link>
          ))}
        </div>
      </section>

      <section className="section-block featured-section">
        <div className="section-heading">
          <div><span className="eyebrow">{somali ? 'DOORASHOOYIN LOOGU TALAGALAY MAALIN KASTA' : 'THOUGHTFUL EVERYDAY PICKS'}</span><h2>{somali ? 'Waxyaabaha la jecel yahay' : 'Little things, well chosen'}</h2></div>
          <Link className="text-link" to="/market">{somali ? 'Dukaan gal' : 'Shop all'} <Icon name="arrow" size={17} /></Link>
        </div>
        <p className="section-intro">{somali ? 'Tusaalooyin alaabta yaalla. Qiimaha iyo helitaankooda WhatsApp ku xaqiiji ka hor dalabka.' : 'A peek at our starter selection. Prices and availability are examples—please confirm with us before ordering.'}</p>
        <div className="product-grid">
          {featured.map((product) => <ProductCard key={product.id} product={product} language={language} onAdd={onAdd} />)}
        </div>
      </section>

      <section className="care-banner">
        <div className="care-banner-mark"><Icon name="plus" size={25} /></div>
        <div><span className="eyebrow">{somali ? 'CAAFIMAADKU WAA MUHIIM' : 'A NOTE FROM OUR PHARMACY'}</span><h2>{somali ? 'Su’aal caafimaad ma qabtaa?' : 'Not sure what you need?'}</h2><p>{somali ? 'La hadal farmashiistaha ka hor intaadan dooran daawo. Talo iyo daryeel wanaagsan ayaa ka bilaabma wada sheekaysi.' : 'Our pharmacy team is here to help you make an informed choice. Ask a pharmacist before choosing a medicine.'}</p></div>
        <Link className="button button-light" to="/drugs">{somali ? 'Qaybta farmashiyaha' : 'Visit the pharmacy'} <Icon name="arrow" size={17} /></Link>
      </section>

      <section className="location-teaser">
        <div className="location-copy"><span className="eyebrow">{somali ? 'KU SOO DHAWOOW XAafaddeenna' : 'RIGHT HERE IN YOUR NEIGHBOURHOOD'}</span><h2>{somali ? 'Galkacyo gudaheeda, kuu dhow.' : 'A familiar face, just around the corner.'}</h2><p>{somali ? 'Agagaarka Isbitaalka Guud ee Galkacyo. Soo booqo, ama WhatsApp nagala soo xiriir.' : 'Find us near Galkayo General Hospital. Stop by in person or send us a WhatsApp and we’ll help you get started.'}</p><Link className="text-link" to="/contact">{somali ? 'Faahfaahinta goobta' : 'Find our shop'} <Icon name="arrow" size={17} /></Link></div>
        <div className="location-illustration"><span className="map-road road-one" /><span className="map-road road-two" /><span className="map-road road-three" /><span className="map-green patch-one" /><span className="map-green patch-two" /><span className="map-pin"><Icon name="plus" size={19} /></span><span className="map-label">{somali ? 'SHAFICI · GALKACYO' : 'SHAFICI · GALKAYO'}</span></div>
      </section>
    </>
  );
}
