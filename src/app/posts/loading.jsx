import React from 'react';

const Postloading = () => {
  return (
    <div
      role="status"
      aria-live="polite"
      className="flex min-h-screen flex-col items-center justify-center gap-6 bg-zinc-50 font-sans dark:bg-zinc-950"
    >
      {/* Spinner */}
      <div className="relative h-16 w-16">
        <span className="absolute inset-0 rounded-full border-4 border-zinc-200 dark:border-zinc-800" />
        <span className="absolute inset-0 animate-spin rounded-full border-4 border-transparent border-t-blue-600 motion-reduce:animate-pulse dark:border-t-blue-400" />
        <span className="absolute inset-[18px] animate-pulse rounded-full bg-blue-600/20 dark:bg-blue-400/20" />
      </div>

      {/* Label with staggered dots */}
      <p className="flex items-end gap-1 text-sm font-medium text-zinc-600 dark:text-zinc-400">
        Loading
        <span className="flex gap-0.5 pb-1">
          <span className="h-1 w-1 animate-bounce rounded-full bg-blue-600 motion-reduce:animate-none dark:bg-blue-400 [animation-delay:-0.3s]" />
          <span className="h-1 w-1 animate-bounce rounded-full bg-blue-600 motion-reduce:animate-none dark:bg-blue-400 [animation-delay:-0.15s]" />
          <span className="h-1 w-1 animate-bounce rounded-full bg-blue-600 motion-reduce:animate-none dark:bg-blue-400" />
        </span>
      </p>

      <span className="sr-only">Loading content, please wait</span>
    </div>
  );
};

export default Postloading;
