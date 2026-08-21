import { Link } from "react-router-dom";

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

      {/* Quote */}
      <section className="bg-navy text-canvas">
        <div className="max-w-4xl mx-auto px-6 py-24 text-center">
          <p className="font-display italic text-2xl md:text-3xl leading-relaxed">
            "They didn't hand us a strategy. They sat with us until our Monday
            operations meeting actually worked — then left."
          </p>
          <p className="font-mono text-xs uppercase tracking-widest text-brass mt-8">
            Rosa Corrigan — Founder, Corrigan Freight
          </p>
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
