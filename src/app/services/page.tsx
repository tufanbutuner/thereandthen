import Link from "next/link";
import { W } from "@/utils/themes";

const tools = [
  { tag: "TOOL · 01", name: "Web dev", color: W.peach, icon: "🔧", body: "WordPress · Shopify · custom builds. We pick the right hammer for the right nail.", price: "from £1,200", rot: -0.6 },
  { tag: "TOOL · 02", name: "Brand & identity", color: W.lilac, icon: "✏︎", body: "Marks, type systems, colour. Just enough to look like a real business.", price: "from £900", rot: 0.6 },
  { tag: "TOOL · 03", name: "Marketing & SEO", color: W.green, icon: "📣", body: "Plain-English SEO and email people read. Steady drip, not spam.", price: "from £600/mo", rot: -0.6 },
  { tag: "TOOL · 04", name: "Maintenance", color: W.blue, icon: "🛠", body: "Updates, backups, tweaks. A real human to email when something breaks.", price: "from £150/mo", rot: 0.6 },
];

export default function ServicesPage() {
  return (
    <div className="corkboard">
      <div className="services-header">
        <div className="section-label">(SERVICES)</div>
        <h1 className="page-heading">
          What we <span className="accent">do.</span>
        </h1>
        <p>
          We&apos;re a two-person studio so we don&apos;t pretend to do everything. Here&apos;s the kit we keep within arm&apos;s reach.
        </p>
      </div>

      <div className="services-grid">
        {tools.map((t) => (
          <div
            key={t.name}
            className="service-card"
            style={{
              background: t.color,
              transform: `rotate(${t.rot}deg)`,
            }}
          >
            <div className="service-card__pin" />
            <div className="service-card__header">
              <span>{t.tag}</span>
              <span>{t.price}</span>
            </div>
            <div className="service-card__icon">{t.icon}</div>
            <div className="service-card__name">{t.name}</div>
            <p className="service-card__body">{t.body}</p>
            <Link href="/get-a-quote" className="service-card__cta">
              Brief us on this →
            </Link>
          </div>
        ))}
      </div>

      <div className="services-arrow">
        <span>↓ next: see our work</span>
      </div>
    </div>
  );
}
