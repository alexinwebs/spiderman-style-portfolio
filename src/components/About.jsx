import Workflow from './Workflow';
import { profile, education, experience, certifications } from '../data/site';
import { Web } from './Shared';
export default function About() {
  return <section id="about" className="about section-space" aria-labelledby="about-title">
    <Web className="about-web web-drift" />
    <div className="section-shell about-grid">
      <div className="about-copy">
        <p className="eyebrow">BEHIND THE MASK · AI-ASSISTED DEVELOPER</p>
        <h2 id="about-title" className="reveal-heading">ABBAS ANSARI.</h2>
        {profile.about.map(p=><p className="reveal-paragraph" key={p}>{p}</p>)}
        <p className="stack-caption">PRIMARY TECH STACK</p>
        <div className="focus-pills">{profile.focus.map(t=><span className="tech-pill" key={t}><span className="pill-float">{t}</span></span>)}</div>
        <details className="background-details"><summary>Education, training & certifications <span>+</span></summary>
          {[...education,...experience].map((item,i)=><div key={i}><strong>{item.title}</strong><p>{item.organization} · {item.period}</p>{item.description && <p>{item.description}</p>}</div>)}
          {certifications.map((item,i)=><div key={i}><strong>{item.title}</strong><p>{item.issuer || item.organization} {item.year}</p></div>)}
        </details>
      </div>
      <div className="about-portrait-area"><div className="hanging-object"><div className="hanging-thread" aria-hidden="true" /><div className="portrait-frame"><img src={profile.portrait} alt="Abbas Ansari" width="688" height="860" loading="lazy" /></div></div></div>
    </div>
    <Workflow />
  </section>;
}
