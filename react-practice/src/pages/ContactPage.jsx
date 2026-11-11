import { useState } from 'react';
import Icon from '../components/Icon';
import { openWhatsApp, WHATSAPP_NUMBER } from '../data/whatsapp';

export default function ContactPage({ language }) {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const somali = language === 'so';
  const mapQuery = encodeURIComponent('Galkayo General Hospital Galkayo Somalia');

  function handleSubmit(event) {
    event.preventDefault();
    const enquiry = somali
      ? `Salaan Shafici Pharmacy & Market,\nMagacaygu waa ${name || 'macmiil'}.\n${message}\nFadlan ii soo jawaaba.`
      : `Hello Shafici Pharmacy & Market,\nMy name is ${name || 'a customer'}.\n${message}\nPlease get back to me when you can.`;
    openWhatsApp(enquiry);
  }

  return (
    <div className="inner-page contact-page">
      <section className="page-intro contact-intro">
        <span className="eyebrow">{somali ? 'WADA SHEEKAYSI AYAAN JECELNAHAY' : 'WE’RE HERE TO HELP'}</span>
        <h1>{somali ? <>Nala soo xiriir.<br /><em>Waan kuu joognaa.</em></> : <>Say hello.<br /><em>We’re all ears.</em></>}</h1>
        <p>{somali ? 'Alaab ma raadineysaa, dalab ma qabtaa, mise su’aal ayaad qabtaa? WhatsApp nagala soo xiriir.' : 'Looking for something, planning an order, or have a question? Drop us a WhatsApp and a real person will help you out.'}</p>
      </section>
      <div className="contact-layout">
        <div className="contact-details">
          <article className="contact-card">
            <span className="contact-card-icon"><Icon name="location" size={21} /></span>
            <span className="eyebrow">{somali ? 'GOOBTEENNA' : 'COME FIND US'}</span>
            <h2>{somali ? 'Galkacyo, Soomaaliya' : 'Galkayo, Somalia'}</h2>
            <p>{somali ? 'Agagaarka Isbitaalka Guud ee Galkacyo. Cinwaanka saxda ah WhatsApp ku xaqiiji ka hor booqashada.' : 'Near Galkayo General Hospital. Message us to confirm the exact shop location before you visit.'}</p>
            <a className="text-link" href={`https://www.google.com/maps/search/?api=1&query=${mapQuery}`} target="_blank" rel="noreferrer">{somali ? 'Ka eeg Google Maps' : 'Look up the area on Maps'} <Icon name="arrow" size={17} /></a>
          </article>
          <article className="contact-card contact-whatsapp-card">
            <span className="contact-card-icon"><Icon name="whatsapp" size={22} /></span>
            <span className="eyebrow">{somali ? 'FARIIN NAGU SOO DIR' : 'SEND US A MESSAGE'}</span>
            <h2>+252 90 747 1339</h2>
            <p>{somali ? 'Alaabta, qiimaha, helitaanka iyo gaarsiinta WhatsApp ku xaqiiji.' : 'Ask us about products, example prices, current availability or local delivery.'}</p>
            <a className="button button-whatsapp" href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(somali ? 'Salaan Shafici Pharmacy & Market!' : 'Hello Shafici Pharmacy & Market!')}`} target="_blank" rel="noreferrer"><Icon name="whatsapp" size={18} />{somali ? 'WhatsApp fur' : 'Open WhatsApp'}</a>
          </article>
          <div className="contact-map">
            <span className="map-road road-one" /><span className="map-road road-two" /><span className="map-road road-three" /><span className="map-green patch-one" /><span className="map-green patch-two" />
            <span className="map-hospital"><Icon name="plus" size={15} />{somali ? 'Isbitaalka Guud' : 'General Hospital'}</span>
            <span className="map-pin"><Icon name="plus" size={17} /></span>
            <span className="map-label">{somali ? 'AGAGAARKA · GALKACYO' : 'NEARBY · GALKAYO'}</span>
          </div>
        </div>
        <form className="enquiry-form" onSubmit={handleSubmit}>
          <span className="eyebrow">{somali ? 'FARIIN NOO REEB' : 'A QUICK NOTE'}</span>
          <h2>{somali ? 'Sideen kuu caawin karnaa?' : 'What can we help with?'}</h2>
          <p>{somali ? 'Foomkan wuxuu WhatsApp kaaga diyaarinayaa fariin. Diritaanka waa inaad adigu xaqiijisaa.' : 'We’ll prepare your message in WhatsApp. You can review and send it there.'}</p>
          <label>{somali ? 'Magacaaga' : 'Your name'}<input value={name} onChange={(event) => setName(event.target.value)} placeholder={somali ? 'Magaca' : 'e.g. Amina'} autoComplete="name" /></label>
          <label>{somali ? 'Fariintaada' : 'Your message'}<textarea value={message} onChange={(event) => setMessage(event.target.value)} placeholder={somali ? 'Alaab, qiime, gaarsiin ama su’aal kale…' : 'An item you’re looking for, a price enquiry, delivery…'} required rows={5} /></label>
          <button className="button button-whatsapp enquiry-submit" type="submit"><Icon name="whatsapp" size={19} />{somali ? 'WhatsApp kaga dir fariinta' : 'Continue in WhatsApp'} <Icon name="arrow" size={17} /></button>
          <span className="form-note"><Icon name="shield" size={15} />{somali ? 'Xogtaada halkan laguma kaydinayo.' : 'This form doesn’t store your details on this website.'}</span>
        </form>
      </div>
    </div>
  );
}
