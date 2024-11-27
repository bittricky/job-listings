import React from "react";

import { cn } from "@/utils/mergeClassNames";
import { JobCard as JobCardProps } from "@/types/global";

const JobCard: React.FC<JobCardProps> = ({ job, onFilterSelect }) => {
  const filters = [job.role, job.level, ...job.languages, ...job.tools];

  return (
    <div
      className={cn(
        "bg-background rounded-lg shadow-md p-6",
        "border border-border",
        "relative overflow-hidden",
        job.featured &&
          "before:absolute before:left-0 before:top-0 before:h-full before:w-1 before:bg-accent",
        "flex flex-col md:flex-row md:items-center md:justify-between",
        "transition-shadow hover:shadow-lg"
      )}
    >
      <div className="flex flex-col md:flex-row md:items-center gap-4">
        <img
          src={job.logo}
          alt={`${job.company} logo`}
          className={cn(
            "w-12 h-12 rounded-full",
            "ring-2 ring-border",
            "object-cover"
          )}
        />
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-accent font-semibold">{job.company}</span>
            <div className="flex gap-2">
              {/* TODO: add Job Badge component */}
            </div>
          </div>
          <h2
            className={cn(
              "font-semibold text-lg mb-2",
              "text-foreground hover:text-accent",
              "cursor-pointer transition-colors"
            )}
          >
            {job.position}
          </h2>
          {/* TODO: Add Job Info Component */}
        </div>
      </div>
      {/* TODO: Add Filter Tag Component */}
    </div>
  );
};

JobCard.displayName = "JobCard";
export default JobCard;
