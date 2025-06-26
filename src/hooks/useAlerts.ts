import { useQuery } from '@tanstack/react-query';
import { createClient } from '@supabase/supabase-js';
import type { Database } from '../integrations/supabase/types';

const supabase = createClient<Database>(
  import.meta.env.VITE_SUPABASE_URL!,
  import.meta.env.VITE_SUPABASE_ANON_KEY!
);

type AlertRow = Database['public']['Tables']['alerts']['Row'];

type AlertsHookResult = {
  unresolved: AlertRow[];
  count: number;
};

/**
 * Fetches all unresolved alerts and count.
 */
export function useAlerts() {
  return useQuery<AlertsHookResult>({
    queryKey: ['alerts', 'unresolved'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('alerts')
        .select('*')
        .eq('resolved', false)
        .order('created_at', { ascending: false });

      if (error) throw error;
      const unresolved = data ?? [];
      return { unresolved, count: unresolved.length };
    },
  });
}