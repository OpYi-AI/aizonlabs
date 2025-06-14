import { LeadForm } from "@/components/lead-form";

export const metadata = {
  title: "Contact AizonLabs - Get Your Free AI Audit",
  description: "Ready to transform your business with AI? Contact AizonLabs for a free consultation and discover how automation can boost your growth.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-700 dark:text-neutral-300 mb-6">
            Let's Transform Your Business
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-200 max-w-3xl mx-auto mb-8">
            Ready to unlock the power of AI automation? Get started with a free audit 
            and discover how we can help you scale your business with intelligent solutions.
          </p>
        </div>
        
        <div className="bg-white dark:bg-neutral-950 py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <LeadForm />
          </div>
        </div>
      </div>
    </main>
  );
}