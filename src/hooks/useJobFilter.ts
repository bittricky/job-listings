import { useState, useMemo } from "react";
import { Job } from "@/types/global";

export const useJobFilters = (jobs: Job[]) => {
  const [filters, setFilters] = useState<string[]>([]);

  const filteredJobs = useMemo(() => {
    if (filters.length === 0) return jobs;

    return jobs.filter(
      (job) => {
        const jobTags = [job.role, job.level, ...job.languages, ...job.tools];
        return filters.every((filter) => jobTags.includes(filter));
      },
      [filters, jobs]
    );
  });

  const addFilter = (filter: string) => {
    if (!filters.includes(filter)) {
      setFilters([...filters, filter]);
    }
  };

  const removeFilter = (filter: string) => {
    setFilters(filters.filter((job) => job !== filter));
  };

  const clearFilter = () => {
    setFilters([]);
  };

  return {
    filters,
    filteredJobs,
    addFilter,
    removeFilter,
    clearFilter,
  };
};
