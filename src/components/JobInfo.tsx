import React from "react";

import { cn } from "@/utils/mergeClassNames";
import { JobInfo as JobInfoProps } from "@/types/global";

const JobInfo: React.FC<JobInfoProps> = ({ postedAt, contract, location }) => {
  return (
    <div
      className={cn("flex items-center gap-4", "text-sm text-muted-foreground")}
    >
      <span>{postedAt}</span>
      <span className="w-1 h-1 rounded-full bg-muted-foreground" />
      <span>{contract}</span>
      <span className="w-1 h-1 rounded-full bg-muted-foreground" />
      <span>{location}</span>
    </div>
  );
};

JobInfo.displayName = "JobInfo";
export default JobInfo;
