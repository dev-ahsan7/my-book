const results = [
  {
    metric: '37%',
    text: 'more demo sign-ups in 3 weeks after a Framer MVP launch',
  },
  {
    metric: '28%',
    text: 'faster onboarding completion with a WordPress SaaS knowledge base',
  },
  {
    metric: '22%',
    text: 'higher conversion rate after a WooCommerce store rebuild',
  },
  {
    metric: '15+',
    text: 'qualified leads every week from a professional service portal',
  },
];

const services = [
  {
    name: 'WordPress',
    fit: 'For content-heavy sites, stores, and membership platforms that need to grow.',
    items: [
      'Custom Elementor layouts that score 90+ on speed',
      'WooCommerce stores with 1-click upsells',
      'Headless builds with a React or Vue front end',
      'Admin training so your team can update content alone',
    ],
  },
  {
    name: 'Framer',
    fit: 'For SaaS landing pages and MVP launches where the experience sets you apart.',
    items: [
      'Scroll-triggered animations and micro-interactions',
      'CMS-driven blogs and portfolios',
      'Pixel-perfect builds from Figma files',
      'Calendly, Stripe, and custom database integrations',
    ],
  },
];

const clients = ['Sprinklenet', 'nogorik', 'Hover', 'IGNIS'];

const linkClass =
  'underline decoration-zinc-400 underline-offset-4 hover:decoration-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600';

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100">
      <main className="mx-auto w-full max-w-4xl px-6">
        {/* Hero */}
        <section className="py-20 sm:py-28">
          <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
            Websites that turn visitors into booked calls and paying clients.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
            I design and build WordPress and Framer sites for startups and SaaS
            founders. Over 130 sites in 4+ years, each one planned around what
            the visitor should do next.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="rounded-md bg-blue-600 px-6 py-3 text-sm font-medium text-white hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              Start a project
            </a>
            <a
              href="https://dribbble.com/devahsan1"
              className="rounded-md border border-zinc-300 px-6 py-3 text-sm font-medium hover:bg-zinc-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 dark:border-zinc-700 dark:hover:bg-zinc-900"
            >
              See designs on Dribbble
            </a>
          </div>
          <p className="mt-12 text-sm text-zinc-500">
            Built for {clients.join(', ')}, and 125+ other teams.
          </p>
        </section>

        {/* Results */}
        <section
          id="results"
          className="scroll-mt-8 border-t border-zinc-200 py-16 dark:border-zinc-800"
        >
          <h2 className="text-2xl font-semibold tracking-tight">
            What the work has done
          </h2>
          <dl className="mt-10 grid gap-x-12 gap-y-10 sm:grid-cols-2">
            {results.map((r) => (
              <div key={r.metric}>
                <dt className="text-5xl font-semibold tracking-tight text-blue-600 dark:text-blue-400">
                  {r.metric}
                </dt>
                <dd className="mt-2 max-w-xs text-zinc-600 dark:text-zinc-400">
                  {r.text}
                </dd>
              </div>
            ))}
          </dl>
        </section>

        {/* Services */}
        <section
          id="services"
          className="scroll-mt-8 border-t border-zinc-200 py-16 dark:border-zinc-800"
        >
          <h2 className="text-2xl font-semibold tracking-tight">
            Two platforms, chosen to fit the goal
          </h2>
          <div className="mt-10 grid gap-12 sm:grid-cols-2">
            {services.map((s) => (
              <div key={s.name}>
                <h3 className="text-xl font-semibold">{s.name}</h3>
                <p className="mt-2 text-zinc-600 dark:text-zinc-400">{s.fit}</p>
                <ul className="mt-5 space-y-2 text-sm leading-relaxed">
                  {s.items.map((item) => (
                    <li key={item} className="border-l-2 border-blue-600 pl-3">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section
          id="contact"
          className="scroll-mt-8 border-t border-zinc-200 py-16 dark:border-zinc-800"
        >
          <h2 className="text-2xl font-semibold tracking-tight">
            Tell me what you are building
          </h2>
          <p className="mt-3 max-w-lg text-zinc-600 dark:text-zinc-400">
            Send a message with your goal and timeline. I will reply with the
            platform I would use and how I would approach it.
          </p>
          <ul className="mt-8 space-y-3">
            <li>
              WhatsApp:{' '}
              <a className={linkClass} href="https://wa.me/8801779309378">
                +88 01779309378
              </a>
            </li>
            <li>
              Website:{' '}
              <a className={linkClass} href="https://devahsan.com">
                devahsan.com
              </a>
            </li>
            <li>
              Dribbble:{' '}
              <a className={linkClass} href="https://dribbble.com/devahsan1">
                dribbble.com/devahsan1
              </a>
            </li>
          </ul>
        </section>
      </main>

      <footer className="mx-auto w-full max-w-4xl px-6 py-10 text-sm text-zinc-500">
        © {new Date().getFullYear()} Ahsan
      </footer>
    </div>
  );
}
