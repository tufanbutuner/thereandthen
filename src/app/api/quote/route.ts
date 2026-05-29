import { escapeHtml } from "@/lib/escape-html";
import { quoteSchema } from "@/lib/quote-schema";
import { CONTACT_EMAIL } from "@/lib/site";
import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: Request) {
  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json(
      { error: "Quote service is not configured." },
      { status: 503 },
    );
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const parsed = quoteSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Validation failed.", details: parsed.error.flatten() },
      { status: 400 },
    );
  }

  const { what, who, budget, when, name, email } = parsed.data;
  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    await resend.emails.send({
      from: `There and Then <${CONTACT_EMAIL}>`,
      to: CONTACT_EMAIL,
      subject: `New quote from ${name}`,
      html: `
        <h2>New quote request</h2>
        <p><b>What:</b> ${escapeHtml(what)}</p>
        <p><b>Who:</b> ${escapeHtml(who)}</p>
        <p><b>Budget:</b> ${escapeHtml(budget)}</p>
        <p><b>When:</b> ${escapeHtml(when)}</p>
        <p><b>Name:</b> ${escapeHtml(name)}</p>
        <p><b>Email:</b> ${escapeHtml(email)}</p>
      `,
      replyTo: email,
    });
  } catch {
    return NextResponse.json(
      { error: "Failed to send quote request." },
      { status: 500 },
    );
  }

  return NextResponse.json({ ok: true });
}
