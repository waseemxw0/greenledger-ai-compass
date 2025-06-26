import { useQuery } from '@tanstack/react-query';
import { createClient } from '@supabase/supabase-js';
import type { Database } from '../integrations/supabase/types';

const supabase = createClient<Database>(
  import.meta.env.VITE_SUPABASE_URL!,
  import.meta.env.VITE_SUPABASE_ANON_KEY!
);

type TaskRow = Database['public']['Tables']['tasks']['Row'];

type TasksHookResult = {
  pending: TaskRow[];
  pendingCount: number;
};

/**
 * Fetches all pending tasks and count.
 */
export function useTasks() {
  return useQuery<TasksHookResult>({
    queryKey: ['tasks', 'pending'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('tasks')
        .select('*')
        .eq('status', 'pending')
        .order('due_date', { ascending: true });

      if (error) throw error;
      const pending = data ?? [];
      return { pending, pendingCount: pending.length };
    },
  });
}