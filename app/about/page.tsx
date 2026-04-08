import { HeroGradientBlob } from "@/components/blocks/HeroGradientBlob";
import { FeaturesCards3D } from "@/components/blocks/FeaturesCards3D";
import { StatsCounter } from "@/components/blocks/StatsCounter";
import { CTASparkles } from "@/components/blocks/CTASparkles";

export default function AboutPage() {
  return (
    <div>
      <HeroGradientBlob
        title="Built to deliver—every day"
        subtitle="DHL connects people and businesses through a global logistics network designed for speed, reliability, and transparency."
        ctaLabel="Explore services"
        ctaHref="/services"
        secondaryCtaLabel="Contact us"
        secondaryCtaHref="/contact"
        gradientStart="#FFCC00"
        gradientEnd="#D40511"
      />

      <section className="py-24 md:py-24">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-black tracking-tight text-foreground md:text-4xl">Our mission</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Make logistics feel effortless—through operational excellence and clear communication. That means fewer
              surprises, faster decisions, and consistent delivery experiences across regions.
            </p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            <div className="rounded-xl border bg-background p-8 shadow-md">
              <h3 className="text-xl font-black tracking-tight text-foreground">Reliability</h3>
              <p className="mt-3 text-muted-foreground">
                Consistent processes and proactive exception handling to keep shipments moving—especially during peak
                demand, weather disruptions, or capacity constraints.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-foreground">
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-secondary" />
                  Standardized handoffs and scan events
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-secondary" />
                  Clear cutoffs and service-level expectations
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-secondary" />
                  Actionable exception paths for ops teams
                </li>
              </ul>
            </div>

            <div className="rounded-xl border bg-background p-8 shadow-md">
              <h3 className="text-xl font-black tracking-tight text-foreground">Visibility</h3>
              <p className="mt-3 text-muted-foreground">
                Milestone tracking and clear status updates for customers and internal teams—so everyone works from the
                same source of truth.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-foreground">
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-secondary" />
                  Shareable tracking links and delivery confirmation
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-secondary" />
                  Consistent event naming across regions
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-secondary" />
                  Reduced “where is my order” support volume
                </li>
              </ul>
            </div>

            <div className="rounded-xl border bg-background p-8 shadow-md">
              <h3 className="text-xl font-black tracking-tight text-foreground">Partnership</h3>
              <p className="mt-3 text-muted-foreground">
                Solutions tailored to your lanes, volume, and compliance needs—from express parcels to multi-modal
                freight and operational reviews.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-foreground">
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-secondary" />
                  Service-level selection by lane and urgency
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-secondary" />
                  Documentation guidance for cross-border shipping
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-secondary" />
                  Continuous improvement through operational feedback
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <FeaturesCards3D
        badge="Operational outcomes"
        headline="What we optimize for"
        subheadline="Practical improvements that matter in modern logistics—speed, predictability, and a better customer experience."
        features={[
          {
            icon: "Clock",
            title: "On-time performance",
            description:
              "Service-level focus with continuous improvement loops—identify bottlenecks, tighten cutoffs, and standardize exception playbooks.",
          },
          {
            icon: "Shield",
            title: "Risk reduction",
            description:
              "Customs-ready documentation and compliance-aware handling to reduce border delays and avoid costly rework.",
          },
          {
            icon: "PiggyBank",
            title: "Cost control",
            description:
              "Right-size service levels and consolidate where it makes sense—reduce premium shipments and improve packaging discipline.",
          },
          {
            icon: "Smile",
            title: "Customer experience",
            description:
              "Clear tracking and delivery confirmation to reduce support load and build trust—especially for cross-border deliveries.",
          },
        ]}
      />

      <StatsCounter
        bgColor="bg-primary text-primary-foreground"
        stats={[
          { label: "Regions supported", value: "Americas, EMEA, APAC" },
          { label: "Modes", value: "Air • Ocean • Road" },
          { label: "Capabilities", value: "Express • Freight • Warehousing" },
        ]}
      />

      <section className="py-24 md:py-24">
        <div className="container mx-auto max-w-7xl px-4">
          <CTASparkles
            headline="Let’s design your shipping workflow"
            description="Tell us your lanes and volume—get a plan that fits. We’ll help you choose service levels, standardize labels, and improve tracking clarity."
            ctaLabel="Request a consultation"
            ctaHref="/contact"
            secondaryCtaLabel="See pricing"
            secondaryCtaHref="/pricing"
            sparkleColor="#D40511"
          />
        </div>
      </section>
    </div>
  );
}
