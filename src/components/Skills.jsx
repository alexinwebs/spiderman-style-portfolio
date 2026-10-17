import SwingCharacter from './SwingCharacter';
import { useState } from 'react';
import { skills, familiar } from '../data/site';
import { Web } from './Shared';

// These badges describe where tools are used, not invented proficiency ratings.
const rows = [
  ['React / Next.js', 'Frontend', 'CORE STACK'],
  ['JavaScript / TypeScript', 'Languages', 'CORE STACK'],
  ['Node.js / Fastify', 'Backend', 'CORE STACK'],
  ['PostgreSQL / Prisma', 'Database', 'CORE STACK'],
  ['Docker / Redis', 'Infrastructure', 'PROJECT USE'],
  ['React Native / Expo', 'Mobile', 'PROJECT USE'],
  ['Vitest / Playwright', 'Testing', 'PROJECT USE'],
  ['OAuth 2.0 / RBAC', 'Security', 'PROJECT USE'],
  ['Git / GitHub Actions', 'Tools', 'PROJECT USE'],
  ['Tailwind / CSS', 'Frontend', 'PROJECT USE'],
];
export default function Skills({ motionPaused }) {
  const [active,setActive]=useState(null);
  return <section id="toolkit" className="toolkit section-space" aria-labelledby="toolkit-title">
    <Web className="skills-backdrop" />
    <div className="section-shell skills-shell">
      <header className="reference-heading skills-heading">
        <p className="eyebrow">MY AI-ASSISTED DEVELOPMENT TOOLKIT</p>
        <h2 id="toolkit-title" className="reveal-heading">TECHNICAL SKILLS.</h2>
        <span className="heading-underline" />
        <p className="skills-context">The stack I build with. AI supports the workflow; understanding and review stay with me.</p>
      </header>
      <div className="skills-scene">
        <div className="skill-list" aria-label="Technical skills">
          {rows.map(([name,category,badge],i)=><button type="button" key={name}
            className={`skill-row ${active===i?'is-selected':''}`}
            aria-pressed={active===i} aria-label={`${name}. ${category}. ${badge.toLowerCase()}. Highlight skill.`}
            onClick={()=>setActive(active===i?null:i)}
            onPointerEnter={e=>{
              const r=e.currentTarget.getBoundingClientRect();
              e.currentTarget.style.setProperty('--fill-origin',e.clientY-r.top<r.height/2?'top':'bottom');
            }}>
              <span className="skill-dot" aria-hidden="true" />
              <span className="skill-copy"><span className="skill-name">{name}</span><span className="skill-category">{category}</span></span>
              <span className="skill-badge">{badge}</span>
          </button>)}
        </div>
        <div className="skills-hanger"><span className="skills-thread" aria-hidden="true"/><div className="skills-swing"><SwingCharacter paused={motionPaused}/></div></div>
      </div>
      <details className="full-toolkit"><summary>VIEW THE FULL TOOLKIT <span>+</span></summary><div className="full-toolkit-grid">
        {skills.map(group=><div key={group.title}><h3>{group.title}</h3><p>{group.items.join(' · ')}</p></div>)}
        <div><h3>Also familiar with</h3><p>{familiar.join(' · ')}</p></div>
      </div></details>
    </div>
  </section>;
}
