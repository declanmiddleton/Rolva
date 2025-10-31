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
              Social media moves fast.
              <br />
              We move{" "}
              <span className="italic font-serif text-transparent bg-gradient-to-r from-[#FF4B2B] to-[#FF9F40] bg-clip-text">
                faster.
              </span>
            </motion.h1>

            <motion.p 
              variants={fadeInUp}
              className="text-xl md:text-2xl text-gray-400 max-w-3xl leading-relaxed"
            >
                  Say goodbye to expensive freelancers, and hello to limitless, lightning fast social media management.
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
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Reasons you'll{" "}
              <span className="italic font-serif text-transparent bg-gradient-to-r from-[#5B7CFF] to-[#FF6B4A] bg-clip-text">
                love
              </span>{" "}
              us
            </h2>
            <p className="text-xl text-gray-400">
              Once you try Rova, you'll never want to go back.
            </p>
          </motion.div>

          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <FeatureCard
              icon={<LayoutDashboard className="h-8 w-8" />}
              title="Dashboard Board"
              description="Request as many social media designs as you like on your own Trello board."
            />
            <FeatureCard
              icon={<Zap className="h-8 w-8" />}
              title="Lightning Fast"
              description="Receive your social media content in just 48 hours on average."
            />
            <FeatureCard
              icon={<Trophy className="h-8 w-8" />}
              title="Award-Winning"
              description="Leave your customers in awe with award-winning social media designs."
            />
            <FeatureCard
              icon={<Users className="h-8 w-8" />}
              title="Unlimited Requests"
              description="Submit as many design requests as you like and we'll get to work on them one by one."
            />
            <FeatureCard
              icon={<Clock className="h-8 w-8" />}
              title="Unlimited Revisions"
              description="Not happy with the first draft? No problem. Unlimited revisions until you're satisfied."
            />
            <FeatureCard
              icon={<CheckCircle2 className="h-8 w-8" />}
              title="Pause Anytime"
              description="No more requests for now? Just hit pause and resume your subscription at a future date."
            />
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              All your design needs{" "}
              <span className="italic font-serif text-transparent bg-gradient-to-r from-[#5B7CFF] to-[#FF6B4A] bg-clip-text">
                covered
              </span>
            </h2>
            <p className="text-xl text-gray-400">
              Running a successful business means taking on multiple roles. We cover all your design needs.
            </p>
          </motion.div>

          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8"
          >
            <ProcessCard
              number="01"
              title="Subscribe"
              description="Choose the plan that's right for you and subscribe in minutes."
            />
            <ProcessCard
              number="02"
              title="Request"
              description="Submit as many design requests as you want through your board."
            />
            <ProcessCard
              number="03"
              title="Receive"
              description="Get your designs delivered in 48 hours on average, ready to use."
            />
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-6"
          >
            <TestimonialCard
              rating={5}
              text="Getting design done has never been such a pain. I am so glad I've found Rova. The work is incredible and the process is refreshingly painless."
              author="Jenny Landon"
              role="Founder at Proof"
            />
            <TestimonialCard
              rating={5}
              text="Rova has completely transformed our social media presence. The quality is outstanding and the turnaround time is unbelievable."
              author="Marcus Chen"
              role="CEO at TechFlow"
            />
            <TestimonialCard
              rating={5}
              text="I can't imagine going back to working with freelancers. Rova is simply the best design service I've ever used."
              author="Sarah Williams"
              role="Marketing Director"
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
                Social media growth doesn't happen overnight. A monthly retainer ensures{" "}
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
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
      className="relative p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300"
    >
      <div className="text-6xl font-bold text-transparent bg-gradient-to-br from-[#5B7CFF]/20 to-[#FF6B4A]/20 bg-clip-text mb-4">
        {number}
      </div>
      <h3 className="text-2xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-400 leading-relaxed">{description}</p>
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
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300"
    >
      <div className="flex gap-1 mb-4">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-yellow-500 text-yellow-500" />
        ))}
      </div>
      <p className="text-gray-300 mb-6 leading-relaxed">{text}</p>
      <div>
        <p className="font-semibold">{author}</p>
        <p className="text-sm text-gray-500">{role}</p>
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