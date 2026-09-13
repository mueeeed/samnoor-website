import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Kicker } from "@/components/ui/Kicker";
import { LinkButton } from "@/components/ui/Button";
import { certifications, testingCapabilities } from "@/content/certifications";
import { placeholder } from "@/lib/placeholder-image";
import { ShieldIcon, CheckIcon, ArrowRightIcon } from "@/components/ui/icons";

export const metadata: Metadata = {
  title: "Certifications",
  description: "SamNoor's quality, safety, and ethical manufacturing certifications — ISO 9001, OEKO-TEX, WRAP, SEDEX/SMETA, and BSCI.",
};

export default function CertificationsPage() {
  return (
    <>
      <PageHero
        kicker="Certifications"
        title="Audited to International Standard"
        description="Six certifications covering quality management, fabric safety, and ethical manufacturing, verified through regular third-party audit."
        image={placeholder("cert-hero", "Certification and audit documents on a desk")}
      />

      <section className="py-20 sm:py-24">
        <Container>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {certifications.map((cert) => (
              <div key={cert.name} className="card-premium flex flex-col gap-4 p-7">
                <div className="flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full border border-accent/25 bg-accent/8 text-accent">
                    <ShieldIcon width={21} height={21} />
                  </span>
                  <span className="text-xs uppercase tracking-widest text-muted">Since {cert.year}</span>
                </div>
                <h3 className="font-heading text-lg font-semibold text-heading">{cert.name}</h3>
                <p className="text-xs font-medium uppercase tracking-wide text-accent">{cert.issuer}</p>
                <p className="text-sm leading-relaxed text-muted">{cert.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-panel-alt py-20 sm:py-24">
        <Container className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col gap-4">
            <Kicker>Testing Capabilities</Kicker>
            <h2 className="font-heading text-3xl font-semibold text-heading sm:text-4xl">What We Test, Every Batch</h2>
            <p className="text-muted">
              Fabric batches are checked against specification before cutting begins, and every finished order
              passes through in-line and pre-final inspection before it reaches your container.
            </p>
            <LinkButton href="/manufacturing" variant="outline" className="mt-2 w-fit">
              See Our Process
              <ArrowRightIcon width={16} height={16} />
            </LinkButton>
          </div>
          <ul className="flex flex-col gap-3">
            {testingCapabilities.map((item) => (
              <li key={item} className="card-premium flex items-center gap-3 px-5 py-4 text-sm text-ink">
                <CheckIcon width={18} height={18} className="shrink-0 text-accent" />
                {item}
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </>
  );
}
