import React from "react";
import { X } from "lucide-react";

import { cn } from "@/utils/mergeClassNames";
import { FilterTag as FilterTagProps } from "@/types/global";

const FilterTag: React.FC<FilterTagProps> = ({ label, onRemove }) => {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-md border border-transparent",
        "bg-secondary text-secondary-foreground overflow-hidden"
      )}
    >
      <span className="px-2.5 py-1 text-sm font-medium">{label}</span>
      <button
        onClick={onRemove}
        className={cn(
          "h-full px-2 flex items-center justify-center",
          "bg-accent text-accent-foreground hover:bg-accent/90",
          "transition-colors"
        )}
      >
        <X className="h-3 w-3" />
      </button>
    </div>
  );
};

FilterTag.displayName = "FilterTag";
export default FilterTag;
