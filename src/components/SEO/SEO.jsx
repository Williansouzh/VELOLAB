import { Helmet } from 'react-helmet-async';

export default function SEO({ title, description, keywords = 'VeloLab, bicicletaria premium, bicicletas, gravel, mountain bike, bike fit' }) {
  const fullTitle = `${title} | VeloLab`;
  return (
    <Helmet>
      <html lang="pt-BR" />
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="/hero-bike.svg" />
    </Helmet>
  );
}
