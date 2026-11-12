import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import BrandLogo from "@/components/BrandLogo";
import PillCta from "@/components/PillCta";
import InstagramEmbed from "@/components/InstagramEmbed";
import DriveVideo from "@/components/DriveVideo";
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
              className="inline-flex items-center gap-3 group mb-10"
            >
              <span className="circle-btn h-9 w-9 border border-off-white/25 text-off-white group-hover:bg-off-white group-hover:text-black">
                ←
              </span>
              <span className="text-[11px] tracking-[0.16em] uppercase text-off-white/50 group-hover:text-off-white">
                Work Index
              </span>
            </Link>
          </Reveal>

          <div className="flex flex-wrap items-center gap-4 mb-6">
            {project.brandfetchDomain && (
              <div className="h-14 rounded-lg bg-white px-4 flex items-center">
                <BrandLogo
                  name={project.client}
                  domain={project.brandfetchDomain}
                  theme="light"
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
          <>
            <section className="px-5 pt-24 sm:px-8 lg:px-12">
              <Reveal>
                <div className="max-w-2xl rounded-2xl border border-black/10 p-10">
                  <p className="text-eyebrow text-xs text-royal mb-3">Case Study In Progress</p>
                  <p className="text-black/60">
                    Full case study material for {project.client} is being prepared. Verified
                    project facts: {project.description}
                  </p>
                </div>
              </Reveal>
            </section>
            {((project.instagramEmbeds?.length ?? 0) > 0 || (project.driveVideoIds?.length ?? 0) > 0) && (
              <VisualArchive project={project} />
            )}
          </>
        ) : (
          <>
            {project.metrics && project.metrics.length > 0 && (
              <section className="px-5 py-20 sm:px-8 lg:px-12">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                  {project.metrics.map((m, i) => (
                    <Reveal key={m.label} delay={i * 0.08}>
                      <div
                        className={`rounded-2xl p-7 h-full min-h-[160px] flex flex-col justify-between ${
                          i % 2 === 0 ? "bg-charcoal text-off-white" : "bg-off-white border border-black/10 text-black"
                        }`}
                      >
                        <span className="text-display block text-[12vw] sm:text-[4.5vw] lg:text-[2.8vw] leading-none">
                          {m.value}
                        </span>
                        <p className={`mt-2 text-sm ${i % 2 === 0 ? "text-off-white/55" : "text-black/55"}`}>
                          {m.label}
                        </p>
                      </div>
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
                    <PillCta href="/talent" variant="outline">
                      View Talent Bytes for this project
                    </PillCta>
                  </Reveal>
                </div>
              </section>
            )}

            <VisualArchive project={project} />
          </>
        )}
      </main>
      <Footer />
    </>
  );
}

function VisualArchive({ project }: { project: (typeof projects)[number] }) {
  const hasReal =
    (project.instagramEmbeds && project.instagramEmbeds.length > 0) ||
    (project.driveVideoIds && project.driveVideoIds.length > 0);

  return (
    <section className="px-5 pb-24 pt-16 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <p className="text-eyebrow text-xs text-royal mb-6">09. Visual Archive</p>
        </Reveal>

        {hasReal ? (
          <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2">
            {project.driveVideoIds?.map((id) => (
              <div key={id} className="w-[80vw] sm:w-[42vw] lg:w-[30vw] shrink-0">
                <DriveVideo fileId={id} title={project.client} />
              </div>
            ))}
            {project.instagramEmbeds?.map((url) => (
              <div key={url} className="w-[80vw] sm:w-[36vw] lg:w-[26vw] shrink-0">
                <InstagramEmbed url={url} />
              </div>
            ))}
          </div>
        ) : (
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
        )}
      </div>
    </section>
  );
}
