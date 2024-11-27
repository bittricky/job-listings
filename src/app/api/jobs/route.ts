import { NextResponse } from "next/server";
import { fetchJobs } from "@/utils/fetchJobs";

export async function GET() {
  try {
    const jobs = fetchJobs();
    return NextResponse.json(jobs);
  } catch (error) {
    console.error("Error reading jobs data:", error);
    return new NextResponse("Failed to load jobs data", { status: 500 });
  }
}
