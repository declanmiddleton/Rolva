import { Navigation } from "@/components/navigation";
import Script from "next/script";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a Call - Rolva",
  description: "Schedule a free 30-minute consultation with Rolva Social Marketing Agency",
};

export default function BookPage() {
  return (
    <div className="relative min-h-screen">
      <Navigation />
      
      <main className="container mx-auto px-6 pt-32 pb-20 max-w-5xl">
        <Link href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8">
          <ArrowLeft className="h-4 w-4" />
          Back to home
        </Link>

        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Let&apos;s{" "}
            <span className="italic font-serif text-transparent bg-gradient-to-r from-[#FF4B2B] to-[#FF9F40] bg-clip-text">
              Talk
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Schedule a free 30-minute call to discuss how we can help grow your social media presence.
          </p>
        </div>

        <div className="relative">
          {/* Calendly Widget Container */}
          <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-4 md:p-8 border border-white/10">
            <div 
              className="calendly-inline-widget rounded-xl overflow-hidden" 
              data-url="https://calendly.com/rolvamedia/30min?hide_event_type_details=1&hide_gdpr_banner=1"
              style={{ minWidth: "320px", height: "700px" }}
            />
          </div>
        </div>

        {/* Info Cards Below */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <div className="text-center p-6 bg-white/5 rounded-xl border border-white/10">
            <div className="text-3xl mb-2">⚡</div>
            <h3 className="font-semibold mb-2">Quick Response</h3>
            <p className="text-sm text-gray-400">Usually within 24 hours</p>
          </div>
          <div className="text-center p-6 bg-white/5 rounded-xl border border-white/10">
            <div className="text-3xl mb-2">🎯</div>
            <h3 className="font-semibold mb-2">No Commitment</h3>
            <p className="text-sm text-gray-400">Free consultation, no strings attached</p>
          </div>
          <div className="text-center p-6 bg-white/5 rounded-xl border border-white/10">
            <div className="text-3xl mb-2">💡</div>
            <h3 className="font-semibold mb-2">Actionable Insights</h3>
            <p className="text-sm text-gray-400">Walk away with clear next steps</p>
          </div>
        </div>
      </main>

      {/* Load Calendly Script */}
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />
    </div>
  );
}
