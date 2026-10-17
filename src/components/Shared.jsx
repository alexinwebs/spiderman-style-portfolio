export function Arrow({ diagonal = false, ...props }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      aria-hidden="true"
      {...props}
    >
      {diagonal ? (
        <path d="M6 18 18 6M6 6h12v12" />
      ) : (
        <path d="M4 12h16m-6-6 6 6-6 6" />
      )}
    </svg>
  );
}
export function Web({ className = '' }) {
  const angles = Array.from({ length: 14 }, (_, i) => (i * Math.PI * 2) / 14);
  const pt = (a, r) => [200 + Math.cos(a) * r, 200 + Math.sin(a) * r];
  return (
    <svg
      viewBox="0 0 400 400"
      className={`web ${className}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      aria-hidden="true"
    >
      {angles.map((a, i) => (
        <path key={`r${i}`} d={`M200 200L${pt(a, 198).join(' ')}`} />
      ))}
      {[32, 58, 88, 122, 160, 197].map((r) => (
        <path
          key={r}
          d={
            angles
              .map((a, i) => {
                const p = pt(a, r),
                  end = pt(a + (Math.PI * 2) / 14, r),
                  c = pt(a + Math.PI / 14, r * 0.82);
                return `${i ? '' : 'M' + p.join(' ')}Q${c.join(' ')} ${end.join(' ')}`;
              })
              .join('') + 'Z'
          }
        />
      ))}
    </svg>
  );
}
export function Spider({ className = '' }) {
  return (
    <svg
      className={className}
      width="24"
      height="30"
      viewBox="0 0 30 36"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      aria-hidden="true"
    >
      <path d="M15 0v12M12 16 6 10 2 13m10 6-9-3-2 7m11-1-8 4v8m14-18 6-6 4 3m-10 6 9-3 2 7m-11-1 8 4v8" />
      <ellipse cx="15" cy="21" rx="4" ry="6" fill="currentColor" />
      <circle cx="15" cy="14" r="2.6" fill="currentColor" />
    </svg>
  );
}
export function SectionLabel({ number, children }) {
  return (
    <div className="section-label">
      <span>{number}</span>
      <span className="label-line" />
      {children}
    </div>
  );
}
export function ExternalLink({ href, children, className = '', ...props }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      {...props}
    >
      {children}
    </a>
  );
}
