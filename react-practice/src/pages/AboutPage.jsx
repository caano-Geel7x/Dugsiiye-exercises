import { Link } from 'react-router-dom';
import Icon from '../components/Icon';

export default function AboutPage({ language }) {
  const somali = language === 'so';

  return (
    <div className="inner-page about-page">
      <section className="about-hero">
        <span className="eyebrow">{somali ? 'SHEEKADEENNA' : 'A LITTLE ABOUT US'}</span>
        <h1>{somali ? <>Wax walba oo maalin kasta<br />lagu daryeelo, <em>halkaan.</em></> : <>Your everyday essentials,<br /><em>with a little more care.</em></>}</h1>
        <p>{somali ? 'Shafici Pharmacy & Market waa dukaan iyo farmashiye xaafadeed oo ku yaal Galkacyo—hal meel oo aad ka heli karto waxyaabaha caafimaadka, raashinka iyo alaabta guriga.' : 'Shafici Pharmacy & Market brings two everyday essentials together under one roof: a neighbourhood pharmacy and a handy local market, right here in Galkayo.'}</p>
      </section>
      <section className="about-story">
        <div className="about-image"><img src="https://images.unsplash.com/photo-1576602976047-174e57a47881?auto=format&fit=crop&w=1100&q=85" alt={somali ? 'Farmashiye xaafadeed' : 'A neighbourhood pharmacy'} /><span>{somali ? 'KU SOO DHAWOOW SHAFICI' : 'WELCOME TO SHAFICI'}</span></div>
        <div className="about-story-copy">
          <span className="eyebrow">{somali ? 'DARYEEL KU DHAWAAN' : 'CARE, CLOSE TO HOME'}</span>
          <h2>{somali ? 'Dukaan xaafadeed oo dadka xusuusta.' : 'A neighbourhood shop should feel like one.'}</h2>
          <p>{somali ? 'Mararka qaarkood waa daawo aad u baahan tahay. Mararka kalena waa saliidda jikada, shaambo ama shukulaato yar. Shafici waxaad ka heli kartaa waxyaabahaas hal meel—caawimaadna waad weydiin kartaa.' : 'Some days it’s a pharmacy essential. Other days it’s cooking oil, shampoo, or a little chocolate for the way home. At Shafici, find a little bit of everything, with a real person ready to point you in the right direction.'}</p>
          <p>{somali ? 'Waxaan joognaa Galkacyo, agagaarka Isbitaalka Guud. Ku soo dhowow dukaanka ama WhatsApp nagala soo xiriir.' : 'We’re based in Galkayo, near Galkayo General Hospital. Stop by for a visit or message us on WhatsApp to ask about an item.'}</p>
          <Link className="button button-dark" to="/contact">{somali ? 'Goobta naga hel' : 'Come say hello'} <Icon name="arrow" size={17} /></Link>
        </div>
      </section>
      <section className="values-grid">
        <article><span><Icon name="heart" size={22} /></span><h3>{somali ? 'Daryeel dadka u roon' : 'People first, always'}</h3><p>{somali ? 'Wada sheekaysi saaxiibtinimo iyo daryeel si wanaagsan loo bixiyo.' : 'A friendly conversation and thoughtful help go a long way.'}</p></article>
        <article><span><Icon name="plus" size={22} /></span><h3>{somali ? 'Farmashiye kuu dhow' : 'A pharmacy close by'}</h3><p>{somali ? 'Farmashiistaha kala tasho su’aalaha caafimaadka iyo daawooyinka.' : 'Talk directly with a pharmacist about medicines and health questions.'}</p></article>
        <article><span><Icon name="basket" size={22} /></span><h3>{somali ? 'Dukaan hal meel ah' : 'A little bit of everything'}</h3><p>{somali ? 'Raashin, qurux, waxyaabaha guriga iyo alaabta maalinlaha ah.' : 'Groceries, personal care, home essentials and the things you need every day.'}</p></article>
      </section>
    </div>
  );
}
