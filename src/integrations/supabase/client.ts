// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://cimpodqhntqjzyfgmnmi.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNpbXBvZHFobnRxanp5Zmdtbm1pIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk5NjU3MTEsImV4cCI6MjA2NTU0MTcxMX0.DygTx_15w45L-m9KRkokg7MT-VefyzXTN_2C6Zbx7SM";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);