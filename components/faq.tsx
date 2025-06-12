"use client";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { IconChevronDown } from "@tabler/icons-react";

const faqs = [
  {
    question: "How quickly can you implement AI automation for my business?",
    answer: "Most implementations take 2-4 weeks depending on complexity. We start with a free audit to understand your needs, then create a custom roadmap for rapid deployment of your AI solutions."
  },
  {
    question: "What kind of ROI can I expect from AI automation?",
    answer: "Our clients typically see 3x increase in qualified leads and 40% improvement in conversion rates within the first 90 days. The exact ROI depends on your current processes and industry."
  },
  {
    question: "Do I need technical knowledge to use your AI systems?",
    answer: "Not at all! Our AI solutions are designed for business owners and teams without technical backgrounds. We provide full training and ongoing support to ensure you get maximum value."
  },
  {
    question: "How does the free AI audit work?",
    answer: "During your free 30-minute consultation, we'll analyze your current lead generation and customer service processes, identify automation opportunities, and provide a custom roadmap with ROI projections."
  },
  {
    question: "Can your AI integrate with our existing tools?",
    answer: "Yes! Our AI solutions integrate with popular CRM systems, email platforms, and business tools like Salesforce, HubSpot, Mailchimp, and more. We ensure seamless integration with your current workflow."
  },
  {
    question: "What ongoing support do you provide?",
    answer: "We provide comprehensive training, 24/7 technical support, regular optimization reviews, and continuous updates to keep your AI systems performing at peak efficiency."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white dark:bg-neutral-950 py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-300">
            Get answers to common questions about our AI automation solutions
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-neutral-200 dark:border-neutral-700 rounded-lg overflow-hidden hover:shadow-[0_0_0_1px_rgba(59,130,246,0.5),_0_10px_25px_rgba(59,130,246,0.1)] hover:border-blue-500/50 transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left bg-white dark:bg-neutral-800 transition-all duration-300 flex items-center justify-between"
              >
                <span className="font-semibold text-neutral-800 dark:text-neutral-100">
                  {faq.question}
                </span>
                <IconChevronDown
                  className={cn(
                    "h-5 w-5 text-neutral-500 transition-transform duration-200",
                    openIndex === index && "rotate-180"
                  )}
                />
              </button>
              
              {openIndex === index && (
                <div className="px-6 py-4 bg-neutral-50 dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-700">
                  <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-neutral-600 dark:text-neutral-300 mb-4">
            Still have questions?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors duration-200"
          >
            Get Your Free AI Audit
          </a>
        </div>
      </div>
    </section>
  );
}