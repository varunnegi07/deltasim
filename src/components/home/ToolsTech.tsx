"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const categories = [
  {
    label: "CAD",
    items: ["SolidWorks", "CATIA", "NX"],
  },
  {
    label: "FEA",
    items: ["ANSYS", "Abaqus", "NASTRAN"],
  },
  {
    label: "CFD",
    items: ["Fluent", "OpenFOAM", "Star-CCM+"],
  },
  {
    label: "Scripting",
    items: ["MATLAB", "Python"],
  },
];

export default function ToolsTech() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-bg-secondary">
      <div className="container-main">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-4">
            Tools & Technologies
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Software-agnostic approach with expertise across industry-leading
            engineering tools
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <div className="p-6 rounded-xl bg-white border border-border text-center hover-lift">
                <div className="inline-flex items-center justify-center w-10 h-6 rounded-full bg-accent-light text-accent text-xs font-bold tracking-wider mb-4">
                  {cat.label}
                </div>
                <div className="space-y-2">
                  {cat.items.map((item) => (
                    <div
                      key={item}
                      className="px-4 py-2.5 rounded-lg bg-bg-tertiary text-primary font-medium text-sm"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
