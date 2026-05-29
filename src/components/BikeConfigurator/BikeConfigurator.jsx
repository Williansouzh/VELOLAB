import { useState } from 'react';
import './BikeConfigurator.css';

const colors = [
  { name: 'Asfalto', value: '#111111' },
  { name: 'Musgo', value: '#4F6F52' },
  { name: 'Terra', value: '#8A6A43' },
  { name: 'Burnt', value: '#C76F32' }
];
const tires = ['Urbano', 'Gravel', 'Trilha'];
const bars = ['Reto', 'Drop', 'Adventure'];
const finishes = ['Clássico', 'Esportivo', 'Adventure'];

export default function BikeConfigurator() {
  const [color, setColor] = useState(colors[1].value);
  const [tire, setTire] = useState(tires[1]);
  const [bar, setBar] = useState(bars[1]);
  const [finish, setFinish] = useState(finishes[2]);
  const tireWidth = tire === 'Trilha' ? 22 : tire === 'Gravel' ? 17 : 12;
  const barPath = bar === 'Drop' ? 'M780 160c35 0 55 20 55 55 0 26-14 45-34 54' : bar === 'Adventure' ? 'M760 168c48-32 95-28 138 6' : 'M752 164h130';

  return (
    <section className="section configurator" aria-labelledby="config-title">
      <div className="container configurator__grid">
        <div className="section-header"><span className="eyebrow">Monte sua bike</span><h2 id="config-title">Configurador visual leve e interativo.</h2><p className="lead">Ajuste cor, pneu, guidão e acabamento para visualizar uma direção estética antes da curadoria final.</p></div>
        <div className="configurator__panel card">
          <div className="configurator__canvas" aria-label="Mockup interativo de bicicleta personalizada">
            <svg viewBox="0 0 1000 520" role="img" aria-label={`Bicicleta ${finish} com pneu ${tire} e guidão ${bar}`}>
              <defs><filter id="softShadow"><feDropShadow dx="0" dy="28" stdDeviation="20" floodColor="#111" floodOpacity=".2"/></filter></defs>
              <g className="bike-mock" filter="url(#softShadow)" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="260" cy="355" r="108" stroke="#111" strokeWidth={tireWidth}/><circle cx="742" cy="355" r="108" stroke="#111" strokeWidth={tireWidth}/>
                <path d="M260 355 405 190h175L458 355H260l112-196m86 196 126-165 158 165M580 190l70-84h92" stroke={color} strokeWidth="24"/>
                <path d={barPath} stroke="#111" strokeWidth="18"/>
                <path d="M372 159h-94" stroke="#111" strokeWidth="17"/>
                <circle cx="458" cy="355" r="21" stroke="#111" strokeWidth="11" fill="#F5F2EA"/><path d="M458 355h-68" stroke="#C76F32" strokeWidth="10"/>
                {finish === 'Adventure' && <path d="M650 105h78m-450 74h100" stroke="#D8C3A5" strokeWidth="10"/>}
                {finish === 'Esportivo' && <path d="M432 188l78 167" stroke="#C76F32" strokeWidth="8"/>}
              </g>
            </svg>
          </div>
          <div className="configurator__controls">
            <label>Cor do quadro</label><div className="swatches">{colors.map((c) => <button key={c.value} type="button" className={color === c.value ? 'active' : ''} style={{ background: c.value }} onClick={() => setColor(c.value)} aria-label={`Selecionar cor ${c.name}`} />)}</div>
            <Option label="Tipo de pneu" options={tires} value={tire} onChange={setTire}/><Option label="Guidão" options={bars} value={bar} onChange={setBar}/><Option label="Acabamento" options={finishes} value={finish} onChange={setFinish}/>
            <p className="configurator__summary">Configuração: {tire} · {bar} · {finish}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
function Option({ label, options, value, onChange }) { return <div className="option"><label>{label}</label><div>{options.map((op) => <button type="button" key={op} className={value === op ? 'active' : ''} onClick={() => onChange(op)}>{op}</button>)}</div></div>; }
