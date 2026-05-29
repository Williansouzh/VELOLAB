import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { faqs } from '../../data/faq';
import './FAQ.css';

export default function FAQ() {
  const [active, setActive] = useState(0);
  return (
    <section className="section faq-section">
      <div className="container">
        <div className="section-header"><span className="eyebrow">FAQ</span><h2>Perguntas frequentes.</h2></div>
        <div className="faq-list">
          {faqs.map((faq, index) => {
            const open = active === index;
            return <article className="faq-item" key={faq.question}><button type="button" onClick={() => setActive(open ? -1 : index)} aria-expanded={open}><span>{faq.question}</span><ChevronDown className={open ? 'is-open' : ''}/></button>{open && <p>{faq.answer}</p>}</article>;
          })}
        </div>
      </div>
    </section>
  );
}
