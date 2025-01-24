async function fetchGitHubStats(username) {
  const headers = { Accept: "application/vnd.github.v3+json" };

  // Fetch commits from public repos
  const commitsResponse = await fetch(
    `https://api.github.com/users/${username}/events/public`,
    { headers }
  );
  const events = await commitsResponse.json();

  let commitCount = 0,
    issueCount = 0,
    prCount = 0,
    stars = 0;

  events.forEach((event) => {
    if (event.type === "PushEvent") commitCount += event.payload.commits.length;
    if (event.type === "IssuesEvent" && event.payload.action === "closed")
      issueCount++;
    if (event.type === "PullRequestEvent" && event.payload.action === "closed")
      prCount++;
    if (event.type === "WatchEvent") stars++; // WatchEvent represents starring a repo
  });

  return { commitCount, issueCount, prCount, stars };
}

// Example usage:
fetchGitHubStats("your-github-username").then((stats) => console.log(stats));
