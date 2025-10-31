import { Navigation } from "@/components/navigation";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - Rolva",
  description: "Privacy Policy for Rolva Social Marketing Agency",
};

export default function PrivacyPolicy() {
  return (
    <div className="relative min-h-screen">
      <Navigation />
      
      <main className="container mx-auto px-6 pt-32 pb-20 max-w-4xl">
        <Link href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8">
          <ArrowLeft className="h-4 w-4" />
          Back to home
        </Link>

        <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
        <p className="text-gray-400 mb-12">Last updated: {new Date().toLocaleDateString()}</p>

        <div className="prose prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">1. Information We Collect</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              We collect information that you provide directly to us, including:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Name, email address, and contact information</li>
              <li>Payment and billing information</li>
              <li>Company name and business details</li>
              <li>Design briefs and project requirements</li>
              <li>Communication history and feedback</li>
              <li>Usage data and analytics</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">2. How We Use Your Information</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Provide, maintain, and improve our services</li>
              <li>Process payments and fulfill orders</li>
              <li>Send you technical notices and support messages</li>
              <li>Communicate about products, services, and events</li>
              <li>Monitor and analyze trends and usage</li>
              <li>Detect and prevent fraud and abuse</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">3. Information Sharing</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              We do not sell your personal information. We may share your information with:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Service providers who assist in our operations</li>
              <li>Payment processors for billing purposes</li>
              <li>Analytics providers to understand service usage</li>
              <li>Professional advisors when necessary</li>
              <li>Law enforcement when required by law</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">4. Data Security</h2>
            <p className="text-gray-300 leading-relaxed">
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">5. Data Retention</h2>
            <p className="text-gray-300 leading-relaxed">
              We retain your personal information for as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required by law. When we no longer need your information, we will securely delete or anonymize it.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">6. Your Rights</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              You have the following rights regarding your personal information:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Access: Request access to your personal data</li>
              <li>Correction: Request correction of inaccurate data</li>
              <li>Deletion: Request deletion of your data</li>
              <li>Portability: Request a copy of your data</li>
              <li>Objection: Object to processing of your data</li>
              <li>Restriction: Request restriction of processing</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">7. Cookies and Tracking</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              We use cookies and similar tracking technologies to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Remember your preferences and settings</li>
              <li>Understand how you use our services</li>
              <li>Improve our services and user experience</li>
              <li>Provide personalized content</li>
            </ul>
            <p className="text-gray-300 leading-relaxed mt-4">
              You can control cookies through your browser settings. However, disabling cookies may affect your ability to use certain features.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">8. Third-Party Services</h2>
            <p className="text-gray-300 leading-relaxed">
              Our services may contain links to third-party websites or services. We are not responsible for the privacy practices of these third parties. We encourage you to review their privacy policies before providing any personal information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">9. Children's Privacy</h2>
            <p className="text-gray-300 leading-relaxed">
              Our services are not intended for children under 13 years of age. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">10. International Data Transfers</h2>
            <p className="text-gray-300 leading-relaxed">
              Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your information in accordance with this privacy policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">11. Changes to This Policy</h2>
            <p className="text-gray-300 leading-relaxed">
              We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date. We encourage you to review this policy periodically.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">12. Contact Us</h2>
            <p className="text-gray-300 leading-relaxed">
              If you have any questions about this Privacy Policy or our data practices, please contact us at:
            </p>
            <p className="text-gray-300 mt-4">
              Email: privacy@rolva.agency<br />
              Address: [Your Business Address]
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">13. GDPR Compliance</h2>
            <p className="text-gray-300 leading-relaxed">
              If you are located in the European Economic Area (EEA), you have additional rights under the General Data Protection Regulation (GDPR). We process your data lawfully based on consent, contract performance, legal obligations, or legitimate interests.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">14. California Privacy Rights</h2>
            <p className="text-gray-300 leading-relaxed">
              California residents have specific rights under the California Consumer Privacy Act (CCPA), including the right to know what personal information is collected, the right to delete personal information, and the right to opt-out of the sale of personal information.
            </p>
          </section>
        </div>

        <div className="mt-16 p-8 rounded-2xl bg-white/5 border border-white/10">
          <h3 className="text-xl font-semibold mb-4">Questions about privacy?</h3>
          <p className="text-gray-400 mb-6">
            We're committed to protecting your data. Contact us anytime.
          </p>
          <Link href="/#pricing">
            <Button size="lg">Get started</Button>
          </Link>
        </div>
      </main>
    </div>
  );
}
