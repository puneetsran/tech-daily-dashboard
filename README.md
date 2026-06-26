# Tech Daily

A daily dashboard showing GitHub's newest trending repositories and Hacker News top stories.

Live: [tech-daily-dashboard.vercel.app](https://tech-daily-dashboard.vercel.app)

## How it works

Data is collected once a day by [daily-data-pipeline](https://github.com/puneetsran/daily-data-pipeline), a separate GitHub Actions pipeline that fetches from the GitHub API and Hacker News API and saves the results to the repo. This dashboard reads that data on page load and refreshes it every hour.

## Stack

- Next.js + Tailwind CSS
- Deployed on Vercel
