
import { useSupabaseAuth } from "@/hooks/useSupabaseAuth";
import { Button, ButtonProps } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";

// Accepts 'buttonVariant' prop for styling in different backgrounds (e.g., sidebar)
interface TopNavAuthActionsProps {
  buttonVariant?: ButtonProps['variant'];
}

export function TopNavAuthActions({ buttonVariant }: TopNavAuthActionsProps) {
  const { user } = useSupabaseAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/");
  };

  if (user) {
    return (
      <div className="flex gap-2 flex-col sm:flex-row">
        <Button
          onClick={() => navigate("/dashboard")}
          variant={buttonVariant ?? "outline"}
          className={buttonVariant === "sidebar" ? "w-full" : ""}
        >
          Dashboard
        </Button>
        <Button
          onClick={handleLogout}
          variant={buttonVariant ?? "default"}
          className={buttonVariant === "sidebar" ? "w-full" : ""}
        >
          Log out
        </Button>
      </div>
    );
  }
  return (
    <div className="flex gap-2 flex-col sm:flex-row">
      <Button
        onClick={() => navigate("/login")}
        variant={buttonVariant ?? "outline"}
        className={buttonVariant === "sidebar" ? "w-full" : ""}
      >
        Login
      </Button>
      <Button
        onClick={() => navigate("/signup")}
        variant={buttonVariant ?? "default"}
        className={buttonVariant === "sidebar" ? "w-full" : ""}
      >
        Create Account
      </Button>
    </div>
  );
}
