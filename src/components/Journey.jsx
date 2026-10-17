import { education, experience, certifications } from '../data/site';
import { SectionLabel } from './Shared';
export default function Journey() {
  return (
    <section
      id="journey"
      className="journey section-space"
      aria-labelledby="journey-title"
    >
      <div className="section-shell">
        <SectionLabel number="04">ALWAYS IN PROGRESS</SectionLabel>
        <div className="journey-grid">
          <div>
            <h2 id="journey-title" className="reveal-heading">
              Building.
              <br />
              Learning.
              <br />
              <span className="accent">Repeating.</span>
            </h2>
            <p className="journey-intro reveal">
              A foundation in computer science.
              <br />A habit of putting it into practice.
            </p>
          </div>
          <div className="journey-records">
            {[
              { label: 'EXPERIENCE', items: experience },
              { label: 'EDUCATION', items: education },
            ].map((group) => (
              <div key={group.label} className="record-group reveal">
                <h3>{group.label}</h3>
                {group.items.map((item) => (
                  <article className="record" key={item.title}>
                    <div className="record-date">
                      {item.period}
                      {item.label && <span>{item.label}</span>}
                    </div>
                    <h4>{item.title}</h4>
                    <p className="organization">{item.organization}</p>
                    <p>{item.description}</p>
                  </article>
                ))}
              </div>
            ))}
            <div className="record-group reveal">
              <h3>CERTIFICATIONS</h3>
              <ul className="certifications">
                {certifications.map((c) => (
                  <li key={c.title}>
                    <span className="cert-check" aria-hidden="true">
                      ↗
                    </span>
                    <div>
                      <strong>{c.title}</strong>
                      <span>
                        {c.issuer} · {c.year}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
