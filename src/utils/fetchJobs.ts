import path from "path";
import fs from "fs/promises";
import { Job } from "@/types/global";

export async function fetchJobs(): Promise<Job[]> {
  try {
    const filePath = path.resolve(process.cwd(), "src/data", "jobs.json");
    const fileContent = await fs.readFile(filePath, "utf-8");

    return JSON.parse(fileContent) as Job[];
  } catch (error) {
    console.error("Error reading jobs data:", error);
  }
}
