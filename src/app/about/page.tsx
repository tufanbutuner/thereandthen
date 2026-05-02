import { W } from "@/utils/themes";

export default function AboutPage() {
  return (
    <div className="corkboard">
      <div className="about-header">
        <div className="section-label">(ABOUT)</div>
        <h1 className="page-heading">
          Two humans,<br />
          <span className="accent">one studio.</span>
        </h1>
      </div>

      <div className="about-grid">
        <div className="about-card" style={{ background: W.peach, transform: "rotate(-1deg)" }}>
          <div className="about-card__pin" />
          <div className="about-card__photo">[ photo: Sam ]</div>
          <div className="about-card__name">Sam</div>
          <div className="about-card__role">BUILDS THE THINGS</div>
          <p className="about-card__bio">
            Twelve years of websites. Mostly happy. Lives in Walthamstow with two cats who don&apos;t help.
          </p>
        </div>

        <div className="about-card" style={{ background: W.lilac, transform: "rotate(1deg)" }}>
          <div className="about-card__pin" />
          <div className="about-card__photo">[ photo: Mo ]</div>
          <div className="about-card__name">Mo</div>
          <div className="about-card__role">DESIGNS THE THINGS</div>
          <p className="about-card__bio">
            Ex-agency. Lapsed illustrator. Will argue about line-height for 45 minutes if you let her.
          </p>
        </div>

        <div className="about-card" style={{ background: W.yellow, transform: "rotate(-0.5deg)" }}>
          <div className="about-card__pin" />
          <div className="about-card__role">FIND US</div>
          <div className="about-card__contact-item">📧 hello@thereandthen.co</div>
          <div className="about-card__contact-item">📍 London, by the canal</div>
          <div className="about-card__contact-item">🐦 @thereandthen</div>
          <div className="about-card__say-hi">say hi anytime!</div>
        </div>
      </div>
    </div>
  );
}
