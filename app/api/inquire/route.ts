import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function POST(req: Request) {
  // v1: log + return success. In production this hands off to Resend
  // (or similar) to send the inquiry to Julia, and writes the record
  // to the studio's CRM. Both wired up later.
  try {
    let payload: unknown;
    const contentType = req.headers.get("content-type") ?? "";

    if (contentType.includes("application/json")) {
      payload = await req.json();
    } else {
      const form = await req.formData();
      payload = Object.fromEntries(form.entries());
    }

    // eslint-disable-next-line no-console
    console.log("[inquire]", JSON.stringify(payload));

    return NextResponse.json({ ok: true });
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error("[inquire] failed", err);
    return NextResponse.json({ ok: false }, { status: 400 });
  }
}
