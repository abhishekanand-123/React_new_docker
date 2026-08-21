import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState("idle"); // idle | submitting | sent
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const [errors, setErrors] = useState({});

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  }

  function validate() {
    const next = {};
    if (!form.name.trim()) next.name = "Tell us your name.";
    if (!form.email.trim()) next.email = "We'll need an email to reply to.";
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) next.email = "That email doesn't look right.";
    if (!form.message.trim()) next.message = "Add a line or two about what's going on.";
    return next;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    setStatus("submitting");
    // Wire this up to your form endpoint / API of choice.
    setTimeout(() => {
      setStatus("sent");
    }, 900);
  }

  if (status === "sent") {
    return (
      <div className="max-w-2xl mx-auto px-6 py-32 text-center">
        <p className="font-mono text-xs uppercase tracking-widest text-brass mb-4">Message sent</p>
        <h1 className="font-display text-3xl md:text-4xl text-navy mb-4">
          Got it, {form.name.split(" ")[0]}.
        </h1>
        <p className="text-slate leading-relaxed">
          We read every message ourselves and reply within one business day.
          Talk soon.
        </p>
      </div>
    );
  }

  return (
    <div>
      <section className="bg-navy text-canvas">
        <div className="max-w-6xl mx-auto px-6 pt-24 pb-16 md:pt-28 md:pb-20">
          <p className="font-mono text-xs uppercase tracking-widest text-brass mb-6">Contact</p>
          <h1 className="font-display text-4xl md:text-5xl leading-tight max-w-2xl">
            Tell us what's slowing you down. We'll tell you honestly if we can help.
          </h1>
          <div className="taut-line max-w-2xl mt-10" />
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-[1fr_1.3fr] gap-14">
        <div>
          <h2 className="font-display text-2xl text-navy mb-6">Reach us directly</h2>
          <dl className="space-y-6">
            <div>
              <dt className="font-mono text-xs uppercase tracking-widest text-brass mb-1">Email</dt>
              <dd className="text-slate">hello@halyardpartners.com</dd>
            </div>
            <div>
              <dt className="font-mono text-xs uppercase tracking-widest text-brass mb-1">Phone</dt>
              <dd className="text-slate">+1 (415) 555-0148</dd>
            </div>
            <div>
              <dt className="font-mono text-xs uppercase tracking-widest text-brass mb-1">Studio</dt>
              <dd className="text-slate">Gurugram, India — working with clients worldwide, remote-first.</dd>
            </div>
            <div>
              <dt className="font-mono text-xs uppercase tracking-widest text-brass mb-1">Response time</dt>
              <dd className="text-slate">Within one business day, always from a partner — never a form-bot.</dd>
            </div>
          </dl>
        </div>

        <form onSubmit={handleSubmit} noValidate className="bg-canvas-dim border border-navy/10 rounded-sm p-8">
          <div className="mb-5">
            <label htmlFor="name" className="block font-mono text-xs uppercase tracking-widest text-slate mb-2">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              className="w-full bg-canvas border border-navy/20 rounded-sm px-4 py-3 text-navy focus-ring focus:border-brass outline-none"
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? "name-error" : undefined}
            />
            {errors.name && <p id="name-error" className="text-brick text-xs mt-1">{errors.name}</p>}
          </div>

          <div className="mb-5">
            <label htmlFor="email" className="block font-mono text-xs uppercase tracking-widest text-slate mb-2">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              className="w-full bg-canvas border border-navy/20 rounded-sm px-4 py-3 text-navy focus-ring focus:border-brass outline-none"
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? "email-error" : undefined}
            />
            {errors.email && <p id="email-error" className="text-brick text-xs mt-1">{errors.email}</p>}
          </div>

          <div className="mb-5">
            <label htmlFor="company" className="block font-mono text-xs uppercase tracking-widest text-slate mb-2">
              Company <span className="normal-case text-slate/60">(optional)</span>
            </label>
            <input
              id="company"
              name="company"
              type="text"
              value={form.company}
              onChange={handleChange}
              className="w-full bg-canvas border border-navy/20 rounded-sm px-4 py-3 text-navy focus-ring focus:border-brass outline-none"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="block font-mono text-xs uppercase tracking-widest text-slate mb-2">
              What's going on?
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={form.message}
              onChange={handleChange}
              className="w-full bg-canvas border border-navy/20 rounded-sm px-4 py-3 text-navy focus-ring focus:border-brass outline-none resize-none"
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? "message-error" : undefined}
            />
            {errors.message && <p id="message-error" className="text-brick text-xs mt-1">{errors.message}</p>}
          </div>

          <button
            type="submit"
            disabled={status === "submitting"}
            className="bg-navy text-canvas font-medium px-6 py-3 rounded-sm hover:bg-navy-light transition-colors focus-ring disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {status === "submitting" ? "Sending…" : "Send message"}
          </button>
        </form>
      </section>
    </div>
  );
}
