// Purpose: Receives contact-form submissions from the homepage. Currently logs to the server console; swap to an email/CRM provider when ready.
import { NextResponse } from "next/server";

type ContactPayload = {
  name?: string;
  email?: string;
  phone?: string;
  pathway?: string;
  message?: string;
};

export async function POST(req: Request) {
  let body: ContactPayload;
  try {
    body = (await req.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  if (!body.name || !body.email || !body.message) {
    return NextResponse.json(
      { error: "Missing required fields" },
      { status: 422 },
    );
  }

  console.log("[contact] new enquiry", {
    name: body.name,
    email: body.email,
    phone: body.phone ?? "",
    pathway: body.pathway ?? "",
    message: body.message,
    at: new Date().toISOString(),
  });

  return NextResponse.json({ ok: true });
}
