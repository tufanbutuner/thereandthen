import RedirectToHome from "@/components/Redirect";
import { theme } from "@/utils/themes";
import Image from "next/image";
import hello from "../../../public/hello.svg";

export default function WhoWeAre() {
  return (
    <div className="page-container">
      <div className="page-header">
        <p style={{ color: theme.colors.pastel.red }}>Who we are</p>
        <RedirectToHome />
      </div>
      <div className="who-we-are-container">
        <div className="who-we-are-text">
          <p>Who says size matters? Good things can come in small packages.</p>
          <p>
            We’re a small London based start up focusing on providing web and
            marketing solutions for small businesses, to help you bring your
            ideas to life.
          </p>
          <p>
            At There and Then we aim to make your journey as simple and
            comfortable as possible so whilst we’re off working away on your
            needs you can kick back and relax knowing we’ve got you covered.
          </p>
          <p>
            Interested in what we can do for you? Have a look at the services we
            can provide for you and get in touch.
          </p>
        </div>
        <Image priority={true} src={hello} alt="Hello picture" width={400} />
      </div>
    </div>
  );
}
