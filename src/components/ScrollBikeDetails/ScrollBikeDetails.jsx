import { motion } from 'framer-motion';
import './ScrollBikeDetails.css';

const details = [
  ['Quadro', 'Alumínio leve com soldas polidas e cabeamento interno.'],
  ['Pneus', 'Gravel 42 mm de alta aderência para asfalto e terra.'],
  ['Freios', 'Hidráulicos com modulação progressiva em descidas.'],
  ['Transmissão', 'Relação precisa para cadência estável em subidas longas.'],
  ['Suspensão', 'Resposta curta para conforto sem perder eficiência.'],
  ['Geometria', 'Cockpit equilibrado para cidade, estrada e trilha leve.'],
  ['Peso', 'A partir de 9,6 kg conforme configuração.'],
  ['Uso', 'Cidade, trilha leve, estrada e viagens rápidas.']
];

export default function ScrollBikeDetails() {
  return (
    <section className="section scroll-bike" aria-labelledby="scroll-bike-title">
      <div className="container">
        <div className="section-header"><span className="eyebrow">Anatomia em movimento</span><h2 id="scroll-bike-title">Detalhes técnicos surgem conforme a rolagem.</h2></div>
        <div className="scroll-bike__stage">
          <div className="scroll-bike__sticky"><img src="/hero-bike.svg" alt="Bicicleta VeloLab com pontos técnicos destacados" />{details.slice(0, 4).map((_, i) => <span key={i} className={`pin pin-${i + 1}`} />)}</div>
          <div className="scroll-bike__details">
            {details.map(([title, text], index) => (
              <motion.article className="detail-card" key={title} initial={{ opacity: 0, x: index % 2 ? 60 : -60 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ amount: .72, once: false }} transition={{ duration: .55 }}>
                <span>{String(index + 1).padStart(2, '0')}</span><h3>{title}</h3><p>{text}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
