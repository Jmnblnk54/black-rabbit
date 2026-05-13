import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { ImagePlaceholder } from "@/components/image-placeholder";
import { CtaBanner } from "@/components/cta-banner";
import { posts, findPost } from "@/lib/journal";

type RouteParams = { slug: string };

export async function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<RouteParams>;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = findPost(slug);
  if (!p) return {};
  return {
    title: p.title,
    description: p.excerpt,
    alternates: { canonical: `/journal/${p.slug}` },
    openGraph: {
      type: "article",
      title: p.title,
      description: p.excerpt,
      publishedTime: p.date,
    },
  };
}

function fmtDate(d: string) {
  return new Date(d + "T12:00:00").toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<RouteParams>;
}) {
  const { slug } = await params;
  const post = findPost(slug);
  if (!post) notFound();

  const idx = posts.findIndex((p) => p.slug === post.slug);
  const next = posts[(idx + 1) % posts.length];

  return (
    <>
      <article className="container-x pt-12 md:pt-20">
        <Link
          href="/journal"
          className="inline-flex items-center gap-1.5 text-sm text-stone hover:text-bone"
        >
          <ArrowLeft className="h-4 w-4" /> Back to journal
        </Link>

        <header className="mt-8 max-w-3xl">
          <p className="text-xs uppercase tracking-[0.22em] text-stone">
            {post.tag} · {post.readMinutes} min read · {fmtDate(post.date)}
          </p>
          <h1 className="mt-4 font-display text-fluid-h1 leading-[0.98] tracking-tighter2 text-bone">
            {post.title}
          </h1>
          <p className="mt-5 max-w-prose text-stone md:text-lg">
            {post.excerpt}
          </p>
        </header>

        <div className="mt-12">
          <ImagePlaceholder
            label={post.title}
            tone="ember"
            aspect="16/9"
            seed={post.slug.length * 3}
          />
        </div>

        <div className="mx-auto mt-12 max-w-prose space-y-6 text-base leading-relaxed text-bone/90 md:text-lg">
          {post.body.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>

        <div className="mt-16 flex items-center justify-between border-t border-hairline pt-8">
          <p className="text-xs uppercase tracking-[0.2em] text-stone">
            Written by Julia Blank
          </p>
          {next && next.slug !== post.slug && (
            <Link
              href={`/journal/${next.slug}`}
              className="inline-flex items-center gap-2 text-sm text-bone hover:text-bone"
            >
              Read next: {next.title}
              <ArrowRight className="h-4 w-4" />
            </Link>
          )}
        </div>
      </article>

      <CtaBanner />
      <div className="h-24" />
    </>
  );
}
