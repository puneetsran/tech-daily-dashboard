const DATA_URL =
  "https://raw.githubusercontent.com/puneetsran/daily-data-pipeline/main/data/latest.json";

export interface GitHubRepo {
  name: string;
  stars: number;
  language: string;
  description: string;
  url: string;
  created_at: string;
}

export interface HNStory {
  title: string;
  url: string;
  score: number;
  comments: number;
  by: string;
  hn_url: string;
}

export interface DashboardData {
  updated_at: string;
  github_trending: GitHubRepo[];
  hn_stories: HNStory[];
}

export async function getDashboardData(): Promise<DashboardData> {
  const res = await fetch(DATA_URL, {
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch dashboard data: ${res.status}`);
  }

  return res.json();
}
