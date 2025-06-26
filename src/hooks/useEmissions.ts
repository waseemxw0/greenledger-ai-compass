import { useQuery } from '@tanstack/react-query';
import { createClient } from '@supabase/supabase-js';
import type { Database } from '../integrations/supabase/types';

const supabase = createClient<Database>(
  import.meta.env.VITE_SUPABASE_URL!,
  import.meta.env.VITE_SUPABASE_ANON_KEY!
);

type EmissionRow = Database['public']['Tables']['emissions']['Row'];

type PerScopeSeries = {
  scope: number;
  period_date: string;
  value: number;
}[];

type EmissionsHookResult = {
  raw: EmissionRow[];
  perScopeSeries: Record<number, PerScopeSeries>;
};

/**
 * Fetches all emissions rows and computes aggregates grouped by scope+month.
 */
export function useEmissions() {
  return useQuery<EmissionsHookResult>({
    queryKey: ['emissions', 'all'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('emissions')
        .select('*')
        .order('period_date', { ascending: true });

      if (error) throw error;
      const raw = data ?? [];

      // Group by scope
      const perScopeSeries: Record<number, PerScopeSeries> = {};
      for (const row of raw) {
        if (!perScopeSeries[row.scope]) perScopeSeries[row.scope] = [];
        perScopeSeries[row.scope].push({
          scope: row.scope,
          period_date: row.period_date,
          value: Number(row.value),
        });
      }
      return { raw, perScopeSeries };
    },
  });
}