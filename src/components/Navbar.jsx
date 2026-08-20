import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/codes-thinker-logo.png';

const links = [
  { label: 'Home', to: '/', end: true },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Projects', to: '/projects' },
  { label: 'Team', to: '/team' },
  { label: 'Contact', to: '/contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { pathname } = useLocation();

  /* Navbar shadow/background on scroll */
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
    };

    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  /* Close mobile menu whenever route changes */
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-inner container">

        {/* Logo */}
        <Link to="/" className="navbar-logo">
          <img
            src={logo}
            alt="Code's Thinker"
            className="navbar-logo-image"
          />
        </Link>


        {/* Navigation */}
        <nav
          className={`navbar-links ${
            open ? 'navbar-links-open' : ''
          }`}
        >
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              className={({ isActive }) =>
                `navbar-link ${
                  isActive ? 'navbar-link-active' : ''
                }`
              }
              onClick={() => setOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>


        {/* Right side */}
        <div className="navbar-right">

          <Link
            to="/login"
            className="navbar-login"
          >
            Login
          </Link>

          <button
            type="button"
            className={`navbar-burger ${
              open ? 'navbar-burger-open' : ''
            }`}
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            <span />
            <span />
            <span />
          </button>

        </div>

      </div>
    </header>
  );
}