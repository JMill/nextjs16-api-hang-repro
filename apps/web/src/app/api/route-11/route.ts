import { NextResponse } from "next/server";
import { createSupabaseClient } from "@/lib/supabase";

export async function GET() {
  const sb = createSupabaseClient();
  return NextResponse.json({ route: 11, supabase: !!sb });
}
