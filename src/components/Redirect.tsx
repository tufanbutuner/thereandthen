"use client";

import { useRouter } from "next/navigation";

export default function RedirectToHome() {
  const router = useRouter();

  const redirect = () => {
    router.back();
  };

  return (
    <div className="redirect" onClick={redirect}>
      go back
    </div>
  );
}
