// Build-time fetch of GitHub stars + contributor count for the SocialProof
// card. Result is baked into the static HTML — no client-side API hits.
//
// Falls back to placeholder values if the API is unreachable or rate-limited
// during the build (this is a static marketing site; we'd rather render with
// stale numbers than fail the build).

const REPO = "kdash-rs/kdash";

export interface GithubStats {
  stars: number | null;
  contributors: number | null;
}

export async function fetchGithubStats(): Promise<GithubStats> {
  try {
    const [repoRes, contribRes] = await Promise.all([
      fetch(`https://api.github.com/repos/${REPO}`, {
        headers: { "User-Agent": "kdash-site-build" },
      }),
      fetch(`https://api.github.com/repos/${REPO}/contributors?per_page=1&anon=1`, {
        headers: { "User-Agent": "kdash-site-build" },
      }),
    ]);

    let stars: number | null = null;
    if (repoRes.ok) {
      const repoJson = (await repoRes.json()) as { stargazers_count?: number };
      stars = repoJson.stargazers_count ?? null;
    }

    let contributors: number | null = null;
    if (contribRes.ok) {
      // GitHub returns the contributor count in the Link header's last page
      // when per_page=1 — that's the standard pattern.
      const link = contribRes.headers.get("link") ?? "";
      const match = link.match(/<[^>]*[?&]page=(\d+)[^>]*>;\s*rel="last"/);
      if (match) {
        contributors = Number(match[1]);
      } else {
        const arr = (await contribRes.json()) as unknown[];
        contributors = Array.isArray(arr) ? arr.length : null;
      }
    }

    return { stars, contributors };
  } catch {
    return { stars: null, contributors: null };
  }
}
