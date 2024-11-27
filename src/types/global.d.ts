export interface Job {
  id: number;
  company: string;
  logo: string;
  new: boolean;
  featured: boolean;
  position: string;
  role: string;
  level: string;
  postedAt: string;
  contract: string;
  location: string;
  languages: string[];
  tools: string[];
}

export interface HeaderProps {
  filters: string[];
  onRemoveFilters: (filter: string) => void;
  onClearFilters: () => void;
}

export interface JobList {
  jobs: Job[];
  onFilterSelect: (filter: string) => void;
}

export interface JobCard {
  job: Job;
  onFilterSelect: (filter: string) => void;
}
