import { useRef, useState } from 'react';
import { sections } from './data/site';
import Header from './components/Header';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Projects from './components/Projects';
import About from './components/About';
import Skills from './components/Skills';
import Journey from './components/Journey';
import Contact from './components/Contact';
import Footer from './components/Footer';
import PortfolioCredits from './components/PortfolioCredits';
import usePortfolioMotion from './hooks/usePortfolioMotion';

const sectionComponents = {
  work: Projects,
  about: About,
  toolkit: Skills,
  journey: Journey,
  contact: Contact,
};
export default function App() {
  const root = useRef(null);
  const [motionPaused, setMotionPaused] = useState(() => {
    try {
      return localStorage.getItem('portfolio-motion-paused') === 'true';
    } catch {
      return false;
    }
  });
  const toggleMotion = () =>
    setMotionPaused((value) => {
      try {
        localStorage.setItem('portfolio-motion-paused', String(!value));
      } catch {}
      return !value;
    });
  usePortfolioMotion(root, motionPaused);
  return (
    <div ref={root} id="top" data-motion={motionPaused ? 'paused' : 'on'}>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <Marquee paused={motionPaused} onToggle={toggleMotion} />
        {sections
          .filter((s) => s.enabled)
          .map((s) => {
            const Component = sectionComponents[s.id];
            return Component ? <Component key={s.id} motionPaused={motionPaused} /> : null;
          })}
        <PortfolioCredits />
      </main>
      <Footer />
    </div>
  );
}
