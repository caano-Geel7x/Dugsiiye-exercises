import { NavLink } from 'react-router-dom';
import Icon from './Icon';
import Logo from './Logo';

const links = [
  { to: '/', en: 'Home', so: 'Bogga hore', icon: 'home' },
  { to: '/drugs', en: 'Drugs', so: 'Daawooyin', icon: 'plus' },
  { to: '/market', en: 'Market', so: 'Suuq', icon: 'basket' },
  { to: '/how-to-use', en: 'How to use', so: 'Sida loo isticmaalo', icon: 'shield' },
  { to: '/about', en: 'About', so: 'Nagu saabsan', icon: 'heart' },
  { to: '/contact', en: 'Contact', so: 'Xiriir', icon: 'location' },
];

export default function Header({ language, onLanguageChange, cartCount, onOpenCart }) {
  const somali = language === 'so';

  return (
    <>
      <div className="announcement">
        <span className="announcement-dot" />
        {somali
          ? 'Galkacyo gudaheeda ayaa wax laguugu keenayaa · Farmashiyaha Guud agtiisa'
          : 'Local delivery in Galkayo · Near Galkayo General Hospital'}
        <span className="announcement-divider">✦</span>
        {somali ? 'Dukaan iyo farmashiye hal meel ah' : 'Your neighbourhood pharmacy & market'}
      </div>
      <header className="site-header">
        <div className="header-inner">
          <Logo />
          <nav className="desktop-nav" aria-label={somali ? 'Hagaha guud' : 'Main navigation'}>
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
              >
                {somali ? link.so : link.en}
              </NavLink>
            ))}
          </nav>
          <div className="header-actions">
            <button
              className="language-switch"
              type="button"
              onClick={() => onLanguageChange(somali ? 'en' : 'so')}
              aria-label={somali ? 'Switch language to English' : 'U beddel af-Soomaali'}
            >
              <span>{somali ? 'SO' : 'EN'}</span>
              <span className="language-divider">/</span>
              <span className="language-next">{somali ? 'EN' : 'SO'}</span>
            </button>
            <button className="cart-button" type="button" onClick={onOpenCart} aria-label={somali ? `Dambiisha, ${cartCount} alaab` : `Basket, ${cartCount} items`}>
              <Icon name="basket" size={20} />
              <span className="cart-label">{somali ? 'Dambiil' : 'Basket'}</span>
              <span className="cart-count">{cartCount}</span>
            </button>
          </div>
        </div>
      </header>
      <nav className="mobile-nav" aria-label={somali ? 'Hagaha guud' : 'Main navigation'}>
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.to === '/'}
            className={({ isActive }) => `mobile-nav-link${isActive ? ' active' : ''}`}
          >
            <Icon name={link.icon} size={19} />
            <span>{somali ? link.so : link.en}</span>
          </NavLink>
        ))}
      </nav>
    </>
  );
}
