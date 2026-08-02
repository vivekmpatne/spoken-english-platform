import { NavLink, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getTheme, setTheme as saveTheme } from '../utils/storage';
import './Navbar.css';

const links = [
  { to: '/', label: 'Dashboard', end: true },
  { to: '/roadmap', label: 'Roadmap' },
  { to: '/grammar', label: 'Grammar' },
  { to: '/vocabulary', label: 'Vocabulary' },
  { to: '/interview', label: 'Interview' },
  { to: '/speaking', label: 'Speaking' },
];

export default function Navbar() {
  const [theme, setThemeState] = useState(getTheme());
  const [menuOpen, setMenuOpen] = useState(false);
  const [q, setQ] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    saveTheme(theme);
  }, [theme]);

  function submitSearch(e) {
    e.preventDefault();
    if (q.trim()) {
      navigate(`/search?q=${encodeURIComponent(q.trim())}`);
      setMenuOpen(false);
    }
  }

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <NavLink to="/" className="brand">
          <span className="brand-mark">EZ</span>
          <span className="brand-text">
            Zero To <em>Hero</em>
          </span>
        </NavLink>

        <form className="nav-search" onSubmit={submitSearch}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
            <path d="M21 21l-4.3-4.3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search grammar, vocab, days..."
            aria-label="Search everything"
          />
        </form>

        <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.end}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="nav-actions">
          <button
            className="theme-toggle"
            onClick={() => setThemeState(theme === 'light' ? 'dark' : 'light')}
            aria-label="Toggle theme"
            title="Toggle dark mode"
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
          <button className="menu-toggle" onClick={() => setMenuOpen((v) => !v)} aria-label="Menu">
            <span /><span /><span />
          </button>
        </div>
      </div>
    </header>
  );
}
