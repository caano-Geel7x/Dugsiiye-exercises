import { useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import PharmacyPage from './pages/PharmacyPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import HowToUsePage from './pages/HowToUsePage';
import './App.css';

export default function App() {
  const [language, setLanguage] = useState('en');
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  function addToCart(product) {
    setCart((current) => {
      const existing = current.find((item) => item.id === product.id);
      return existing
        ? current.map((item) =>
            item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item,
          )
        : [...current, { ...product, quantity: 1 }];
    });
  }

  function updateQuantity(id, change) {
    setCart((current) =>
      current
        .map((item) => (item.id === id ? { ...item, quantity: item.quantity + change } : item))
        .filter((item) => item.quantity > 0),
    );
  }

  const shared = { language, onAdd: addToCart, onOpenCart: () => setCartOpen(true) };

  return (
    <div className="site-shell">
      <Header
        language={language}
        onLanguageChange={setLanguage}
        cartCount={totalItems}
        onOpenCart={() => setCartOpen(true)}
      />
      <main className="page-content">
        <Routes>
          <Route path="/" element={<HomePage {...shared} />} />
          <Route path="/market" element={<ShopPage {...shared} />} />
          <Route path="/shop" element={<Navigate to="/market" replace />} />
          <Route path="/drugs" element={<PharmacyPage {...shared} />} />
          <Route path="/pharmacy" element={<Navigate to="/drugs" replace />} />
          <Route path="/how-to-use" element={<HowToUsePage language={language} />} />
          <Route path="/about" element={<AboutPage language={language} />} />
          <Route path="/contact" element={<ContactPage language={language} />} />
          <Route path="*" element={<HomePage {...shared} />} />
        </Routes>
      </main>
      <Footer language={language} />
      <CartDrawer
        open={cartOpen}
        onClose={() => setCartOpen(false)}
        cart={cart}
        onUpdateQuantity={updateQuantity}
        language={language}
      />
    </div>
  );
}
