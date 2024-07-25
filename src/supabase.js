import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://nuzhqqvqiwogoyzrfxjf.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im51emhxcXZxaXdvZ295enJmeGpmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjE2NTY2NjIsImV4cCI6MjAzNzIzMjY2Mn0.H8t5ZJmaaZH1OEsulCgIRzRQgd52yLvJM3FCHjzozVY";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
