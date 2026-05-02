import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const body = await req.json();
  const { what, who, budget, when, name, email } = body;

  await resend.emails.send({
    from: "There and Then <hello@therenthen.co.uk>",
    to: "hello@therenthen.co.uk",
    subject: `New quote from ${name}`,
    html: `
      <h2>New quote request</h2>
      <p><b>What:</b> ${what}</p>
      <p><b>Who:</b> ${who}</p>
      <p><b>Budget:</b> ${budget}</p>
      <p><b>When:</b> ${when}</p>
      <p><b>Name:</b> ${name}</p>
      <p><b>Email:</b> ${email}</p>
    `,
    replyTo: email,
  });

  return NextResponse.json({ ok: true });
}
