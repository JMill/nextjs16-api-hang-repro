import { NextResponse } from "next/server";
import { stripe, isStripeConfigured } from "@/lib/stripe";

export async function GET() {
  return NextResponse.json({ configured: isStripeConfigured, ok: !!stripe });
}
