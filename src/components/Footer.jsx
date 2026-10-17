import { profile } from '../data/site';
export default function Footer() {
  return (
    <footer className="site-footer section-shell">
      <a className="footer-brand" href="#top">
        {profile.initials}
      </a>
      <span>
        © {new Date().getFullYear()} {profile.name}.
        <br className="mobile-break" /> AI-assisted. Human-led. <a href="https://pngimg.com/images/heroes/spider_man" target="_blank" rel="noopener noreferrer">Artwork credits ↗</a>
      </span>
      <a href="#top">BACK TO TOP ↑</a>
    </footer>
  );
}
