"use client";

import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const includedFeatures = [
  "12–16 posts per month",
  "Captions, hashtags, and scheduling",
  "Comment and DM engagement",
  "Monthly performance analytics"
];

export function ServicesSection() {
  return (
    <section id="services" className="py-24 px-6 relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#FF4B2B]/5 to-transparent pointer-events-none" />
      
      <div className="container mx-auto max-w-4xl relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What I{" "}
            <span className="italic font-serif text-transparent bg-gradient-to-r from-[#FF4B2B] to-[#FF9F40] bg-clip-text">
              Offer
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
            I help businesses grow their online presence through consistent posting, high-quality visuals, and content that converts followers into customers.
          </p>
        </motion.div>

        {/* Main Service Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <div className="relative group">
            {/* Subtle gradient border on hover */}
            <div className="absolute -inset-[1px] bg-gradient-to-r from-[#FF4B2B] to-[#FF9F40] rounded-2xl opacity-0 group-hover:opacity-20 transition duration-500 blur-sm" />
            
            <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-10 border border-white/10 group-hover:border-white/20 transition-all duration-300">
              {/* Icon */}
              <div className="inline-flex p-3 rounded-xl bg-[#FF4B2B]/10 border border-[#FF4B2B]/20 mb-6">
                <Sparkles className="h-6 w-6 text-[#FF4B2B]" />
              </div>

              {/* Service Title */}
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Social Media Management & Content Creation
              </h3>

              {/* What's Included */}
              <div className="mb-6">
                <p className="text-sm uppercase tracking-wider text-gray-500 font-semibold mb-4">
                  What's Included in Your Monthly Plan
                </p>
                <ul className="space-y-3">
                  {includedFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="flex-shrink-0 mt-1">
                        <Check className="h-5 w-5 text-[#FF4B2B]" />
                      </div>
                      <span className="text-gray-300 text-base">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Retainer Model Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h4 className="text-lg font-semibold mb-3 text-white">
              Why Monthly Retainer?
            </h4>
            <p className="text-gray-400 leading-relaxed max-w-2xl mx-auto">
              Social media growth doesn't happen overnight. A monthly retainer ensures{" "}
              <span className="text-white font-medium">predictable results</span>,{" "}
              <span className="text-white font-medium">long-term growth</span>, and{" "}
              <span className="text-white font-medium">consistent brand building</span>—all without the stress of one-off projects or scattered efforts.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
