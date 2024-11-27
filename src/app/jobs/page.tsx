"use client";

import React, { useMemo } from "react";

import { JobCard } from "@/components";
import { filterJobs } from "@/utils/filterJobs";
import { useFilterContext } from "@/context/FilterContext";
import { JobList as JobListProps } from "@/types/global";

const JobList: React.FC<JobListProps> = ({ jobs }) => {
  const { filters, addFilter } = useFilterContext();

  const filteredJobs = useMemo(
    () => filterJobs(jobs, filters),
    [jobs, filters]
  );

  return (
    <div className="space-y-6">
      {filteredJobs.map((job) => (
        <JobCard key={job.id} job={job} onFilterSelect={addFilter} />
      ))}
    </div>
  );
};

JobList.displayName = "JobList";
export default JobList;
