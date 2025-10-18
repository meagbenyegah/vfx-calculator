import { useState } from "react";
import { Info, X } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface InfoPopoverProps {
  title: string;
  content: string;
}

export function InfoPopover({ title, content }: InfoPopoverProps) {
  const [open, setOpen] = useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <button
          type="button"
          className="w-4 h-4 rounded-full bg-gray-300 hover:bg-gray-400 flex items-center justify-center transition-colors"
          aria-label={`Information about ${title}`}
        >
          <Info className="w-3 h-3 text-gray-600" />
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-80 p-4" side="top" align="start">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h4 className="font-semibold text-sm text-gray-900">{title}</h4>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="text-gray-400 hover:text-gray-600"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          <p className="text-sm text-gray-700">{content}</p>
        </div>
      </PopoverContent>
    </Popover>
  );
}
