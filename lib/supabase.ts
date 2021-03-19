import { createClient } from '@supabase/supabase-js';

const supabaseUrl: string = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseServerKey: string = process.env.SUPABASE_SERVICE_KEY || '';

const supabaseClient = createClient(supabaseUrl, supabaseServerKey);

export { supabaseClient };