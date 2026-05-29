"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useId, useState } from "react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Our Work", href: "/our-work" },
  { label: "Get a Quote", href: "/get-a-quote" },
  { label: "About", href: "/about" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuPath, setMenuPath] = useState<string | null>(null);
  const open = menuPath === pathname;
  const menuId = useId();

  return (
    <nav className="navbar" aria-label="Main">
      <Link href="/" className="navbar__wordmark">
        <div className="navbar__icon">tt</div>
        <div className="navbar__name">there and then</div>
      </Link>

      <button
        type="button"
        className="navbar__toggle"
        aria-expanded={open}
        aria-controls={menuId}
        onClick={() => setMenuPath(open ? null : pathname)}
      >
        {open ? "Close" : "Menu"}
      </button>

      <div
        id={menuId}
        className={`navbar__links${open ? " navbar__links--open" : ""}`}
      >
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
