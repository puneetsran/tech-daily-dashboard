import { getDashboardData } from "@/lib/data";
import GitHubSection from "@/components/GitHubSection";
import HNSection from "@/components/HNSection";

export default async function Home() {
  const data = await getDashboardData();

  return (
    <main className="min-h-screen bg-gray-950 text-gray-100">
      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-white tracking-tight">
            Tech Daily
          </h1>
          <p className="mt-1 text-gray-400 text-sm">
            GitHub&apos;s newest trending repos + Hacker News top stories —
            updated daily.{" "}
            <span className="text-gray-500">Last run: {data.updated_at}</span>
          </p>
        </div>

        <div className="space-y-12">
          <GitHubSection repos={data.github_trending} />
          <HNSection stories={data.hn_stories} />
        </div>

        <footer className="mt-16 text-center text-gray-600 text-xs">
          Data pipeline:{" "}
          <a
            href="https://github.com/puneetsran/daily-data-pipeline"
            className="hover:text-gray-400 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            puneetsran/daily-data-pipeline
          </a>
        </footer>
      </div>
    </main>
  );
}
