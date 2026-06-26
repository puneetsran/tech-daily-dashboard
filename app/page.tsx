import { getDashboardData } from "@/lib/data";
import GitHubSection from "@/components/GitHubSection";
import HNSection from "@/components/HNSection";

export default async function Home() {
  const data = await getDashboardData();

  return (
    <>
      <header className="border-b border-neutral-200 bg-white">
        <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
          <h1 className="text-2xl font-bold tracking-tight text-neutral-900 sm:text-3xl">
            Tech Daily
          </h1>
          <p className="mt-1.5 max-w-2xl text-sm text-neutral-500">
            GitHub&apos;s newest trending repos and Hacker News top stories,
            updated daily. Every item links out to the original.
          </p>
          <p className="mt-2 text-xs text-neutral-400">
            Last updated {data.updated_at}
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <GitHubSection repos={data.github_trending} />
          <HNSection stories={data.hn_stories} />
        </div>

        <footer className="mt-12 border-t border-neutral-200 pt-6 text-center text-xs text-neutral-400">
          Data pipeline:{" "}
          <a
            href="https://github.com/puneetsran/daily-data-pipeline"
            className="underline hover:text-neutral-600"
            target="_blank"
            rel="noopener noreferrer"
          >
            puneetsran/daily-data-pipeline
          </a>
        </footer>
      </main>
    </>
  );
}
