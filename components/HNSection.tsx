import { HNStory } from "@/lib/data";

export default function HNSection({ stories }: { stories: HNStory[] }) {
  return (
    <section className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm">
      <h2 className="mb-4 flex items-center gap-2 text-base font-semibold text-neutral-900">
        <span className="rounded bg-orange-500 px-1.5 py-0.5 text-xs font-bold text-white">
          Y
        </span>
        Hacker News
      </h2>

      <ol className="space-y-0.5">
        {stories.map((story, i) => (
          <li key={story.hn_url}>
            <div className="group flex items-start gap-3 rounded-lg px-2 py-2 transition-colors hover:bg-neutral-50">
              <span className="mt-0.5 w-5 shrink-0 text-right text-sm font-semibold tabular-nums text-neutral-300">
                {i + 1}
              </span>
              <span className="min-w-0 flex-1">
                <a
                  href={story.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm font-medium leading-snug text-neutral-800 hover:text-black"
                >
                  {story.title}
                </a>
                <span className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-neutral-400">
                  <span className="inline-flex items-center gap-1 font-medium text-orange-600">
                    <svg
                      className="h-3 w-3"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M12 4l8 8h-6v8h-4v-8H4z" />
                    </svg>
                    {story.score}
                  </span>
                  <span>by {story.by}</span>
                  <a
                    href={story.hn_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-neutral-600 hover:underline"
                  >
                    {story.comments} comments
                  </a>
                </span>
              </span>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
