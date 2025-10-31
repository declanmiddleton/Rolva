"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function CTASection() {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative group"
        >
          {/* Animated gradient border */}
          <div className="absolute -inset-1 bg-gradient-to-r from-[#5B7CFF] via-[#FF9F40] to-[#FF6B4A] rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200" />
          
          <div className="relative bg-black/90 rounded-3xl p-12 border border-white/10 backdrop-blur-sm">
            <div className="text-center space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold">
                Ready to transform your{" "}
                <span className="italic font-serif text-transparent bg-gradient-to-r from-[#5B7CFF] to-[#FF6B4A] bg-clip-text">
                  social media?
                </span>
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Join hundreds of businesses already using Rolva to scale their social media presence.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <a href="/book">
                  <Button size="lg" className="text-sm">
                    Start your subscription
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </a>
                <a href="/book">
                  <Button size="lg" variant="dark" className="text-sm">
                    Schedule a call
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
