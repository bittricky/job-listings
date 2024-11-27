"use client";

import React from "react";
import { useFilterContext } from "@/context/FilterContext";
import { cn } from "@/utils/mergeClassNames";

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
              {/* TODO: Add filter tags component */}
              {filters.map((filter) => (
                <span
                  key={filter}
                  className="px-3 py-1 bg-muted text-foreground rounded-full cursor-pointer"
                  onClick={() => removeFilter(filter)}
                >
                  {filter}
                </span>
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
