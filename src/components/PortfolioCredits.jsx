import { profile } from '../data/site';
const repository='https://github.com/alexinwebs/spiderman-style-portfolio';
export default function PortfolioCredits(){
  return <section className="portfolio-credits" aria-labelledby="portfolio-credits-title">
    <div className="section-shell credits-grid">
      <div><p className="eyebrow">ABOUT THIS PORTFOLIO</p><h2 id="portfolio-credits-title">AI-ASSISTED. <span>MADE PERSONAL.</span></h2><p>A personal portfolio for <strong>{profile.name}</strong>, an AI-assisted developer. Created through AI-assisted development with React, Vite, Tailwind CSS, and GSAP, using a Spider-Man portfolio video as the visual reference.</p><p>The site brings together my projects, development workflow, interactive face reveal, and responsive web-themed sections.</p></div>
      <aside className="reuse-note"><h3>REUSING THIS REPOSITORY?</h3><p>Please credit <strong>{profile.name}</strong> and link back to the original repository. Make it your own: replace my name, portrait, résumé, contact details, and project content.</p><a className="credits-repo" href={repository} target="_blank" rel="noopener noreferrer">Original repository <span aria-hidden="true">↗</span></a><p className="credits-rights">Keep the artwork and font notices. Spider-Man imagery belongs to its respective rights holders; this credit request does not grant rights to those assets.</p></aside>
    </div>
  </section>;
}
