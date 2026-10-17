import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { profile, sections } from '../data/site';
import { Arrow } from './Shared';
export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled,setScrolled] = useState(false);
  const [active, setActive] = useState('top');
  const nav=useRef(null), indicator=useRef(null);
  const menu = useRef(null),
    toggle = useRef(null),
    progress = useRef(null);
  useEffect(() => {
    let frame;
    const update = () => {
      if(frame)return;
      frame = requestAnimationFrame(() => {
        frame=0;
        let current='top';
        document.querySelectorAll('main section[id]').forEach(el=>{if(el.getBoundingClientRect().top<innerHeight*.38)current=el.id;});
        if(scrollY+innerHeight>=document.documentElement.scrollHeight-5)current='contact';
        setActive(current);
        setScrolled(scrollY > 40);
        const max = document.documentElement.scrollHeight - innerHeight;
        progress.current?.style.setProperty(
          '--progress',
          String(max > 0 ? scrollY / max : 0),
        );
      });
    };
    addEventListener('scroll', update, { passive: true });
    addEventListener('resize', update);
    update();
    return () => {
      removeEventListener('scroll', update);
      removeEventListener('resize', update);
      cancelAnimationFrame(frame);

    };
  }, []);
  useLayoutEffect(()=>{
    const align=()=>{const link=nav.current?.querySelector('[aria-current]');if(!link){indicator.current.style.opacity=0;return;}indicator.current.style.opacity=1;indicator.current.style.width=`${link.offsetWidth}px`;indicator.current.style.transform=`translateX(${link.offsetLeft}px)`;};
    align();const observer=new ResizeObserver(align);if(nav.current)observer.observe(nav.current);let alive=true;document.fonts?.ready.then(()=>{if(alive)align();});return()=>{alive=false;observer.disconnect();};
  },[active]);
  useEffect(() => {
    if (!open) return;
    const key = (e) => {
      if (e.key === 'Escape') {
        setOpen(false);
        toggle.current?.focus();
      }
    };
    const outside = (e) => {
      if (
        !menu.current?.contains(e.target) &&
        !toggle.current?.contains(e.target)
      )
        setOpen(false);
    };
    document.addEventListener('keydown', key);
    document.addEventListener('pointerdown', outside);
    return () => {
      document.removeEventListener('keydown', key);
      document.removeEventListener('pointerdown', outside);
    };
  }, [open]);
  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="header-inner">
        <a className="brand" href="#top" aria-label={`${profile.name}, home`}>
          <span className="brand-mark">A</span>
          {profile.name.toUpperCase().slice(1)}
          <span className="brand-period">.</span>
        </a>
        <nav ref={nav} className="desktop-nav" aria-label="Main navigation">
          <span ref={indicator} className="nav-indicator" aria-hidden="true"/>
          {sections
            .filter((s) => s.enabled)
            .map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                aria-current={active === s.id ? 'location' : undefined}
              >
                {s.label}
              </a>
            ))}
        </nav>
        <a href={profile.resume} download className="resume-link">
          Resume <Arrow diagonal />
        </a>
        <button
          ref={toggle}
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close navigation' : 'Open navigation'}
          onClick={() => setOpen(!open)}
        >
          {open ? 'Close −' : 'Menu +'}
        </button>
        <nav
          ref={menu}
          id="mobile-menu"
          className={`mobile-nav ${open ? 'is-open' : ''}`}
          aria-label="Mobile navigation"
          hidden={!open}
        >
          {sections
            .filter((s) => s.enabled)
            .map((s) => (
              <a key={s.id} href={`#${s.id}`} onClick={() => setOpen(false)}>
                {s.label}
                <Arrow diagonal />
              </a>
            ))}
          <a href={profile.resume} download onClick={() => setOpen(false)}>
            Download resume
            <Arrow />
          </a>
        </nav>
      </div>
      <div ref={progress} className="reading-progress" aria-hidden="true" />
    </header>
  );
}
