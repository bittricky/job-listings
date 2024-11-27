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

export interface FilterContextType {
  filters: string[];
  addFilter: (filter: string) => void;
  removeFilter: (filter: string) => void;
  clearFilters: () => void;
}

export interface JobList {
  jobs: Job[];
}

export interface JobCard {
  job: Job;
  onFilterSelect: (filter: string) => void;
}

export interface JobBadge {
  isNew: boolean;
  isFeatured: boolean;
}

export interface JobInfo {
  postedAt: string;
  contract: string;
  location: string;
}

export interface FilterTags {
  filters: string[];
  onFilterSelect: (filter: string) => void;
}

export interface FilterTag {
  label: string;
  onRemove: () => void;
}
