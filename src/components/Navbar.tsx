import images from "@/utils/images";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="navbar-container">
      <Link href={"/"}>
        <Image src={images.logo} alt="Logo" width={200} />
      </Link>
      <p>Web and marketing solutions for small businesses.</p>
    </div>
  );
}
