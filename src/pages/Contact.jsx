import { Clock, Mail, MapPin, Phone } from 'lucide-react';
import SEO from '../components/SEO/SEO';
import ContactForm from '../components/ContactForm/ContactForm';

export default function Contact() {
  return (
    <>
      <SEO title="Contato" description="Entre em contato com a VeloLab para comprar bicicleta, agendar revisão, bike fit ou montagem personalizada." />
      <section className="page-hero"><div className="container"><span className="eyebrow">Contato</span><h1>Agende uma conversa técnica.</h1><p className="lead">Conte o que você pedala, onde pedala e qual sensação quer buscar. A VeloLab ajuda no próximo setup.</p></div></section>
      <section className="section"><div className="container contact-grid"><div className="contact-info card"><h2>Atendimento premium.</h2><p>Use o formulário com validação JavaScript, feedback visual, loading fake e mensagens de erro acessíveis.</p><ul><li><MapPin/> Rua das Serras, 420</li><li><Phone/> (11) 98888-2042</li><li><Mail/> contato@velolab.cc</li><li><Clock/> Terça a sábado, 10h às 19h</li></ul></div><ContactForm /></div></section>
    </>
  );
}
