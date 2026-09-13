import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { getPublishedPosts } from "@/lib/blog-store";
import { formatDate } from "@/lib/utils";
import { Kicker } from "@/components/ui/Kicker";
import { ArrowRightIcon } from "@/components/ui/icons";

export function BlogPreview() {
  const blogPosts = getPublishedPosts().slice(0, 3);

  return (
    <section className="py-20 sm:py-24">
      <Container>
        <div className="mb-12 flex flex-wrap items-end justify-between gap-4 sm:mb-14">
          <div className="flex flex-col gap-4">
            <Kicker>The Journal</Kicker>
            <h2 className="font-heading text-3xl font-semibold text-heading sm:text-4xl">From Sourcing to Shipping</h2>
          </div>
          <Link href="/blog" className="inline-flex items-center gap-1.5 font-body text-sm font-medium text-accent hover:underline">
            All articles
            <ArrowRightIcon width={15} height={15} />
          </Link>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
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
                <p className="text-sm leading-relaxed text-muted">{post.excerpt}</p>
                <span className="mt-1 text-xs text-muted">{formatDate(post.publishedAt)}</span>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
