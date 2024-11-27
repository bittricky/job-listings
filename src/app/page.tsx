import React from "react";

import { Job } from "@/types/global";
import RootLayout from "@/app/layout";
import { Header } from "@/components";
import { fetchJobs } from "@/utils/fetchJobs";
import JobList from "@/app/jobs/page";

const Page: React.FC = async () => {
  const jobs: Job[] = await fetchJobs();

  return (
    <RootLayout>
      <div className="min-h-screen bg-muted">
        <Header />
      </div>
      <main className="container mx-auto px-4 max-w-5xl">
        <JobList jobs={jobs} />
      </main>
    </RootLayout>
  );
};

export default Page;
