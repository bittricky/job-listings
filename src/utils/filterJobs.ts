import { Job } from "@/types/global";

export const filterJobs = (jobs: Job[], filters: string[]): Job[] => {
  if (filters.length === 0) return jobs;

  return jobs.filter((job) => {
    const jobTags = [job.role, job.level, ...job.languages, ...job.tools];
    return filters.every((filter) => jobTags.includes(filter));
  });
};
