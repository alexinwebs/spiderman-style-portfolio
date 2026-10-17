import { useEffect, useRef, useState } from 'react';
const steps = [
  ['Define', 'Break the idea into clear requirements and a practical plan.', 'Start with the problem, the constraints, and what a successful result should do.'],
  ['Build with AI', 'Use AI assistance to draft, explore, and iterate on the implementation.', 'Use AI to explore options and accelerate implementation—not to outsource the decisions.'],
  ['Debug & integrate', 'Connect the pieces, investigate failures, and refine the code.', 'Follow the data through the application. Understand failures before accepting a proposed fix.'],
  ['Review & ship', 'Check behavior, test the flows, and take ownership of the delivery.', 'Review the changes, test important flows, and be clear about what is ready and what is still a prototype.'],
];
export default function Workflow() {
  const [active,setActive]=useState(0);const scene=useRef(null);
  useEffect(()=>{
    let frame=0;
    const update=()=>{if(frame)return;frame=requestAnimationFrame(()=>{frame=0;const r=scene.current?.getBoundingClientRect();if(!r)return;const progress=(innerHeight*.82-r.top)/(r.height+innerHeight*.3);if(r.bottom>0&&r.top<innerHeight)setActive(Math.max(0,Math.min(3,Math.floor(progress*4))));});};
    addEventListener('scroll',update,{passive:true});update();return()=>{removeEventListener('scroll',update);cancelAnimationFrame(frame);};
  },[]);
  return <div className="section-shell workflow-shell"><section ref={scene} className="ai-workflow" aria-labelledby="workflow-title" style={{'--workflow-progress':`${(active+1)*25}%`}}>
    <header className="workflow-heading"><div><p className="eyebrow">HOW I BUILD</p><h3 id="workflow-title">AI-ASSISTED. <span>HUMAN-LED.</span></h3></div><p>AI helps me build. I own the decisions and the result.</p></header>
    <div className="workflow-track" aria-hidden="true"><span /></div>
    <ol className="workflow-steps">{steps.map(([title,copy],i)=><li key={title} className={active===i?'is-current':''}>
      <button type="button" className="workflow-step" aria-pressed={active===i} aria-controls="workflow-detail" onClick={()=>setActive(i)}><span className="workflow-number">0{i+1}</span><h4>{title}</h4><p>{copy}</p><span className="workflow-cue" aria-hidden="true">{active===i?'IN FOCUS':'EXPLORE'} ↗</span></button>
    </li>)}</ol>
    <div id="workflow-detail" className="workflow-detail" aria-live="polite" aria-atomic="true"><span aria-hidden="true">0{active+1} /</span><p key={active}>{steps[active][2]}</p></div>
    <p className="workflow-help">Scroll to follow the process, or select a step.</p>
  </section></div>;
}
