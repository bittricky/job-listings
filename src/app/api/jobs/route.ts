import { NextResponse } from "next/server";
import path from "path";
import fs from "fs/promises";

export async function GET() {
  try {
    const filePath = path.resolve(process.cwd(), "data", "jobs.json");

    const fileContents = await fs.readFile(filePath, "utf-8");

    const jobs = JSON.parse(fileContents);

    return NextResponse.json(jobs);
  } catch (error) {
    console.error("Error reading jobs data:", error);
    return new NextResponse("Failed to load jobs data", { status: 500 });
  }
}
