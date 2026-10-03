import { useState } from 'react';
import { formatPrice } from '../data/products';
import { openWhatsApp } from '../data/whatsapp';
import Icon from './Icon';

export default function CartDrawer({ open, onClose, cart, onUpdateQuantity, language }) {
  const [fulfilment, setFulfilment] = useState('delivery');
  const [address, setAddress] = useState('');
  const somali = language === 'so';
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  function sendOrder() {
    const items = cart.map((item) => `• ${item.name} × ${item.quantity} — ${formatPrice(item.price * item.quantity)}`).join('\n');
    const message = somali
      ? `Salaan Shafici Pharmacy & Market,\nWaxaan jeclaan lahaa inaan dalbado:\n${items}\nWadarta qiyaasta: ${formatPrice(total)}\n${fulfilment === 'delivery' ? `Gaarsiin: ${address || 'Fadlan ii xaqiiji goobta gaarsiinta'}` : 'Waxaan ka qaadanayaa dukaanka'}\nFadlan ii xaqiiji qiimaha iyo alaabta la heli karo.`
      : `Hello Shafici Pharmacy & Market,\nI'd like to enquire about this order:\n${items}\nEstimated total: ${formatPrice(total)}\n${fulfilment === 'delivery' ? `Delivery area/address: ${address || 'Please confirm delivery options'}` : 'I will collect from the store'}\nPlease confirm current prices and availability.`;
    openWhatsApp(message);
  }

  if (!open) return null;

  return (
    <div className="drawer-layer" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }}>
      <aside className="cart-drawer" role="dialog" aria-modal="true" aria-labelledby="cart-heading">
        <div className="drawer-heading">
          <div>
            <span className="eyebrow">{somali ? 'Dalabkaaga' : 'YOUR ORDER'}</span>
            <h2 id="cart-heading">{somali ? 'Dambiisha' : 'Your basket'} <span>({cart.length})</span></h2>
          </div>
          <button className="icon-button" type="button" onClick={onClose} aria-label={somali ? 'Xir' : 'Close basket'}><Icon name="close" /></button>
        </div>
        {cart.length === 0 ? (
          <div className="empty-basket">
            <span className="empty-basket-icon"><Icon name="basket" size={30} /></span>
            <h3>{somali ? 'Dambiishaadu way madhan tahay' : 'Your basket is taking a break'}</h3>
            <p>{somali ? 'Alaabta aad rabto ku dar, markaas WhatsApp nagala dalbo.' : 'Add the things you need, then send your enquiry to us on WhatsApp.'}</p>
            <button className="button button-dark" type="button" onClick={onClose}>{somali ? 'Alaabta baadh' : 'Keep browsing'} <Icon name="arrow" size={17} /></button>
          </div>
        ) : (
          <>
            <div className="basket-list">
              {cart.map((item) => (
                <div className="basket-item" key={item.id}>
                  <div className={`basket-thumb product-${item.tone}`}><img src={`https://images.unsplash.com/${item.image}?auto=format&fit=crop&w=160&q=70`} alt="" /></div>
                  <div className="basket-product">
                    <strong>{item.name}</strong>
                    <span>{formatPrice(item.price)} · {somali ? 'qiime qiyaas ah' : 'example price'}</span>
                    <div className="quantity-control">
                      <button type="button" aria-label={somali ? `Ka jar ${item.name}` : `Remove one ${item.name}`} onClick={() => onUpdateQuantity(item.id, -1)}><Icon name="minus" size={15} /></button>
                      <span>{item.quantity}</span>
                      <button type="button" aria-label={somali ? `Ku dar ${item.name}` : `Add one ${item.name}`} onClick={() => onUpdateQuantity(item.id, 1)}><Icon name="plus" size={15} /></button>
                    </div>
                  </div>
                  <strong className="basket-line-total">{formatPrice(item.price * item.quantity)}</strong>
                </div>
              ))}
            </div>
            <div className="fulfilment-picker">
              <span className="field-label">{somali ? 'Sidee ayaad u rabtaa?' : 'How would you like it?'}</span>
              <div className="fulfilment-options">
                <button type="button" className={fulfilment === 'delivery' ? 'selected' : ''} onClick={() => setFulfilment('delivery')}><Icon name="truck" size={18} />{somali ? 'Gaarsiin' : 'Delivery'}</button>
                <button type="button" className={fulfilment === 'pickup' ? 'selected' : ''} onClick={() => setFulfilment('pickup')}><Icon name="basket" size={18} />{somali ? 'Ka qaado' : 'Pickup'}</button>
              </div>
              {fulfilment === 'delivery' && (
                <input
                  className="address-input"
                  value={address}
                  onChange={(event) => setAddress(event.target.value)}
                  placeholder={somali ? 'Xaafadda / goobta gaarsiinta (ikhtiyaari)' : 'Delivery area or address (optional)'}
                  aria-label={somali ? 'Goobta gaarsiinta' : 'Delivery area or address'}
                />
              )}
            </div>
            <div className="basket-summary">
              <div><span>{somali ? 'Wadar qiyaas ah' : 'Estimated subtotal'}</span><strong>{formatPrice(total)}</strong></div>
              <p>{somali ? 'Qiimaha iyo gaarsiinta waxaa WhatsApp ku xaqiijinaya dukaanka.' : 'We will confirm actual prices, stock and delivery on WhatsApp.'}</p>
              <button className="button button-whatsapp order-button" type="button" onClick={sendOrder}>
                <Icon name="whatsapp" size={19} /> {somali ? 'WhatsApp kaga dir dalabka' : 'Enquire on WhatsApp'}
              </button>
            </div>
          </>
        )}
      </aside>
    </div>
  );
}
