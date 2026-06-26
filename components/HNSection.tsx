import { HNStory } from "@/lib/data";

export default function HNSection({ stories }: { stories: HNStory[] }) {
  return (
    <section>
      <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
        <span className="bg-orange-500 text-white text-xs font-bold px-1.5 py-0.5 rounded">
          Y
        </span>
        Hacker News Top Stories
      </h2>
      <div className="space-y-3">
        {stories.map((story, i) => (
          <div
            key={story.hn_url}
            className="bg-gray-900 border border-gray-800 rounded-lg px-5 py-4 hover:border-gray-600 transition-all"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="min-w-0">
                <div className="flex items-start gap-2">
                  <span className="text-gray-500 text-xs w-4 mt-0.5 flex-shrink-0">{i + 1}</span>
                  <a
                    href={story.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-100 text-sm font-medium hover:text-white leading-snug"
                  >
                    {story.title}
                  </a>
                </div>
                <div className="pl-6 mt-1.5 flex items-center gap-3 text-xs text-gray-500">
                  <span>by {story.by}</span>
                  <a
                    href={story.hn_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-400"
                  >
                    {story.comments} comments
                  </a>
                </div>
              </div>
              <div className="flex-shrink-0 flex items-center gap-1 text-orange-400 text-sm font-semibold">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
                </svg>
                {story.score}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
