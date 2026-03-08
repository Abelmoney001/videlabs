import { createClient } from "@supabase/supabase-js";

// Ensure these exist in your .env.local before running in production
const supabaseUrl =
  process.env.NEXT_PUBLIC_SUPABASE_URL || "https://hookuzrqcctcqzrwgyqv.supabase.co";
const supabaseAnonKey =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhvb2t1enJxY2N0Y3F6cndneXF2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI5ODYwMzQsImV4cCI6MjA4ODU2MjAzNH0.FpfI-wu6LzMTIg2ExGKWYhMtpLKPzdy1Xw6ldq3lPZk";

// Client for making public queries
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Admin client for bypassing Row Level Security inside secure API routes
export function getAdminSupabase() {
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!serviceRoleKey) {
    throw new Error("Missing SUPABASE_SERVICE_ROLE_KEY environment variable");
  }
  return createClient(supabaseUrl, serviceRoleKey);
}
