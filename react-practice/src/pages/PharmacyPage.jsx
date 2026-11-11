import { Link } from 'react-router-dom';
import Icon from '../components/Icon';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

export default function PharmacyPage({ language, onAdd }) {
  const somali = language === 'so';
  const medicines = products.filter((product) => product.category === 'pharmacy');

  return (
    <div className="inner-page pharmacy-page">
      <section className="pharmacy-hero">
        <div className="pharmacy-hero-copy">
          <span className="eyebrow">{somali ? 'CAAFIMAADKAAGA, DARYEELKEENNA' : 'HERE WHEN YOU NEED A HAND'}</span>
          <h1>{somali ? <>Daryeel wanaagsan.<br /><em>Talo kuu gaar ah.</em></> : <>A little extra care<br /><em>goes a long way.</em></>}</h1>
          <p>{somali ? 'Farmashiyahayagu wuxuu kuu joogaa talo saaxiibtinimo iyo waxyaabaha caafimaadka ee aad maalin kasta u baahan tahay.' : 'Our pharmacy team is here with a friendly ear, everyday health essentials and help finding the right next step.'}</p>
          <a className="button button-dark" href="https://wa.me/252907471339?text=Hello%20Shafici%20Pharmacy%2C%20I%20have%20a%20question%20for%20the%20pharmacist." target="_blank" rel="noreferrer"><Icon name="whatsapp" size={18} />{somali ? 'Farmashiistaha la hadal' : 'Ask our pharmacist'}</a>
        </div>
        <div className="pharmacy-hero-image"><img src="https://images.unsplash.com/photo-1576602976047-174e57a47881?auto=format&fit=crop&w=1000&q=85" alt={somali ? 'Alaab caafimaad oo farmashiye ku taal' : 'Health and wellness essentials in a pharmacy'} /><span className="pharmacy-image-label"><Icon name="plus" size={18} /> {somali ? 'SHAFICI · FARMASHIYE' : 'SHAFICI · PHARMACY'}</span></div>
      </section>
      <section className="pharmacy-promise">
        <div><Icon name="shield" size={22} /><span><strong>{somali ? 'Hagid mas’uul ah' : 'Thoughtful guidance'}</strong><small>{somali ? 'Daawo ku weydii farmashiistaha.' : 'Ask a pharmacist about any medicine.'}</small></span></div>
        <div><Icon name="heart" size={22} /><span><strong>{somali ? 'Daryeel shakhsi ah' : 'Care that listens'}</strong><small>{somali ? 'Su’aalahaaga si wanaagsan ayaa loo qaabilaa.' : 'Your questions always have a place here.'}</small></span></div>
        <div><Icon name="whatsapp" size={22} /><span><strong>{somali ? 'Marka hore nala xiriir' : 'Check before you visit'}</strong><small>{somali ? 'Helitaanka WhatsApp ku xaqiiji.' : 'Confirm stock with us on WhatsApp.'}</small></span></div>
      </section>
      <section className="medicine-section">
        <div className="section-heading"><div><span className="eyebrow">{somali ? 'TUSAALOOYIN ALAABTA FARMASHIYAHA' : 'A FEW EVERYDAY ESSENTIALS'}</span><h2>{somali ? 'Caafimaadka & fayo-qabka' : 'Health & wellness'}</h2></div><Link className="text-link" to="/drugs">{somali ? 'Dhammaan eeg' : 'Browse all'} <Icon name="arrow" size={17} /></Link></div>
        <p className="section-intro">{somali ? 'Tusaalooyin keliya; ma aha liis kayd ama talo caafimaad. Magacyada, qiimaha iyo helitaanka waa in la xaqiijiyaa.' : 'These are catalogue examples—not a live stock list or medical advice. Please confirm exact products, prices and availability with the pharmacy.'}</p>
        <div className="product-grid">{medicines.map((product) => <ProductCard key={product.id} product={product} language={language} onAdd={onAdd} />)}</div>
      </section>
      <aside className="medicine-disclaimer"><span className="disclaimer-icon"><Icon name="shield" size={21} /></span><div><strong>{somali ? 'Isticmaalka daawada' : 'A helpful reminder'}</strong><p>{somali ? 'Boggan ma bixiyo talo caafimaad. Fadlan akhri baakadka, la tasho xirfadle caafimaad, hana isticmaalin daawo qof kale loo qoray. Daawooyinka la qoray farmashiistaha kala hadal.' : 'This website does not provide medical advice. Read medicine labels, ask a qualified healthcare professional, and never use someone else’s prescription. Prescription products should be discussed directly with the pharmacist.'}</p></div></aside>
    </div>
  );
}
