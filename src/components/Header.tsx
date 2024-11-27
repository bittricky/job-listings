import React from "react";
import { cn } from "@/lib/utils";

import { HeaderProps } from "@/types/global";

const Header: React.FC<HeaderProps> = ({
  filters,
  onRemoveFilters,
  onClearFilters,
}) => {
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
              {/* TODO: Add filter tags */}
            </div>
            <button
              onClick={onClearFilters}
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
