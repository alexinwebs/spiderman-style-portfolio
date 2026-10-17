import { profile } from '../data/site';
function Ribbon({ reverse = false, children }) {
  return (
    <div className={`ribbon ${reverse ? 'ribbon-black' : 'ribbon-red'}`}>
      <div
        className={`ribbon-track ${reverse ? 'reverse' : ''}`}
        aria-hidden="true"
      >
        {[0, 1].map((n) => (
          <div className="ribbon-group" key={n}>
            {[0, 1, 2].map((i) => (
              <span key={i}>
                {children}
                <img className="ribbon-mask" src={profile.heroMasked} alt="" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
export default function Marquee({ paused, onToggle }) {
  return (
    <div
      className="marquee-band"
      role="group"
      aria-label={`${profile.role}. Backend focus. Full-stack execution. Human-led development.`}
    >
      <Ribbon>AI-ASSISTED DEVELOPMENT</Ribbon>
      <Ribbon reverse>HUMAN-LED · BUILD · DEBUG · REVIEW</Ribbon>
      <button
        className="motion-toggle"
        aria-pressed={paused}
        onClick={onToggle}
        title="Your device’s reduced-motion preference is always respected."
      >
        {paused ? 'Resume motion' : 'Pause motion'}
        <span aria-hidden="true">{paused ? '▶' : 'Ⅱ'}</span>
      </button>
    </div>
  );
}
