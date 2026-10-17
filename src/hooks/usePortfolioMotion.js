import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
export default function usePortfolioMotion(root, paused) {
  useEffect(() => {
    if (paused) return;
    const media=gsap.matchMedia();
    const ctx=gsap.context(()=>{
      media.add({reduce:'(prefers-reduced-motion: reduce)',desktop:'(min-width: 900px)',fine:'(hover: hover) and (pointer: fine)'},context=>{
        if(context.conditions.reduce)return;
        const desktop=context.conditions.desktop;
        const entrance=gsap.timeline({defaults:{ease:'power3.out'}});
        entrance.from('.hero-eyebrow',{y:12,opacity:0,duration:.55})
          .from('.hero-line>span',{yPercent:105,rotation:2,duration:.85,stagger:.1},.12)
          .from('.hero-role,.hero-positioning',{y:15,opacity:0,stagger:.1,duration:.7},.4)
          .from('.hero-actions,.hero-byline',{y:18,opacity:0,stagger:.09,duration:.65},.45);
        gsap.utils.toArray('.ribbon-track').forEach((track,i)=>gsap.to(track,{
          xPercent:i?50:-50,startAt:{xPercent:i?-50:0},duration:i?32:25,repeat:-1,ease:'none'}));

        // Web threads draw in once, then respond to scroll rather than obscuring copy.
        gsap.utils.toArray('.web').forEach(web=>{
          const paths=web.querySelectorAll('path');
          paths.forEach(path=>{const length=path.getTotalLength();gsap.set(path,{strokeDasharray:length,strokeDashoffset:length});});
          gsap.to(paths,{strokeDashoffset:0,duration:1.6,stagger:.025,ease:'power2.out',scrollTrigger:{trigger:web.closest('section'),start:'top 88%',once:true}});
        });
        gsap.utils.toArray('.heading-underline').forEach(line=>gsap.from(line,{scaleX:0,transformOrigin:'center',duration:.8,ease:'power3.inOut',scrollTrigger:{trigger:line.closest('section'),start:'top 78%',once:true}}));
        gsap.from('.workflow-heading',{y:24,opacity:0,duration:.8,scrollTrigger:{trigger:'.ai-workflow',start:'top 85%',once:true}});
        gsap.from('.workflow-steps li',{y:32,opacity:0,duration:.7,stagger:.15,clearProps:'transform,opacity',scrollTrigger:{trigger:'.workflow-steps',start:'top 92%',once:true}});
        // Workflow progress follows its active, keyboard-selectable step.
        gsap.to('.about-web',{y:-40,rotation:-7,ease:'none',scrollTrigger:{trigger:'.about',start:'top bottom',end:'bottom top',scrub:1.2}});
        gsap.to('.contact-web',{rotation:12,y:-25,ease:'none',scrollTrigger:{trigger:'.contact',start:'top bottom',end:'bottom top',scrub:1.3}});

        // Each section has its own entrance and interaction language.
        // About: line-led copy and a portrait dropping from its thread.
        gsap.from('.about .eyebrow,.about h2',{y:20,opacity:0,stagger:.12,duration:.7,scrollTrigger:{trigger:'.about-copy',start:'top 84%',once:true}});
        gsap.from('.about .reveal-paragraph',{y:18,opacity:0,filter:'blur(2px)',duration:.8,stagger:.18,scrollTrigger:{trigger:'.about-copy',start:'top 78%',once:true}});
        gsap.from('.focus-pills .tech-pill',{y:12,opacity:0,stagger:.07,duration:.5,ease:'back.out(1.15)',scrollTrigger:{trigger:'.focus-pills',start:'top 90%',once:true}});
        gsap.from('.about-portrait-area',{y:-95,opacity:0,duration:1.25,ease:'elastic.out(1,.9)',scrollTrigger:{trigger:'.about',start:'top 73%',once:true}});
        gsap.fromTo('.hanging-object',{rotation:-2.2},{rotation:2.2,duration:3.8,yoyo:true,repeat:-1,ease:'sine.inOut',transformOrigin:'50% 0'});

        // Skills: two alternating columns, stepped row entrance, a suspended figure.
        gsap.from('.skills-heading',{y:22,opacity:0,filter:'blur(3px)',duration:.8,scrollTrigger:{trigger:'.toolkit',start:'top 80%',once:true}});
        gsap.utils.toArray('.skill-row').forEach((row,i)=>gsap.from(row,{
          x:desktop?(i%2?20:-20):0,y:desktop?9:16,opacity:0,duration:.6,delay:Math.floor(i/2)*.065,
          ease:'power2.out',clearProps:'transform,opacity',scrollTrigger:{trigger:'.skill-list',start:'top 89%',once:true}}));
        gsap.from('.skills-hanger',{y:-100,opacity:0,duration:1.05,ease:'power3.out',scrollTrigger:{trigger:'.toolkit',start:'top 74%',once:true}});
        // Hanging figures now swing in response to visitors, then settle.
        gsap.to('.skills-backdrop',{rotation:5,y:desktop?-25:0,ease:'none',scrollTrigger:{trigger:'.toolkit',start:'top bottom',end:'bottom top',scrub:1}});

        // Work: individual cards settle in flat; hovering highlights the red edge.
        gsap.from('.work .reference-heading',{y:20,opacity:0,duration:.75,scrollTrigger:{trigger:'.work',start:'top 80%',once:true}});
        gsap.from('.project-card',{y:28,opacity:0,duration:.7,stagger:.11,clearProps:'transform,opacity',scrollTrigger:{trigger:'.project-grid',start:'top 88%',once:true}});
        gsap.from('.projects-character',{x:-30,opacity:0,duration:.85,ease:'power3.out',scrollTrigger:{trigger:'.project-grid',start:'top 77%',once:true}});
        gsap.to('.projects-character',{y:-7,duration:2.8,yoyo:true,repeat:-1,ease:'sine.inOut'});

        // Contact: form rises as the upside-down figure descends, then gently sways.
        gsap.from('.contact .reference-heading',{y:18,opacity:0,duration:.75,scrollTrigger:{trigger:'.contact',start:'top 80%',once:true}});
        gsap.from('.contact-form',{y:30,opacity:0,duration:.8,ease:'power3.out',scrollTrigger:{trigger:'.form-scene',start:'top 87%',once:true}});
        gsap.from('.contact-form label',{y:10,opacity:0,duration:.5,stagger:.1,scrollTrigger:{trigger:'.contact-form',start:'top 84%',once:true}});
        gsap.from('.contact-character',{y:-100,opacity:0,duration:1.1,ease:'power3.out',scrollTrigger:{trigger:'.contact',start:'top 73%',once:true}});

        // Low-amplitude magnetism is restricted to precision pointers.
        const cleanups=[];
        if(context.conditions.fine){
          const hero=root.current.querySelector('.hero');
          const webX=gsap.quickTo('.hero-bottom-web','x',{duration:1,ease:'power3.out'});
          const webY=gsap.quickTo('.hero-bottom-web','y',{duration:1,ease:'power3.out'});
          const move=e=>{const r=hero.getBoundingClientRect();const x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;webX(x*-20);webY(y*-14);};
          const reset=()=>{webX(0);webY(0);};
          hero.addEventListener('pointermove',move);hero.addEventListener('pointerleave',reset);
          cleanups.push(()=>{hero.removeEventListener('pointermove',move);hero.removeEventListener('pointerleave',reset);});
        }
        if(context.conditions.fine){
          gsap.utils.toArray('.button').forEach(button=>{
            const xTo=gsap.quickTo(button,'x',{duration:.35,ease:'power3.out'});
            const yTo=gsap.quickTo(button,'y',{duration:.35,ease:'power3.out'});
            const move=e=>{const box=button.getBoundingClientRect();xTo((e.clientX-box.left-box.width/2)*.055);yTo((e.clientY-box.top-box.height/2)*.09);};
            const leave=()=>{xTo(0);yTo(0);};
            button.addEventListener('pointermove',move);button.addEventListener('pointerleave',leave);button.addEventListener('blur',leave);
            cleanups.push(()=>{button.removeEventListener('pointermove',move);button.removeEventListener('pointerleave',leave);button.removeEventListener('blur',leave);});
          });
        }
        return ()=>cleanups.forEach(fn=>fn());
      });
    },root);
    const refresh=()=>ScrollTrigger.refresh();
    const disclosure=()=>requestAnimationFrame(refresh);
    const details=root.current.querySelectorAll('details');
    details.forEach(el=>el.addEventListener('toggle',disclosure));
    addEventListener('load',refresh);
    document.fonts?.ready.then(()=>{if(root.current)refresh();});
    return ()=>{removeEventListener('load',refresh);details.forEach(el=>el.removeEventListener('toggle',disclosure));media.revert();ctx.revert();};
  },[root,paused]);
}
