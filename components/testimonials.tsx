"use client";
import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { IconStar, IconQuote } from "@tabler/icons-react";

const testimonials = [
  {
    name: "Lisa Jenkins",
    company: "American Protection Insurance LLC",
    role: "Senior Sales Producer",
    content: "AizonLabs transformed our lead generation process. We saw a 300% increase in qualified leads within the first month. Their AI automation is incredible!",
    rating: 5,
  },
  {
    name: "Joyce Schaefer",
    company: "Community Insurance Center",
    role: "Sales Account Manager", 
    content: "The chatbot they built for us handles 80% of our customer inquiries automatically. Our response time improved from hours to seconds.",
    rating: 5,
  },
  {
    name: "Nadeem Moustafa",
    company: "Emond Richardson - State Farm Insurance Agent",
    role: "Vice President of Sales",
    content: "Their email automation sequences have been game-changing. We're converting 40% more prospects into customers with less manual work.",
    rating: 5,
  },
];

const stats = [
  {
    number: "300%",
    label: "Average increase in qualified leads"
  },
  {
    number: "24/7",
    label: "Automated customer engagement"
  },
  {
    number: "90%",
    label: "Reduction in response time"
  },
  {
    number: "500+",
    label: "Businesses already scaling with AI"
  }
];

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-gradient-to-b from-neutral-50 to-white dark:from-neutral-900 dark:to-neutral-950 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Stats Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
            Trusted by Growing Businesses
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-300 mb-12 max-w-3xl mx-auto">
            Our AI automation solutions have helped hundreds of businesses scale their operations and increase revenue.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-neutral-600 dark:text-neutral-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white dark:bg-neutral-800 rounded-2xl p-6 shadow-lg border border-neutral-100 dark:border-neutral-700 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <IconQuote className="h-8 w-8 text-blue-500 dark:text-blue-400" />
              </div>
              
              <p className="text-neutral-700 dark:text-neutral-300 mb-6 leading-relaxed">
                &ldquo;{testimonial.content}&rdquo;
              </p>
              
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold text-neutral-800 dark:text-neutral-100">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-neutral-600 dark:text-neutral-400">
                    {testimonial.role}, {testimonial.company}
                  </div>
                </div>
                
                <div className="flex items-center">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <IconStar
                      key={i}
                      className="h-4 w-4 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Company Logos */}
        <div className="text-center mt-16">
          <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-6">
            Trusted by companies of all sizes
          </p>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4 max-w-4xl mx-auto">
            {[
              { name: "Acme Corp", logo: "/logo1.svg" },
              { name: "OptiSys", logo: "/logo2.svg" },
              { name: "Synapse", logo: "/logo3.svg" },
              { name: "BlueWave", logo: "/logo4.svg" },
              { name: "Apex", logo: "/logo5.svg" },
              { name: "TechFlow", logo: "/logo6.svg" }
            ].map((company, index) => (
              <div
                key={index}
                className="bg-white dark:bg-neutral-800 rounded-2xl p-4 shadow-sm border border-neutral-100 dark:border-neutral-700 hover:shadow-md transition-all duration-300 flex items-center justify-center h-16"
              >
                <div className="relative w-full h-8 flex items-center justify-center">
                  <Image
                    src={company.logo}
                    alt={`${company.name} logo`}
                    width={60}
                    height={24}
                    className="object-contain opacity-40 hover:opacity-70 transition-opacity duration-300 dark:invert dark:opacity-60 dark:hover:opacity-90"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}