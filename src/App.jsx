import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import Bikes from './pages/Bikes';
import Services from './pages/Services';
import Performance from './pages/Performance';
import Contact from './pages/Contact';

export default function App() {
  const location = useLocation();
  return (
    <div className="app-shell">
      <a className="skip-link" href="#conteudo">Pular para conteúdo</a>
      <Navbar />
      <main id="conteudo">
        <AnimatePresence mode="wait">
          <motion.div key={location.pathname} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: .28 }}>
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/bicicletas" element={<Bikes />} />
              <Route path="/oficina" element={<Services />} />
              <Route path="/performance" element={<Performance />} />
              <Route path="/contato" element={<Contact />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}
