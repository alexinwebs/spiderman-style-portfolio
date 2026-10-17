import SwingCharacter from './SwingCharacter';
import { useState } from 'react';
import { profile } from '../data/site';
import { Web, ExternalLink } from './Shared';
export default function Contact({ motionPaused }) {
  const [status,setStatus]=useState('');
  function submit(e) {
    e.preventDefault();const fields=new FormData(e.currentTarget);
    const body=`Name: ${fields.get('name')}\nEmail: ${fields.get('email')}\n\n${fields.get('message')}`;
    location.href=`mailto:${profile.email}?subject=${encodeURIComponent('Portfolio enquiry from '+fields.get('name'))}&body=${encodeURIComponent(body)}`;
    setStatus('Your email app has been requested. Review and send your message there. If it does not open, use the email link below.');
  }
  return <section id="contact" className="contact section-space" aria-labelledby="contact-title">
    <Web className="contact-web web-drift" />
    <div className="section-shell contact-shell">
      <header className="reference-heading"><p className="eyebrow">LET’S GET IN TOUCH</p><h2 id="contact-title" className="reveal-heading">CONTACT.</h2><span className="heading-underline" /></header>
      <div className="form-scene">
        <form onSubmit={submit} className="contact-form">
          <div className="form-row"><label>YOUR NAME<input name="name" autoComplete="name" placeholder="Your name" required maxLength={100}/></label><label>YOUR EMAIL<input name="email" type="email" autoComplete="email" placeholder="you@example.com" required maxLength={254}/></label></div>
          <label>MESSAGE<textarea name="message" placeholder="Let’s build something amazing together…" required rows={4} maxLength={5000}/></label>
          <button type="submit" className="button button-red">SEND MESSAGE <span aria-hidden="true">↗</span></button>
          <p className="form-note">Opens your email app — no message is sent automatically.</p>
          <p className="form-status" role="status">{status}</p>
        </form>
        <div className="contact-character"><span className="character-thread" aria-hidden="true"/><SwingCharacter paused={motionPaused}/></div>
      </div>
      <div className="contact-socials"><a href={`mailto:${profile.email}`}>{profile.email}</a><ExternalLink href={profile.github}>GITHUB ↗</ExternalLink><ExternalLink href={profile.linkedin}>LINKEDIN ↗</ExternalLink></div>
    </div>
  </section>;
}
