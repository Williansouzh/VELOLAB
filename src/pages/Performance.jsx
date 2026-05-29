import { motion } from 'framer-motion';
import SEO from '../components/SEO/SEO';

const metrics = [
  ['Asfalto', 92, 'Pneu liso, pressão estável e geometria agressiva.'],
  ['Gravel', 84, 'Volume maior, aderência e cockpit confortável.'],
  ['Trilha', 76, 'Tração, suspensão responsiva e controle em baixa velocidade.'],
  ['Urbano', 88, 'Frenagem previsível, iluminação e posição mais elevada.']
];
const topics = ['Escolha pneus pelo terreno dominante, não apenas pela estética.', 'Geometria define conforto, distribuição de peso e eficiência.', 'Manutenção preventiva preserva transmissão e reduz custos.', 'Performance real combina ajuste, confiança e consistência.'];

export default function Performance() {
  return (
    <>
      <SEO title="Experiência e performance" description="Guia VeloLab sobre terrenos, pneus, geometria, manutenção preventiva, conforto e performance para ciclistas exigentes." />
      <section className="page-hero"><div className="container"><span className="eyebrow">Performance</span><h1>Técnica para pedalar melhor.</h1><p className="lead">Conteúdo visual sobre terreno, pneus, geometria e manutenção preventiva com cards animados e barras de progresso.</p></div></section>
      <section className="section"><div className="container performance-grid"><div><span className="eyebrow">Terrenos</span><h2>O setup muda a sensação.</h2><p className="lead">A mesma bike pode parecer rápida, estável ou cansativa conforme pneus, postura e manutenção.</p></div><div className="metric-list">{metrics.map(([name, value, text]) => <article className="metric" key={name}><div><strong>{name}</strong><span>{value}%</span></div><div className="bar"><motion.i initial={{ width: 0 }} whileInView={{ width: `${value}%` }} viewport={{ once: true }} transition={{ duration: .8 }} /></div><p>{text}</p></article>)}</div></div></section>
      <section className="section insight-section"><div className="container insight-grid">{topics.map((topic, index) => <motion.article className="card insight-card" key={topic} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * .08 }}><span>0{index + 1}</span><p>{topic}</p></motion.article>)}</div></section>
    </>
  );
}
