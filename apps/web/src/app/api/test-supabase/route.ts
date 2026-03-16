import { NextResponse } from "next/server";
import { createSupabaseClient, isSupabaseConfigured } from "@/lib/supabase";

export async function GET() {
  if (!isSupabaseConfigured) {
    return NextResponse.json({ configured: false });
  }
  const supabase = createSupabaseClient();
  return NextResponse.json({ configured: true, ok: !!supabase });
}
