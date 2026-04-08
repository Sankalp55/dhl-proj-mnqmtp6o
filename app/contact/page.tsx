import { HeroGradientBlob } from "@/components/blocks/HeroGradientBlob";
import { ContactForm } from "@/components/blocks/ContactForm";
import { FAQAccordion } from "@/components/blocks/FAQAccordion";
import { CTASparkles } from "@/components/blocks/CTASparkles";

export default function ContactPage() {
  return (
    <div>
      <HeroGradientBlob
        title="Contact DHL logistics"
        subtitle="Get help with shipping, pricing, integrations, or operational questions. We’ll respond quickly."
        ctaLabel="Send a message"
        ctaHref="#contact-form"
        secondaryCtaLabel="View services"
        secondaryCtaHref="/services"
        gradientStart="#FFCC00"
        gradientEnd="#D40511"
      />

      <div id="contact-form">
        <ContactForm
          headline="Send us a message"
          subheadline="Client-side form with validation and success state (no backend). Share your origin/destination, shipment type, and timeline so we can route your request."
          contactInfo={[
            { icon: "Phone", label: "Sales inquiries", value: "Response: within 1 business day" },
            { icon: "LifeBuoy", label: "Operational support", value: "Coverage: 24/7 (varies by region)" },
            { icon: "Plug", label: "Integrations", value: "Includes: label formats, tracking flows" },
          ]}
        />
      </div>

      <section className="py-24 md:py-24 bg-muted/50">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-black tracking-tight text-foreground md:text-4xl">Other ways to reach us</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Choose the channel that fits your urgency. For the fastest turnaround, include lanes, weights, and your
              desired service level.
            </p>
          </div>

          <div className="mx-auto mt-12 grid max-w-5xl gap-8 md:grid-cols-3">
            {[
              {
                title: "Sales inquiries",
                description: "Discuss volume, lanes, and a tailored plan.",
                meta: "Response: within 1 business day",
              },
              {
                title: "Operational support",
                description: "Help with shipments, documentation, and exceptions.",
                meta: "Coverage: 24/7 (varies by region)",
              },
              {
                title: "Integrations",
                description: "Guidance for connecting your store/OMS/ERP.",
                meta: "Includes: label formats, tracking flows",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-xl border bg-background p-8 shadow-md">
                <h3 className="text-xl font-black tracking-tight text-foreground">{item.title}</h3>
                <p className="mt-3 text-muted-foreground">{item.description}</p>
                <p className="mt-6 text-sm font-medium text-foreground">{item.meta}</p>
              </div>
            ))}
          </div>

          <p className="mx-auto mt-10 max-w-3xl text-center text-xs text-muted-foreground">
            Demo website blueprint: this page does not submit to a backend. Use it as a production-ready UI starting
            point.
          </p>
        </div>
      </section>

      <FAQAccordion
        headline="Contact FAQs"
        subheadline="What to include so we can help faster."
        items={[
          {
            question: "What details should I share for a quote?",
            answer:
              "Origin/destination, package dimensions and weight, shipment frequency, and desired service level (express/freight). If you ship internationally, include commodity descriptions and values.",
          },
          {
            question: "Do you support international shipping?",
            answer:
              "Yes—share commodity details and any special handling requirements for customs guidance. Clear descriptions and accurate values help reduce border delays.",
          },
          {
            question: "Can you help with returns?",
            answer:
              "Yes—describe your return volume and regions to recommend a reverse logistics flow, including return labels, consolidation, and inspection rules.",
          },
          {
            question: "Is this form connected to a backend?",
            answer:
              "No—this site blueprint uses client-side only submission and demo success states. It’s designed to be integrated with your preferred backend later.",
          },
        ]}
      />

      <section className="py-24 md:py-24">
        <div className="container mx-auto max-w-7xl px-4">
          <CTASparkles
            headline="Need to ship today?"
            description="Review plans and get started with a workflow that fits your volume—labels, tracking, and operational clarity from day one."
            ctaLabel="View pricing"
            ctaHref="/pricing"
            secondaryCtaLabel="Explore services"
            secondaryCtaHref="/services"
            sparkleColor="#D40511"
          />
        </div>
      </section>
    </div>
  );
}
