"use client";
import React from "react";
import { IconCheck, IconArrowRight, IconCalendar, IconTrendingUp, IconTarget } from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import { Button } from "./button";
import Link from "next/link";

export type CTAOption = {
  id: string;
  name: string;
  title: string;
  description: string;
  features: string[];
  buttonText: string;
  featured?: boolean;
  icon?: React.ReactNode;
};

const ctaOptions: Array<CTAOption> = [
  {
    id: "audit",
    name: "Free AI Audit",
    title: "Discover Your AI Potential",
    description: "Get a personalized analysis of how AI can transform your business processes and identify automation opportunities.",
    icon: <IconTarget className="h-8 w-8" />,
    features: [
      "30-minute strategy consultation",
      "Custom AI opportunity assessment",
      "Personalized automation roadmap",
      "ROI projections for your business",
      "No obligation - completely free",
    ],
    buttonText: "Book Free Audit",
  },
  {
    id: "consultation",
    name: "Strategy Call",
    title: "90-Day AI Transformation Plan",
    description: "Work with our AI experts to create a comprehensive plan that can 3x your leads and sales in 90 days.",
    featured: true,
    icon: <IconTrendingUp className="h-8 w-8" />,
    features: [
      "In-depth business analysis",
      "Custom AI solution design",
      "Implementation timeline",
      "Team training recommendations",
      "Ongoing support strategy",
    ],
    buttonText: "Schedule Strategy Call",
  },
  {
    id: "demo",
    name: "Live Demo",
    title: "See AI Automation in Action",
    description: "Watch live demonstrations of our AI systems working for businesses like yours and see real results.",
    icon: <IconCalendar className="h-8 w-8" />,
    features: [
      "Live lead generation demo",
      "Chatbot interaction examples",
      "Email automation walkthrough",
      "Case study presentations",
      "Q&A with AI specialists",
    ],
    buttonText: "Watch Live Demo",
  },
];

export function CTA() {

  return (
    <div
      id="contact"
      className="relative isolate bg-white dark:bg-neutral-950 w-full px-4 py-20 lg:px-4"
    >
      <div
        className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl"
        aria-hidden="true"
      ></div>
      
      {/* Header Section */}
      <div className="text-center mb-16">
        <h2 className="font-bold text-3xl md:text-5xl text-neutral-800 dark:text-neutral-100 mb-6">
          Ready to Transform Your Business with AI?
        </h2>
        <p className="max-w-3xl mx-auto text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed">
          Choose how you&apos;d like to start your AI automation journey. All options are designed to help you understand exactly how AI can accelerate your growth and scale your operations.
        </p>
      </div>

      {/* CTA Options Grid */}
      <div
        className={cn(
          "mx-auto grid grid-cols-1 gap-6 mb-16",
          "max-w-7xl md:grid-cols-2 xl:grid-cols-3"
        )}
      >
        {ctaOptions.map((option) => {
          return <CTACard option={option} key={option.id} />;
        })}
      </div>

      {/* Bottom Trust Section */}
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 rounded-2xl p-8 border border-blue-100 dark:border-blue-800/30">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
              Join 500+ Businesses Already Scaling with AI
            </h3>
            <p className="text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
              Our AI automation solutions have helped businesses increase their lead generation by 300%, improve response times by 90%, and reduce manual work by 80%.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">300%</div>
              <div className="text-sm text-neutral-600 dark:text-neutral-400">Average increase in qualified leads</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">24/7</div>
              <div className="text-sm text-neutral-600 dark:text-neutral-400">Automated customer engagement</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">90%</div>
              <div className="text-sm text-neutral-600 dark:text-neutral-400">Reduction in response time</div>
            </div>
          </div>

          <div className="text-center">
            <Button
              as={Link}
              href="#contact"
              variant="primary"
              className="inline-flex items-center gap-3 text-lg px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg hover:shadow-xl transition-all duration-200 group font-semibold"
            >
              <span>Start Your AI Transformation Today</span>
              <IconArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-4 flex items-center justify-center gap-2">
              <IconCalendar className="h-4 w-4" />
              Average response time: 2 hours • No commitment required
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

const CTACard = ({ option }: { option: CTAOption }) => {
  return (
    <div
      className={cn(
        "p-1 rounded-3xl bg-gray-50 dark:bg-neutral-900 border border-gray-100 dark:border-neutral-800 transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:ring-2 hover:ring-blue-500 dark:hover:ring-blue-400 group"
      )}
    >
      <div className="flex flex-col gap-4 h-full">
        <div
          className={cn(
            "p-6 bg-white dark:bg-neutral-800 rounded-2xl shadow-sm w-full h-full flex flex-col justify-between transition-all duration-300 group-hover:shadow-lg"
          )}
        >
          <div>
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 transition-all duration-300 group-hover:bg-blue-200 dark:group-hover:bg-blue-800/50 group-hover:scale-110">
                  {option.icon}
                </div>
                <div>
                  <p className="text-sm font-medium text-blue-600 dark:text-blue-400 uppercase tracking-wide">
                    {option.name}
                  </p>
                  <h3 className="font-bold text-xl text-black dark:text-white">
                    {option.title}
                  </h3>
                </div>
              </div>

              {option.featured && (
                <div className="font-medium text-xs px-3 py-1 rounded-full bg-blue-600 dark:bg-blue-500 text-white">
                  Most Popular
                </div>
              )}
            </div>
            
            <p className="text-sm text-neutral-600 dark:text-neutral-300 mb-6 leading-relaxed">
              {option.description}
            </p>

            <div className="space-y-3 mb-6">
              {option.features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="h-4 w-4 rounded-full bg-blue-600 dark:bg-blue-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <IconCheck className="h-3 w-3 text-white stroke-[3px]" />
                  </div>
                  <span className="text-sm text-neutral-700 dark:text-neutral-300">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <Button
            as={Link}
            href="#contact"
            variant="primary"
            className={cn(
              "w-full group transition-all duration-200 px-4 py-3 rounded-lg font-medium",
              "bg-gradient-to-r from-blue-500 to-blue-700 text-white shadow-lg hover:shadow-xl"
            )}
          >
            <span className="flex items-center justify-center gap-2">
              {option.buttonText}
              <IconArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
};