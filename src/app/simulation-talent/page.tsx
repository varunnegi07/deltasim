"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import {
  BarChart3,
  Wind,
  Thermometer,
  Atom,
  AlertTriangle,
  Cpu,
  Users,
  Zap,
  Target,
  ArrowRight,
  CheckCircle,
  DollarSign,
} from "lucide-react";

export default function SimulationTalentPage() {
  return (
    <>
      <HeroSection />
      <ExpertiseAreas />
      <ToolExpertise />
      <DeliveryModel />
      <ValueProposition />
      <SimTalentCTA />
    </>
  );
}

function HeroSection() {
  return (
    <section className="min-h-[45vh] md:min-h-[55vh] flex items-center gradient-navy pt-20 md:pt-24">
      <div className="container-main">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan/10 border border-cyan/20 mb-4 md:mb-6">
            <span className="w-2 h-2 rounded-full bg-cyan" />
            <span className="text-cyan text-xs font-medium tracking-wider uppercase">Simulation Talent</span>
          </div>
          <h1 className="font-heading font-bold text-3xl md:text-5xl lg:text-6xl text-white leading-tight mb-4 md:mb-6 max-w-4xl">
            Specialized <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan to-blue-400">Simulation Engineers</span> for High-Fidelity Analysis
          </h1>
          <p className="text-grey-300 text-base md:text-xl max-w-3xl leading-relaxed">
            Access deep-domain simulation expertise across FEA, CFD, thermal, and
            multibody dynamics — delivered by engineers who have solved the
            toughest problems in aerospace, automotive, and energy.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function ExpertiseAreas() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const areas = [
    { icon: BarChart3, title: "Structural Simulation (FEA)", desc: "Linear/non-linear static analysis, dynamic response, fatigue, and fracture mechanics using ANSYS, Abaqus, and NASTRAN." },
    { icon: Wind, title: "Fluid Dynamics (CFD)", desc: "Internal/external flow, multiphase flow, turbulence modeling, and aerodynamic optimization with Fluent and OpenFOAM." },
    { icon: Thermometer, title: "Thermal Engineering", desc: "Conjugate heat transfer, thermal stress analysis, electronics cooling, and HVAC simulation." },
    { icon: Atom, title: "Multibody Dynamics", desc: "Rigid and flexible body dynamics, mechanism analysis, and vehicle dynamics simulation." },
    { icon: AlertTriangle, title: "Failure Analysis", desc: "Root cause investigation, fatigue life prediction, fracture mechanics, and material failure assessment." },
  ];

  return (
    <section ref={ref} className="section-padding bg-white">
      <div className="container-main">
        <motion.div animate={isInView ? { opacity: 1, y: 0 } : {}} initial={{ opacity: 0, y: 20 }} transition={{ duration: 0.5 }} className="text-center mb-12">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-navy mb-4">Core Expertise Areas</h2>
          <p className="text-grey-500 text-lg max-w-2xl mx-auto">Deep technical specialization across all major simulation domains</p>
        </motion.div>
        <div className="space-y-4">
          {areas.map((area, i) => {
            const Icon = area.icon;
            return (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, x: -10 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex gap-5 p-6 rounded-xl bg-grey-50 border border-grey-200 hover-lift"
              >
                <div className="w-12 h-12 rounded-lg bg-cyan/10 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-6 h-6 text-cyan" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-navy text-lg mb-1">{area.title}</h3>
                  <p className="text-grey-500 text-sm leading-relaxed">{area.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ToolExpertise() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const tools = ["ANSYS", "Abaqus", "SolidWorks", "CATIA", "MATLAB", "LS-DYNA"];

  return (
    <section ref={ref} className="section-padding bg-grey-50">
      <div className="container-main">
        <motion.div animate={isInView ? { opacity: 1, y: 0 } : {}} initial={{ opacity: 0, y: 20 }} transition={{ duration: 0.5 }} className="text-center mb-12">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-navy mb-4">Tool Expertise</h2>
          <p className="text-grey-500 text-lg">Industry-leading software proficiency</p>
        </motion.div>
        <div className="flex flex-wrap justify-center gap-3">
          {tools.map((tool, i) => (
            <motion.div
              key={tool}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.3, delay: i * 0.08 }}
              className="px-6 py-3 rounded-lg bg-white border border-grey-200 text-navy font-semibold text-sm hover-lift"
            >
              {tool}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function DeliveryModel() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const models = [
    { icon: Cpu, title: "Dedicated Simulation Engineers", desc: "Full-time simulation engineers integrated into your product development team." },
    { icon: Zap, title: "On-Demand Experts", desc: "Access specialized simulation expertise for critical project phases." },
    { icon: Users, title: "Embedded Client Teams", desc: "Co-located or remote teams that operate as an extension of your engineering department." },
  ];

  return (
    <section ref={ref} className="section-padding bg-white">
      <div className="container-main">
        <motion.div animate={isInView ? { opacity: 1, y: 0 } : {}} initial={{ opacity: 0, y: 20 }} transition={{ duration: 0.5 }} className="text-center mb-12">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-navy mb-4">Delivery Models</h2>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-6">
          {models.map((m, i) => {
            const Icon = m.icon;
            return (
              <motion.div
                key={m.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="p-6 rounded-xl bg-grey-50 border border-grey-200 text-center hover-lift"
              >
                <div className="w-14 h-14 rounded-full bg-cyan/10 flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-7 h-7 text-cyan" />
                </div>
                <h3 className="font-heading font-bold text-navy mb-2">{m.title}</h3>
                <p className="text-grey-500 text-sm">{m.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ValueProposition() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const values = [
    { icon: Zap, text: "Faster simulation cycles with optimized workflows" },
    { icon: DollarSign, text: "Reduced R&D cost through efficient resource allocation" },
    { icon: Target, text: "High accuracy engineering output validated against test data" },
  ];

  return (
    <section ref={ref} className="section-padding bg-grey-50">
      <div className="container-main">
        <motion.div animate={isInView ? { opacity: 1, y: 0 } : {}} initial={{ opacity: 0, y: 20 }} transition={{ duration: 0.5 }} className="text-center mb-10">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-navy mb-4">Value Proposition</h2>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {values.map((v, i) => {
            const Icon = v.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex items-center gap-4 p-5 rounded-xl bg-white border border-grey-200"
              >
                <Icon className="w-6 h-6 text-cyan flex-shrink-0" />
                <span className="text-navy font-medium">{v.text}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function SimTalentCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <section ref={ref} className="section-padding gradient-navy text-center">
      <motion.div animate={isInView ? { opacity: 1, y: 0 } : {}} initial={{ opacity: 0, y: 20 }} transition={{ duration: 0.5 }} className="container-main">
        <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-4">Need Simulation Talent?</h2>
        <p className="text-grey-300 text-lg mb-8">Let us match you with the right simulation expert</p>
        <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-cyan text-navy font-semibold rounded-lg hover:bg-cyan-dark transition-colors">
          Get Started <ArrowRight className="w-4 h-4" />
        </Link>
      </motion.div>
    </section>
  );
}
