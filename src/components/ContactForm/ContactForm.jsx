import { useState } from 'react';
import { Send } from 'lucide-react';
import './ContactForm.css';

const initial = { name: '', email: '', phone: '', interest: '', message: '' };

function validate(values) {
  const errors = {};
  if (!values.name.trim()) errors.name = 'Informe seu nome.';
  if (!/^\S+@\S+\.\S+$/.test(values.email)) errors.email = 'Use um e-mail válido.';
  if (!/^\(?\d{2}\)?\s?9?\d{4}-?\d{4}$/.test(values.phone.replace(/\s/g, ''))) errors.phone = 'Informe um telefone brasileiro válido.';
  if (!values.interest) errors.interest = 'Selecione um interesse.';
  if (values.message.trim().length < 12) errors.message = 'Escreva uma mensagem com pelo menos 12 caracteres.';
  return errors;
}

export default function ContactForm() {
  const [values, setValues] = useState(initial);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const update = (event) => {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: undefined }));
  };

  const submit = (event) => {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    setSuccess(false);
    if (Object.keys(nextErrors).length) return;
    setLoading(true);
    window.setTimeout(() => {
      setLoading(false); setSuccess(true); setValues(initial);
    }, 900);
  };

  return (
    <form className="contact-form card" onSubmit={submit} noValidate>
      <div className="field"><label htmlFor="name">Nome</label><input id="name" name="name" value={values.name} onChange={update} aria-invalid={Boolean(errors.name)} />{errors.name && <small>{errors.name}</small>}</div>
      <div className="field"><label htmlFor="email">E-mail</label><input id="email" name="email" type="email" value={values.email} onChange={update} aria-invalid={Boolean(errors.email)} />{errors.email && <small>{errors.email}</small>}</div>
      <div className="field"><label htmlFor="phone">Telefone</label><input id="phone" name="phone" placeholder="(11) 98888-0000" value={values.phone} onChange={update} aria-invalid={Boolean(errors.phone)} />{errors.phone && <small>{errors.phone}</small>}</div>
      <div className="field"><label htmlFor="interest">Tipo de interesse</label><select id="interest" name="interest" value={values.interest} onChange={update} aria-invalid={Boolean(errors.interest)}><option value="">Selecione</option><option>Comprar bicicleta</option><option>Agendar revisão</option><option>Bike fit</option><option>Montagem personalizada</option></select>{errors.interest && <small>{errors.interest}</small>}</div>
      <div className="field field--full"><label htmlFor="message">Mensagem</label><textarea id="message" name="message" rows="5" value={values.message} onChange={update} aria-invalid={Boolean(errors.message)} />{errors.message && <small>{errors.message}</small>}</div>
      <button className="btn btn-primary" type="submit" disabled={loading}>{loading ? 'Enviando...' : 'Enviar mensagem'} <Send size={17}/></button>
      {success && <p className="success" role="status">Mensagem enviada com sucesso. Retornaremos em breve.</p>}
    </form>
  );
}
