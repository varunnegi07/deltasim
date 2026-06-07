"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Search,
  Box,
  Settings,
  Activity,
  RefreshCw,
  CheckCircle,
} from "lucide-react";

const steps = [
  { icon: Search, title: "Discovery & Scoping", desc: "Understand requirements and define project scope" },
  { icon: Box, title: "CAD & Model Preparation", desc: "Clean and prepare geometry for simulation" },
  { icon: Settings, title: "Simulation Setup", desc: "Define physics, materials, and boundary conditions" },
  { icon: Activity, title: "Analysis & Computation", desc: "Run high-fidelity simulations on HPC clusters" },
  { icon: RefreshCw, title: "Optimization Iteration", desc: "Refine design based on simulation results" },
  { icon: CheckCircle, title: "Final Delivery", desc: "Comprehensive engineering report and CAD package" },
];

export default function ProcessFlow() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-white">
      <div className="container-main">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-navy mb-4">
            Our Engineering Process
          </h2>
          <p className="text-grey-500 text-lg max-w-2xl mx-auto">
            A structured, iterative methodology that ensures precision and
            efficiency at every stage
          </p>
        </motion.div>

        <img
          src="/images/process-diagram.svg"
          alt="Engineering process flow"
          className="w-full max-w-2xl mx-auto mb-10 hidden md:block"
          loading="lazy"
        />

        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-grey-200 -translate-y-1/2" />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 lg:gap-4">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="relative flex flex-col items-center text-center"
                >
                  <div className="relative z-10 w-12 h-12 md:w-14 md:h-14 rounded-full bg-grey-50 border-2 border-grey-200 flex items-center justify-center mb-3 md:mb-4 group-hover:border-cyan transition-colors">
                    <Icon className="w-6 h-6 text-cyan" />
                    <div className="absolute -top-1.5 -right-1.5 w-5 h-5 md:w-6 md:h-6 rounded-full bg-cyan text-white text-[10px] md:text-xs font-bold flex items-center justify-center">
                      {i + 1}
                    </div>
                  </div>
                  <h3 className="font-heading font-bold text-navy text-sm mb-1">
                    {step.title}
                  </h3>
                  <p className="text-grey-500 text-xs leading-relaxed">
                    {step.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
