"use client";
import React, { useState } from "react";
import { supabase } from "@/utils/supabaseClient";
import { cn } from "@/lib/utils";
import { IconCheck, IconUser, IconMail, IconBuilding, IconMessage } from "@tabler/icons-react";

interface FormData {
  name: string;
  email: string;
  company: string;
  message: string;
}

export function LeadForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage("");

    try {
      const { data, error } = await supabase
        .from('leads')
        .insert([formData]);

      if (error) {
        throw error;
      }

      setSubmitStatus('success');
      setFormData({ name: "", email: "", company: "", message: "" });
    } catch (error) {
      setSubmitStatus('error');
      if (error && typeof error === 'object' && 'message' in error) {
        setErrorMessage(`${(error as any).message}`);
      } else {
        setErrorMessage('An unexpected error occurred. Please try again.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitStatus === 'success') {
    return (
      <div className="max-w-2xl mx-auto">
        <div className="p-8 bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-950/20 dark:to-blue-950/20 rounded-2xl border border-green-100 dark:border-green-800/30">
          <div className="text-center">
            <div className="mx-auto w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-4">
              <IconCheck className="h-8 w-8 text-green-600 dark:text-green-400" />
            </div>
            <h3 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
              Thank You for Your Interest!
            </h3>
            <p className="text-neutral-600 dark:text-neutral-300 mb-6">
              We&apos;ve received your information and will get back to you within 24 hours to discuss how AI can transform your business.
            </p>
            <button
              onClick={() => setSubmitStatus('idle')}
              className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-lg font-medium hover:shadow-lg transition-all duration-200"
            >
              Submit Another Lead
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="p-1 rounded-3xl bg-gray-50 dark:bg-neutral-900 border border-gray-100 dark:border-neutral-800">
        <div className="p-8 bg-white dark:bg-neutral-800 rounded-2xl shadow-sm">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
              Get Your Free AI Business Audit
            </h3>
            <p className="text-neutral-600 dark:text-neutral-300">
              Tell us about your business and we&apos;ll show you exactly how AI can help you generate more leads and increase sales.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                  Full Name *
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <IconUser className="h-5 w-5 text-neutral-400" />
                  </div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-10 pr-4 py-3 border border-neutral-200 dark:border-neutral-600 rounded-lg bg-white dark:bg-neutral-700 text-neutral-900 dark:text-neutral-100 placeholder-neutral-500 dark:placeholder-neutral-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="John Doe"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                  Email Address *
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <IconMail className="h-5 w-5 text-neutral-400" />
                  </div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-10 pr-4 py-3 border border-neutral-200 dark:border-neutral-600 rounded-lg bg-white dark:bg-neutral-700 text-neutral-900 dark:text-neutral-100 placeholder-neutral-500 dark:placeholder-neutral-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="john@company.com"
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                Company Name
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <IconBuilding className="h-5 w-5 text-neutral-400" />
                </div>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-4 py-3 border border-neutral-200 dark:border-neutral-600 rounded-lg bg-white dark:bg-neutral-700 text-neutral-900 dark:text-neutral-100 placeholder-neutral-500 dark:placeholder-neutral-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="Your Company"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                Tell us about your business goals *
              </label>
              <div className="relative">
                <div className="absolute top-3 left-3 pointer-events-none">
                  <IconMessage className="h-5 w-5 text-neutral-400" />
                </div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="w-full pl-10 pr-4 py-3 border border-neutral-200 dark:border-neutral-600 rounded-lg bg-white dark:bg-neutral-700 text-neutral-900 dark:text-neutral-100 placeholder-neutral-500 dark:placeholder-neutral-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                  placeholder="What challenges are you facing? How many leads do you generate monthly? What&apos;s your biggest business goal for the next 90 days?"
                />
              </div>
            </div>

            {submitStatus === 'error' && (
              <div className="p-4 bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800/30 rounded-lg">
                <p className="text-red-600 dark:text-red-400 text-sm">
                  Error: {errorMessage || 'Failed to submit form. Please try again.'}
                </p>
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className={cn(
                "w-full py-4 px-6 rounded-lg font-semibold text-white transition-all duration-200",
                "bg-gradient-to-r from-blue-500 to-blue-700 hover:shadow-xl hover:scale-105",
                "disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:shadow-lg"
              )}
            >
              {isSubmitting ? 'Submitting...' : 'Get My Free AI Audit'}
            </button>

            <p className="text-xs text-neutral-500 dark:text-neutral-400 text-center">
              No spam, ever. We&apos;ll use this information to prepare your personalized AI business audit.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}