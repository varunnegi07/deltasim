"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import {
  DraftingCompass,
  Binary,
  Thermometer,
  GaugeCircle,
  AlertTriangle,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

const solutions = [
  {
    id: "mechanical-design",
    icon: DraftingCompass,
    title: "Mechanical Design",
    desc: "Comprehensive mechanical design services from concept to production-ready CAD models. Our design engineers deliver manufacturable, optimized designs that meet stringent industry standards.",
    features: [
      "3D CAD modeling (SolidWorks, CATIA, NX)",
      "Design for Manufacturing (DFM) / Design for Assembly (DFA)",
      "Large assembly management",
      "BOM creation and management",
      "Tolerance stack-up analysis",
      "Engineering change management",
    ],
  },
  {
    id: "fea",
    icon: Binary,
    title: "FEA Structural Analysis",
    desc: "High-fidelity finite element analysis for structural integrity assessment, failure prediction, and design validation across static, dynamic, and fatigue loading conditions.",
    features: [
      "Linear & non-linear static analysis",
      "Modal and frequency response analysis",
      "Fatigue and durability prediction",
      "Explicit dynamics and crash analysis",
      "Composite material analysis",
      "Weld and bolted joint assessment",
    ],
  },
  {
    id: "cfd",
    icon: Thermometer,
    title: "CFD & Thermal Analysis",
    desc: "Advanced computational fluid dynamics and thermal simulation for fluid flow, heat transfer, and aerodynamics optimization across complex engineering systems.",
    features: [
      "Internal/external flow simulation",
      "Conjugate heat transfer analysis",
      "Turbulence modeling (RANS, LES, DES)",
      "Multiphase flow simulation",
      "Electronics cooling analysis",
      "HVAC and thermal comfort simulation",
    ],
  },
  {
    id: "optimization",
    icon: GaugeCircle,
    title: "Optimization Engineering",
    desc: "Systematic design optimization using advanced numerical methods to achieve weight reduction, performance improvement, and cost efficiency.",
    features: [
      "Topology optimization",
      "Shape and size optimization",
      "Design of Experiments (DOE)",
      "Parametric studies and trade-off analysis",
      "Multi-objective optimization",
      "Robust design and sensitivity analysis",
    ],
  },
  {
    id: "failure-analysis",
    icon: AlertTriangle,
    title: "Failure Analysis",
    desc: "Root cause investigation and failure prediction services to identify failure mechanisms, improve product reliability, and reduce warranty costs.",
    features: [
      "Root cause analysis (RCA)",
      "Fracture mechanics assessment",
      "Fatigue life prediction",
      "Corrosion and environmental degradation",
      "Warranty claim investigation",
      "Material selection and validation",
    ],
  },
];

export default function SolutionsPage() {
  return (
    <>
      <HeroSection />
      <SolutionsList />
      <SolutionsCTA />
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
            <span className="text-cyan text-xs font-medium tracking-wider uppercase">Solution Offerings</span>
          </div>
          <h1 className="font-heading font-bold text-3xl md:text-5xl lg:text-6xl text-white leading-tight mb-4 md:mb-6 max-w-4xl">
            Comprehensive Engineering{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan to-blue-400">Solutions</span>
          </h1>
          <p className="text-grey-300 text-base md:text-xl max-w-3xl leading-relaxed">
            End-to-end engineering services from concept design through
            high-fidelity simulation and optimization — delivered with precision
            and technical rigor.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function SolutionsList() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="section-padding bg-white">
      <div className="container-main space-y-20">
        {solutions.map((sol, i) => {
          const Icon = sol.icon;
          return (
            <motion.div
              key={sol.id}
              id={sol.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`flex flex-col ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-10 lg:gap-16 items-start`}
            >
              <div className="flex-1">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan to-blue-500 flex items-center justify-center mb-5">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h2 className="font-heading font-bold text-2xl md:text-3xl text-navy mb-4">{sol.title}</h2>
                <p className="text-grey-500 leading-relaxed mb-6">{sol.desc}</p>
                <div className="grid sm:grid-cols-2 gap-3">
                  {sol.features.map((f) => (
                    <div key={f} className="flex items-start gap-2 text-sm text-grey-600">
                      <CheckCircle className="w-4 h-4 text-cyan mt-0.5 flex-shrink-0" />
                      {f}
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex-1 w-full">
                <div className="aspect-[4/3] rounded-2xl bg-grey-50 border border-grey-200 p-8 flex items-center justify-center">
                  <Icon className="w-24 h-24 text-cyan/20" />
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

function SolutionsCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <section ref={ref} className="section-padding gradient-navy text-center">
      <motion.div animate={isInView ? { opacity: 1, y: 0 } : {}} initial={{ opacity: 0, y: 20 }} transition={{ duration: 0.5 }} className="container-main">
        <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-4">Ready to Start Your Project?</h2>
        <p className="text-grey-300 text-lg mb-8 max-w-2xl mx-auto">Get a tailored engineering solution for your specific requirements</p>
        <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-cyan text-navy font-semibold rounded-lg hover:bg-cyan-dark transition-colors">
          Request Engineering Consultation <ArrowRight className="w-4 h-4" />
        </Link>
      </motion.div>
    </section>
  );
}
