import { useQuery } from '@tanstack/react-query';
import { createClient } from '@supabase/supabase-js';
import type { Database } from '../integrations/supabase/types';

const supabase = createClient<Database>(
  import.meta.env.VITE_SUPABASE_URL!,
  import.meta.env.VITE_SUPABASE_ANON_KEY!
);

type DeadlineRow = Database['public']['Tables']['deadlines']['Row';

type DeadlinesHookResult = {
  upcoming: DeadlineRow[];
};

/**
 * Fetches all deadlines with due_date >= today, ordered by soonest.
 */
export function useDeadlines() {
  return useQuery<DeadlinesHookResult>({
    queryKey: ['deadlines', 'upcoming'],
    queryFn: async () => {
      const today = new Date();
      const todayStr = today.toISOString().slice(0, 10);
      const { data, error } = await supabase
        .from('deadlines')
        .select('*')
        .gte('due_date', todayStr)
        .order('due_date', { ascending: true });

      if (error) throw error;
      const upcoming = data ?? [];
      return { upcoming };
    },
  });
}