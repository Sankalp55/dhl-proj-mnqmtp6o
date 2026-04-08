"use client";

import { useMemo, useState } from "react";
import { HeroGradientBlob } from "@/components/blocks/HeroGradientBlob";
import { PricingTable } from "@/components/blocks/PricingTable";
import { TestimonialsAnimated } from "@/components/blocks/TestimonialsAnimated";
import { FAQAccordion } from "@/components/blocks/FAQAccordion";
import { CTASparkles } from "@/components/blocks/CTASparkles";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function PricingPage() {
  const [billing, setBilling] = useState<"Monthly" | "Annual">("Monthly");

  const tiers = useMemo(() => {
    const isAnnual = billing === "Annual";
    return [
      {
        name: "Starter",
        price: isAnnual ? "$39" : "$49",
        period: isAnnual ? "/mo billed annually" : "/mo",
        description: "For small teams shipping occasionally.",
        features: ["Basic rate estimates", "Label templates", "Email support"],
        ctaLabel: "Choose Starter",
        ctaHref: "/contact",
        highlighted: false,
      },
      {
        name: "Standard",
        price: isAnnual ? "$119" : "$149",
        period: isAnnual ? "/mo billed annually" : "/mo",
        description: "For growing operations with regular shipments.",
        features: ["Batch labels", "Pickup scheduling (request)", "Tracking page customization", "Priority support"],
        ctaLabel: "Choose Standard",
        ctaHref: "/contact",
        highlighted: true,
      },
      {
        name: "Enterprise",
        price: "Custom",
        period: "",
        description: "For high-volume shipping and complex supply chains.",
        features: ["Dedicated account team", "Custom SLAs", "Integration guidance", "Operational reviews"],
        ctaLabel: "Contact Sales",
        ctaHref: "/contact",
        highlighted: false,
      },
    ];
  }, [billing]);

  return (
    <div>
      <HeroGradientBlob
        title="Simple pricing for fast-moving teams"
        subtitle="Choose a plan that matches your shipping volume. Upgrade anytime."
        ctaLabel="Start with Standard"
        ctaHref="/contact"
        secondaryCtaLabel="Compare plans"
        secondaryCtaHref="#pricing"
        gradientStart="#FFCC00"
        gradientEnd="#D40511"
      />

      <section id="pricing" className="py-24 md:py-24">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-black tracking-tight text-foreground md:text-4xl">
              Plans that scale with your volume
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Toggle monthly vs. annual for predictable budgeting. Annual billing includes a volume-based discount.
            </p>

            <div className="mt-8 flex items-center justify-center">
              <div className="inline-flex rounded-xl border bg-background p-1 shadow-sm">
                <Button
                  type="button"
                  variant={billing === "Monthly" ? "default" : "ghost"}
                  className={billing === "Monthly" ? "bg-secondary text-secondary-foreground" : ""}
                  onClick={() => setBilling("Monthly")}
                >
                  Monthly
                </Button>
                <Button
                  type="button"
                  variant={billing === "Annual" ? "default" : "ghost"}
                  className={billing === "Annual" ? "bg-secondary text-secondary-foreground" : ""}
                  onClick={() => setBilling("Annual")}
                >
                  Annual
                </Button>
              </div>
            </div>

            <p className="mt-3 text-sm text-muted-foreground">
              Annual plans are billed once per year; per-month pricing shown for comparison.
            </p>
          </div>
        </div>
      </section>

      <PricingTable
        headline="Choose the plan that fits your operation"
        subheadline="All plans include standardized label formats and clear tracking milestones. Shipping charges vary by lane and service level."
        tiers={tiers}
      />

      <section className="py-24 md:py-24 bg-muted/50">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-black tracking-tight text-foreground md:text-4xl">Compare features</h2>
            <p className="mt-4 text-lg text-muted-foreground">See what’s included across plans.</p>
          </div>

          <div className="mx-auto mt-12 max-w-5xl">
            <Card className="border bg-background shadow-md">
              <CardContent className="p-6 md:p-8">
                <div className="grid grid-cols-4 gap-4 text-sm">
                  <div className="font-bold text-foreground">Feature</div>
                  <div className="font-bold text-foreground">Starter</div>
                  <div className="font-bold text-foreground">Standard</div>
                  <div className="font-bold text-foreground">Enterprise</div>
                </div>

                <Separator className="my-5" />

                {[
                  { feature: "Rate estimates", starter: true, standard: true, enterprise: true },
                  { feature: "Batch label printing", starter: false, standard: true, enterprise: true },
                  { feature: "Pickup scheduling", starter: false, standard: true, enterprise: true },
                  { feature: "Custom SLAs", starter: false, standard: false, enterprise: true },
                  { feature: "Dedicated account team", starter: false, standard: false, enterprise: true },
                ].map((row) => (
                  <div key={row.feature} className="py-4">
                    <div className="grid grid-cols-4 gap-4 text-sm">
                      <div className="text-foreground">{row.feature}</div>
                      <div className="text-muted-foreground">{row.starter ? "Included" : "—"}</div>
                      <div className="text-muted-foreground">{row.standard ? "Included" : "—"}</div>
                      <div className="text-muted-foreground">{row.enterprise ? "Included" : "—"}</div>
                    </div>
                    <Separator className="mt-4" />
                  </div>
                ))}

                <p className="mt-4 text-xs text-muted-foreground">
                  Plans cover tooling and support. Shipping costs depend on lane, weight, dimensions, and service level.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <TestimonialsAnimated
        headline="Teams ship faster with fewer surprises"
        subheadline="Operational wins from customers who value reliability."
        autoplay
        testimonials={[
          {
            quote:
              "We reduced delivery exceptions by standardizing labels and tracking updates across regions. The visibility made daily standups far more actionable.",
            name: "Operations Lead",
            designation: "GlobalRetail",
            src:
              "data:image/svg+xml;utf8," +
              encodeURIComponent(
                `<svg xmlns='http://www.w3.org/2000/svg' width='256' height='256'><rect width='256' height='256' fill='white'/><circle cx='128' cy='96' r='44' fill='#FFCC00'/><rect x='52' y='150' width='152' height='70' rx='35' fill='#D40511'/></svg>`
              ),
          },
          {
            quote:
              "Freight routing guidance helped us stabilize lead times during peak season. We planned capacity earlier and avoided last-minute premium shipments.",
            name: "Supply Chain Manager",
            designation: "IndustrialPro",
            src:
              "data:image/svg+xml;utf8," +
              encodeURIComponent(
                `<svg xmlns='http://www.w3.org/2000/svg' width='256' height='256'><rect width='256' height='256' fill='white'/><circle cx='128' cy='96' r='44' fill='#FFCC00'/><rect x='52' y='150' width='152' height='70' rx='35' fill='#D40511'/></svg>`
              ),
          },
          {
            quote:
              "Clear tracking milestones lowered 'where is my order' tickets significantly. Our CX team could focus on real exceptions instead of status checks.",
            name: "CX Director",
            designation: "EcomCo",
            src:
              "data:image/svg+xml;utf8," +
              encodeURIComponent(
                `<svg xmlns='http://www.w3.org/2000/svg' width='256' height='256'><rect width='256' height='256' fill='white'/><circle cx='128' cy='96' r='44' fill='#FFCC00'/><rect x='52' y='150' width='152' height='70' rx='35' fill='#D40511'/></svg>`
              ),
          },
        ]}
      />

      <FAQAccordion
        headline="Pricing FAQs"
        subheadline="Everything you need to know before choosing a plan."
        items={[
          {
            question: "Are shipping rates included in the plan price?",
            answer:
              "Plans cover tooling and support; shipping costs depend on lane, weight, dimensions, and service level. Many teams use rate estimates to select the right service level at checkout or in the warehouse.",
          },
          {
            question: "Can I change plans later?",
            answer:
              "Yes—upgrade or switch plans anytime based on volume and operational needs. If your shipping profile changes (new regions, heavier parcels, freight), we’ll recommend the best fit.",
          },
          {
            question: "Do you offer volume discounts?",
            answer:
              "Yes—higher volumes can qualify for negotiated rates and enterprise agreements. Share your monthly shipment counts and top lanes for a tailored proposal.",
          },
          {
            question: "Is there a setup fee?",
            answer:
              "Starter and Standard have no setup fee. Enterprise may include onboarding depending on scope (multi-site rollout, integrations guidance, or custom SLA requirements).",
          },
        ]}
      />

      <section className="py-24 md:py-24">
        <div className="container mx-auto max-w-7xl px-4">
          <CTASparkles
            headline="Get a plan that matches your lanes and volume"
            description="Tell us what you ship, where it goes, and how fast it needs to arrive. We’ll recommend the right service level and workflow."
            ctaLabel="Contact sales"
            ctaHref="/contact"
            secondaryCtaLabel="Explore services"
            secondaryCtaHref="/services"
            sparkleColor="#D40511"
          />
        </div>
      </section>
    </div>
  );
}
