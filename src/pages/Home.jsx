import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { testimonials } from "../data/testimonials";

const outcomes = [
  {
    tag: "TRIM",
    title: "Operations that don't luff",
    body: "We tighten the systems that keep slipping — handoffs, reporting, the stuff that eats a Tuesday.",
  },
  {
    tag: "STEER",
    title: "A plan you can hold to",
    body: "Twelve-week roadmaps with a single owner per line item. No 40-slide strategy decks that die in a drawer.",
  },
  {
    tag: "BALLAST",
    title: "Numbers that don't lie to you",
    body: "Cash, unit economics, and a forecast you'd actually bet the business on.",
  },
];

const clients = ["Norden & Voss", "Corrigan Freight", "Plainfield Goods", "Anders Metalwork", "Solstice Clinics"];

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPlaying]);

  const current = testimonials[activeIndex];

  return (
    <div>
      {/* Hero */}
      <section className="bg-navy text-canvas">
        <div className="max-w-6xl mx-auto px-6 pt-24 pb-20 md:pt-32 md:pb-28">
          <p className="font-mono text-xs uppercase tracking-widest text-brass mb-6">
            Operations &amp; growth consultancy
          </p>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl leading-[1.08] max-w-3xl text-canvas">
            Most businesses don't need a new strategy.
            <br />
            They need a steadier hand on the line.
          </h1>
          <div className="taut-line max-w-2xl mt-10 mb-8" />
          <p className="text-canvas/70 max-w-xl text-lg leading-relaxed">
            Halyard Partners works alongside founders and operators to fix what's
            actually slowing the business down — then holds the course until it sticks.
          </p>
          <div className="flex flex-wrap gap-4 mt-10">
            <Link
              to="/contact"
              className="bg-brass text-navy font-medium px-6 py-3 rounded-sm hover:bg-brass-light transition-colors focus-ring"
            >
              Book a free consult
            </Link>
            <Link
              to="/services"
              className="border border-canvas/30 text-canvas px-6 py-3 rounded-sm hover:border-canvas/70 transition-colors focus-ring"
            >
              See how we work
            </Link>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="bg-canvas-dim border-b border-navy/5">
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-wrap items-center gap-x-10 gap-y-3 justify-between">
          <span className="font-mono text-xs uppercase tracking-widest text-slate shrink-0">
            Trusted by operators at
          </span>
          <div className="flex flex-wrap gap-x-8 gap-y-2">
            {clients.map((c) => (
              <span key={c} className="text-slate/80 font-display text-base italic">
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="max-w-2xl mb-14">
          <p className="font-mono text-xs uppercase tracking-widest text-brass mb-4">What changes</p>
          <h2 className="font-display text-3xl md:text-4xl text-navy leading-tight">
            Three things every engagement is built to move.
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-px bg-navy/10 border border-navy/10 rounded-sm overflow-hidden">
          {outcomes.map((o) => (
            <div key={o.tag} className="bg-canvas p-8 flex flex-col">
              <span className="font-mono text-xs tracking-widest text-brass mb-6">{o.tag}</span>
              <h3 className="font-display text-xl text-navy mb-3">{o.title}</h3>
              <p className="text-slate text-sm leading-relaxed">{o.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonial Slider */}
      <section
        className="bg-navy text-canvas py-24 relative overflow-hidden animate-fade-in"
        onMouseEnter={() => setIsPlaying(false)}
        onMouseLeave={() => setIsPlaying(true)}
      >
        {/* Subtle grid background accent */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="nautical-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#nautical-grid)" />
          </svg>
        </div>

        <div className="max-w-5xl mx-auto px-6 relative z-10 flex flex-col justify-between min-h-[350px]">
          <div className="text-center mb-8">
            <span className="font-mono text-xs uppercase tracking-widest text-brass block mb-2">
              Client Outcomes
            </span>
            <h2 className="font-display text-2xl md:text-3xl text-canvas">
              Real outcomes from the operators we partner with
            </h2>
          </div>

          {/* Active slide with fade-in animation */}
          <div key={activeIndex} className="animate-fade-in flex-1 flex flex-col justify-center items-center text-center py-4">
            <blockquote className="font-display italic text-xl sm:text-2xl md:text-3xl leading-relaxed max-w-4xl mb-8">
              "{current.quote}"
            </blockquote>
            
            <div className="flex flex-col items-center">
              <cite className="font-mono text-xs uppercase tracking-widest text-brass font-medium not-italic">
                {current.clientName}
              </cite>
              <span className="text-canvas/60 text-xs mt-1">
                {current.role}, {current.company}
              </span>
              
              <div className="mt-4 bg-brass/10 border border-brass/25 text-brass font-mono text-[10px] uppercase tracking-widest px-3 py-1 rounded-sm font-semibold">
                {current.highlightMetric}
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between border-t border-canvas/10 pt-6 mt-8">
            <button
              onClick={() => setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
              className="p-2 border border-canvas/20 rounded-full hover:bg-canvas/5 hover:border-canvas/40 transition-colors focus-ring cursor-pointer"
              aria-label="Previous testimonial"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="19" y1="12" x2="5" y2="12" />
                <polyline points="12 19 5 12 12 5" />
              </svg>
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`w-2 h-2 rounded-full transition-all focus-ring cursor-pointer ${
                    idx === activeIndex ? "bg-brass w-6" : "bg-canvas/30 hover:bg-canvas/60"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={() => setActiveIndex((prev) => (prev + 1) % testimonials.length)}
              className="p-2 border border-canvas/20 rounded-full hover:bg-canvas/5 hover:border-canvas/40 transition-colors focus-ring cursor-pointer"
              aria-label="Next testimonial"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </button>
          </div>

          <div className="text-center mt-8">
            <Link
              to="/testimonials"
              className="font-mono text-xs uppercase tracking-widest text-brass hover:text-brass-light transition-colors group inline-flex items-center gap-1.5 focus-ring"
            >
              Read full stories
              <svg className="group-hover:translate-x-1 transition-transform" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="bg-canvas-dim border border-navy/10 rounded-sm p-10 md:p-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <h2 className="font-display text-2xl md:text-3xl text-navy mb-2">
              Ready to see where the drag is?
            </h2>
            <p className="text-slate max-w-md">
              A 30-minute call, no deck. We'll tell you honestly if we can help.
            </p>
          </div>
          <Link
            to="/contact"
            className="bg-navy text-canvas font-medium px-6 py-3 rounded-sm hover:bg-navy-light transition-colors focus-ring whitespace-nowrap"
          >
            Get in touch
          </Link>
        </div>
      </section>
    </div>
  );
}
