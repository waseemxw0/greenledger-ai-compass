
import { useSupabaseAuth } from "@/hooks/useSupabaseAuth";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";

export function TopNavAuthActions() {
  const { user } = useSupabaseAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/");
  };

  if (user) {
    return (
      <div className="flex gap-2">
        <Button onClick={() => navigate("/dashboard")} variant="outline">Dashboard</Button>
        <Button onClick={handleLogout} variant="default">Log out</Button>
      </div>
    );
  }
  return (
    <div className="flex gap-2">
      <Button onClick={() => navigate("/login")} variant="outline">Login</Button>
      <Button onClick={() => navigate("/signup")} variant="default">Create Account</Button>
    </div>
  );
}
