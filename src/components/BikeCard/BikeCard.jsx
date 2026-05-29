import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import './BikeCard.css';

export default function BikeCard({ bike }) {
  return (
    <motion.article className="bike-card" layout initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 18 }}>
      <div className="bike-card__image" style={{ '--accent': bike.accent }}><img src={bike.image} alt={`Bicicleta ${bike.name}`} /></div>
      <div className="bike-card__body">
        <span>{bike.category}</span><h3>{bike.name}</h3>
        <dl><div><dt>Peso</dt><dd>{bike.weight}</dd></div><div><dt>Terreno</dt><dd>{bike.terrain}</dd></div></dl>
        <div className="bike-card__footer"><strong>{bike.price}</strong><button type="button" aria-label={`Ver detalhes da ${bike.name}`}>Ver detalhes <ArrowUpRight size={17}/></button></div>
      </div>
    </motion.article>
  );
}
