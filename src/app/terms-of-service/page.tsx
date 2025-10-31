import { Navigation } from "@/components/navigation";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service - Rolva",
  description: "Terms of Service for Rolva Social Marketing Agency",
};

export default function TermsOfService() {
  return (
    <div className="relative min-h-screen">
      <Navigation />
      
      <main className="container mx-auto px-6 pt-32 pb-20 max-w-4xl">
        <Link href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8">
          <ArrowLeft className="h-4 w-4" />
          Back to home
        </Link>

        <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms of Service</h1>
        <p className="text-gray-400 mb-12">Last updated: {new Date().toLocaleDateString()}</p>

        <div className="prose prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">1. Agreement to Terms</h2>
            <p className="text-gray-300 leading-relaxed">
              By accessing or using Rolva&apos;s services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">2. Services Description</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Rolva provides social media marketing services including but not limited to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Social media content creation and design</li>
              <li>Campaign strategy and management</li>
              <li>Brand consultation and advisory</li>
              <li>Unlimited design requests (subject to plan limitations)</li>
              <li>Unlimited revisions on delivered work</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">3. Subscription and Payment</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Our services are offered on a subscription basis:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Subscription fees are billed monthly in advance</li>
              <li>All fees are non-refundable except as required by law</li>
              <li>You may pause or cancel your subscription at any time</li>
              <li>Paused subscriptions can be resumed at a future date</li>
              <li>Price changes will be communicated 30 days in advance</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">4. Service Delivery</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              We commit to the following delivery standards:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Average turnaround time of 48 hours for design requests</li>
              <li>One request processed at a time per subscription</li>
              <li>Unlimited revisions until you&apos;re satisfied</li>
              <li>Delivery times may vary based on request complexity</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">5. Intellectual Property</h2>
            <p className="text-gray-300 leading-relaxed">
              Upon full payment, you own the rights to all delivered work. We retain the right to showcase work in our portfolio unless otherwise agreed. You grant us permission to use your brand name and logo for promotional purposes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">6. Client Responsibilities</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              As a client, you agree to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Provide clear and detailed design briefs</li>
              <li>Supply necessary brand assets and materials</li>
              <li>Respond to requests for feedback in a timely manner</li>
              <li>Use delivered work in accordance with applicable laws</li>
              <li>Not resell or redistribute our services</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">7. Limitation of Liability</h2>
            <p className="text-gray-300 leading-relaxed">
              Rolva shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use or inability to use our services. Our total liability shall not exceed the amount paid by you in the 12 months preceding the claim.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">8. Termination</h2>
            <p className="text-gray-300 leading-relaxed">
              Either party may terminate this agreement at any time. Upon termination, you will retain access to services until the end of your current billing period. We reserve the right to refuse service to anyone for any reason at any time.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">9. Changes to Terms</h2>
            <p className="text-gray-300 leading-relaxed">
              We reserve the right to modify these terms at any time. We will notify you of any changes by posting the new Terms of Service on this page and updating the &quot;Last updated&quot; date. Your continued use of our services after changes constitutes acceptance of the new terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">10. Contact Information</h2>
            <p className="text-gray-300 leading-relaxed">
              If you have any questions about these Terms of Service, please contact us at:
            </p>
            <p className="text-gray-300 mt-4">
              Email: legal@rolva.agency<br />
              Address: [Your Business Address]
            </p>
          </section>
        </div>

        <div className="mt-16 p-8 rounded-2xl bg-white/5 border border-white/10">
          <h3 className="text-xl font-semibold mb-4">Ready to get started?</h3>
          <p className="text-gray-400 mb-6">
            Join the limitless design revolution today.
          </p>
          <Link href="/#pricing">
            <Button size="lg">View pricing</Button>
          </Link>
        </div>
      </main>
    </div>
  );
}
