import Image from "next/image";
import { Logo } from "@/components/logo";

export const metadata = {
  title: "Privacy Policy | AizonLabs",
  description: "Privacy Policy for AizonLabs - How we collect, use, and protect your personal information.",
};

export default function PrivacyPolicy() {
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

        {/* Privacy Policy Content */}
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <h1 className="text-4xl font-bold text-center mb-8 text-neutral-800 dark:text-neutral-100">
            Privacy Policy
          </h1>
          
          <p className="text-center text-neutral-600 dark:text-neutral-400 mb-12">
            Last updated: 2025
          </p>

          <div className="space-y-8 text-neutral-700 dark:text-neutral-300 leading-relaxed">
            <p>
              At AizonLabs, accessible from www.aizonlabs.com, we are committed to protecting your privacy. 
              This Privacy Policy outlines how we collect, use, and safeguard your personal information when you interact with our website.
            </p>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-neutral-800 dark:text-neutral-100">
                1. Information We Collect
              </h2>
              <p className="mb-3">
                When you fill out a contact form on our website, we collect the following personal information:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Full Name</li>
                <li>Email Address</li>
                <li>Company</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-neutral-800 dark:text-neutral-100">
                2. How We Collect Information
              </h2>
              <p>
                We collect your information only when you voluntarily submit it through our contact form.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-neutral-800 dark:text-neutral-100">
                3. Use of Your Information
              </h2>
              <p className="mb-3">We use the information you provide solely to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Contact you regarding your interest in our services</li>
              </ul>
              <p className="mt-3">
                We do not use your information for marketing purposes without your explicit consent.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-neutral-800 dark:text-neutral-100">
                4. Sharing of Information
              </h2>
              <p>
                We do not share your personal information with third parties.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-neutral-800 dark:text-neutral-100">
                5. Children's Privacy
              </h2>
              <p>
                Our website and services are not directed at children under the age of 13, and we do not knowingly collect information from anyone under 13.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-neutral-800 dark:text-neutral-100">
                6. Data Security
              </h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-neutral-800 dark:text-neutral-100">
                7. International Data Transfers
              </h2>
              <p>
                As a business based in Germany, your personal information is processed and stored within the European Union.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-neutral-800 dark:text-neutral-100">
                8. Your Data Rights
              </h2>
              <p>
                Under the General Data Protection Regulation (GDPR), you have the right to request access to, correction, or deletion of your personal data. 
                If you wish to exercise these rights, please contact us at{" "}
                <a 
                  href="mailto:info@aizonlabs.com" 
                  className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                >
                  info@aizonlabs.com
                </a>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-neutral-800 dark:text-neutral-100">
                9. Changes to This Privacy Policy
              </h2>
              <p>
                We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-neutral-800 dark:text-neutral-100">
                10. Contact Us
              </h2>
              <p className="mb-3">
                If you have any questions or concerns about this Privacy Policy or your personal data, please contact us at:
              </p>
              <p>
                Email:{" "}
                <a 
                  href="mailto:info@aizonlabs.com" 
                  className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                >
                  info@aizonlabs.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}