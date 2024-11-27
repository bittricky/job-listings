"use client";

import React from "react";

import { JobList as JobListProps } from "@/types/global";

const JobList: React.FC<JobListProps> = ({ jobs, onFilterSelect }) => {
  return (
    <div>
      {jobs.map((job) => (
        // TODO: add Job Card component
      ))}
    </div>
  );
};

JobList.displayName = "JobList";
export default JobList;
