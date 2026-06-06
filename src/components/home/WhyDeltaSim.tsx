"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  CheckCircle,
  Layers,
  Cpu,
  Zap,
  FileText,
  Shield,
  Target,
} from "lucide-react";

const reasons = [
  {
    icon: Layers,
    text: "End-to-end engineering capability from concept to production",
  },
  {
    icon: Cpu,
    text: "Software-agnostic simulation approach — best tools for every problem",
  },
  {
    icon: Zap,
    text: "Rapid project initiation — operational in under 5 days",
  },
  {
    icon: FileText,
    text: "Industry-standard reporting compliant with ASME/ISO standards",
  },
  {
    icon: Shield,
    text: "Confidential engineering partnerships with full IP protection",
  },
  {
    icon: Target,
    text: "Results-driven methodology focused on measurable outcomes",
  },
];

export default function WhyDeltaSim() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding gradient-navy relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-[0.03]">
        <div className="w-64 h-64 bg-cyan rounded-full blur-[100px] absolute top-1/4 right-1/4" />
      </div>
      <div className="container-main relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-6">
              Why <span className="text-cyan">DeltaSim</span>?
            </h2>
            <p className="text-grey-300 text-lg leading-relaxed mb-8">
              We combine deep engineering expertise with a commitment to
              precision, speed, and confidentiality — delivering results that
              exceed expectations.
            </p>
            <ul className="space-y-4">
              {reasons.map((reason, i) => {
                const Icon = reason.icon;
                return (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="flex items-start gap-3"
                  >
                    <Icon className="w-5 h-5 text-cyan mt-0.5 flex-shrink-0" />
                    <span className="text-grey-200">{reason.text}</span>
                  </motion.li>
                );
              })}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="flex items-center gap-4 mb-6">
                <CheckCircle className="w-8 h-8 text-cyan" />
                <div>
                  <div className="font-heading font-bold text-white text-lg">
                    98% Client Satisfaction
                  </div>
                  <div className="text-grey-400 text-sm">
                    Based on post-project surveys
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                {[
                  { label: "On-time Delivery", value: 95 },
                  { label: "Quality Compliance", value: 98 },
                  { label: "Client Retention", value: 92 },
                ].map((stat) => (
                  <div key={stat.label}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-grey-300">{stat.label}</span>
                      <span className="text-cyan font-semibold">
                        {stat.value}%
                      </span>
                    </div>
                    <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-cyan to-blue-400 rounded-full"
                        style={{ width: `${stat.value}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
