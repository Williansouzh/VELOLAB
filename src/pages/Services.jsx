import { motion } from 'framer-motion';
import SEO from '../components/SEO/SEO';
import FAQ from '../components/FAQ/FAQ';
import { services } from '../data/services';

export default function Services() {
  return (
    <>
      <SEO title="Oficina e serviços" description="Oficina VeloLab com revisão completa, regulagem de freios, montagem premium, limpeza técnica e bike fit básico." />
      <section className="page-hero"><div className="container"><span className="eyebrow">Oficina</span><h1>Silêncio, precisão e confiança.</h1><p className="lead">Serviços técnicos para bicicletas premium, com checklist, acabamento limpo e comunicação transparente.</p></div></section>
      <section className="section"><div className="container service-grid">{services.map((service, index) => <motion.article className="card service-card" key={service.title} initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * .07 }}><service.icon size={34}/><h3>{service.title}</h3><p>{service.description}</p></motion.article>)}</div></section>
      <FAQ />
    </>
  );
}
