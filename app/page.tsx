export default function Home() {
  return (
    <main className="px-6 lg:px-24">
      {/* Hero */}
      <section className="grid grid-cols-1 gap-10 pt-14 pb-16 md:grid-cols-2 md:items-start">
        <div>
          <h1 className="text-5xl leading-[1.02] tracking-tight md:text-6xl">
            Hi, I’m <br /> Erika.
          </h1>

          <div className="mt-10 text-2xl">↓</div>
        </div>

        <div className="max-w-lg text-lg leading-relaxed text-black/70">
          <p>
            Junior Web Developer building responsive web apps with React, Next.js and modern APIs.
            I enjoy turning clean designs into fast, accessible interfaces.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              className="inline-flex items-center gap-2 border border-black/20 px-4 py-2 text-sm hover:bg-black hover:text-white transition"
              href="#"
              target="_blank"
              rel="noreferrer"
            >
              View CV ↗
            </a>

            <a
              className="inline-flex items-center gap-2 border border-black/20 px-4 py-2 text-sm hover:bg-black hover:text-white transition"
              href="#"
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>
          </div>
        </div>
      </section>

      {/* Work */}
      <section id="work" className="border-t border-black/20 pt-14">
        {/* Project 01 */}
        <div className="grid grid-cols-1 gap-8 py-14 md:grid-cols-2">
          <div>
            <p className="text-sm text-black/50">01 / PROJECT</p>
            <h2 className="mt-3 text-2xl">Project Name</h2>

            <p className="mt-4 max-w-md text-black/70">
              Short description: what the project does and what you implemented.
            </p>

            <p className="mt-4 text-sm text-black/60">
              Stack: React, Next.js, Tailwind, Firebase
            </p>

            <div className="mt-6 flex gap-5 text-sm">
              <a className="hover:underline underline-offset-4" href="#" target="_blank" rel="noreferrer">
                Live demo ↗
              </a>
              <a className="hover:underline underline-offset-4" href="#" target="_blank" rel="noreferrer">
                GitHub ↗
              </a>
            </div>
          </div>

          <a
            href="#"
            target="_blank"
            rel="noreferrer"
            className="block aspect-[16/10] w-full border border-black/15 bg-black/10"
            aria-label="Open project live demo"
          />
        </div>

        <div className="border-t border-black/20" />

        {/* Project 02 */}
        <div className="grid grid-cols-1 gap-8 py-14 md:grid-cols-2">
          <div>
            <p className="text-sm text-black/50">02 / PROJECT</p>
            <h2 className="mt-3 text-2xl">Project Name</h2>

            <p className="mt-4 max-w-md text-black/70">
              Short description: key feature, API integration, auth, payments, etc.
            </p>

            <p className="mt-4 text-sm text-black/60">
              Stack: React, TypeScript, Tailwind, Stripe
            </p>

            <div className="mt-6 flex gap-5 text-sm">
              <a className="hover:underline underline-offset-4" href="#" target="_blank" rel="noreferrer">
                Live demo ↗
              </a>
              <a className="hover:underline underline-offset-4" href="#" target="_blank" rel="noreferrer">
                GitHub ↗
              </a>
            </div>
          </div>

          <a
            href="#"
            target="_blank"
            rel="noreferrer"
            className="block aspect-[16/10] w-full border border-black/15 bg-black/10"
            aria-label="Open project live demo"
          />
        </div>

        <div className="border-t border-black/20" />

        {/* Project 03 */}
        <div className="grid grid-cols-1 gap-8 py-14 md:grid-cols-2">
          <div>
            <p className="text-sm text-black/50">03 / PROJECT</p>
            <h2 className="mt-3 text-2xl">Project Name</h2>

            <p className="mt-4 max-w-md text-black/70">
              Short description: what problem it solves + what you learned.
            </p>

            <p className="mt-4 text-sm text-black/60">
              Stack: React, Firebase Auth, Firestore
            </p>

            <div className="mt-6 flex gap-5 text-sm">
              <a className="hover:underline underline-offset-4" href="#" target="_blank" rel="noreferrer">
                Live demo ↗
              </a>
              <a className="hover:underline underline-offset-4" href="#" target="_blank" rel="noreferrer">
                GitHub ↗
              </a>
            </div>
          </div>

          <a
            href="#"
            target="_blank"
            rel="noreferrer"
            className="block aspect-[16/10] w-full border border-black/15 bg-black/10"
            aria-label="Open project live demo"
          />
        </div>

        <div className="border-t border-black/20" />

        {/* Project 04 */}
        <div className="grid grid-cols-1 gap-8 py-14 md:grid-cols-2">
          <div>
            <p className="text-sm text-black/50">04 / PROJECT</p>
            <h2 className="mt-3 text-2xl">Project Name</h2>

            <p className="mt-4 max-w-md text-black/70">
              Short description: landing page, animations, forms, deployment.
            </p>

            <p className="mt-4 text-sm text-black/60">
              Stack: React, Tailwind, API
            </p>

            <div className="mt-6 flex gap-5 text-sm">
              <a className="hover:underline underline-offset-4" href="#" target="_blank" rel="noreferrer">
                Live demo ↗
              </a>
              <a className="hover:underline underline-offset-4" href="#" target="_blank" rel="noreferrer">
                GitHub ↗
              </a>
            </div>
          </div>

          <a
            href="#"
            target="_blank"
            rel="noreferrer"
            className="block aspect-[16/10] w-full border border-black/15 bg-black/10"
            aria-label="Open project live demo"
          />
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16">
        <div className="border-t border-black/20 pt-10">
          <p className="text-lg">
            Want to work together?{" "}
            <a className="underline underline-offset-4" href="mailto:your@email.com">
              Let’s talk →
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}
