import { useEffect, useRef } from 'react';
import { profile } from '../data/site';
import { Web } from './Shared';
export default function Hero() {
  const stage = useRef(null);
  const api = useRef(null);
  useEffect(() => {
    const el = stage.current;
    const reduced = matchMedia('(prefers-reduced-motion: reduce)');
    let frame = 0, timeout, active = false, x = 0, y = 0, tx = 0, ty = 0, blur = 0, alpha = 0;
    const still = () => reduced.matches || el.closest('[data-motion]')?.dataset.motion === 'paused';
    const tick = () => {
      const dx = tx - x, dy = ty - y;
      x += dx * (still() ? 1 : .24); y += dy * (still() ? 1 : .24);
      const speed = Math.hypot(dx,dy);
      blur += ((active && !still() ? Math.min(4,speed * .065) : 0) - blur) * .22;
      alpha += ((active ? 1 : 0) - alpha) * (still() ? 1 : .28);
      // Never more than 20% of the artwork width across, including tap/focus.
      const radius = Math.min(72, el.clientWidth * .097);
      el.style.setProperty('--spot-x',`${x}px`);
      el.style.setProperty('--spot-y',`${y}px`);
      el.style.setProperty('--spot-radius',`${radius}px`);
      el.style.setProperty('--reveal-opacity',`${alpha}`);
      el.style.setProperty('--motion-blur',`${blur.toFixed(2)}px`);
      frame = speed > .1 || Math.abs(alpha - (active ? 1 : 0)) > .001 || blur > .01 ? requestAnimationFrame(tick) : 0;
    };
    api.current = {
      move(e) {
        const r = el.getBoundingClientRect();
        tx = e.clientX-r.left; ty=e.clientY-r.top;
        if (!active) { x=tx; y=ty; }
        active = true; if(!frame) tick();
      },
      focus() { tx = el.clientWidth*.49; ty=el.clientHeight*.32; x=tx;y=ty;active=true;if(!frame) tick(); },
      hide() { active=false;clearTimeout(timeout);if(!frame) tick(); },
      tap(e) { this.move(e); clearTimeout(timeout); timeout=setTimeout(()=>{active=false;if(!frame) tick();},1400); }
    };
    tick();
    return () => { cancelAnimationFrame(frame); clearTimeout(timeout); api.current=null; };
  }, []);
  return (
    <section className="hero" aria-labelledby="hero-title">
      <Web className="hero-corner web-drift" />
      <Web className="hero-bottom-web web-drift" />
      <div className="hero-grid section-shell">
        <div className="hero-copy">
          <p className="hero-eyebrow">YOUR FRIENDLY NEIGHBOURHOOD</p>
          <h1 id="hero-title" className="hero-title">
            {profile.name.split(' ').map((word,i)=><span className="hero-line" key={word}><span>{word}{i===1?'.':''}</span></span>)}
          </h1>
          <p className="hero-role"><span className="role-signal" aria-hidden="true" />{profile.role}</p>
          <p className="hero-positioning">AI-assisted. Human-led.<br />From idea to working application.</p>
          <div className="hero-actions">
            <a href="#work" className="button button-red">EXPLORE PROJECTS</a>
            <a href={profile.resume} download className="button button-black">↓ RESUME.PDF</a>
          </div>
          <p className="hero-byline">AI IN THE WORKFLOW. OWNERSHIP IN THE BUILD.</p>
        </div>
        <div className="hero-art-shell">
          <div className="hero-depth">
          <button ref={stage} className="character-stage" aria-label="Reveal a small part of Abbas’s face. Move across the mask, or tap for a brief peek."
            onPointerMove={e=>{if(e.pointerType==='mouse')api.current?.move(e);}}
            onPointerLeave={e=>{if(e.pointerType==='mouse')api.current?.hide();}}
            onPointerCancel={()=>api.current?.hide()}
            onPointerDown={e=>{if(e.pointerType!=='mouse')api.current?.tap(e);}}
            onFocus={e=>{if(e.currentTarget.matches(':focus-visible'))api.current?.focus();}} onBlur={()=>api.current?.hide()}
            onKeyDown={e=>{if(e.key==='Escape')api.current?.hide();if(e.key==='Enter'||e.key===' '){e.preventDefault();api.current?.focus();}}}>
            <img className="character-base" src={profile.heroMasked} alt="Spider-Man in a red and navy webbed suit" width="728" height="720" fetchPriority="high" />
            <span className="face-window"><img className="character-reveal" src={profile.heroUnmasked} alt="" width="728" height="720" /></span>
            <span className="reveal-hint"><span className="hover-label">HOVER TO REVEAL</span><span className="touch-label">TOUCH THE MASK TO REVEAL</span> ↗</span>
          </button>
          </div>
        </div>
      </div>
    </section>
  );
}
