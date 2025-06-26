import { useQuery } from '@tanstack/react-query';
import { createClient } from '@supabase/supabase-js';
import type { Database } from '../integrations/supabase/types';

const supabase = createClient<Database>(
  import.meta.env.VITE_SUPABASE_URL!,
  import.meta.env.VITE_SUPABASE_ANON_KEY!
);

/**
 * Fetches the latest ESG score row.
 */
export function useESGScore() {
  return useQuery({
    queryKey: ['esg_scores', 'latest'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('esg_scores')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(1)
        .single();

      if (error) throw error;
      return data;
    },
  });
}