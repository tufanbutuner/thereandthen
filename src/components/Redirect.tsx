"use client";

import Link from "next/link";

export default function RedirectToHome() {
  return (
    <Link href={"/"}>
      <div className="redirect">home</div>
    </Link>
  );
}
