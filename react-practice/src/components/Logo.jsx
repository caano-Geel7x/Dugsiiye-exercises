import { Link } from 'react-router-dom';

export default function Logo({ light = false }) {
  return (
    <Link className={`brand${light ? ' brand-light' : ''}`} to="/" aria-label="Shafici Pharmacy and Market home">
      <span className="brand-mark" aria-hidden="true">
        <svg viewBox="0 0 42 42" fill="none">
          <path d="M21 8v26M8 21h26" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" />
          <path d="M28.8 9.6c-5 .3-8.4 3.5-8.8 9 5.2-.2 8.6-3.4 8.8-9Z" fill="#d8b668" />
          <path d="M21 19c1.1-4 3.7-6.5 7.8-8.9" stroke="#d8b668" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </span>
      <span className="brand-copy">
        <span className="brand-name">SHAFICI</span>
        <span className="brand-subtitle">PHARMACY &amp; MARKET</span>
      </span>
    </Link>
  );
}
