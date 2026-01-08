import { createClient } from '@supabase/supabase-js';

// Use the provided credentials as fallbacks to ensure connection works immediately
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || "https://vbzsyskkkhrzrlicplyr.supabase.co";
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZienN5c2tra2hyenJsaWNwbHlyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njc1NjAzMDEsImV4cCI6MjA4MzEzNjMwMX0.Z-WcmL4lHoCpboaDapOTwEqsQC50tkXxSxlMEYF4fC4";

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: false // Disable session persistence to prevent invalid token errors
  }
});

// Helper to get public URL for profile image
export const getProfileImageUrl = (filename: string = 'profile_photo.jpg') => {
  // Use the 'portfolio' bucket as per instructions
  return `${supabaseUrl}/storage/v1/object/public/portfolio/${filename}`;
};

// Helper to get public URL for CV
export const getCvUrl = (filename: string = 'cv.pdf') => {
  return `${supabaseUrl}/storage/v1/object/public/portfolio/${filename}`;
};
