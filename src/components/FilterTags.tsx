import React from "react";

import { cn } from "@/utils/mergeClassNames";
import { FilterTags as FilterTagsProps } from "@/types/global";

const FilterTags: React.FC<FilterTagsProps> = ({ filters, onFilterSelect }) => {
  return (
    <div className="mt-4 md:mt-0 pt-4 md:pt-0 border-t md:border-0 border-border flex flex-wrap gap-2">
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => onFilterSelect(filter)}
          className={cn(
            "inline-flex items-center justify-center",
            "rounded-md px-3 py-1.5 text-sm font-medium",
            "bg-secondary text-secondary-foreground",
            "hover:bg-accent hover:text-accent-foreground",
            "transition-colors focus-visible:outline-none focus-visible:ring-1",
            "focus-visible:ring-accent"
          )}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};

FilterTags.displayName = "FilterTags";
export default FilterTags;
