import { Features } from "@/components/features";
import { Hero } from "@/components/hero";
import { LeadForm } from "@/components/lead-form";
import { Testimonials } from "@/components/testimonials";
import { FAQ } from "@/components/faq";

export default function Home() {
  return (
    <main className="space-y-16">
      <Hero />
      <Features />
      <Testimonials />
      <section id="contact" className="bg-white dark:bg-neutral-950 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <LeadForm />
        </div>
      </section>
      <FAQ />
    </main>
  );
}
