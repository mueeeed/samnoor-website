import { Container } from "@/components/ui/Container";
import { Kicker } from "@/components/ui/Kicker";
import { ShieldIcon, ClockIcon, PackageIcon, GlobeIcon, TruckIcon, SparkleIcon } from "@/components/ui/icons";

const REASONS = [
  {
    Icon: ShieldIcon,
    title: "Certified Quality",
    description: "ISO 9001, OEKO-TEX, WRAP, and SEDEX/SMETA audited manufacturing with in-line and pre-shipment inspection.",
  },
  {
    Icon: ClockIcon,
    title: "Reliable Lead Times",
    description: "18 to 30 day production on standard styles, held consistently across seasonal and repeat orders.",
  },
  {
    Icon: PackageIcon,
    title: "Private Label & OEM",
    description: "Custom labels, packaging, fabric development, and design support from concept to finished tech pack.",
  },
  {
    Icon: GlobeIcon,
    title: "Global Export Experience",
    description: "Shipping to 42 countries across the Middle East, Europe, North America, Africa, and Asia.",
  },
  {
    Icon: TruckIcon,
    title: "Flexible Logistics",
    description: "Air, sea (FCL/LCL), and express freight with EXW, FOB, CIF, and DDP terms supported.",
  },
  {
    Icon: SparkleIcon,
    title: "Considered Finish",
    description: "Hand-checked seams, colorfastness testing, and fabric sourced for drape as much as durability.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="bg-panel-alt py-20 sm:py-24">
      <Container>
        <div className="mb-12 flex flex-col gap-4 sm:mb-14">
          <Kicker>Why Samnoor</Kicker>
          <h2 className="font-heading text-3xl font-semibold text-heading sm:text-4xl">Built for Wholesale Partners</h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {REASONS.map(({ Icon, title, description }, i) => (
            <div key={title} className="card-premium flex flex-col gap-4 p-7">
              <div className="flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-accent/25 bg-accent/8 text-accent">
                  <Icon width={21} height={21} />
                </div>
                <span className="font-heading text-2xl text-line">{String(i + 1).padStart(2, "0")}</span>
              </div>
              <h3 className="font-heading text-lg font-semibold text-heading">{title}</h3>
              <p className="text-sm leading-relaxed text-muted">{description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
