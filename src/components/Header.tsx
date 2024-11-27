"use client";

import React from "react";
import { useFilterContext } from "@/context/FilterContext";
import { cn } from "@/utils/mergeClassNames";
import { FilterTag } from "@/components";

const Header: React.FC = () => {
  const { filters, removeFilter, clearFilters } = useFilterContext();

  if (filters.length === 0) {
    return <header className="h-32 bg-accent mb-8" />;
  }

  return (
    <header className="h-32 bg-accent relative mb-16">
      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-11/12 max-w-5xl">
        <div
          className={cn(
            "bg-background rounded-lg shadow-md p-4",
            "border border-border"
          )}
        >
          <div className="flex items-center justify-between">
            <div className="flex flex-wrap gap-2">
              {filters.map((filter) => (
                <FilterTag
                  key={filter}
                  label={filter}
                  onRemove={() => removeFilter(filter)}
                />
              ))}
            </div>
            <button
              onClick={clearFilters}
              className={cn(
                "text-muted-foreground hover:text-accent",
                "font-medium transition-colors"
              )}
            >
              Clear
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

Header.displayName = "Header";
export default Header;
