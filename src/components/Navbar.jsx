import { useState } from "react";
import { NavLink } from "react-router-dom";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/testimonials", label: "Testimonials" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `text-sm tracking-wide transition-colors focus-ring rounded-sm px-1 ${
      isActive ? "text-brass" : "text-canvas/80 hover:text-canvas"
    }`;

  return (
    <header className="sticky top-0 z-50 bg-navy/95 backdrop-blur border-b border-canvas/10">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <NavLink to="/" className="flex items-center gap-2 focus-ring rounded-sm" onClick={() => setOpen(false)}>
          <svg width="22" height="22" viewBox="0 0 100 100" aria-hidden="true">
            <line x1="15" y1="60" x2="85" y2="60" stroke="#C08B3E" strokeWidth="6" />
            <line x1="50" y1="18" x2="50" y2="60" stroke="#F6F3EC" strokeWidth="6" />
          </svg>
          <span className="font-display text-canvas text-lg tracking-tight">
            Halyard <span className="text-brass">Partners</span>
          </span>
        </NavLink>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} className={linkClass} end={l.to === "/"}>
              {l.label}
            </NavLink>
          ))}
          <NavLink
            to="/contact"
            className="font-mono text-xs uppercase tracking-widest border border-brass text-brass px-4 py-2 rounded-sm hover:bg-brass hover:text-navy transition-colors focus-ring"
          >
            Book a call
          </NavLink>
        </div>

        <button
          className="md:hidden text-canvas focus-ring rounded-sm p-1"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            ) : (
              <path d="M3 6h18M3 12h18M3 18h18" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-canvas/10 bg-navy px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} className={linkClass} end={l.to === "/"} onClick={() => setOpen(false)}>
              {l.label}
            </NavLink>
          ))}
          <NavLink
            to="/contact"
            onClick={() => setOpen(false)}
            className="font-mono text-xs uppercase tracking-widest border border-brass text-brass px-4 py-2 rounded-sm text-center"
          >
            Book a call
          </NavLink>
        </div>
      )}
    </header>
  );
}
