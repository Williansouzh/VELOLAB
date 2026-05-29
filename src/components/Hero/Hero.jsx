import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CalendarCheck } from 'lucide-react';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__inner">
        <motion.div className="hero__copy" initial={{ opacity: 0, y: 26 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .75 }}>
          <span className="eyebrow">Atelier premium de bicicletas</span>
          <h1>Bicicletas para quem transforma caminho em experiência.</h1>
          <p className="lead">Performance, manutenção premium e tecnologia para ciclistas urbanos, de estrada e trilha.</p>
          <div className="hero__actions"><Link className="btn btn-primary" to="/bicicletas">Explorar bicicletas <ArrowRight size={18}/></Link><Link className="btn btn-secondary" to="/contato">Agendar revisão <CalendarCheck size={18}/></Link></div>
        </motion.div>
        <motion.div className="hero__visual" initial={{ opacity: 0, scale: .96, y: 30 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: .9, delay: .1 }}>
          <img src="/hero-bike.svg" alt="Bicicleta premium VeloLab com quadro minimalista" />
          <div className="hero__stat"><strong>42 mm</strong><span>gravel ready</span></div>
        </motion.div>
      </div>
    </section>
  );
}
