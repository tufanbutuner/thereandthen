"use client";

import { useState } from "react";
import { W } from "@/utils/themes";

const stepsDef = [
  { key: "what", label: "What are you up to?", placeholder: "I run a café in Hackney…", color: W.peach },
  { key: "who", label: "Who's it for?", placeholder: "Locals, young families, bike commuters…", color: W.lilac },
  { key: "budget", label: "Rough budget?", placeholder: "£3–5k for the site, maybe more later…", color: W.green, options: ["< £1k", "£1–3k", "£3–10k", "£10k+", "Need help scoping"] },
  { key: "when", label: "When do you need it?", placeholder: "Soft launch in 6 weeks, ideally", color: W.yellow, options: ["ASAP", "1–2 months", "3+ months", "Flexible"] },
  { key: "name", label: "What's your name?", placeholder: "Daisy", color: W.pink },
  { key: "email", label: "Where can we reply?", placeholder: "you@thing.com", color: W.blue },
];

type FormData = Record<string, string>;

export default function GetAQuotePage() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<FormData>({ what: "", who: "", budget: "", when: "", name: "", email: "" });
  const [error, setError] = useState(false);
  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState(false);

  const current = stepsDef[step];
  const done = step >= stepsDef.length;

  const handleNext = async () => {
    if (!form[current.key].trim()) { setError(true); return; }
    setError(false);
    if (step === stepsDef.length - 1) {
      setSending(true);
      setSendError(false);
      try {
        const res = await fetch("/api/quote", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        });
        if (!res.ok) throw new Error();
      } catch {
        setSending(false);
        setSendError(true);
        return;
      }
      setSending(false);
    }
    setStep(step + 1);
  };

  if (done) {
    return (
      <div className="corkboard">
        <div className="quote-done">
          <div className="quote-done__icon">📌</div>
          <h1 className="page-heading">
            Got it, <span className="accent">{form.name || "friend"}.</span>
          </h1>
          <p>
            Your brief is on the corkboard. We&apos;ll come back tomorrow with sketches, questions, and an honest &quot;yes / no / maybe.&quot;
          </p>

          <div className="quote-done__receipts">
            {stepsDef.map((s, i) => (
              <div
                key={s.key}
                className="quote-done__receipt"
                style={{
                  left: `${4 + (i % 3) * 32}%`,
                  top: `${Math.floor(i / 3) * 180 + (i % 2) * 20}px`,
                  background: s.color,
                  transform: `rotate(${(i % 2 === 0 ? -1 : 1) * (1 + i)}deg)`,
                }}
              >
                <div className="quote-done__receipt-label">{s.label.toUpperCase()}</div>
                <div className="quote-done__receipt-value">{form[s.key] || "—"}</div>
              </div>
            ))}
          </div>

          <button
            className="btn-ghost"
            onClick={() => {
              setStep(0);
              setForm({ what: "", who: "", budget: "", when: "", name: "", email: "" });
            }}
          >
            Send another
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="corkboard">
      <div className="quote-header">
        <div className="section-label">(GET A QUOTE · {step + 1} / {stepsDef.length})</div>
        <h1 className="page-heading">
          Tell us about <span className="accent">your project.</span>
        </h1>
        <p>Six small questions, sticky notes for answers. No essays. We&apos;ll figure out the rest together.</p>
      </div>

      <div className="quote-progress">
        {stepsDef.map((s, i) => (
          <div
            key={s.key}
            className="quote-progress__dot"
            style={{
              background: i < step ? W.orange : i === step ? W.ink : `${W.ink}20`,
            }}
          />
        ))}
      </div>

      <div className="quote-form">
        <div
          className="quote-card"
          style={{
            background: current.color,
            transform: `rotate(${step % 2 === 0 ? -1 : 1}deg)`,
          }}
        >
          <div className="quote-card__pin" />
          <div className="quote-card__step">QUESTION {step + 1}</div>
          <div className="quote-card__question">{current.label}</div>

          {current.options ? (
            <div className="quote-card__options">
              {current.options.map((o) => (
                <button
                  key={o}
                  className={`quote-card__option${form[current.key] === o ? " quote-card__option--selected" : ""}`}
                  onClick={() => { setForm({ ...form, [current.key]: o }); setError(false); }}
                >
                  {o}
                </button>
              ))}
            </div>
          ) : (
            <input
              autoFocus
              value={form[current.key]}
              onChange={(e) => { setForm({ ...form, [current.key]: e.target.value }); setError(false); }}
              onKeyDown={(e) => { if (e.key === "Enter") handleNext(); }}
              placeholder={current.placeholder}
              className="quote-card__input"
            />
          )}

          {error && (
            <div className="quote-card__error">Please fill this in before continuing.</div>
          )}

          {sendError && (
            <div className="quote-card__error">Something went wrong sending your brief. Check your connection and try again.</div>
          )}

          <div className="quote-card__nav">
            <button
              className="quote-card__back"
              disabled={step === 0}
              onClick={() => { setStep(Math.max(0, step - 1)); setError(false); }}
            >
              ← back
            </button>
            <button className="btn-dark" onClick={handleNext} disabled={sending}>
              {sending ? "Sending…" : step === stepsDef.length - 1 ? "Send →" : "next →"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
