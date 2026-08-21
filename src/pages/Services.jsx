const services = [
  {
    step: "01",
    name: "Operations Audit",
    duration: "2 weeks",
    body: "We map how work actually moves through the business today — not the org chart version. You get a short, ranked list of what's costing you the most.",
    deliverables: ["Process map of core workflows", "Ranked list of drag points", "One recommended starting move"],
  },
  {
    step: "02",
    name: "Growth Roadmap",
    duration: "4 weeks",
    body: "A twelve-week plan built around your actual capacity, not a template. Each line has one owner and one number attached to it.",
    deliverables: ["12-week roadmap with owners", "Channel and pricing review", "Forecast tied to the plan"],
  },
  {
    step: "03",
    name: "Embedded Partner",
    duration: "3–6 months",
    body: "One of us works inside your team part-time — in the Monday meeting, in the Slack channel — until the new system runs without us.",
    deliverables: ["Weekly working sessions", "Direct Slack access", "Handoff playbook at close"],
  },
  {
    step: "04",
    name: "Financial Reset",
    duration: "3 weeks",
    body: "We rebuild your cash and unit-economics model from the ground up so it holds up under real questions from a board or a bank.",
    deliverables: ["Rebuilt cash model", "Unit economics by product/channel", "Runway and scenario planning"],
  },
];

const faqs = [
  {
    q: "Do you work with early-stage companies?",
    a: "Usually from Series A on, or bootstrapped businesses doing $1M+ in revenue. Below that, the fixes are often simpler than a consultancy engagement.",
  },
  {
    q: "How many clients do you take on at once?",
    a: "Eight to ten, firm-wide. We turn down good-fit work regularly to protect that number.",
  },
  {
    q: "What happens after the engagement ends?",
    a: "You keep everything — the systems, the docs, the model. Some clients bring us back quarterly for a check; most don't need to.",
  },
];

export default function Services() {
  return (
    <div>
      <section className="bg-navy text-canvas">
        <div className="max-w-6xl mx-auto px-6 pt-24 pb-16 md:pt-28 md:pb-20">
          <p className="font-mono text-xs uppercase tracking-widest text-brass mb-6">Services</p>
          <h1 className="font-display text-4xl md:text-5xl leading-tight max-w-2xl">
            Four ways to work with us, in the order most clients need them.
          </h1>
          <div className="taut-line max-w-2xl mt-10" />
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="space-y-px bg-navy/10 border border-navy/10 rounded-sm overflow-hidden">
          {services.map((s) => (
            <div key={s.step} className="bg-canvas grid md:grid-cols-[auto_1fr_1fr] gap-6 md:gap-10 p-8 md:p-10">
              <div className="flex md:flex-col items-baseline md:items-start gap-3 md:gap-1 md:w-24 shrink-0">
                <span className="font-mono text-brass text-sm">{s.step}</span>
                <span className="font-mono text-xs text-slate uppercase tracking-widest">{s.duration}</span>
              </div>
              <div>
                <h2 className="font-display text-2xl text-navy mb-3">{s.name}</h2>
                <p className="text-slate text-sm leading-relaxed">{s.body}</p>
              </div>
              <div>
                <p className="font-mono text-xs uppercase tracking-widest text-slate mb-3">You'll leave with</p>
                <ul className="space-y-2">
                  {s.deliverables.map((d) => (
                    <li key={d} className="text-sm text-navy flex gap-2">
                      <span className="text-brass" aria-hidden="true">—</span>
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-canvas-dim border-y border-navy/10">
        <div className="max-w-3xl mx-auto px-6 py-20">
          <p className="font-mono text-xs uppercase tracking-widest text-brass mb-4">Questions</p>
          <h2 className="font-display text-3xl text-navy mb-12">Before you book a call</h2>
          <div className="space-y-8">
            {faqs.map((f) => (
              <div key={f.q} className="border-t border-navy/15 pt-6">
                <h3 className="font-display text-lg text-navy mb-2">{f.q}</h3>
                <p className="text-slate text-sm leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
