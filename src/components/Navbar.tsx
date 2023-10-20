import images from "@/utils/images";
import Image from "next/image";

export default function Navbar() {
  return (
    <div className="navbar-container">
      <Image src={images.logo} alt="Logo" width={200} />
      <p>Web and marketing solutions for small businesses.</p>
    </div>
  );
}
