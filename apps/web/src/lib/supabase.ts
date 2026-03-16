import { createClient } from "@supabase/supabase-js";

export const isSupabaseConfigured = !!process.env.SUPABASE_URL;

export function createSupabaseClient() {
  if (!isSupabaseConfigured) return null;
  return createClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
  );
}
