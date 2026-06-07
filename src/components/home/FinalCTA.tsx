"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

export default function FinalCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding gradient-navy relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.05]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan rounded-full blur-[150px]" />
      </div>
      <div className="container-main relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white leading-tight mb-6 max-w-3xl mx-auto">
            Let&apos;s Build High-Performance Engineering Solutions
          </h2>
          <p className="text-grey-300 text-lg max-w-2xl mx-auto mb-10">
            Partner with DeltaSim to accelerate your engineering projects with
            precision simulation and expert talent.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-4 bg-cyan text-navy font-semibold rounded-lg hover:bg-cyan-dark transition-colors"
            >
              Contact Us
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/5 transition-colors"
            >
              Request Consultation
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
