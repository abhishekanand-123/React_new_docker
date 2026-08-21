import { useState } from "react";
import { Link } from "react-router-dom";
import { testimonials, globalMetrics } from "../data/testimonials";

const categories = [
  { id: "all", label: "All Stories" },
  { id: "operations", label: "Operations" },
  { id: "growth", label: "Growth & Scale" },
  { id: "finance", label: "Finance & Forecasts" }
];

export default function Testimonials() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredTestimonials = activeCategory === "all"
    ? testimonials
    : testimonials.filter((t) => t.category === activeCategory);

  return (
    <div className="bg-canvas min-h-screen">
      {/* Header */}
      <section className="bg-navy text-canvas">
        <div className="max-w-6xl mx-auto px-6 pt-24 pb-16 md:pt-32 md:pb-24">
          <p className="font-mono text-xs uppercase tracking-widest text-brass mb-6">
            Proven Outcomes
          </p>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl leading-[1.1] max-w-3xl text-canvas mb-6">
            We don't sell advice.
            <br />
            We ship operating results.
          </h1>
          <div className="taut-line max-w-2xl mt-10 mb-8" />
          <p className="text-canvas/70 max-w-xl text-lg leading-relaxed">
            Read how we work alongside founders and operations teams to clear backlogs, optimize supply lines, and install financial clarity.
          </p>
        </div>
      </section>

      {/* Global Impact Dashboard */}
      <section className="max-w-6xl mx-auto px-6 -mt-8 relative z-10">
        <div className="bg-canvas border border-navy/10 shadow-sm rounded-sm p-6 md:p-8 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 divide-x divide-navy/10">
          {globalMetrics.map((m, idx) => (
            <div key={m.label} className={`flex flex-col justify-between ${idx > 0 ? "pl-6 md:pl-8" : ""}`}>
              <span className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-brick mb-2">
                {m.value}
              </span>
              <span className="font-mono text-[10px] sm:text-xs uppercase tracking-widest text-slate leading-tight">
                {m.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Main Content & Filtering */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-start gap-2 border-b border-navy/10 pb-6 mb-12">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setActiveCategory(c.id)}
              className={`px-4 py-2 text-xs font-mono uppercase tracking-wider rounded-sm transition-all focus-ring ${
                activeCategory === c.id
                  ? "bg-navy text-canvas"
                  : "bg-canvas-dim text-slate hover:bg-navy/5"
              }`}
            >
              {c.label}
            </button>
          ))}
          <span className="ml-auto text-xs font-mono text-slate/60 hidden sm:inline">
            Showing {filteredTestimonials.length} of {testimonials.length} engagements
          </span>
        </div>

        {/* Testimonials List */}
        <div className="space-y-16">
          {filteredTestimonials.map((t, index) => (
            <div
              key={t.id}
              className="bg-canvas border border-navy/5 rounded-sm p-6 md:p-10 hover:border-navy/15 transition-all group duration-300 relative overflow-hidden"
            >
              {/* Category Anchor Tag */}
              <div className="absolute top-0 right-0 bg-navy/5 group-hover:bg-navy/10 px-4 py-1 text-[10px] font-mono uppercase tracking-widest text-slate transition-colors">
                {t.category}
              </div>

              {/* Quote Block */}
              <div className="mb-10 max-w-4xl">
                <blockquote className="font-display italic text-xl sm:text-2xl md:text-3xl text-navy leading-relaxed mb-6 pl-6 border-l-2 border-brass">
                  "{t.quote}"
                </blockquote>
                <div className="flex flex-wrap items-center justify-between gap-4 pl-6">
                  <div>
                    <cite className="font-display text-base md:text-lg text-navy not-italic block">
                      {t.clientName}
                    </cite>
                    <span className="font-mono text-xs uppercase tracking-wider text-brass">
                      {t.role}, {t.company}
                    </span>
                  </div>
                  <div className="bg-brass/10 border border-brass/20 text-brass font-mono text-[11px] md:text-xs px-3 py-1.5 rounded-sm uppercase tracking-wider font-semibold">
                    {t.highlightMetric}
                  </div>
                </div>
              </div>

              <div className="border-t border-navy/10 pt-8 grid md:grid-cols-12 gap-8">
                {/* Left Column: Challenge (The Drift) */}
                <div className="md:col-span-4">
                  <h4 className="font-mono text-xs uppercase tracking-widest text-brick mb-3 flex items-center gap-2">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                    </svg>
                    The Drift (Challenge)
                  </h4>
                  <p className="text-slate text-sm leading-relaxed">
                    {t.challenge}
                  </p>
                </div>

                {/* Center Column: Solution (The Rigging) */}
                <div className="md:col-span-5 border-t md:border-t-0 md:border-l border-navy/10 pt-8 md:pt-0 md:pl-8">
                  <h4 className="font-mono text-xs uppercase tracking-widest text-navy mb-3 flex items-center gap-2">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                    The Rigging (Action &amp; Outcome)
                  </h4>
                  <p className="text-slate text-sm leading-relaxed mb-4">
                    {t.rigging}
                  </p>
                  <p className="text-navy text-sm font-medium leading-relaxed">
                    {t.outcome}
                  </p>
                </div>

                {/* Right Column: Key Metics */}
                <div className="md:col-span-3 border-t md:border-t-0 md:border-l border-navy/10 pt-8 md:pt-0 md:pl-8 flex flex-col justify-center">
                  <h4 className="font-mono text-xs uppercase tracking-widest text-slate/60 mb-4">
                    Key Indicators
                  </h4>
                  <ul className="space-y-3">
                    {t.metrics.map((metric, mIdx) => (
                      <li key={mIdx} className="flex items-start gap-2 text-xs text-slate">
                        <svg className="text-brass shrink-0 mt-0.5" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        <span>{metric}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Case Study CTA */}
      <section className="bg-canvas-dim border-t border-navy/10">
        <div className="max-w-6xl mx-auto px-6 py-20 text-center">
          <h2 className="font-display text-3xl md:text-4xl text-navy mb-4 max-w-xl mx-auto">
            Ready to tighten your operations?
          </h2>
          <p className="text-slate max-w-md mx-auto mb-8 text-sm">
            We spend our first week analyzing where you are losing speed and cash. Let's start with a diagnostic call.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              to="/contact"
              className="bg-navy text-canvas font-medium px-6 py-3 rounded-sm hover:bg-navy-light transition-colors focus-ring"
            >
              Book a diagnostics call
            </Link>
            <Link
              to="/services"
              className="border border-navy/20 text-navy px-6 py-3 rounded-sm hover:border-navy/60 transition-colors focus-ring"
            >
              Our capabilities
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
