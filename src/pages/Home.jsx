import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, BadgeCheck, Leaf, Timer } from 'lucide-react';
import SEO from '../components/SEO/SEO';
import Hero from '../components/Hero/Hero';
import ScrollBikeDetails from '../components/ScrollBikeDetails/ScrollBikeDetails';
import BikeConfigurator from '../components/BikeConfigurator/BikeConfigurator';
import FAQ from '../components/FAQ/FAQ';

const pillars = [
  { icon: BadgeCheck, title: 'Curadoria premium', text: 'Componentes escolhidos por uso real, acabamento e longevidade.' },
  { icon: Timer, title: 'Oficina precisa', text: 'Processos de torque, alinhamento e controle de ruído em cada entrega.' },
  { icon: Leaf, title: 'Natureza e performance', text: 'Setup para alternar asfalto, terra e trilha com fluidez.' }
];

export default function Home() {
  return (
    <>
      <SEO title="Bicicletaria premium" description="VeloLab: bicicletas premium, manutenção técnica e configurador visual para ciclistas urbanos, gravel, mountain bike e performance." />
      <Hero />
      <section className="section">
        <div className="container">
          <div className="section-header"><span className="eyebrow">Precisão sem excesso</span><h2>Uma experiência de marca, oficina e produto.</h2></div>
          <div className="grid feature-grid">
            {pillars.map((item, index) => <motion.article className="card feature-card" key={item.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * .09 }}><item.icon size={30}/><h3>{item.title}</h3><p>{item.text}</p></motion.article>)}
          </div>
        </div>
      </section>
      <ScrollBikeDetails />
      <BikeConfigurator />
      <section className="section cta-band"><div className="container cta-band__inner"><h2>Pronto para ajustar sua próxima experiência?</h2><Link className="btn btn-primary" to="/contato">Falar com especialista <ArrowRight size={18}/></Link></div></section>
      <FAQ />
    </>
  );
}
