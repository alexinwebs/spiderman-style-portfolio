import { useCallback, useEffect, useRef, useState } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { projects } from '../data/projects';
import { Web, SectionLabel, Arrow, ExternalLink } from './Shared';
import ProjectModal from './ProjectModal';
function ProjectCard({ project, index, onOpen }) {
  return (
    <article
      className="project-card"
      aria-labelledby={`title-${project.id}`}
    >
      {project.image && (
        <img
          className="project-screenshot"
          src={project.image}
          alt={project.imageAlt || `${project.title} screenshot`}
          loading="lazy"
        />
      )}
      <div className="project-meta">
        <span>
          0{index + 1} / {project.category || 'PROJECT'}
        </span>
        <span className="project-status">{project.status}</span>
      </div>
      <h3 id={`title-${project.id}`}>
        {project.title}
        <span aria-hidden="true">↗</span>
      </h3>
      <p className="project-description">{project.description}</p>
      {project.technologies?.length > 0 && (
        <ul className="project-tech" aria-label="Technologies">
          {project.technologies.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      )}
      <div className="project-links">
        {project.githubUrl && (
          <ExternalLink href={project.githubUrl} className="text-link">
            Code <Arrow diagonal />
          </ExternalLink>
        )}
        {project.liveUrl && (
          <ExternalLink href={project.liveUrl} className="text-link">
            Live site <Arrow diagonal />
          </ExternalLink>
        )}
        {project.highlights?.length > 0 && (
          <button
            onClick={() => onOpen(project, document.getElementById(`title-${project.id}`).closest('.project-card').getBoundingClientRect())}
            className="detail-toggle"
            aria-label={`Read ${project.title} case notes`}
          >
            Case notes <span>+</span>
          </button>
        )}
      </div>
    </article>
  );
}
export default function Projects({ motionPaused }) {
  const [filter, setFilter] = useState('All');
  const [selected, setSelected] = useState(null);
  const grid = useRef(null);
  const groups = ['All', ...new Set(projects.map((p) => p.group || 'Other'))];
  const visible =
    filter === 'All'
      ? projects
      : projects.filter((p) => (p.group || 'Other') === filter);
  const close = useCallback(() => setSelected(null), []);
  useEffect(() => {
    ScrollTrigger.refresh();
  }, [filter]);
  return (
    <section
      id="work"
      className="work section-space"
      aria-labelledby="work-title"
    >
      <div className="section-shell">
        <header className="reference-heading"><p className="eyebrow">FEATURED WORK</p><h2 id="work-title" className="reveal-heading">PROJECTS.</h2><span className="heading-underline" /></header>
        <Web className="projects-web" />
        <p className="project-approach">AI-assisted development. Real engineering decisions. Explore the implementation, safeguards, and limitations behind each build.</p>
        <img className="projects-character" src="images/characters/standing.webp" alt="" aria-hidden="true" width="429" height="850" loading="lazy" />
        <div className="project-filters" aria-label="Filter projects">
          {groups.map((g) => (
            <button
              key={g}
              aria-pressed={filter === g}
              onClick={() => setFilter(g)}
            >
              {g}
              <span>
                {g === 'All'
                  ? projects.length
                  : projects.filter((p) => (p.group || 'Other') === g).length}
              </span>
            </button>
          ))}
        </div>
        <p className="sr-only" aria-live="polite">
          {visible.length} projects shown.
        </p>
        <div className="project-grid reveal" ref={grid}>
          {visible.map((p) => (
            <ProjectCard
              key={p.id}
              project={p}
              index={projects.indexOf(p)}
              onOpen={(project,origin)=>setSelected({project,origin})}
            />
          ))}
          {!visible.length && (
            <p className="empty-state">
              New missions are taking shape. Check back soon.
            </p>
          )}
        </div>
      </div>
      {selected && <ProjectModal project={selected.project} origin={selected.origin} paused={motionPaused} onClose={close} />}
    </section>
  );
}
