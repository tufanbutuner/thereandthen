import { W } from "@/utils/themes";

export default function AboutPage() {
  return (
    <div className="corkboard">
      <div className="about-header">
        <div className="section-label">(ABOUT)</div>
        <h1 className="page-heading">
          Small team,
          <br />
          <span className="accent">big standards.</span>
        </h1>
      </div>

      <div className="about-grid">
        <div
          className="about-card"
          style={{ background: W.peach, transform: "rotate(-1deg)" }}
        >
          <div className="about-card__pin" />
          <div className="about-card__photo">[ photo: Tufan ]</div>
          <div className="about-card__name">Tufan</div>
          <div className="about-card__role">BUILDS THE THINGS</div>
          <p className="about-card__bio">
            Six years in the industry as a software engineer. Born and raised in
            Hackney. Makes websites that actually work.
          </p>
        </div>

        <div
          className="about-card"
          style={{ background: W.yellow, transform: "rotate(0.5deg)" }}
        >
          <div className="about-card__pin" />
          <div className="about-card__role">FIND US</div>
          <div className="about-card__contact-item">
            📧 hello@therenthen.co.uk
          </div>
          <div className="about-card__contact-item">📍 Hackney, London</div>
          <div className="about-card__contact-item">🐦 @thereandthen</div>
          <div className="about-card__say-hi">say hi anytime!</div>
        </div>
      </div>
    </div>
  );
}
