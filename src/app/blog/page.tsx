"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { formatDate } from "@/lib/utils";
import { placeholder } from "@/lib/placeholder-image";
import type { BlogPost } from "@/content/types";

export default function BlogIndexPage() {
  const [posts, setPosts] = useState<BlogPost[] | null>(null);

  useEffect(() => {
    fetch("/php-api/posts-public.php?action=list")
      .then((res) => (res.ok ? res.json() : { posts: [] }))
      .then((data) => setPosts(data.posts || []))
      .catch(() => setPosts([]));
  }, []);

  const featured = posts?.[0];
  const rest = posts?.slice(1) ?? [];

  return (
    <>
      <PageHero
        kicker="The Journal"
        title="From Sourcing to Shipping"
        description="Notes from our product development, quality, and export teams for wholesale and private label buyers."
        image={placeholder("blog-hero", "Wide view of the SamNoor factory production floor")}
        crumb="Journal"
      />

      <section className="py-20 sm:py-24">
        <Container>
          {posts === null && <div className="py-16 text-center text-muted">Loading…</div>}
          {posts !== null && posts.length === 0 && (
            <div className="py-16 text-center text-muted">No articles published yet.</div>
          )}

          {featured && (
            <Link href={`/blog/${featured.slug}`} className="card-premium group grid overflow-hidden lg:grid-cols-2">
              <div className="relative aspect-[16/10] w-full overflow-hidden lg:aspect-auto">
                <Image
                  src={featured.coverImage.src}
                  alt={featured.coverImage.alt}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col justify-center gap-3 p-8 sm:p-10">
                <span className="text-xs font-medium uppercase tracking-widest text-accent">
                  {featured.category} &middot; {featured.readingTime}
                </span>
                <h2 className="font-heading text-2xl font-semibold text-heading transition-colors group-hover:text-accent sm:text-3xl">
                  {featured.title}
                </h2>
                <p className="text-sm leading-relaxed text-muted">{featured.excerpt}</p>
                <span className="mt-2 text-xs text-muted">
                  {featured.author} &middot; {formatDate(featured.publishedAt)}
                </span>
              </div>
            </Link>
          )}

          <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="card-premium group flex flex-col gap-4 overflow-hidden">
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={post.coverImage.src}
                    alt={post.coverImage.alt}
                    fill
                    sizes="(min-width: 1024px) 30vw, 90vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-col gap-2 px-6 pb-6">
                  <span className="text-xs font-medium uppercase tracking-widest text-accent">
                    {post.category} &middot; {post.readingTime}
                  </span>
                  <h3 className="font-heading text-lg font-semibold text-heading transition-colors group-hover:text-accent">
                    {post.title}
                  </h3>
                  <p className="line-clamp-2 text-sm leading-relaxed text-muted">{post.excerpt}</p>
                  <span className="mt-1 text-xs text-muted">{formatDate(post.publishedAt)}</span>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
