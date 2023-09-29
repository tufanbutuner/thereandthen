"use client";

import { useRouter } from "next/navigation";

export default function RedirectToHome() {
  const router = useRouter();

  const redirect = () => {
    router.push("/");
  };

  return (
    <div className="redirect" onClick={redirect}>
      go back
    </div>
  );
}
