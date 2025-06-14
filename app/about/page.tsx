import { Testimonials } from "@/components/testimonials";

export const metadata = {
  title: "About AizonLabs - AI Automation Experts",
  description: "Learn about AizonLabs and hear from our satisfied clients who have transformed their business with AI automation.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-700 dark:text-neutral-300 mb-6">
            About AizonLabs
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-200 max-w-3xl mx-auto">
            We're revolutionizing business automation with cutting-edge AI solutions. 
            Our mission is to help companies scale effortlessly through intelligent lead generation, 
            automated outreach, and smart chatbot systems.
          </p>
        </div>
      </div>
      <Testimonials />
    </main>
  );
}