"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import {
  Rocket,
  Car,
  Zap,
  Fuel,
  HeartPulse,
  Cog,
  Smartphone,
  ArrowRight,
} from "lucide-react";

const industries = [
  {
    icon: Rocket,
    name: "Aerospace & Defence",
    problem: "Structural integrity, aeroelasticity, lightweight composites",
    image: "/images/industry-aero.svg",
  },
  {
    icon: Car,
    name: "Automotive",
    problem: "Crash analysis, NVH, lightweighting, durability",
    image: "/images/industry-auto.svg",
  },
  {
    icon: Zap,
    name: "Energy & Power",
    problem: "Heat transfer, turbine simulation, renewable systems",
    image: "/images/industry-energy.svg",
  },
  {
    icon: Fuel,
    name: "Oil & Gas",
    problem: "Pressure systems, corrosion analysis, pipeline integrity",
    image: "/images/industry-oil-gas.svg",
  },
  {
    icon: HeartPulse,
    name: "Medical Devices",
    problem: "Biomechanics, fatigue analysis, implant design",
    image: "/images/industry-medical.svg",
  },
  {
    icon: Cog,
    name: "Industrial Equipment",
    problem: "Heavy machinery simulation, structural optimization",
    image: "/images/industry-industrial.svg",
  },
  {
    icon: Smartphone,
    name: "Consumer Electronics",
    problem: "Durability, thermal management, drop test simulation",
    image: "/images/industry-electronics.svg",
  },
];

export default function IndustriesPreview() {
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
            Industries We Serve
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Deep-domain engineering expertise across seven high-stakes industries
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-5">
          {industries.map((industry, i) => {
            const Icon = industry.icon;
            return (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.06 }}
              >
                <div className="group p-6 rounded-xl bg-bg-secondary border border-border hover-lift">
                  <img
                    src={industry.image}
                    alt={industry.name}
                    className="w-full h-24 object-contain mb-3 rounded-lg"
                    loading="lazy"
                  />
                  <Icon className="w-8 h-8 text-accent mb-3" />
                  <h3 className="font-heading font-bold text-primary mb-2">
                    {industry.name}
                  </h3>
                  <p className="text-text-secondary text-sm">
                    {industry.problem}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-10"
        >
          <Link
            href="/industries"
            className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all"
          >
            View All Industries
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
