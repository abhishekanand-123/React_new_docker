import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-navy text-canvas/70 border-t border-canvas/10">
      <div className="max-w-6xl mx-auto px-6 py-12 grid gap-10 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <svg width="18" height="18" viewBox="0 0 100 100" aria-hidden="true">
              <line x1="15" y1="60" x2="85" y2="60" stroke="#C08B3E" strokeWidth="6" />
              <line x1="50" y1="18" x2="50" y2="60" stroke="#F6F3EC" strokeWidth="6" />
            </svg>
            <span className="font-display text-canvas text-base">Halyard Partners</span>
          </div>
          <p className="text-sm leading-relaxed max-w-xs">
            An operations and growth consultancy. We help founders trim the sails,
            hold a course, and know when to come about.
          </p>
        </div>

        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-brass mb-3">Navigate</p>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-canvas transition-colors focus-ring rounded-sm">Home</Link></li>
            <li><Link to="/about" className="hover:text-canvas transition-colors focus-ring rounded-sm">About</Link></li>
            <li><Link to="/services" className="hover:text-canvas transition-colors focus-ring rounded-sm">Services</Link></li>
            <li><Link to="/contact" className="hover:text-canvas transition-colors focus-ring rounded-sm">Contact</Link></li>
          </ul>
        </div>

        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-brass mb-3">Reach us</p>
          <ul className="space-y-2 text-sm">
            <li>hello@halyardpartners.com</li>
            <li>+1 (415) 555-0148</li>
            <li>Gurugram · Remote worldwide</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-canvas/10">
        <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col sm:flex-row justify-between gap-2 text-xs font-mono text-canvas/50">
          <span>© {new Date().getFullYear()} Halyard Partners. All rights reserved.</span>
          <span>Steady hands. Clear headings.</span>
        </div>
      </div>
    </footer>
  );
}
