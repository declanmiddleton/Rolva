"use client";

import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/navigation";
import { AnimatedBackground } from "@/components/animated-background";
import { CTASection } from "@/components/cta-section";
import { 
  ArrowRight, 
  Zap, 
  Trophy, 
  LayoutDashboard,
  Clock,
  Users,
  CheckCircle2,
  Star
} from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <AnimatedBackground />
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 via-transparent to-transparent" />
        
        <div className="container mx-auto max-w-6xl relative">
          <motion.div 
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="flex flex-col items-center text-center space-y-8"
          >
            <motion.div 
              variants={fadeInUp}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm"
            >
              <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm text-gray-300">Hurry, only 3 spots left.</span>
            </motion.div>

            <motion.h1 
              variants={fadeInUp}
              className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.1]"
            >
              Content moves fast.
              <br />
              We make sure yours{" "}
              <span className="italic font-serif text-transparent bg-gradient-to-r from-[#FF4B2B] to-[#FF9F40] bg-clip-text">
                never gets left behind.
              </span>
            </motion.h1>

            <motion.p 
              variants={fadeInUp}
              className="text-xl md:text-2xl text-gray-400 max-w-3xl leading-relaxed"
            >
              Rolva is your personal content system — creating, managing, and distributing posts across every platform so your brand stays active 24/7.
            </motion.p>

            <motion.div 
              variants={fadeInUp}
              className="flex flex-col sm:flex-row items-center gap-4 pt-4"
            >
              <a href="/book">
                <Button size="lg" className="text-sm">
                  Book a call
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </a>
              <a href="/#pricing">
                <Button size="lg" variant="dark" className="text-sm">
                  See plans
                </Button>
              </a>
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              className="pt-12 w-full max-w-5xl"
            >
              <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-1">
                <div className="relative aspect-video rounded-2xl bg-gradient-to-br from-[#5B7CFF]/20 via-[#FF9F40]/10 to-[#FF6B4A]/20 overflow-hidden">
                  <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      animate={{ 
                        scale: [1, 1.05, 1],
                        rotate: [0, 5, 0]
                      }}
                      transition={{ 
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <Image
                        src="/images/logo-transparent.png"
                        alt="Rolva Logo"
                        width={200}
                        height={200}
                        className="opacity-20"
                      />
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="benefits" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why businesses{" "}
              <span className="italic font-serif text-transparent bg-gradient-to-r from-[#FF4B2B] to-[#FF9F40] bg-clip-text">
                choose
              </span>{" "}
              Rolva
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              We don&apos;t just post for you — we build your entire content system.
            </p>
          </motion.div>

          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
          >
            <FeatureCard
              icon={<LayoutDashboard className="h-8 w-8" />}
              title="Multi-Platform Posting"
              description="From Instagram to TikTok — we handle it all."
            />
            <FeatureCard
              icon={<CheckCircle2 className="h-8 w-8" />}
              title="Unlimited Revisions"
              description="We refine your content until it&apos;s perfect."
            />
            <FeatureCard
              icon={<Clock className="h-8 w-8" />}
              title="Pause Anytime"
              description="Scale your presence on your own schedule."
            />
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-32 px-6">
        <div className="container mx-auto max-w-6xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              All your marketing needs{" "}
              <span className="italic font-serif text-transparent bg-gradient-to-r from-[#FF4B2B] to-[#FF9F40] bg-clip-text">
                covered
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Running a business is already hard enough — that&apos;s where we come in.
            </p>
            <p className="text-lg text-gray-500 max-w-3xl mx-auto leading-relaxed mt-4">
              Rolva manages your entire online presence — from short-form content creation to cross-platform scheduling and ad optimization — so you can focus on running your business.
            </p>
          </motion.div>

          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8 mb-16"
          >
            <ProcessCard
              number="01"
              title="Onboard"
              description="Fill out our short form so we can understand your brand, goals, and content style."
            />
            <ProcessCard
              number="02"
              title="Setup"
              description="We connect your social accounts, organize your content folder, and automate your posting system."
            />
            <ProcessCard
              number="03"
              title="Grow"
              description="Your content goes live automatically — we monitor, optimize, and report on performance every month."
            />
          </motion.div>

          {/* Additional Info Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto"
          >
            <div className="p-6 rounded-xl bg-gradient-to-br from-[#FF4B2B]/5 to-[#FF9F40]/5 border border-[#FF4B2B]/20">
              <h4 className="font-semibold text-white mb-2 flex items-center gap-2">
                <Zap className="h-5 w-5 text-[#FF4B2B]" />
                Hands-Off Management
              </h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                You record short clips or share past videos — we handle everything else.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-gradient-to-br from-[#5B7CFF]/5 to-[#FF9F40]/5 border border-[#5B7CFF]/20">
              <h4 className="font-semibold text-white mb-2 flex items-center gap-2">
                <LayoutDashboard className="h-5 w-5 text-[#5B7CFF]" />
                Weekly Tracking
              </h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                You&apos;ll get quick performance summaries showing what&apos;s working.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-32 px-6">
        <div className="container mx-auto max-w-6xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              What our clients{" "}
              <span className="italic font-serif text-transparent bg-gradient-to-r from-[#FF4B2B] to-[#FF9F40] bg-clip-text">
                say
              </span>
            </h2>
          </motion.div>

          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-6"
          >
            <TestimonialCard
              rating={5}
              text="Rolva took my socials from quiet to booming. The content hits perfectly every time."
              author="Jkinz"
              role="Entrepreneur"
            />
            <TestimonialCard
              rating={5}
              text="Rolva transformed our online presence. The content looks professional, engagement&apos;s up, and I don&apos;t worry about posting anymore."
              author="Ryan Suender"
              role="Founder of WebDyno"
            />
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Simple{" "}
              <span className="italic font-serif text-transparent bg-gradient-to-r from-[#FF4B2B] to-[#FF9F40] bg-clip-text">
                Pricing
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Choose the plan that fits your goals. No hidden fees, no surprises.
            </p>
          </motion.div>

          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-8 mb-16"
          >
            {/* Social Media Growth Plan */}
            <PricingCard
              name="Social Media Growth Plan"
              description="For businesses that want consistent, high-quality content and a strong online presence."
              price="$1,497"
              priceSubtext="/month"
              features={[
                "12–16 posts per month (Instagram + TikTok or Facebook)",
                "Captions, hashtags, and posting schedule",
                "Comment and DM engagement",
                "Monthly analytics report",
                "Growth strategy and optimization"
              ]}
              isPopular={false}
            />

            {/* Growth + Ads Plan */}
            <PricingCard
              name="Growth + Ads Plan"
              description="For brands ready to scale their reach through organic and paid strategy."
              price="$2,497"
              priceSubtext="/month"
              features={[
                "Everything in the Social Media Growth Plan",
                "Facebook and Instagram ad campaign setup",
                "Ongoing ad optimization and reporting",
                "Monthly strategy session",
                "Content repurposing for ads"
              ]}
              isPopular={true}
            />
          </motion.div>

          {/* Retainer Model Note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h4 className="text-lg font-semibold mb-3 text-white">
                Why Monthly Retainer?
              </h4>
              <p className="text-gray-400 leading-relaxed">
                Social media growth doesn&apos;t happen overnight. A monthly retainer ensures{" "}
                <span className="text-white font-medium">predictable results</span>,{" "}
                <span className="text-white font-medium">long-term growth</span>, and{" "}
                <span className="text-white font-medium">consistent brand building</span>—all without the stress of one-off projects or scattered efforts.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/5">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <Image
                src="/images/logo-transparent.png"
                alt="Rolva Logo"
                width={32}
                height={32}
              />
              <span className="text-lg font-bold">
                Rolva<span className="text-gray-400">.</span>
              </span>
            </div>
            <div className="flex items-center gap-8 text-sm text-gray-500">
              <a href="/privacy-policy" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="/terms-of-service" className="hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Contact
              </a>
            </div>
            <p className="text-sm text-gray-500">© 2025 Rolva. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <motion.div
      variants={fadeInUp}
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="group relative p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
    >
      <motion.div 
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ duration: 0.3 }}
        className="text-transparent bg-gradient-to-r from-[#5B7CFF] to-[#FF6B4A] bg-clip-text mb-4"
      >
        {icon}
      </motion.div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400 leading-relaxed">{description}</p>
    </motion.div>
  );
}

interface ProcessCardProps {
  number: string;
  title: string;
  description: string;
}

function ProcessCard({ number, title, description }: ProcessCardProps) {
  return (
    <motion.div 
      variants={fadeInUp}
      whileHover={{ y: -12 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="group relative p-10 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300"
    >
      {/* Gradient border glow on hover */}
      <div className="absolute -inset-[1px] bg-gradient-to-r from-[#FF4B2B] to-[#FF9F40] rounded-2xl opacity-0 group-hover:opacity-20 transition duration-500 blur-sm" />
      
      <div className="relative">
        <div className="text-7xl font-bold text-transparent bg-gradient-to-br from-[#FF4B2B]/30 to-[#FF9F40]/30 bg-clip-text mb-6">
          {number}
        </div>
        <h3 className="text-2xl font-bold mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 group-hover:bg-clip-text transition-all duration-300">
          {title}
        </h3>
        <p className="text-gray-400 leading-relaxed text-base">
          {description}
        </p>
      </div>
    </motion.div>
  );
}

interface TestimonialCardProps {
  rating: number;
  text: string;
  author: string;
  role: string;
}

function TestimonialCard({ rating, text, author, role }: TestimonialCardProps) {
  return (
    <motion.div 
      variants={fadeInUp}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="group relative p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300"
    >
      {/* Subtle gradient glow on hover */}
      <div className="absolute -inset-[1px] bg-gradient-to-r from-[#FF4B2B] to-[#FF9F40] rounded-2xl opacity-0 group-hover:opacity-15 transition duration-500 blur-sm" />
      
      <div className="relative">
        <div className="flex gap-1 mb-6">
          {Array.from({ length: rating }).map((_, i) => (
            <Star key={i} className="h-5 w-5 fill-[#FF4B2B] text-[#FF4B2B]" />
          ))}
        </div>
        <p className="text-gray-200 mb-8 leading-relaxed text-lg">
          &quot;{text}&quot;
        </p>
        <div className="border-t border-white/10 pt-4">
          <p className="font-semibold text-white">{author}</p>
          <p className="text-sm text-gray-500 mt-1">{role}</p>
        </div>
      </div>
    </motion.div>
  );
}

interface PricingCardProps {
  name: string;
  description: string;
  price: string;
  priceSubtext?: string;
  features: string[];
  isPopular?: boolean;
}

function PricingCard({ name, description, price, priceSubtext, features, isPopular }: PricingCardProps) {
  return (
    <motion.div
      variants={fadeInUp}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="relative group"
    >
      {/* Popular badge */}
      {isPopular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
          <div className="px-4 py-1.5 rounded-full bg-gradient-to-r from-[#FF4B2B] to-[#FF9F40] text-white text-xs font-semibold uppercase tracking-wider">
            Most Popular
          </div>
        </div>
      )}

      {/* Gradient border on hover */}
      <div className={`absolute -inset-[1px] bg-gradient-to-r from-[#FF4B2B] to-[#FF9F40] rounded-2xl opacity-0 group-hover:opacity-20 transition duration-500 blur-sm ${isPopular ? 'opacity-10' : ''}`} />
      
      <div className={`relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-300 ${
        isPopular ? 'border-[#FF4B2B]/30 hover:border-[#FF4B2B]/50' : 'border-white/10 hover:border-white/20'
      }`}>
        {/* Plan Name */}
        <h3 className="text-2xl font-bold mb-2">{name}</h3>
        
        {/* Description */}
        <p className="text-sm text-gray-400 leading-relaxed mb-6">{description}</p>

        {/* Price */}
        <div className="mb-8">
          <div className="flex items-baseline gap-1">
            <span className="text-4xl md:text-5xl font-bold text-white">{price}</span>
            {priceSubtext && <span className="text-xl text-gray-400">{priceSubtext}</span>}
          </div>
        </div>

        {/* Features */}
        <div className="space-y-3 mb-8">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-[#FF4B2B] flex-shrink-0 mt-0.5" />
              <span className="text-gray-300 text-sm leading-relaxed">{feature}</span>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <a href="/book" className="block">
          <button className={`w-full py-3 px-6 rounded-lg font-medium text-sm transition-all duration-200 ${
            isPopular 
              ? 'bg-gradient-to-r from-[#FF4B2B] to-[#FF9F40] text-white hover:shadow-lg hover:shadow-[#FF4B2B]/20' 
              : 'bg-white text-black hover:bg-gray-200'
          }`}>
            Book a Call
          </button>
        </a>
      </div>
    </motion.div>
  );
}