import { useEffect, useLayoutEffect, useRef, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { Arrow, ExternalLink } from './Shared';
export default function ProjectModal({ project, origin, paused, onClose }) {
  const dialog=useRef(null),backdrop=useRef(null),animations=useRef([]),closing=useRef(false),exit=useRef(null);
  const still=()=>paused||matchMedia('(prefers-reduced-motion: reduce)').matches;
  const originTransform=()=>{const r=dialog.current.getBoundingClientRect();if(!origin)return 'translateY(20px) scale(.96)';return `translate(${origin.x+origin.width/2-r.x-r.width/2}px,${origin.y+origin.height/2-r.y-r.height/2}px) scale(${Math.max(.25,Math.min(1,origin.width/r.width))},${Math.max(.2,Math.min(1,origin.height/r.height))})`;};
  const close=useCallback(()=>{
    if(closing.current)return;closing.current=true;
    animations.current.forEach(a=>a.cancel());
    if(paused||matchMedia('(prefers-reduced-motion: reduce)').matches){onClose();return;}
    const a=dialog.current.animate([{transform:'none',opacity:1},{transform:exit.current||'translateY(15px) scale(.98)',opacity:0}],{duration:230,easing:'cubic-bezier(.4,0,1,1)',fill:'forwards'});
    animations.current.push(a);a.finished.then(onClose).catch(()=>{});
  },[paused,onClose]);
  useLayoutEffect(()=>{
    exit.current=originTransform();
    if(still())return;
    const a=dialog.current.animate([{transform:exit.current,opacity:.25},{transform:'none',opacity:1}],{duration:480,easing:'cubic-bezier(.16,1,.3,1)'});
    const fade=backdrop.current.animate([{opacity:0},{opacity:1}],{duration:280});
    const pieces=dialog.current.querySelectorAll('.modal-status,.project-modal h2,.modal-description,.project-tech,.case-summary,.project-modal h3,.modal-highlights li,.modal-principle,.modal-links');
    const reveals=[...pieces].map((el,i)=>el.animate([{opacity:0,transform:'translateY(13px)'},{opacity:1,transform:'none'}],{duration:370,delay:140+i*45,fill:'backwards',easing:'ease-out'}));
    animations.current=[a,fade,...reveals];return()=>animations.current.forEach(a=>a.cancel());
  },[]);
  useEffect(()=>{
    const media=matchMedia('(prefers-reduced-motion: reduce)');const stop=()=>{animations.current.forEach(a=>a.cancel());if(closing.current)onClose();};
    media.addEventListener('change',stop);if(paused)stop();return()=>media.removeEventListener('change',stop);
  },[paused,onClose]);
  useEffect(()=>{
    const previous=document.activeElement,old=document.body.style.overflow;
    const app=document.getElementById('top'),wasInert=app?.inert;
    document.body.style.overflow='hidden';if(app)app.inert=true;dialog.current.querySelector('button')?.focus({preventScroll:true});
    const key=e=>{if(e.key==='Escape'){e.preventDefault();close();}if(e.key==='Tab'){const list=dialog.current.querySelectorAll('button,a[href]');const first=list[0],last=list[list.length-1];if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus();}if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus();}}};
    document.addEventListener('keydown',key);return()=>{document.body.style.overflow=old;if(app)app.inert=wasInert;document.removeEventListener('keydown',key);previous?.focus({preventScroll:true});};
  },[close]);
  return createPortal(<div ref={backdrop} className="modal-backdrop" data-motion={paused?'paused':'on'} onClick={e=>{if(e.target===e.currentTarget)close();}}>
    <div ref={dialog} className="project-modal" role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <div className="modal-top"><span>THE BUILD / {project.category||'PROJECT'}</span><button className="modal-close" onClick={close} aria-label="Close project details">Close <span>×</span></button></div>
      <p className="project-status modal-status">{project.status}</p><h2 id="modal-title">{project.title}</h2><p className="modal-description">{project.description}</p>
      <ul className="project-tech" aria-label="Technologies">{project.technologies?.map(t=><li key={t}>{t}</li>)}</ul>
      <div className="case-summary"><div><span>ENGINEERING FOCUS</span><p>{project.engineeringFocus}</p></div><div><span>DELIVERY BOUNDARY</span><p>{project.boundary}</p></div></div>
      <h3>UNDER THE HOOD</h3><ul className="modal-highlights">{project.highlights?.map((h,i)=><li key={h}><span>{String(i+1).padStart(2,'0')}</span><p>{h}</p></li>)}</ul>
      <aside className="modal-principle"><strong>MY WORKING PRINCIPLE</strong><p>AI-assisted. Human-led. Use AI to explore and accelerate; keep architecture decisions, debugging, review, and delivery accountable to the developer.</p></aside>
      <div className="modal-links">{project.githubUrl&&<ExternalLink href={project.githubUrl} className="button button-black">Source code <Arrow diagonal/></ExternalLink>}{project.liveUrl&&<ExternalLink href={project.liveUrl} className="button button-red">Live site <Arrow diagonal/></ExternalLink>}</div>
    </div>
  </div>,document.body);
}
