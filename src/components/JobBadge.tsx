import React from "react";

import { JobBadge as JobBadgeProps } from "@/types/global";

import { Badge } from "./Badge";

const JobBadge: React.FC<JobBadgeProps> = ({ isNew, isFeatured }) => {
  return (
    <>
      {isNew && (
        <Badge variant="default" className="bg-accent text-accent-foreground">
          New!
        </Badge>
      )}
      {isFeatured && (
        <Badge
          variant="secondary"
          className="bg-secondary text-secondary-foreground"
        >
          Featured
        </Badge>
      )}
    </>
  );
};

JobBadge.displayName = "JobBadge";
export default JobBadge;
