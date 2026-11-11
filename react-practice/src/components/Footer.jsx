import { Link } from 'react-router-dom';
import Icon from './Icon';
import Logo from './Logo';
import { whatsappLink } from '../data/whatsapp';

const currentYear = new Date().getFullYear();

export default function Footer({ language }) {
  const somali = language === 'so';

  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-brand">
          <Logo light />
          <p>
            {somali
              ? 'Farmashiye iyo dukaan xaafadeed oo kuu dhow, Galkacyo.'
              : 'Your neighbourhood pharmacy and market, right here in Galkayo.'}
          </p>
          <a className="footer-whatsapp" href={whatsappLink(somali ? 'Salaan Shafici Pharmacy & Market!' : 'Hello Shafici Pharmacy & Market!')} target="_blank" rel="noreferrer">
            <Icon name="whatsapp" size={18} /> +252 90 747 1339
          </a>
        </div>
        <div className="footer-column">
          <h3>{somali ? 'Baadh' : 'Explore'}</h3>
          <Link to="/market">{somali ? 'Suuqa' : 'Market'}</Link>
          <Link to="/drugs">{somali ? 'Daawooyin' : 'Drugs'}</Link>
          <Link to="/how-to-use">{somali ? 'Sida loo isticmaalo' : 'How to use medicines'}</Link>
          <Link to="/about">{somali ? 'Nagu saabsan' : 'About us'}</Link>
        </div>
        <div className="footer-column">
          <h3>{somali ? 'Nala soo xiriir' : 'Come say hello'}</h3>
          <span><Icon name="location" size={17} /> {somali ? 'Galkacyo, Soomaaliya' : 'Galkayo, Somalia'}</span>
          <span className="footer-small">
            {somali ? 'Agagaarka Isbitaalka Guud ee Galkacyo' : 'Near Galkayo General Hospital'}
          </span>
          <Link to="/contact">{somali ? 'Faahfaahinta goobta' : 'Location & contact'}</Link>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {currentYear} Shafici Pharmacy &amp; Market</span>
        <span>{somali ? 'Qiimaha iyo alaabtu waa in la xaqiijiyaa.' : 'Prices and product availability must be confirmed.'}</span>
      </div>
    </footer>
  );
}
