"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import Script from "next/script";
import { W } from "@/utils/themes";

interface NoteData {
  id: number;
  fx: number;
  fy: number;
  x?: number;
  y?: number;
  w: number;
  rot: number;
  color: string;
  textColor?: string;
  title: string;
  body: string;
  tag: string;
}

function defaultNotes(): NoteData[] {
  return [
    { id: 1, fx: 0.04, fy: 0.10, w: 280, rot: -3, color: W.peach, title: "WEB DEV", body: "WordPress, Shopify, custom builds — sites that don't break.", tag: "SERVICE" },
    { id: 2, fx: 0.27, fy: 0.06, w: 270, rot: 2, color: W.lilac, title: "BRAND", body: "Identity refreshes that don't bore.", tag: "SERVICE" },
    { id: 3, fx: 0.50, fy: 0.13, w: 280, rot: -1, color: W.green, title: "MARKETING", body: "Plain-English SEO. Email people read.", tag: "SERVICE" },
    { id: 4, fx: 0.74, fy: 0.08, w: 290, rot: 3, color: W.yellow, title: "OUR PROCESS", body: "1. Coffee\n2. Sketch\n3. Build\n4. Ship\n5. Coffee again", tag: "NOTE" },
    { id: 5, fx: 0.06, fy: 0.58, w: 320, rot: -2, color: W.pink, title: '"GAME-CHANGER."', body: "— Daisy & Co. Café\nbookings up 312% in three months.", tag: "QUOTE" },
    { id: 6, fx: 0.34, fy: 0.62, w: 300, rot: 1, color: W.blue, title: "WHO'S IT FOR?", body: "Cafés, indie founders, pet shops, anyone with a small business and a big idea.", tag: "NOTE" },
    { id: 7, fx: 0.60, fy: 0.55, w: 290, rot: -2, color: W.peach, title: '"WORTH 2× WHAT WE PAID."', body: "— Mo, Hatch Studio", tag: "QUOTE" },
    { id: 8, fx: 0.82, fy: 0.62, w: 290, rot: 4, color: W.orange, textColor: "#fff", title: "GET IN TOUCH →", body: "hello@thereandthen.co", tag: "CTA" },
  ];
}

export default function Page() {
  const [notes, setNotes] = useState(defaultNotes);
  const [drag, setDrag] = useState<{ id: number; dx: number; dy: number } | null>(null);
  const [size, setSize] = useState({ w: 1200, h: 640 });
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const ro = new ResizeObserver(() => {
      const r = ref.current!.getBoundingClientRect();
      setSize({ w: r.width, h: r.height });
    });
    ro.observe(ref.current);
    return () => ro.disconnect();
  }, []);

  const resolved = notes.map((n) => ({
    ...n,
    x: n.x != null ? n.x : Math.round(n.fx * (size.w - n.w)),
    y: n.y != null ? n.y : Math.round(n.fy * (size.h - 200)),
  }));

  const onDown = useCallback(
    (id: number) => (e: React.MouseEvent) => {
      const note = resolved.find((n) => n.id === id);
      if (!note || !ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      setDrag({ id, dx: e.clientX - rect.left - note.x!, dy: e.clientY - rect.top - note.y! });
    },
    [resolved]
  );

  const onMove = useCallback(
    (e: React.MouseEvent) => {
      if (!drag || !ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      setNotes((prev) =>
        prev.map((n) =>
          n.id === drag.id
            ? { ...n, x: e.clientX - rect.left - drag.dx, y: e.clientY - rect.top - drag.dy, fx: -1, fy: -1 }
            : n
        )
      );
    },
    [drag]
  );

  const onUp = useCallback(() => setDrag(null), []);

  return (
    <>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-W2099BHSNL" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-W2099BHSNL');
        `}
      </Script>

      <div className="corkboard">
        <div className="home-hero">
          <div className="section-label">◆ WELCOME TO THE WORKSHOP</div>
          <h1 className="page-heading">
            Drag things around.<br />
            <span className="accent">Make a mess.</span> Hire us.
          </h1>
          <p>
            Everything below is a real thing we do. Push the notes around — like a mood board,
            except the mood is &quot;small business getting its life together.&quot;
          </p>
          <div className="home-hero__buttons">
            <Link href="/services" className="btn-dark">See our services →</Link>
            <Link href="/get-a-quote" className="btn-ghost">Get a quote</Link>
            <button className="btn-ghost" onClick={() => setNotes(defaultNotes())}>
              Reset board ↻
            </button>
          </div>
        </div>

        <div
          ref={ref}
          className="home-board"
          onMouseMove={onMove}
          onMouseUp={onUp}
          onMouseLeave={onUp}
        >
          {resolved.map((n) => (
            <div
              key={n.id}
              onMouseDown={onDown(n.id)}
              className={`note${drag?.id === n.id ? " note--dragging" : ""}`}
              style={{
                left: n.x,
                top: n.y,
                width: n.w,
                background: n.color,
                color: n.textColor || W.ink,
                transform: `rotate(${n.rot}deg)`,
                boxShadow: drag?.id === n.id
                  ? "0 18px 32px -10px rgba(0,0,0,0.35)"
                  : "0 8px 18px -8px rgba(0,0,0,0.25)",
                cursor: drag?.id === n.id ? "grabbing" : "grab",
                zIndex: drag?.id === n.id ? 10 : 1,
              }}
            >
              <div className="note__pin" />
              <div className="note__tag">{n.tag}</div>
              <div
                className="note__title"
                style={{ fontSize: n.tag === "CTA" ? 26 : 20 }}
              >
                {n.title}
              </div>
              <div className="note__body">{n.body}</div>
            </div>
          ))}
          <div className="home-board__hint">✱ DRAG THE NOTES</div>
        </div>
      </div>
    </>
  );
}
