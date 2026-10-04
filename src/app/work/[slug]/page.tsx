import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import BrandLogo from "@/components/BrandLogo";
import { projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.client} | Mayank Shukla`,
    description: project.description,
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return notFound();

  return (
    <>
      <Navigation />
      <main className="bg-off-white">
        {/* Hero */}
        <section className="dark-section px-5 pt-32 pb-20 sm:px-8 lg:px-12">
          <Reveal>
            <Link
              href="/work"
              className="inline-flex items-center gap-2 text-[11px] tracking-[0.16em] uppercase text-off-white/50 hover:text-off-white mb-10"
            >
              ← Work Index
            </Link>
          </Reveal>

          <div className="flex flex-wrap items-center gap-4 mb-6">
            {project.brandfetchDomain && (
              <div className="h-9 opacity-90">
                <BrandLogo
                  name={project.client}
                  domain={project.brandfetchDomain}
                  theme="dark"
                  imgClassName="h-9"
                />
              </div>
            )}
          </div>

          <Reveal delay={0.1}>
            <h1 className="text-display text-[12vw] sm:text-[7vw] lg:text-[5.5vw] leading-[0.92] text-off-white max-w-5xl">
              {project.client}
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-6 max-w-2xl text-lg font-light text-off-white/70">
              {project.description}
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <dl className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4 border-t border-off-white/10 pt-8 max-w-3xl">
              <div>
                <dt className="text-[10px] tracking-[0.18em] uppercase text-off-white/40">Category</dt>
                <dd className="mt-1 text-sm text-off-white/80">{project.category}</dd>
              </div>
              <div>
                <dt className="text-[10px] tracking-[0.18em] uppercase text-off-white/40">Year</dt>
                <dd className="mt-1 text-sm text-off-white/80">{project.year}</dd>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <dt className="text-[10px] tracking-[0.18em] uppercase text-off-white/40">Role</dt>
                <dd className="mt-1 text-sm text-off-white/80">{project.role}</dd>
              </div>
              <div>
                <dt className="text-[10px] tracking-[0.18em] uppercase text-off-white/40">Client</dt>
                <dd className="mt-1 text-sm text-off-white/80">{project.employer}</dd>
              </div>
            </dl>
          </Reveal>
        </section>

        {project.status === "placeholder" || !project.sections ? (
          <section className="px-5 py-24 sm:px-8 lg:px-12">
            <Reveal>
              <div className="max-w-2xl rounded-2xl border border-black/10 bg-charcoal/[0.02] p-10">
                <p className="text-eyebrow text-xs text-royal mb-3">Case Study In Progress</p>
                <p className="text-black/60">
                  Full case study material for {project.client} is being prepared. Verified
                  project facts: {project.description}
                </p>
              </div>
            </Reveal>
          </section>
        ) : (
          <>
            {project.metrics && project.metrics.length > 0 && (
              <section className="px-5 py-20 sm:px-8 lg:px-12 border-b border-black/10">
                <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
                  {project.metrics.map((m, i) => (
                    <Reveal key={m.label} delay={i * 0.08}>
                      <span className="text-display block text-[12vw] sm:text-[5vw] lg:text-[3.6vw] leading-none text-royal">
                        {m.value}
                      </span>
                      <p className="mt-2 text-sm text-black/60">{m.label}</p>
                    </Reveal>
                  ))}
                </div>
              </section>
            )}

            <section className="px-5 py-20 sm:px-8 lg:px-12">
              <div className="mx-auto max-w-3xl space-y-20">
                {project.sections.map((section) => (
                  <Reveal key={section.heading}>
                    <h2 className="text-eyebrow text-xs text-royal mb-5">{section.heading}</h2>
                    <div className="space-y-4">
                      {section.body.map((para, i) => (
                        <p key={i} className="text-xl sm:text-2xl font-light leading-snug text-black/85">
                          {para}
                        </p>
                      ))}
                    </div>
                  </Reveal>
                ))}
              </div>
            </section>

            {project.talent && project.talent.length > 0 && (
              <section className="px-5 pb-20 sm:px-8 lg:px-12">
                <div className="mx-auto max-w-3xl">
                  <Reveal>
                    <Link
                      href="/talent"
                      className="inline-flex items-center gap-2 rounded-full border border-black/15 px-6 py-3 text-xs tracking-[0.16em] uppercase hover:border-royal hover:text-royal transition-colors"
                    >
                      View Talent Bytes for this project <span aria-hidden>→</span>
                    </Link>
                  </Reveal>
                </div>
              </section>
            )}

            {/* Visual archive placeholder strip */}
            <section className="px-5 pb-24 sm:px-8 lg:px-12">
              <div className="mx-auto max-w-5xl">
                <Reveal>
                  <p className="text-eyebrow text-xs text-royal mb-6">09. Visual Archive</p>
                </Reveal>
                <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2">
                  {[0, 1, 2].map((i) => (
                    <div
                      key={i}
                      className="aspect-[4/3] w-[70vw] sm:w-[36vw] lg:w-[26vw] shrink-0 rounded-xl bg-charcoal flex items-center justify-center"
                    >
                      <span className="text-off-white/20 text-xs tracking-[0.18em] uppercase">
                        Image Pending
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </>
        )}
      </main>
      <Footer />
    </>
  );
}
