import Link from "next/link";
import {
  ArrowDownRight,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";
import { ContactForm } from "@/components/contact-form";

const projects = [
  {
    title: "Atlas Analytics Platform",
    description:
      "Unified dashboard for product, revenue, and customer metrics with real-time alerting and custom KPI blends.",
    tags: ["Next.js", "Edge Functions", "TimescaleDB"],
    href: "https://example.com/atlas",
  },
  {
    title: "Loop UX Design System",
    description:
      "Component library and token strategy powering consistent multi-brand experiences across web and mobile.",
    tags: ["Figma", "Design Tokens", "Storybook"],
    href: "https://example.com/loop",
  },
  {
    title: "Pulse AI Coach",
    description:
      "Conversational AI that unblocks product teams with context-aware guidance and workflow automation.",
    tags: ["OpenAI", "TypeScript", "LangChain"],
    href: "https://example.com/pulse",
  },
];

const skillSets = [
  {
    title: "Strategy",
    items: ["Product discovery", "Roadmapping", "Experiment design"],
  },
  {
    title: "Build",
    items: ["TypeScript", "Next.js", "Node.js", "GraphQL", "tRPC"],
  },
  {
    title: "Design",
    items: ["Design systems", "Interaction design", "Accessibility"],
  },
  {
    title: "Collaboration",
    items: ["Team leadership", "Workshop facilitation", "Stakeholder coaching"],
  },
];

const socials = [
  {
    label: "Email",
    href: "mailto:hello@averythompson.com",
    icon: Mail,
  },
  {
    label: "GitHub",
    href: "https://github.com",
    icon: Github,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    icon: Linkedin,
  },
];

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-x-0 top-[-20%] h-[520px] bg-gradient-to-b from-sky-500/25 via-transparent to-transparent blur-3xl" />
        <div className="absolute left-1/2 top-1/2 size-[680px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-500/10 blur-3xl" />
      </div>

      <section className="section-padding pb-20 pt-32 md:pt-40" id="hero">
        <div className="mx-auto flex max-w-6xl flex-col gap-12 md:flex-row md:items-center">
          <div className="basis-3/5 space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs uppercase tracking-[0.3em] text-slate-300">
              Product Developer & Strategist
            </span>
            <div className="space-y-4">
              <h1 className="text-4xl font-semibold leading-tight text-white md:text-5xl lg:text-6xl">
                Avery Thompson builds confident digital experiences that move
                teams forward.
              </h1>
              <p className="max-w-xl text-lg text-slate-300">
                I translate ambitious product ideas into tangible results by
                blending customer insight, thoughtful design, and resilient
                engineering. Every interaction should feel effortless yet
                unmistakably intentional.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="#contact"
                className="group flex items-center justify-center gap-2 rounded-2xl bg-sky-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-sky-500/30 transition duration-200 hover:-translate-y-0.5 hover:bg-sky-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-200"
              >
                Let’s build together
                <ArrowDownRight className="size-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
              <Link
                href="#projects"
                className="flex items-center justify-center gap-2 rounded-2xl border border-white/20 px-6 py-3 text-sm font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:border-sky-400/60 hover:text-sky-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-200"
              >
                Explore recent work
              </Link>
            </div>
            <div className="grid gap-6 sm:grid-cols-3">
              {[
                { metric: "11+", label: "years shipping products" },
                { metric: "48", label: "teams coached cross-functionally" },
                { metric: "4.9/5", label: "average partner satisfaction" },
              ].map((item) => (
                <div
                  key={item.metric}
                  className="glass-panel rounded-2xl border border-white/10 px-5 py-6 transition duration-300 hover:-translate-y-1 hover:border-sky-400/60"
                >
                  <p className="text-3xl font-semibold text-white">
                    {item.metric}
                  </p>
                  <p className="mt-1 text-sm text-slate-300">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="basis-2/5">
            <div className="glass-panel relative overflow-hidden rounded-3xl border border-white/10 p-8">
              <div className="absolute inset-0 bg-gradient-to-br from-sky-500/15 via-transparent to-transparent" />
              <div className="relative space-y-6">
                <p className="text-base text-slate-300">
                  “Avery has a rare blend of product intuition and execution.
                  They bend complex roadmaps into crisp, human experiences.”
                </p>
                <div>
                  <p className="text-sm font-semibold text-white">
                    Lina Becker
                  </p>
                  <p className="text-xs text-slate-400">
                    VP Product, Northwind Labs
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="section-padding border-t border-white/5 bg-slate-900/40"
        id="about"
      >
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[1fr,1.2fr] md:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">
              About Me
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-white md:text-4xl">
              Confident leadership with empathetic delivery.
            </h2>
          </div>
          <div className="space-y-6 text-slate-300">
            <p>
              I lead product squads from fuzzy problem statements to measurable
              outcomes. My toolkit spans insight-driven research, strategic
              prioritization, and end-to-end build. I love guiding teams through
              pivotal shifts — new platform launches, design system rollouts,
              and AI-infused experiences that feel bespoke.
            </p>
            <p>
              Beyond the roadmap, I mentor emerging makers and facilitate
              high-trust collaboration. The goal: every teammate feels heard,
              every release feels grounded in customer value, and every pixel
              has a purpose.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding" id="projects">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">
                Projects
              </p>
              <h2 className="mt-4 text-3xl font-semibold text-white md:text-4xl">
                Selected work that teams rely on.
              </h2>
            </div>
            <Link
              href="https://example.com/case-studies"
              className="inline-flex items-center gap-2 text-sm font-semibold text-sky-300 transition hover:text-sky-200"
            >
              View case studies
              <ExternalLink className="size-4" />
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project) => (
              <Link
                key={project.title}
                href={project.href}
                className="group glass-panel flex h-full flex-col rounded-3xl border border-white/10 p-7 transition duration-300 hover:-translate-y-1 hover:border-sky-400/60"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-white group-hover:text-sky-200">
                    {project.title}
                  </h3>
                  <ArrowDownRight className="size-5 text-slate-400 transition-transform duration-200 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-sky-300" />
                </div>
                <p className="mt-4 flex-1 text-sm text-slate-300">
                  {project.description}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-slate-900/60 px-3 py-1 text-xs text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section
        className="section-padding border-t border-white/5 bg-slate-900/40"
        id="skills"
      >
        <div className="mx-auto max-w-6xl">
          <div className="mb-12">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">
              Skills
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-white md:text-4xl">
              End-to-end momentum, delivered with care.
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {skillSets.map((skillSet) => (
              <div
                key={skillSet.title}
                className="glass-panel rounded-3xl border border-white/10 p-8 transition duration-300 hover:-translate-y-1 hover:border-sky-400/60"
              >
                <h3 className="text-lg font-semibold text-white">
                  {skillSet.title}
                </h3>
                <ul className="mt-4 space-y-3 text-sm text-slate-300">
                  {skillSet.items.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="size-1.5 rounded-full bg-sky-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding" id="contact">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-[1.1fr,0.9fr] lg:items-start">
            <div className="space-y-6">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">
                Let’s Talk
              </p>
              <h2 className="text-3xl font-semibold text-white md:text-4xl">
                Tell me about your next milestone.
              </h2>
              <p className="text-base text-slate-300">
                Share a few lines about what you’re building. I’ll review within
                24 hours and respond with ideas, timelines, and the clearest way
                we can partner.
              </p>
              <div className="flex flex-wrap gap-4">
                {socials.map((social) => (
                  <Link
                    key={social.label}
                    href={social.href}
                    className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-slate-300 transition hover:-translate-y-0.5 hover:border-sky-400/60 hover:text-sky-200"
                  >
                    <social.icon className="size-4 text-sky-300 transition group-hover:text-sky-200" />
                    {social.label}
                  </Link>
                ))}
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>

      <footer className="border-t border-white/5 bg-slate-900/60">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 text-sm text-slate-400 md:flex-row md:items-center md:justify-between md:px-12 lg:px-20">
          <p>© {new Date().getFullYear()} Avery Thompson. All rights reserved.</p>
          <div className="flex items-center gap-6">
            {socials.map((social) => (
              <Link
                key={`footer-${social.label}`}
                href={social.href}
                className="flex items-center gap-2 transition hover:text-sky-200"
              >
                <social.icon className="size-4" />
                {social.label}
              </Link>
            ))}
          </div>
        </div>
      </footer>
    </main>
  );
}
