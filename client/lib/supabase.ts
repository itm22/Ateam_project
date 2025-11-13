import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://bwfrztgrvzwifozcpisp.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ3ZnJ6dGdydnp3aWZvemNwaXNwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI5OTMxNjMsImV4cCI6MjA3ODU2OTE2M30.KhgDXB8Wgt_2Ow8hlLr1S9bvXNdYhH65Sh1vH7AXDSM';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);