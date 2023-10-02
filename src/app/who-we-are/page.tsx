import RedirectToHome from "@/components/Redirect";
import { theme } from "@/utils/themes";

export default function WhoWeAre() {
  return (
    <div className="page-container">
      <div className="page-header">
        <p style={{ color: theme.colors.pastel.red }}>Who we are</p>
        <RedirectToHome />
      </div>
    </div>
  );
}
