"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { Cpu, Users, ArrowRight } from "lucide-react";

export default function DualOffering() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-bg-primary">
      <div className="container-main">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-4">
            What We Offer
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Two core capabilities under one roof — engineering solutions and
            expert talent deployment
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {[
            {
              icon: Cpu,
              title: "Engineering Solutions",
              description:
                "High-end simulation and design engineering services delivering precision outcomes across industries.",
              features: [
                "Simulation services",
                "Design engineering",
                "Optimization",
                "Failure analysis",
              ],
              href: "/solutions",
              cta: "Explore Solutions",
              image: "/images/dual-engineering.jpg",
            },
            {
              icon: Users,
              title: "Talent Solutions",
              description:
                "On-demand engineering experts and dedicated teams who integrate seamlessly with your organization.",
              features: [
                "Simulation engineers",
                "CAD designers",
                "FEA/CFD experts",
                "Dedicated engineering teams",
              ],
              href: "/talent",
              cta: "Hire Talent",
              image: "/images/dual-talent.jpg",
            },
          ].map((offering, i) => {
            const Icon = offering.icon;
            return (
              <motion.div
                key={offering.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.15 }}
              >
                <div className="group relative h-full p-6 md:p-8 lg:p-10 rounded-2xl bg-white border border-border hover-lift overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent-light to-blue-50 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative z-10">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent to-blue-500 flex items-center justify-center mb-4">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <img
                      src={offering.image}
                      alt={offering.title}
                      className="w-full h-40 md:h-48 object-cover mb-4 rounded-xl"
                      loading="lazy"
                    />
                    <h3 className="font-heading font-bold text-2xl text-primary mb-3">
                      {offering.title}
                    </h3>
                    <p className="text-text-secondary mb-6 leading-relaxed">
                      {offering.description}
                    </p>
                    <ul className="space-y-3 mb-8">
                      {offering.features.map((f) => (
                        <li key={f} className="flex items-center gap-3 text-text-secondary">
                          <div className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={offering.href}
                      className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all"
                    >
                      {offering.cta}
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
