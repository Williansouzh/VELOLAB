import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import SEO from '../components/SEO/SEO';
import BikeCard from '../components/BikeCard/BikeCard';
import { bikes, categories } from '../data/bikes';

export default function Bikes() {
  const [category, setCategory] = useState('Todas');
  const filtered = category === 'Todas' ? bikes : bikes.filter((bike) => bike.category === category);
  return (
    <>
      <SEO title="Bicicletas" description="Catálogo premium VeloLab com bicicletas urbanas, mountain bike, gravel, speed e elétricas." />
      <section className="page-hero"><div className="container"><span className="eyebrow">Catálogo</span><h1>Bikes para cada terreno.</h1><p className="lead">Modelos mockados com visual premium, especificações claras e filtro interativo por categoria.</p></div></section>
      <section className="section"><div className="container"><div className="filter-bar" role="list" aria-label="Filtro de bicicletas">{categories.map((cat) => <button type="button" className={cat === category ? 'active' : ''} onClick={() => setCategory(cat)} key={cat}>{cat}</button>)}</div><div className="catalog-grid"><AnimatePresence>{filtered.map((bike) => <BikeCard key={bike.id} bike={bike}/>)}</AnimatePresence></div></div></section>
    </>
  );
}
