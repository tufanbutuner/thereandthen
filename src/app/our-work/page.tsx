import { W } from "@/utils/themes";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "Case studies from real projects — La Planchette, Candy Crown, and more small-business work.",
};

const studies = [
  {
    name: "La Planchette",
    url: "https://laplanchette.uk",
    color: W.peach,
    emoji: "🍷",
    problem:
      "Independent wine bar in Windsor with a loyal local crowd but no real web presence to match the warmth of the place.",
    did: ["New website build", "Brand identity", "Online table bookings"],
    result: "Fully booked most weekends",
    quote: '"Allez les amis!" — La Planchette, Windsor',
    rot: -0.4,
  },
  {
    name: "Candy Crown",
    url: "https://thecandycrown.com",
    color: W.pink,
    emoji: "🍬",
    problem:
      "Sweet treats brand needed a cohesive identity and an organised online shop that matched the fun of the product.",
    did: [
      "Brand identity & artwork",
      "Shopify website build",
      "Category catalogue & site structure",
    ],
    result: "thecandycrown.com",
    quote: '"Looks good enough to eat." — Candy Crown',
    rot: 0.4,
  },
];

export default function OurWorkPage() {
  return (
    <div className="corkboard">
      <div className="work-header">
        <div className="section-label">(OUR WORK)</div>
        <h1 className="page-heading">
          Things we&apos;ve
          <br />
          <span className="accent">made before.</span>
        </h1>
        <p>
          Working notes from real projects. We keep them messy on purpose —
          it&apos;s how the work actually happens.
        </p>
      </div>

      <div className="work-studies">
        {studies.map((s, i) => (
          <Link
            key={s.name}
            href={s.url}
            target="_blank"
            rel="noopener noreferrer"
            className="study-card"
            style={{ "--rot": `${s.rot}deg` } as React.CSSProperties}
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
          </Link>
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
