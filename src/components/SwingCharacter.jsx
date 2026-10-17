import {useEffect,useRef} from 'react';
export default function SwingCharacter({paused=false}){
  const ref=useRef(null),animation=useRef(null);
  useEffect(()=>{const media=matchMedia('(prefers-reduced-motion: reduce)');const stop=()=>animation.current?.cancel();media.addEventListener('change',stop);if(paused)stop();return()=>{media.removeEventListener('change',stop);stop();};},[paused]);
  const swing=()=>{if(paused||matchMedia('(prefers-reduced-motion: reduce)').matches)return;animation.current?.cancel();animation.current=ref.current.animate([0,-10,7,-4,2,-.7,0].map(deg=>({transform:`rotate(${deg}deg)`})),{duration:1900,easing:'ease-in-out'});};
  return <button ref={ref} type="button" className="character-interaction" aria-label="Give the hanging character a swing" onPointerEnter={e=>{if(e.pointerType==='mouse')swing();}} onClick={swing}><img src="images/characters/hanging.webp" alt="" width="433" height="761" loading="lazy"/><span className="character-cue" aria-hidden="true">GIVE ME A SWING ↗</span></button>;
}
