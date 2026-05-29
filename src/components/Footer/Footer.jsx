import { Link } from 'react-router-dom';
import { Instagram, MapPin, Phone } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div>
          <Link to="/" className="footer__brand">VeloLab</Link>
          <p>Bicicletas, oficina e performance com curadoria premium para cidade, estrada e trilha.</p>
        </div>
        <div className="footer__col"><strong>Mapa</strong><Link to="/bicicletas">Bicicletas</Link><Link to="/oficina">Oficina</Link><Link to="/performance">Performance</Link><Link to="/contato">Contato</Link></div>
        <div className="footer__col"><strong>Contato</strong><span><MapPin size={16}/> Rua das Serras, 420</span><span><Phone size={16}/> (11) 98888-2042</span><span><Instagram size={16}/> @velolab.cc</span></div>
      </div>
    </footer>
  );
}
