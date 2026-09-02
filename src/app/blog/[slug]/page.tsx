import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { blogPosts, getBlogPostBySlug, getRelatedPosts } from "@/content/blog";
import { formatDate } from "@/lib/utils";
import { ArrowRightIcon } from "@/components/ui/icons";

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  const related = getRelatedPosts(post);

  return (
    <article>
      <section className="relative overflow-hidden bg-noir">
        <div className="absolute inset-0">
          <Image src={post.coverImage.src} alt={post.coverImage.alt} fill priority sizes="100vw" className="object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-t from-noir via-noir/85 to-noir/60" />
        </div>
        <Container className="relative z-10 flex flex-col gap-4 py-16 sm:py-20">
          <nav className="flex items-center gap-2 text-xs text-cream/55">
            <Link href="/" className="hover:text-gold">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-gold">Journal</Link>
            <span>/</span>
            <span className="text-cream/80">{post.title}</span>
          </nav>
          <span className="text-xs font-medium uppercase tracking-[0.25em] text-gold">
            {post.category} &middot; {post.readingTime}
          </span>
          <h1 className="text-gold-gradient max-w-3xl text-balance font-heading text-3xl font-semibold leading-[1.15] sm:text-4xl lg:text-5xl">
            {post.title}
          </h1>
          <p className="text-sm text-cream/70">
            By {post.author}, {post.authorRole} &middot; {formatDate(post.publishedAt)}
          </p>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-3xl">
            <div className="prose-samnoor" dangerouslySetInnerHTML={{ __html: post.content }} />

            {post.faqs && post.faqs.length > 0 && (
              <div className="mt-10 flex flex-col gap-4 border-t border-line pt-10">
                <h2 className="font-heading text-2xl font-semibold text-heading">Related Questions</h2>
                {post.faqs.map((faq) => (
                  <details key={faq.question} className="card-premium group px-6 py-5">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-heading text-base font-semibold text-heading">
                      {faq.question}
                      <span className="shrink-0 text-accent transition-transform group-open:rotate-45">+</span>
                    </summary>
                    <p className="mt-3 text-sm leading-relaxed text-muted">{faq.answer}</p>
                  </details>
                ))}
              </div>
            )}

            <div className="mt-10 flex flex-wrap gap-2 border-t border-line pt-8">
              {post.tags.map((tag) => (
                <span key={tag} className="rounded-full border border-line bg-panel-alt px-3 py-1 text-xs text-muted">
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {related.length > 0 && (
        <section className="bg-panel-alt py-16 sm:py-20">
          <Container>
            <h2 className="mb-8 font-heading text-2xl font-semibold text-heading sm:text-3xl">More from the Journal</h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => (
                <Link key={p.slug} href={`/blog/${p.slug}`} className="card-premium group flex flex-col gap-4 overflow-hidden">
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <Image
                      src={p.coverImage.src}
                      alt={p.coverImage.alt}
                      fill
                      sizes="(min-width: 1024px) 30vw, 90vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-col gap-2 px-6 pb-6">
                    <span className="text-xs font-medium uppercase tracking-widest text-accent">{p.category}</span>
                    <h3 className="font-heading text-base font-semibold text-heading transition-colors group-hover:text-accent">
                      {p.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
            <div className="mt-10 text-center">
              <Link href="/blog" className="inline-flex items-center gap-1.5 font-body text-sm font-medium text-accent hover:underline">
                All articles
                <ArrowRightIcon width={15} height={15} />
              </Link>
            </div>
          </Container>
        </section>
      )}
    </article>
  );
}
