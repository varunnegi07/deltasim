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
    desc: "Structural integrity analysis, aeroelasticity simulations, composite material modeling, and fatigue life prediction for airframe and defense systems.",
    applications: ["Flight load simulation", "Engine component FEA", "Radome structural analysis", "Landing gear dynamics"],
    image: "/images/industry-aero.svg",
  },
  {
    icon: Car,
    name: "Automotive & Mobility",
    desc: "Crashworthiness analysis, NVH optimization, lightweighting through topology optimization, and electric vehicle battery thermal management.",
    applications: ["Crash simulation (LS-DYNA)", "NVH analysis", "Thermal management", "Durability testing"],
    image: "/images/industry-auto.svg",
  },
  {
    icon: Zap,
    name: "Energy & Power",
    desc: "Heat transfer analysis for turbines, renewable energy system simulation, nuclear component structural analysis, and power electronics cooling.",
    applications: ["Turbine blade CFD", "Solar thermal analysis", "Wind turbine FEA", "Battery thermal modeling"],
    image: "/images/industry-energy.svg",
  },
  {
    icon: Fuel,
    name: "Oil & Gas",
    desc: "Pressure vessel analysis, pipeline integrity assessment, corrosion modeling, and offshore structure fatigue analysis.",
    applications: ["Pipeline FEA", "Pressure vessel design", "Corrosion modeling", "Offshore structural analysis"],
    image: "/images/industry-oil-gas.svg",
  },
  {
    icon: HeartPulse,
    name: "Medical Devices",
    desc: "Biomechanical simulation, implant fatigue analysis, surgical tool optimization, and medical device compliance testing.",
    applications: ["Implant FEA", "Biomechanics CFD", "Surgical tool design", "FDA compliance simulation"],
    image: "/images/industry-medical.svg",
  },
  {
    icon: Cog,
    name: "Industrial Machinery",
    desc: "Heavy equipment structural analysis, rotating machinery dynamics, conveyor system optimization, and hydraulic system simulation.",
    applications: ["Machine frame FEA", "Rotordynamics", "Hydraulic CFD", "Fatigue analysis"],
    image: "/images/industry-industrial.svg",
  },
  {
    icon: Smartphone,
    name: "Consumer Electronics",
    desc: "Drop test simulation, thermal management for electronics, enclosure structural analysis, and reliability prediction.",
    applications: ["Drop simulation", "Thermal CFD", "Enclosure FEA", "Reliability testing"],
    image: "/images/industry-electronics.svg",
  },
];

export default function IndustriesPage() {
  return (
    <>
      <HeroSection />
      <IndustriesGrid />
      <IndustryCTA />
    </>
  );
}

function HeroSection() {
  return (
    <section className="min-h-[40vh] md:min-h-[50vh] flex items-center gradient-navy pt-20 md:pt-24">
      <div className="container-main">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan/10 border border-cyan/20 mb-4 md:mb-6">
            <span className="w-2 h-2 rounded-full bg-cyan" />
            <span className="text-cyan text-xs font-medium tracking-wider uppercase">Industries</span>
          </div>
          <h1 className="font-heading font-bold text-3xl md:text-5xl lg:text-6xl text-white leading-tight mb-4 md:mb-6 max-w-4xl">
            Engineering Solutions Across{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan to-blue-400">Critical Industries</span>
          </h1>
          <p className="text-grey-300 text-base md:text-xl max-w-3xl leading-relaxed">
            Deep-domain engineering expertise spanning seven high-stakes
            industries — delivering precision simulation and design solutions
            where reliability matters most.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function IndustriesGrid() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="section-padding bg-white">
      <div className="container-main space-y-16">
        {industries.map((ind, i) => {
          const Icon = ind.icon;
          return (
            <motion.div
              key={ind.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`flex flex-col ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-8 lg:gap-16 items-center`}
            >
              <div className="flex-1">
                <Icon className="w-10 h-10 text-cyan mb-4" />
                <h2 className="font-heading font-bold text-2xl md:text-3xl text-navy mb-4">{ind.name}</h2>
                <p className="text-grey-500 leading-relaxed mb-6">{ind.desc}</p>
                <div className="grid sm:grid-cols-2 gap-3">
                  {ind.applications.map((app) => (
                    <div key={app} className="flex items-center gap-2 text-sm text-grey-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan flex-shrink-0" />
                      {app}
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex-1 w-full">
                <img
                  src={ind.image}
                  alt={ind.name}
                  className="w-full aspect-[4/3] rounded-2xl object-cover border border-grey-200"
                  loading="lazy"
                />
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

function IndustryCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <section ref={ref} className="section-padding gradient-navy text-center">
      <motion.div animate={isInView ? { opacity: 1, y: 0 } : {}} initial={{ opacity: 0, y: 20 }} transition={{ duration: 0.5 }} className="container-main">
        <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-4">Not Sure Where to Start?</h2>
        <p className="text-grey-300 text-lg mb-8 max-w-2xl mx-auto">Our engineering team will assess your requirements and recommend the right simulation approach</p>
        <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-cyan text-navy font-semibold rounded-lg hover:bg-cyan-dark transition-colors">
          Talk to an Engineer <ArrowRight className="w-4 h-4" />
        </Link>
      </motion.div>
    </section>
  );
}
