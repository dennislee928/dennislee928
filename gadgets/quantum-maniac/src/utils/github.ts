// src/utils/github.ts
export interface GitHubStats {
  commitCount: number;
  issueCount: number;
  prCount: number;
  stars: number;
}

interface GitHubEvent {
  type: string;
  payload: {
    commits?: { length: number }[];
    action?: string;
  };
}

export async function fetchGitHubStats(username: string): Promise<GitHubStats> {
  const headers = { Accept: "application/vnd.github.v3+json" };

  try {
    const eventsResponse = await fetch(
      `https://api.github.com/users/${username}/events/public`,
      { headers }
    );

    if (!eventsResponse.ok) {
      throw new Error("Failed to fetch GitHub events");
    }

    const events = (await eventsResponse.json()) as GitHubEvent[];

    const stats: GitHubStats = {
      commitCount: 0,
      issueCount: 0,
      prCount: 0,
      stars: 0,
    };

    events.forEach((event: GitHubEvent) => {
      switch (event.type) {
        case "PushEvent":
          stats.commitCount += event.payload.commits?.length || 0;
          break;
        case "IssuesEvent":
          if (event.payload.action === "closed") {
            stats.issueCount++;
          }
          break;
        case "PullRequestEvent":
          if (event.payload.action === "closed") {
            stats.prCount++;
          }
          break;
        case "WatchEvent":
          stats.stars++;
          break;
      }
    });

    return stats;
  } catch (error: unknown) {
    console.error("Error fetching GitHub stats:", error);
    return {
      commitCount: 0,
      issueCount: 0,
      prCount: 0,
      stars: 0,
    };
  }
}
