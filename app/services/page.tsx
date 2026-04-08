"use client";

import { useMemo, useState } from "react";
import { HeroGradientBlob } from "@/components/blocks/HeroGradientBlob";
import { FeaturesGrid } from "@/components/blocks/FeaturesGrid";
import { FAQAccordion } from "@/components/blocks/FAQAccordion";
import { CTASparkles } from "@/components/blocks/CTASparkles";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

export default function ServicesPage() {
  const [trackingNumber, setTrackingNumber] = useState("");
  const [showResults, setShowResults] = useState(false);

  const mockTimeline = useMemo(
    () => [
      { label: "Label created", detail: "Shipment details received and label generated.", status: "Complete" },
      { label: "Picked up", detail: "Courier pickup confirmed at origin facility.", status: "Complete" },
      { label: "In transit", detail: "Linehaul movement in progress with milestone scans.", status: "In progress" },
      { label: "Out for delivery", detail: "Final-mile courier assigned for delivery window.", status: "Next" },
      { label: "Delivered", detail: "Proof of delivery recorded and shared.", status: "Upcoming" },
    ],
    []
  );

  return (
    <div>
      <HeroGradientBlob
        title="Services built for every shipment type"
        subtitle="Choose express, freight, or supply chain support—then tailor speed, cost, and coverage to your needs."
        ctaLabel="Get a quote"
        ctaHref="/pricing"
        secondaryCtaLabel="Talk to an expert"
        secondaryCtaHref="/contact"
        gradientStart="#FFCC00"
        gradientEnd="#D40511"
      />

      <FeaturesGrid
        badge="Core offerings"
        headline="Core logistics offerings"
        subheadline="Pick the service that matches your timeline and cargo profile—then standardize the workflow from label to delivery confirmation."
        features={[
          {
            icon: "Timer",
            title: "Express Shipping",
            description:
              "Time-definite delivery for documents and parcels with priority handling, predictable handoffs, and proactive exception management.",
          },
          {
            icon: "Ship",
            title: "Freight Forwarding",
            description:
              "Air, ocean, and road freight with flexible routing, consolidation options, and capacity planning for seasonal demand.",
          },
          {
            icon: "Warehouse",
            title: "Warehousing & Fulfillment",
            description:
              "Storage, pick/pack, and distribution designed for scale—optimize throughput with scan-friendly labels and clear SOPs.",
          },
          {
            icon: "Network",
            title: "Supply Chain Solutions",
            description:
              "Network design, inventory strategy, and operational optimization to reduce lead-time variability and improve service levels.",
          },
        ]}
      />

      <section id="tracking" className="py-24 md:py-24 bg-muted/50">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-black tracking-tight text-foreground md:text-4xl">
              Track shipments in seconds
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Shareable tracking and clear milestone updates for your customers and teams. Demo only—results are
              illustrative and generated client-side.
            </p>
          </div>

          <div className="mx-auto mt-12 max-w-3xl">
            <Card className="border bg-background shadow-md">
              <CardContent className="p-6 md:p-8">
                <div className="flex flex-col gap-4 md:flex-row md:items-end">
                  <div className="flex-1">
                    <label className="text-sm font-medium text-foreground">Tracking number</label>
                    <Input
                      value={trackingNumber}
                      onChange={(e) => setTrackingNumber(e.target.value)}
                      placeholder="e.g., DHL123456789"
                      className="mt-2"
                      inputMode="text"
                    />
                    <p className="mt-2 text-xs text-muted-foreground">
                      Tip: Try any value. We’ll show a standard milestone timeline.
                    </p>
                  </div>
                  <Button
                    className="md:w-40"
                    onClick={() => {
                      setShowResults(true);
                    }}
                    disabled={trackingNumber.trim().length < 6}
                  >
                    Track
                  </Button>
                </div>

                {showResults && (
                  <div className="mt-8">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div>
                        <p className="text-sm text-muted-foreground">Demo tracking for</p>
                        <p className="text-lg font-black tracking-tight text-foreground">
                          {trackingNumber.trim() || "—"}
                        </p>
                      </div>
                      <Badge variant="secondary" className="bg-secondary text-secondary-foreground">
                        Client-side demo
                      </Badge>
                    </div>

                    <div className="mt-6 space-y-3">
                      {mockTimeline.map((step, idx) => (
                        <div key={idx} className="rounded-xl border bg-background p-4">
                          <div className="flex flex-col gap-1 md:flex-row md:items-center md:justify-between">
                            <p className="font-bold text-foreground">{step.label}</p>
                            <span className="text-xs text-muted-foreground">{step.status}</span>
                          </div>
                          <p className="mt-1 text-sm text-muted-foreground">{step.detail}</p>
                        </div>
                      ))}
                    </div>

                    <p className="mt-6 text-xs text-muted-foreground">
                      Note: No backend is connected. For production tracking, integrate with your carrier events feed.
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-24">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-black tracking-tight text-foreground md:text-4xl">Connect to your stack</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Reduce manual work with shipping automation and consistent status updates—so operations, finance, and CX
              stay aligned.
            </p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-2">
            <div className="rounded-xl border bg-background p-8 shadow-md">
              <h3 className="text-xl font-black tracking-tight text-foreground">Order import & label creation</h3>
              <p className="mt-3 text-muted-foreground">
                Import orders and generate labels with consistent formatting—ideal for multi-site fulfillment and
                standardized pack stations.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-foreground">
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-secondary" />
                  CSV import (client-side demo patterns)
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-secondary" />
                  Address validation hints to reduce returns
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-secondary" />
                  Label templates for consistent barcodes and zones
                </li>
              </ul>
            </div>

            <div className="rounded-xl border bg-background p-8 shadow-md">
              <h3 className="text-xl font-black tracking-tight text-foreground">Notifications & tracking pages</h3>
              <p className="mt-3 text-muted-foreground">
                Keep customers informed without extra support tickets—clear milestones, delivery confirmation, and
                standardized messaging.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-foreground">
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-secondary" />
                  Email templates (static examples)
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-secondary" />
                  Shareable tracking links for self-serve updates
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-secondary" />
                  Delivery confirmation to close the loop
                </li>
              </ul>
            </div>
          </div>

          <p className="mx-auto mt-8 max-w-3xl text-center text-sm text-muted-foreground">
            No backend: integration references are informational; any “imports” or “events” shown here are non-persistent
            client-side demos.
          </p>
        </div>
      </section>

      <FAQAccordion
        headline="Service FAQs"
        subheadline="Quick answers to common shipping questions."
        items={[
          {
            question: "What information do I need to create a shipment?",
            answer:
              "Origin, destination, package dimensions/weight, contents description, and any customs details for cross-border shipments. For regulated goods, include handling requirements and commodity codes where applicable.",
          },
          {
            question: "Do you support international customs documentation?",
            answer:
              "Yes—our guidance helps you prepare commercial invoices and required declarations. Clear item descriptions, accurate values, and consistent shipper/consignee data reduce delays.",
          },
          {
            question: "Can I schedule pickups?",
            answer:
              "Yes—pickup scheduling is available depending on service and location. Many teams align pickups with daily cutoffs to keep outbound waves predictable.",
          },
          {
            question: "How do returns work?",
            answer:
              "You can generate return labels and consolidate returns to reduce cost and improve customer experience. Reverse logistics workflows can include inspection, refurbishment, and restocking rules.",
          },
        ]}
      />

      <section className="py-24 md:py-24">
        <div className="container mx-auto max-w-7xl px-4">
          <CTASparkles
            headline="Move shipments faster—with fewer surprises"
            description="Standardize labels, tracking, and exception handling across regions. Choose a plan that matches your volume and lanes."
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
