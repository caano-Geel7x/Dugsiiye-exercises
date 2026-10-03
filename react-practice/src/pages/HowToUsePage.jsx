import { Link } from 'react-router-dom';
import Icon from '../components/Icon';
import { WHATSAPP_NUMBER } from '../data/whatsapp';

const steps = [
  {
    icon: 'search',
    enTitle: 'Read the label first',
    soTitle: 'Marka hore akhri summadda',
    en: 'Check the medicine name, active ingredient, instructions, expiry date and storage directions. If anything is unclear, ask a pharmacist before using it.',
    so: 'Hubi magaca daawada, maaddada firfircoon, tilmaamaha, taariikhda dhicitaanka iyo habka kaydinta. Haddii wax kuu caddaan waayaan, farmashiistaha weydii.',
  },
  {
    icon: 'check',
    enTitle: 'Follow your own directions',
    soTitle: 'Raac tilmaamaha adiga laguu siiyay',
    en: 'Use a medicine only as directed on its label or by your healthcare professional. Do not guess a dose, take extra, or share your medicine with anyone else.',
    so: 'Daawada u isticmaal sida summaddeeda ama xirfadlaha caafimaadku kuu faray. Ha qiyaasin qiyaasta, ha kordhin, hana la wadaagin qof kale.',
  },
  {
    icon: 'shield',
    enTitle: 'Check before combining',
    soTitle: 'Ka hubi ka hor intaadan isku darin',
    en: 'Tell a pharmacist or clinician about other medicines, supplements, allergies and health conditions before starting something new. Some products may interact.',
    so: 'Farmashiistaha ama xirfadlaha caafimaadka u sheeg daawooyinka kale, kaabisyada, xasaasiyadda iyo xaaladaha caafimaad ka hor intaadan daawo cusub bilaabin.',
  },
  {
    icon: 'home',
    enTitle: 'Store it safely',
    soTitle: 'Meel ammaan ah ku kaydi',
    en: 'Follow the package storage instructions, keep medicines in their original packaging and out of children’s reach. Do not use products past their expiry date.',
    so: 'Raac tilmaamaha kaydinta ee baakadka, daawada ku hay baakaddeeda asalka ah kana fogee carruurta. Ha isticmaalin daawo dhacday.',
  },
];

export default function HowToUsePage({ language }) {
  const somali = language === 'so';

  return (
    <div className="inner-page how-to-page">
      <section className="how-to-hero">
        <span className="eyebrow">{somali ? 'HAGID GUUD OO BADBAADO LEH' : 'A SIMPLE GUIDE TO MEDICINE SAFETY'}</span>
        <h1>{somali ? <>Daawo si ammaan ah.<br /><em>Marka hore hubi.</em></> : <>Medicines, made clearer.<br /><em>Safety comes first.</em></>}</h1>
        <p>{somali ? 'Talooyinkan guud waxay kaa caawinayaan inaad su’aalaha saxda ah weydiiso. Ma aha ogaansho cudur ama talo ku saabsan daawo gaar ah.' : 'A few helpful checks can make medicines less confusing. This is general information—not a diagnosis or instructions for a specific medicine.'}</p>
      </section>

      <section className="how-to-steps" aria-label={somali ? 'Tallaabooyinka badbaadada daawada' : 'Medicine safety steps'}>
        {steps.map((step, index) => (
          <article className="how-to-card" key={step.enTitle}>
            <span className="how-to-number">{String(index + 1).padStart(2, '0')}</span>
            <span className="how-to-icon"><Icon name={step.icon} size={21} /></span>
            <h2>{somali ? step.soTitle : step.enTitle}</h2>
            <p>{somali ? step.so : step.en}</p>
          </article>
        ))}
      </section>

      <section className="how-to-important">
        <span className="important-icon"><Icon name="heart" size={22} /></span>
        <div>
          <span className="eyebrow">{somali ? 'FADLAN XUSUUSNOW' : 'PLEASE REMEMBER'}</span>
          <h2>{somali ? 'Farmashiistaha ayaa ka jawaabi kara su’aalaha daawada.' : 'A pharmacist can help with medicine questions.'}</h2>
          <p>{somali ? 'Ha bilaabin, joojin ama beddelin daawo laguu qoray adigoon talo caafimaad helin. Haddii qof si daran u xanuunsado ama xaaladdu degdeg tahay, raadi daryeel caafimaad oo degdeg ah.' : 'Do not start, stop or change a prescribed medicine without professional advice. If someone is seriously unwell or it is an emergency, seek urgent medical care.'}</p>
          <div className="how-to-actions">
            <Link className="button button-dark" to="/drugs">{somali ? 'Aad qaybta daawooyinka' : 'Browse pharmacy'} <Icon name="arrow" size={17} /></Link>
            <a className="button button-whatsapp" href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(somali ? 'Salaan, waxaan su’aal ka qabaa isticmaalka daawo.' : 'Hello, I have a question about using a medicine.')}`} target="_blank" rel="noreferrer"><Icon name="whatsapp" size={18} />{somali ? 'Farmashiistaha weydii' : 'Ask the pharmacist'}</a>
          </div>
        </div>
      </section>
      <p className="how-to-disclaimer">{somali ? 'Macluumaad guud oo waxbarasho oo keliya; ma beddelayo talada farmashiistaha ama xirfadlaha caafimaadka.' : 'For general education only; this guide does not replace advice from a pharmacist or other qualified healthcare professional.'}</p>
    </div>
  );
}
