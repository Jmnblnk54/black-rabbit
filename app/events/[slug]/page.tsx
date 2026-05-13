import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseStudyTemplate } from "@/components/case-study-template";
import {
  caseStudiesByVertical,
  findCaseStudy,
} from "@/lib/case-studies";

type RouteParams = { slug: string };

export async function generateStaticParams() {
  return caseStudiesByVertical("events").map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<RouteParams>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = findCaseStudy(slug);
  if (!study) return {};
  return {
    title: study.title,
    description: study.summary,
    alternates: { canonical: `/events/${study.slug}` },
    openGraph: { title: study.title, description: study.summary },
  };
}

export default async function EventCaseStudy({
  params,
}: {
  params: Promise<RouteParams>;
}) {
  const { slug } = await params;
  const study = findCaseStudy(slug);
  if (!study || study.vertical !== "events") notFound();

  const siblings = caseStudiesByVertical("events");
  const idx = siblings.findIndex((s) => s.slug === study.slug);
  const next = siblings[(idx + 1) % siblings.length];

  return (
    <CaseStudyTemplate
      study={study}
      next={
        next && next.slug !== study.slug
          ? { slug: next.slug, title: next.title, vertical: next.vertical }
          : undefined
      }
    />
  );
}
