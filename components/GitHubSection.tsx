import { GitHubRepo } from "@/lib/data";

const LANG_COLORS: Record<string, string> = {
  TypeScript: "bg-blue-500",
  JavaScript: "bg-yellow-400",
  Python: "bg-blue-400",
  Rust: "bg-orange-500",
  Go: "bg-cyan-400",
  "C++": "bg-pink-500",
  C: "bg-gray-400",
  Java: "bg-red-400",
  HTML: "bg-orange-400",
  CSS: "bg-purple-400",
  Ruby: "bg-red-500",
  Swift: "bg-orange-300",
  Kotlin: "bg-violet-400",
};

function langColor(lang: string) {
  return LANG_COLORS[lang] ?? "bg-gray-500";
}

export default function GitHubSection({ repos }: { repos: GitHubRepo[] }) {
  return (
    <section>
      <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
        <svg
          className="w-5 h-5 text-gray-400"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
        </svg>
        GitHub Trending This Week
      </h2>
      <div className="space-y-3">
        {repos.map((repo, i) => (
          <a
            key={repo.name}
            href={repo.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-gray-900 border border-gray-800 rounded-lg px-5 py-4 hover:border-gray-600 hover:bg-gray-800 transition-all group"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-gray-500 text-xs w-4">{i + 1}</span>
                  <span className="text-blue-400 font-medium text-sm group-hover:text-blue-300 truncate">
                    {repo.name}
                  </span>
                </div>
                <p className="text-gray-400 text-xs leading-relaxed line-clamp-2 pl-6">
                  {repo.description}
                </p>
              </div>
              <div className="flex-shrink-0 flex flex-col items-end gap-2">
                <div className="flex items-center gap-1 text-yellow-400 text-xs font-medium">
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  {repo.stars.toLocaleString()}
                </div>
                {repo.language !== "N/A" && (
                  <div className="flex items-center gap-1.5">
                    <span className={`w-2 h-2 rounded-full ${langColor(repo.language)}`} />
                    <span className="text-gray-500 text-xs">{repo.language}</span>
                  </div>
                )}
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
