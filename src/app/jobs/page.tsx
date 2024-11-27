"use client";

import React from "react";

import { JobCard } from "@/components";
import { JobList as JobListProps } from "@/types/global";

const JobList: React.FC<JobListProps> = ({ jobs, onFilterSelect }) => {
  return (
    <div className="space-y-6">
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} onFilterSelect={onFilterSelect} />
      ))}
    </div>
  );
};

JobList.displayName = "JobList";
export default JobList;
