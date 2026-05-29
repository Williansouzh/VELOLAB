import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useScrollProgress } from '../../hooks/useScrollProgress';
import './Navbar.css';

const links = [
  { to: '/', label: 'Home' },
  { to: '/bicicletas', label: 'Bicicletas' },
  { to: '/oficina', label: 'Oficina' },
  { to: '/performance', label: 'Performance' },
  { to: '/contato', label: 'Contato' }
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const progress = useScrollProgress();
  const scrolled = progress > 0.015;

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <nav className="navbar__inner" aria-label="Navegação principal">
        <Link to="/" className="navbar__brand" onClick={() => setOpen(false)} aria-label="VeloLab home">
          <span className="navbar__mark">VL</span><span>VeloLab</span>
        </Link>
        <div className="navbar__links">
          {links.map((link) => <NavLink key={link.to} to={link.to}>{link.label}</NavLink>)}
        </div>
        <Link className="navbar__cta" to="/contato">Agendar revisão</Link>
        <button className="navbar__toggle" type="button" onClick={() => setOpen((v) => !v)} aria-expanded={open} aria-label="Abrir menu mobile">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div className="mobile-menu" initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }} transition={{ duration: .25 }}>
            {links.map((link) => <NavLink key={link.to} to={link.to} onClick={() => setOpen(false)}>{link.label}</NavLink>)}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
