
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";

interface SchedulerModalProps {
  open: boolean;
  onClose: () => void;
  type: "calendly" | "typeform";
  url: string;
}

export function SchedulerModal({ open, onClose, type, url }: SchedulerModalProps) {
  // Typical recommended embed heights for Calendly and Typeform forms
  const height = type === "calendly" ? 650 : 500;
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent
        className="max-w-xl w-full p-0 bg-white dark:bg-slate-900 rounded-2xl overflow-hidden"
        style={{ minHeight: height + 64 }}
      >
        <DialogHeader>
          <DialogTitle className="pl-6 pt-5">{type === "calendly" ? "Book a Live Demo" : "Start Free – Quick Survey"}</DialogTitle>
        </DialogHeader>
        <div className="w-full" style={{ minHeight: height, background: "#f7f8fa" }}>
          <iframe
            src={url}
            title={type === "calendly" ? "Calendly Booking" : "Typeform Survey"}
            width="100%"
            height={height}
            style={{ border: "none" }}
            allow="camera; microphone; autoplay; encrypted-media;"
          />
        </div>
        <DialogClose asChild>
          <button className="absolute top-5 right-5 rounded-full w-8 h-8 text-gray-400 hover:text-emerald transition" aria-label="Close">&times;</button>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
}
