
import { Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-14 py-5 border-t border-gray-200 dark:border-gray-700 flex flex-col md:flex-row justify-between items-center text-center">
      <div className="flex gap-3 items-center text-sm">
        <span>&copy; {new Date().getFullYear()} GreenLedger AI</span>
        <span>•</span>
        <a href="mailto:info@greenledger.ai" className="underline text-emerald">info@greenledger.ai</a>
      </div>
      <div className="flex gap-3 mt-2 md:mt-0">
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-emerald">
          <Linkedin className="inline h-5 w-5" /> LinkedIn
        </a>
      </div>
    </footer>
  );
}
