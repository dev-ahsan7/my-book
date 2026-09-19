import Link from 'next/link';

const principles = [
  {
    title: 'Conversion comes first',
    text: 'Good looks are the starting point. I plan the path a visitor takes, from first click to booked call, and design every section to move them along it.',
  },
  {
    title: 'Full control of the code',
    text: 'I write HTML, CSS, and JavaScript by hand, so custom functionality is never limited by what a page builder offers.',
  },
  {
    title: 'Platform fits the goal',
    text: 'I pick WordPress or Framer based on what your business needs, not on what is popular this year.',
  },
];

const stats = [
  { value: '130+', label: 'websites built' },
  { value: '4+', label: 'years of experience' },
];

const clients = ['Sprinklenet', 'nogorik', 'Hover', 'IGNIS'];

const linkClass =
  'underline decoration-zinc-400 underline-offset-4 hover:decoration-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100">
      <main className="mx-auto w-full max-w-4xl px-6">
        {/* Intro */}
        <section className="py-20 sm:py-28">
          <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
            I build websites that work as hard as your sales team.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
            I am Ahsan, a web designer and front-end developer. I help startup
            and SaaS founders turn their websites into a steady source of booked
            consultations, paying clients, and recurring revenue.
          </p>
          <dl className="mt-12 flex flex-wrap gap-x-16 gap-y-8">
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="text-5xl font-semibold tracking-tight text-blue-600 dark:text-blue-400">
                  {s.value}
                </dt>
                <dd className="mt-2 text-zinc-600 dark:text-zinc-400">
                  {s.label}
                </dd>
              </div>
            ))}
          </dl>
        </section>

        {/* Story */}
        <section className="border-t border-zinc-200 py-16 dark:border-zinc-800">
          <h2 className="text-2xl font-semibold tracking-tight">How I work</h2>
          <div className="mt-6 max-w-xl space-y-5 text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
            <p>
              Most of my work happens in WordPress with Elementor, where I build
              custom layouts without the bloated code that slows sites down. For
              launches and landing pages where speed and interaction matter, I
              build in Framer.
            </p>
            <p>
              Either way, I work from your goal backward: who visits, what they
              need to see, and what you want them to do. Then I design and code
              the site to match.
            </p>
          </div>
        </section>

        {/* Principles */}
        <section className="border-t border-zinc-200 py-16 dark:border-zinc-800">
          <h2 className="text-2xl font-semibold tracking-tight">
            What sets my work apart
          </h2>
          <div className="mt-10 grid gap-12 sm:grid-cols-3">
            {principles.map((p) => (
              <div key={p.title} className="border-l-2 border-blue-600 pl-4">
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {p.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Clients */}
        <section className="border-t border-zinc-200 py-16 dark:border-zinc-800">
          <h2 className="text-2xl font-semibold tracking-tight">
            Teams I have worked with
          </h2>
          <p className="mt-3 max-w-lg text-zinc-600 dark:text-zinc-400">
            {clients.join(', ')}, and many other founders and businesses.
          </p>
        </section>

        {/* Contact */}
        <section className="border-t border-zinc-200 py-16 dark:border-zinc-800">
          <h2 className="text-2xl font-semibold tracking-tight">
            Let's talk about your project
          </h2>
          <p className="mt-3 max-w-lg text-zinc-600 dark:text-zinc-400">
            Send a message with your goal and timeline, and I will reply with
            how I would approach it.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="https://wa.me/8801779309378"
              className="rounded-md bg-blue-600 px-6 py-3 text-sm font-medium text-white hover:bg-blue-700 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              Message on WhatsApp
            </Link>
            <Link
              href="https://dribbble.com/devahsan1"
              className="rounded-md border border-zinc-300 px-6 py-3 text-sm font-medium hover:bg-zinc-100 focus-visible:outline-offset-2 focus-visible:outline-blue-600 dark:border-zinc-700 dark:hover:bg-zinc-900"
            >
              See designs on Dribbble
            </Link>
          </div>
          <p className="mt-8 text-sm text-zinc-500">
            <a className={linkClass} href="https://devahsan.com">
              devahsan.com
            </a>
          </p>
        </section>
      </main>
    </div>
  );
}
