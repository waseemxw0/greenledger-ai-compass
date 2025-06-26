/**
 * Types generated for Supabase tables (handwritten, keep in sync with schema).
 * Row: shape of a selected row.
 * Insert: shape when inserting (omit generated columns).
 * Update: shape when updating (all fields optional).
 */

// Helper generics for table types
type Json = string | number | boolean | null | { [key: string]: Json } | Json[];

type SupabaseTable<Row, Insert, Update> = {
  Row: Row;
  Insert: Insert;
  Update: Update;
};

export type Database = {
  public: {
    Tables: {
      esg_scores: SupabaseTable<
        {
          id: string;
          score: number;
          environmental: number;
          social: number;
          governance: number;
          created_at: string;
        },
        {
          id?: string;
          score: number;
          environmental: number;
          social: number;
          governance: number;
          created_at?: string;
        },
        {
          id?: string;
          score?: number;
          environmental?: number;
          social?: number;
          governance?: number;
          created_at?: string;
        }
      >;
      emissions: SupabaseTable<
        {
          id: string;
          scope: number;
          period_date: string;
          value: number;
          created_at: string;
        },
        {
          id?: string;
          scope: number;
          period_date: string;
          value: number;
          created_at?: string;
        },
        {
          id?: string;
          scope?: number;
          period_date?: string;
          value?: number;
          created_at?: string;
        }
      >;
      tasks: SupabaseTable<
        {
          id: string;
          title: string;
          description: string | null;
          status: string;
          due_date: string | null;
          created_at: string;
        },
        {
          id?: string;
          title: string;
          description?: string | null;
          status?: string;
          due_date?: string | null;
          created_at?: string;
        },
        {
          id?: string;
          title?: string;
          description?: string | null;
          status?: string;
          due_date?: string | null;
          created_at?: string;
        }
      >;
      alerts: SupabaseTable<
        {
          id: string;
          title: string;
          message: string | null;
          severity: string;
          resolved: boolean;
          created_at: string;
        },
        {
          id?: string;
          title: string;
          message?: string | null;
          severity?: string;
          resolved?: boolean;
          created_at?: string;
        },
        {
          id?: string;
          title?: string;
          message?: string | null;
          severity?: string;
          resolved?: boolean;
          created_at?: string;
        }
      >;
      deadlines: SupabaseTable<
        {
          id: string;
          title: string;
          due_date: string;
          created_at: string;
        },
        {
          id?: string;
          title: string;
          due_date: string;
          created_at?: string;
        },
        {
          id?: string;
          title?: string;
          due_date?: string;
          created_at?: string;
        }
      >;
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: Record<string, never>;
  };
};