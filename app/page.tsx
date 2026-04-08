import { HeroGradientBlob } from "@/components/blocks/HeroGradientBlob";
import { LogoCloud } from "@/components/blocks/LogoCloud";
import { StatsCounter } from "@/components/blocks/StatsCounter";
import { FeaturesCards3D } from "@/components/blocks/FeaturesCards3D";
import { CTASparkles } from "@/components/blocks/CTASparkles";

export default function HomePage() {
  return (
    <div>
      <HeroGradientBlob
        title="Ship smarter with DHL logistics"
        subtitle="Express delivery, freight, and supply chain solutions with real-time visibility—built for speed, compliance, and scale."
        ctaLabel="Get a shipping quote"
        ctaHref="/pricing"
        secondaryCtaLabel="Track a shipment"
        secondaryCtaHref="/services#tracking"
        // Use brand colors as provided (component expects strings)
        gradientStart="#FFCC00"
        gradientEnd="#D40511"
      />

      <section className="py-24 md:py-24">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-black tracking-tight text-foreground md:text-4xl">
              Trusted by teams shipping worldwide
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              A logistics partner for ecommerce, manufacturing, healthcare, and enterprise operations—designed to keep
              shipments moving and customers informed.
            </p>
          </div>

          <div className="mt-10">
            <LogoCloud
              headline="Teams that rely on predictable delivery"
              logos={[
                {
                  name: "EcomCo",
                  imageUrl:
                    "data:image/svg+xml;utf8," +
                    encodeURIComponent(
                      `<svg xmlns='http://www.w3.org/2000/svg' width='220' height='64'><rect width='100%' height='100%' fill='white'/><text x='50%' y='55%' dominant-baseline='middle' text-anchor='middle' font-family='Arial' font-weight='700' font-size='26' fill='#333333'>EcomCo</text></svg>`
                    ),
                },
                {
                  name: "MedSupply",
                  imageUrl:
                    "data:image/svg+xml;utf8," +
                    encodeURIComponent(
                      `<svg xmlns='http://www.w3.org/2000/svg' width='220' height='64'><rect width='100%' height='100%' fill='white'/><text x='50%' y='55%' dominant-baseline='middle' text-anchor='middle' font-family='Arial' font-weight='700' font-size='26' fill='#333333'>MedSupply</text></svg>`
                    ),
                },
                {
                  name: "AutoParts",
                  imageUrl:
                    "data:image/svg+xml;utf8," +
                    encodeURIComponent(
                      `<svg xmlns='http://www.w3.org/2000/svg' width='220' height='64'><rect width='100%' height='100%' fill='white'/><text x='50%' y='55%' dominant-baseline='middle' text-anchor='middle' font-family='Arial' font-weight='700' font-size='26' fill='#333333'>AutoParts</text></svg>`
                    ),
                },
                {
                  name: "GlobalRetail",
                  imageUrl:
                    "data:image/svg+xml;utf8," +
                    encodeURIComponent(
                      `<svg xmlns='http://www.w3.org/2000/svg' width='220' height='64'><rect width='100%' height='100%' fill='white'/><text x='50%' y='55%' dominant-baseline='middle' text-anchor='middle' font-family='Arial' font-weight='700' font-size='26' fill='#333333'>GlobalRetail</text></svg>`
                    ),
                },
                {
                  name: "TechWare",
                  imageUrl:
                    "data:image/svg+xml;utf8," +
                    encodeURIComponent(
                      `<svg xmlns='http://www.w3.org/2000/svg' width='220' height='64'><rect width='100%' height='100%' fill='white'/><text x='50%' y='55%' dominant-baseline='middle' text-anchor='middle' font-family='Arial' font-weight='700' font-size='26' fill='#333333'>TechWare</text></svg>`
                    ),
                },
                {
                  name: "IndustrialPro",
                  imageUrl:
                    "data:image/svg+xml;utf8," +
                    encodeURIComponent(
                      `<svg xmlns='http://www.w3.org/2000/svg' width='220' height='64'><rect width='100%' height='100%' fill='white'/><text x='50%' y='55%' dominant-baseline='middle' text-anchor='middle' font-family='Arial' font-weight='700' font-size='26' fill='#333333'>IndustrialPro</text></svg>`
                    ),
                },
              ]}
            />
          </div>
        </div>
      </section>

      <StatsCounter
        bgColor="bg-primary text-primary-foreground"
        stats={[
          { label: "Countries served", value: "220+" },
          { label: "Daily shipments", value: "Millions" },
          { label: "Support coverage", value: "24/7" },
        ]}
      />

      <FeaturesCards3D
        badge="Built for speed and clarity"
        headline="Logistics that moves at your pace"
        subheadline="From pickup to proof of delivery—optimize every step with dependable service and clear visibility."
        features={[
          {
            icon: "Zap",
            title: "Express & time-definite delivery",
            description:
              "Meet deadlines with predictable transit times, priority handling, and proactive exception management when conditions change.",
          },
          {
            icon: "Plane",
            title: "Freight forwarding",
            description:
              "Air, ocean, and road freight options with routing expertise, consolidation strategies, and capacity planning for peak periods.",
          },
          {
            icon: "ShieldCheck",
            title: "Customs & compliance support",
            description:
              "Documentation guidance and clearance workflows to reduce border delays—especially for regulated or high-value goods.",
          },
          {
            icon: "Radar",
            title: "End-to-end tracking",
            description:
              "Milestone updates, delivery confirmation, and shareable tracking links that keep customers and internal teams aligned.",
          },
          {
            icon: "RotateCcw",
            title: "Returns & reverse logistics",
            description:
              "Streamlined returns labels, consolidation, and inspection flows to lower cost-to-serve and improve customer experience.",
          },
          {
            icon: "Leaf",
            title: "Sustainability options",
            description:
              "Route optimization and lower-impact choices that help reduce emissions while maintaining service-level performance.",
          },
        ]}
      />

      <section className="py-24 md:py-24" id="integrations">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-black tracking-tight text-foreground md:text-4xl">
              Integrations that fit your workflow
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Connect DHL shipping to your store, OMS, or ERP for faster label creation, fewer manual steps, and
              consistent status updates. (Informational only—no backend is connected.)
            </p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            <div className="rounded-xl border bg-background p-8 shadow-md">
              <h3 className="text-xl font-black tracking-tight text-foreground">Ecommerce platforms</h3>
              <p className="mt-3 text-muted-foreground">
                Sync orders, print labels, and automate customer notifications so your team can focus on fulfillment
                quality.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-foreground">
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-secondary" />
                  Shopify-style order sync for quick onboarding
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-secondary" />
                  Batch label printing for daily waves
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-secondary" />
                  Branded tracking pages to reduce “WISMO” tickets
                </li>
              </ul>
            </div>

            <div className="rounded-xl border bg-background p-8 shadow-md">
              <h3 className="text-xl font-black tracking-tight text-foreground">Warehouse & fulfillment</h3>
              <p className="mt-3 text-muted-foreground">
                Reduce pick/pack friction with scan-friendly flows, consistent label formats, and predictable manifests.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-foreground">
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-secondary" />
                  Barcode-ready labels for fast scanning
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-secondary" />
                  Manifest generation for clean handoff
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-secondary" />
                  Pickup scheduling to align dock operations
                </li>
              </ul>
            </div>

            <div className="rounded-xl border bg-background p-8 shadow-md">
              <h3 className="text-xl font-black tracking-tight text-foreground">APIs for custom builds</h3>
              <p className="mt-3 text-muted-foreground">
                Build shipping into your product with predictable endpoints and event-driven tracking patterns.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-foreground">
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-secondary" />
                  Rate & quote for checkout accuracy
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-secondary" />
                  Create shipment + label generation flows
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-secondary" />
                  Track events webhooks (client-side demo only)
                </li>
              </ul>
              <p className="mt-6 text-xs text-muted-foreground">
                Note: This site has no backend—API references are informational only.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="cta" className="py-24 md:py-24">
        <div className="container mx-auto max-w-7xl px-4">
          <CTASparkles
            headline="Ready to ship with confidence?"
            description="Compare plans, estimate costs, and get started in minutes. Keep customers informed with clear tracking milestones and delivery confirmation."
            ctaLabel="View pricing"
            ctaHref="/pricing"
            secondaryCtaLabel="Contact sales"
            secondaryCtaHref="/contact"
            sparkleColor="#D40511"
          />
        </div>
      </section>
    </div>
  );
}
