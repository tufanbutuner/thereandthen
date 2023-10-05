import RedirectToHome from "@/components/Redirect";
import { BiLogoInstagram } from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";

const socials = [
  {
    username: "therenthenco",
    icon: <BiLogoInstagram size={40} />,
  },
  {
    username: "therenthenco",
    icon: <FaXTwitter size={36} />,
  },
];

export default function Contact() {
  return (
    <div className="page-container">
      <div className="page-header">
        <p>Contact Us</p>
        <RedirectToHome />
      </div>
      <div className="contact-container">
        <div className="contact-text">
          <h3>Here's where you can find us</h3>
          {socials.map((social, index) => (
            <div className="contact-icons-container" key={index}>
              {social.icon}
              <p>{social.username}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
