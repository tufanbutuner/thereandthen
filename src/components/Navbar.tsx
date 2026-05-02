"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Our Work", href: "/our-work" },
  { label: "Get a Quote", href: "/get-a-quote" },
  { label: "About", href: "/about" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="navbar">
      <Link href="/" className="navbar__wordmark">
        <div className="navbar__icon">tt</div>
        <div className="navbar__name">there and then</div>
      </Link>
      <div className="navbar__links">
        {navItems.map((item) => {
          const isActive =
            item.href === "/"
              ? pathname === "/"
              : pathname.startsWith(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`navbar__link${isActive ? " navbar__link--active" : ""}`}
            >
              {item.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
