import { Container } from "@/components/ui/Container";
import { testimonials } from "@/content/testimonials";
import { Kicker } from "@/components/ui/Kicker";
import { StarIcon } from "@/components/ui/icons";

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export function Testimonials() {
  return (
    <section className="py-20 sm:py-24">
      <Container>
        <div className="mb-12 flex flex-col gap-4 sm:mb-14">
          <Kicker>Client Voices</Kicker>
          <h2 className="font-heading text-3xl font-semibold text-heading sm:text-4xl">Trusted by Wholesale Partners</h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {testimonials.map((testimonial) => (
            <figure key={testimonial.name} className="card-premium relative flex flex-col gap-4 p-8">
              <span
                aria-hidden="true"
                className="pointer-events-none absolute right-6 top-4 font-display text-7xl leading-none text-accent/10"
              >
                &rdquo;
              </span>
              <div className="flex gap-1 text-gold-deep">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon key={i} width={15} height={15} />
                ))}
              </div>
              <blockquote className="relative font-heading text-lg leading-relaxed text-ink">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-auto flex items-center gap-3 border-t border-line pt-5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/10 font-heading text-sm font-semibold text-accent">
                  {initials(testimonial.name)}
                </span>
                <span className="text-sm">
                  <span className="block font-semibold text-heading">{testimonial.name}</span>
                  <span className="text-muted">
                    {testimonial.role}, {testimonial.company} &middot; {testimonial.country}
                  </span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
