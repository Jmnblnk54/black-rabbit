import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseStudyTemplate } from "@/components/case-study-template";
import {
  caseStudies,
  caseStudiesByVertical,
  findCaseStudy,
} from "@/lib/case-studies";

type RouteParams = { slug: string };

export async function generateStaticParams() {
  return caseStudiesByVertical("weddings").map((c) => ({ slug: c.slug }));
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
    alternates: { canonical: `/weddings/${study.slug}` },
    openGraph: { title: study.title, description: study.summary },
  };
}

export default async function WeddingCaseStudy({
  params,
}: {
  params: Promise<RouteParams>;
}) {
  const { slug } = await params;
  const study = findCaseStudy(slug);
  if (!study || study.vertical !== "weddings") notFound();

  const siblings = caseStudiesByVertical("weddings");
  const idx = siblings.findIndex((s) => s.slug === study.slug);
  const next = siblings[(idx + 1) % siblings.length];

  return (
    <CaseStudyTemplate
      study={study}
      next={
        next
          ? { slug: next.slug, title: next.title, vertical: next.vertical }
          : undefined
      }
    />
  );
}
