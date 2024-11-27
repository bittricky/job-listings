"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import { FilterContextType } from "@/types/global";

const FilterContext = createContext<FilterContextType | undefined>(undefined);

export const FilterProvider = ({ children }: { children: ReactNode }) => {
  const [filters, setFilters] = useState<string[]>([]);

  const addFilter = (filter: string) => {
    if (!filters.includes(filter)) {
      setFilters((prev) => [...prev, filter]);
    }
  };

  const removeFilter = (filter: string) => {
    setFilters((prev) => prev.filter((f) => f !== filter));
  };

  const clearFilters = () => {
    setFilters([]);
  };

  return (
    <FilterContext.Provider
      value={{ filters, addFilter, removeFilter, clearFilters }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = (): FilterContextType => {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error("useFilterContext must be used within a FilterProvider.");
  }
  return context;
};
