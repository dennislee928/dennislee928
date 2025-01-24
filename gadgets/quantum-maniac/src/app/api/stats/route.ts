// src/app/api/stats/route.ts
import { NextResponse } from "next/server";

interface GitHubEvent {
  type: string;
  payload: {
    commits?: { length: number }[];
    action?: string;
  };
}

export async function GET() {
  const username = "your-github-username";
  const headers = { Accept: "application/vnd.github.v3+json" };

  try {
    const commitsResponse = await fetch(
      `https://api.github.com/users/${username}/events/public`,
      { headers }
    );
    const events = (await commitsResponse.json()) as GitHubEvent[];

    let commitCount = 0,
      issueCount = 0,
      prCount = 0,
      stars = 0;

    events.forEach((event: GitHubEvent) => {
      if (event.type === "PushEvent")
        commitCount += event.payload.commits?.length || 0;
      if (event.type === "IssuesEvent" && event.payload.action === "closed")
        issueCount++;
      if (
        event.type === "PullRequestEvent" &&
        event.payload.action === "closed"
      )
        prCount++;
      if (event.type === "WatchEvent") stars++;
    });

    const svg = `
      <svg width="400" height="120" xmlns="http://www.w3.org/2000/svg">
        <rect width="100%" height="100%" fill="black"/>
        <text x="50%" y="30" font-size="20" fill="white" text-anchor="middle">
          🚀 GitHub Quantum Stats
        </text>
        <text x="50%" y="60" font-size="18" fill="cyan" text-anchor="middle">
          Commits: ${commitCount} | Issues: ${issueCount} | PRs: ${prCount} | Stars: ${stars}
        </text>
      </svg>
    `;

    return new NextResponse(svg, {
      headers: { "Content-Type": "image/svg+xml" },
    });
  } catch (error: unknown) {
    console.error("Failed to fetch stats:", error);
    return NextResponse.json(
      { error: "Failed to fetch stats" },
      { status: 500 }
    );
  }
}
