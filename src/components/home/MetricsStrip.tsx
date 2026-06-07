"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const metrics = [
  { value: "500+", label: "Engineering Projects Delivered" },
  { value: "15+", label: "Industry Domains" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "10+", label: "Years Engineering Experience" },
];

export default function MetricsStrip() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="bg-navy-light border-y border-white/5">
      <div className="container-main py-10 md:py-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {metrics.map((metric, i) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-cyan mb-1">
                {metric.value}
              </div>
              <div className="text-grey-400 text-sm">{metric.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
