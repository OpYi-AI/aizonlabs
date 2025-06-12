import Link from "next/link";
import { Logo } from "@/components/logo";

export const metadata = {
  title: "Terms of Service | AizonLabs",
  description: "Terms of Service for AizonLabs - Our terms and conditions for using our AI automation services.",
};

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Logo at the top */}
        <div className="flex justify-center mt-8 mb-6">
          <Logo 
            className="w-32 md:w-40"
            imageClassName="w-10 h-10 md:w-12 md:h-12"
            textClassName="text-lg md:text-xl"
          />
        </div>

        {/* Terms of Service Content */}
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <h1 className="text-4xl font-bold text-center mb-8 text-neutral-800 dark:text-neutral-100">
            Terms of Service
          </h1>
          
          <p className="text-center text-neutral-600 dark:text-neutral-400 mb-12">
            Last Updated: 06.2025
          </p>

          <div className="space-y-8 text-neutral-700 dark:text-neutral-300 leading-relaxed">
            <p>
              Welcome to AizonLabs. These Terms of Service ("Terms") govern your access to and use of our website and services (collectively, the "Service"). 
              By using AizonLabs, you agree to these Terms. If you do not agree, please do not use our Service.
            </p>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-neutral-800 dark:text-neutral-100">
                1. Service Overview
              </h2>
              <p>
                AizonLabs provides AI automation solutions for businesses and professionals.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-neutral-800 dark:text-neutral-100">
                2. Eligibility
              </h2>
              <p>
                You must be at least 18 years old to use our Service. By using AizonLabs, you represent and warrant that you are at least 18 years old.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-neutral-800 dark:text-neutral-100">
                3. Information We Collect
              </h2>
              <p className="mb-3">To provide our services, we may collect your:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Full Name</li>
                <li>Email Address</li>
                <li>Company Name</li>
              </ul>
              <p className="mt-3">
                For more information about how we handle your data, please see our{" "}
                <Link 
                  href="/privacy-policy" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 underline"
                >
                  Privacy Policy
                </Link>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-neutral-800 dark:text-neutral-100">
                4. No Account Creation
              </h2>
              <p>
                Currently, AizonLabs does not require or allow users to create personal accounts or contribute user-generated content.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-neutral-800 dark:text-neutral-100">
                5. Payment, Subscriptions, and Free Trials
              </h2>
              <p className="mb-4">
                AizonLabs may offer paid services, subscriptions, and free trials. By purchasing or subscribing to any of our paid services, 
                you agree to pay all applicable fees as described at the time of your purchase.
              </p>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-neutral-800 dark:text-neutral-100">
                  No Refund Policy:
                </h3>
                <p>
                  All payments made to AizonLabs are non-refundable. Please review all details before making a purchase or subscription.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-neutral-800 dark:text-neutral-100">
                6. Prohibited Uses
              </h2>
              <p className="mb-3">You agree not to use the Service:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>For any unlawful, harmful, or fraudulent purpose;</li>
                <li>To violate any applicable law or regulation;</li>
                <li>To attempt to gain unauthorized access to our systems or networks.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-neutral-800 dark:text-neutral-100">
                7. Intellectual Property
              </h2>
              <p>
                All content, trademarks, and intellectual property on AizonLabs are owned by us or our licensors. 
                You may not copy, modify, distribute, or create derivative works from our content without our express written consent.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-neutral-800 dark:text-neutral-100">
                8. Disclaimer and Limitation of Liability
              </h2>
              <p className="mb-4">
                AizonLabs is provided "as is" and "as available" without warranties of any kind. 
                To the fullest extent permitted by law, AizonLabs disclaims all warranties, express or implied.
              </p>
              <p>
                AizonLabs and its affiliates will not be liable for any indirect, incidental, special, consequential, 
                or punitive damages resulting from your use of the Service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-neutral-800 dark:text-neutral-100">
                9. Changes to These Terms
              </h2>
              <p>
                We may update these Terms from time to time. If we make material changes, we will notify you by posting the new Terms on our website. 
                Your continued use of AizonLabs after such changes means you accept the revised Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-neutral-800 dark:text-neutral-100">
                10. Contact Us
              </h2>
              <p>
                If you have any questions about these Terms, please contact us at{" "}
                <a 
                  href="mailto:info@aizonlabs.com" 
                  className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                >
                  info@aizonlabs.com
                </a>.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}