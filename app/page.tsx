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
      
      {/* Lead form after features on mobile, hidden on desktop */}
      <section id="leads-form-mobile" className="md:hidden bg-white dark:bg-neutral-950 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <LeadForm />
        </div>
      </section>
      
      <Testimonials />
      
      {/* Lead form after testimonials on desktop, hidden on mobile */}
      <section id="leads-form" className="hidden md:block bg-white dark:bg-neutral-950 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <LeadForm />
        </div>
      </section>
      
      <FAQ />
    </main>
  );
}
