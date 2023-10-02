import RedirectToHome from "@/components/Redirect";

export default function Services() {
  return (
    <div className="page-container">
      <div className="page-header">
        <p>Services</p>
        <RedirectToHome />
      </div>
      <div className="services-pill-container">
        <span className="services-pill">Web Development</span>
        <span className="services-pill">Digital Marketing</span>
      </div>
    </div>
  );
}
