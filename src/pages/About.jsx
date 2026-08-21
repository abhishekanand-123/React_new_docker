const values = [
  {
    title: "Weight where it matters",
    body: "We spend time on the two or three things that actually move the business, and say no to the rest — including the ideas we like.",
  },
  {
    title: "One course at a time",
    body: "We don't run five workstreams in parallel to look busy. Sequence beats simultaneity.",
  },
  {
    title: "Leave it sailing without us",
    body: "Every engagement ends with the client able to run the new system alone. That's the actual deliverable.",
  },
];

const crew = [
  {
    name: "Marguerite Osei",
    role: "Founding Partner, Operations",
    bio: "Twelve years fixing supply chains and back offices for founder-led companies before they became someone else's headline.",
  },
  {
    name: "Tomas Reyes",
    role: "Partner, Growth",
    bio: "Ran growth at two DTC brands through their scale-up years. Allergic to vanity metrics.",
  },
  {
    name: "Priya Nadarajan",
    role: "Partner, Finance",
    bio: "Former controller turned advisor. Builds the forecast you'll still trust in month eleven.",
  },
];

export default function About() {
  return (
    <div>
      <section className="bg-navy text-canvas">
        <div className="max-w-6xl mx-auto px-6 pt-24 pb-16 md:pt-28 md:pb-20">
          <p className="font-mono text-xs uppercase tracking-widest text-brass mb-6">About the firm</p>
          <h1 className="font-display text-4xl md:text-5xl leading-tight max-w-2xl">
            We started Halyard Partners because most consulting felt like being
            handed a map with no boat.
          </h1>
          <div className="taut-line max-w-2xl mt-10" />
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-20">
        <p className="text-lg text-slate leading-relaxed mb-6">
          Halyard Partners was founded in 2016 by three operators who'd each spent
          years inside growing companies, not just advising them from the outside.
          We'd all watched strategy work gather dust while the actual business kept
          tripping over the same three problems every quarter.
        </p>
        <p className="text-lg text-slate leading-relaxed">
          So we built a firm around the unglamorous part: staying in the boat long
          enough to actually adjust the rigging, not just point at the horizon and
          leave. Today we work with a small number of clients at a time — usually
          eight to ten — because the model doesn't work any other way.
        </p>
      </section>

      <section className="bg-canvas-dim border-y border-navy/10">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <p className="font-mono text-xs uppercase tracking-widest text-brass mb-4">How we work</p>
          <h2 className="font-display text-3xl md:text-4xl text-navy mb-14 max-w-xl">
            Three commitments that shape every engagement.
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            {values.map((v, i) => (
              <div key={v.title}>
                <span className="font-mono text-xs text-brass">0{i + 1}</span>
                <h3 className="font-display text-xl text-navy mt-3 mb-3">{v.title}</h3>
                <p className="text-slate text-sm leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-24">
        <p className="font-mono text-xs uppercase tracking-widest text-brass mb-4">The partners</p>
        <h2 className="font-display text-3xl md:text-4xl text-navy mb-14 max-w-xl">
          A small crew, deliberately.
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          {crew.map((p) => (
            <div key={p.name} className="border-t border-navy/15 pt-6">
              <h3 className="font-display text-lg text-navy">{p.name}</h3>
              <p className="font-mono text-xs uppercase tracking-widest text-brass mt-1 mb-4">{p.role}</p>
              <p className="text-slate text-sm leading-relaxed">{p.bio}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
