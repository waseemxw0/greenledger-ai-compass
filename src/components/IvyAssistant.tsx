
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Bot, X } from "lucide-react";

export function IvyAssistant() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Popover open={isOpen} onOpenChange={setIsOpen}>
        <PopoverTrigger asChild>
          <Button 
            className="h-14 w-14 rounded-full bg-emerald hover:bg-emerald-dark shadow-lg transition-all duration-300"
            size="icon"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Bot className="h-6 w-6" />}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-96 p-0" side="top" align="end">
          <div className="bg-emerald p-4 text-white rounded-t-lg">
            <div className="flex items-center gap-3">
              <div className="bg-white/20 p-2 rounded-full">
                <Bot className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-medium">Ivy</h3>
                <p className="text-sm text-white/80">Your ESG Assistant</p>
              </div>
            </div>
          </div>
          <div className="p-4 bg-white rounded-b-lg h-80 flex flex-col">
            <div className="flex-1 overflow-auto mb-4 space-y-4">
              <div className="flex items-start gap-3">
                <div className="bg-emerald-light/20 p-2 rounded-full">
                  <Bot className="h-4 w-4 text-emerald" />
                </div>
                <div className="bg-emerald-light/10 p-3 rounded-lg max-w-[80%]">
                  <p className="text-sm">
                    Hello! I'm Ivy, your sustainability assistant. How can I help you with your ESG reporting today?
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 justify-end">
                <div className="bg-gray-100 p-3 rounded-lg max-w-[80%]">
                  <p className="text-sm">
                    What does Scope 3 include?
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-emerald-light/20 p-2 rounded-full">
                  <Bot className="h-4 w-4 text-emerald" />
                </div>
                <div className="bg-emerald-light/10 p-3 rounded-lg max-w-[80%]">
                  <p className="text-sm">
                    Scope 3 emissions are indirect emissions that occur in a company's value chain. These include:
                  </p>
                  <ul className="text-sm mt-2 list-disc pl-4 space-y-1">
                    <li>Purchased goods and services</li>
                    <li>Business travel</li>
                    <li>Employee commuting</li>
                    <li>Waste disposal</li>
                    <li>Transportation and distribution</li>
                    <li>Use of sold products</li>
                  </ul>
                  <p className="text-sm mt-2">
                    Would you like help calculating any specific Scope 3 category?
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <input
                type="text"
                placeholder="Ask Ivy a question..."
                className="w-full px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-emerald focus:border-transparent pr-12"
              />
              <Button 
                className="absolute right-1 top-1/2 transform -translate-y-1/2 h-8 w-8 rounded-full bg-emerald hover:bg-emerald-dark"
                size="icon"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="16" 
                  height="16" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <path d="m22 2-7 20-4-9-9-4Z"/>
                  <path d="M22 2 11 13"/>
                </svg>
              </Button>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}
