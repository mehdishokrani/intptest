export default function Home() {
  console.log("Welcome INT-P students!");

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-gray-50">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        {/* You can add a logo here if needed */}
      </div>

      <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
        👋 Welcome MEHDIIIIIIIII to the <strong className="ml-1">Emerging Trends (INTP)</strong> class at SAIT!
      </p>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-3 lg:text-left">
        <a
          href="https://learn.microsoft.com/en-us/training/paths/az-900-describe-cloud-concepts/"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-blue-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            AZ-900 Path →
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-70">
            Official Microsoft learning path for cloud fundamentals used in our course.
          </p>
        </a>

        <a
          href="https://d2l.sait.ca"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-green-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            SAIT D2L →
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-70">
            Access course content, announcements, and submit assignments.
          </p>
        </a>

        <a
          href="https://github.com/"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-yellow-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            GitHub →
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-70">
            Clone repositories, collaborate, and push your projects here.
          </p>
        </a>
      </div>

      <footer className="text-center w-full text-xs text-gray-500 mt-10">
        &copy; 2025 Southern Alberta Institute of Technology – INTP Emerging Trends
      </footer>
    </main>
  );
}
