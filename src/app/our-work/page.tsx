import Link from "next/link";
import { W } from "@/utils/themes";

const studies = [
  {
    name: "Daisy & Co. Café",
    color: W.peach,
    emoji: "☕",
    problem: "Old WordPress site. No online ordering. Long queues, lost regulars.",
    did: ["Rebuild on Shopify", "Custom booking flow", "New brand mini-refresh"],
    result: "+312% online bookings",
    quote: '"They got us 3× more bookings." — Daisy',
    rot: -0.4,
  },
  {
    name: "Pebble Pets",
    color: W.lilac,
    emoji: "🐾",
    problem: "High-street shop. Zero online presence. Stock spread across spreadsheets.",
    did: ["Custom Shopify theme", "Subscription pet-food", "Photography weekend"],
    result: "£0 → £40k/mo",
    quote: '"My golden retriever has fans now." — Sam',
    rot: 0.4,
  },
  {
    name: "Hatch Studio",
    color: W.pink,
    emoji: "✱",
    problem: "Indie tools brand launching. Needed a marketing site that didn't look like every other SaaS.",
    did: ["Editorial-style design", "Headless CMS", "Loud launch campaign"],
    result: "1.4M views Y1",
    quote: '"Worth twice what we paid." — Mo',
    rot: -0.4,
  },
];

export default function OurWorkPage() {
  return (
    <div className="corkboard">
      <div className="work-header">
        <div className="section-label">(OUR WORK)</div>
        <h1 className="page-heading">
          Things we&apos;ve<br />
          <span className="accent">made before.</span>
        </h1>
        <p>
          Working notes from real projects. We keep them messy on purpose — it&apos;s how the work actually happens.
        </p>
      </div>

      <div className="work-studies">
        {studies.map((s, i) => (
          <div
            key={s.name}
            className="study-card"
            style={{ transform: `rotate(${s.rot}deg)` }}
          >
            <div className="study-card__left" style={{ background: s.color }}>
              <div className="study-card__fig">FIG. {i + 1}</div>
              <div className="study-card__emoji">{s.emoji}</div>
              <div className="study-card__name">{s.name}</div>
            </div>
            <div className="study-card__right">
              <div className="study-card__label">THE PROBLEM</div>
              <div className="study-card__text">{s.problem}</div>

              <div className="study-card__label">WHAT WE DID</div>
              <ul className="study-card__list">
                {s.did.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>

              <div className="study-card__result">{s.result}</div>
              <div className="study-card__quote">{s.quote}</div>
            </div>
            <div className="study-card__tape" />
          </div>
        ))}
      </div>

      <div className="work-cta">
        <div className="work-cta__banner">
          <div className="work-cta__text">Ready to start your project?</div>
          <Link href="/get-a-quote" className="work-cta__btn">
            Get a quote →
          </Link>
        </div>
      </div>
    </div>
  );
}
