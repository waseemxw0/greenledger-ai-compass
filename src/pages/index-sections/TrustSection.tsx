
import { Linkedin } from "lucide-react";

export function TrustSection() {
  return (
    <section className="mb-12 flex flex-col items-center">
      <div className="text-muted-foreground text-base md:text-lg mb-3">
        Used by startups, manufacturers, and consultants
      </div>
      <div className="flex gap-6 md:gap-10 mb-1">
        <div className="rounded bg-white/80 shadow p-2 flex items-center justify-center min-w-[60px] min-h-[40px]">
          <Linkedin className="h-8 w-8 text-blue-600" />
        </div>
        <div className="rounded bg-white/80 shadow p-2 flex items-center justify-center min-w-[60px] min-h-[40px]">
          <svg width="56" height="20"><rect width="56" height="20" rx="6" fill="#ECFDF5"/><text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" fontSize="10" fill="#065F46">LOGO</text></svg>
        </div>
        <div className="rounded bg-white/80 shadow p-2 flex items-center justify-center min-w-[60px] min-h-[40px]">
          <svg width="56" height="20"><rect width="56" height="20" rx="6" fill="#ECFDF5"/><text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" fontSize="10" fill="#065F46">LOGO</text></svg>
        </div>
      </div>
      <div className="flex mt-2 gap-2">
        <span className="rounded px-3 py-1 bg-emerald/10 text-emerald text-xs font-medium">ESG Expert Approved</span>
        <span className="text-xs text-gray-400">Contact: <a href="mailto:info@greenledger.ai" className="underline text-emerald">info@greenledger.ai</a></span>
      </div>
    </section>
  );
}
