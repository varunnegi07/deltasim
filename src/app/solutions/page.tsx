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
  Cog,
  CheckCircle,
  ArrowRight,
  Cpu,
} from "lucide-react";

const solutions = [
  {
    id: "mechanical-design",
    icon: DraftingCompass,
    image: "/images/sol-mechanical.jpg",
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
    id: "engine-design",
    icon: Cpu,
    image: "/images/sol-engine.jpg",
    title: "Engine Design & Analysis",
    desc: "Specialized engine design services covering internal combustion, hybrid, and electric powertrain systems. From concept development through detailed simulation-driven validation for performance, durability, and emissions compliance.",
    features: [
      "Combustion system design & simulation",
      "Thermal management & cooling system design",
      "Structural integrity of engine components",
      "NVH optimization for powertrain systems",
      "Emissions calibration & aftertreatment integration",
      "Hybrid/electric powertrain architecture",
    ],
  },
  {
    id: "fea",
    icon: Binary,
    image: "/images/sol-fea.jpg",
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
    image: "/images/sol-cfd.jpg",
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
    image: "/images/sol-optimization.jpg",
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
    image: "/images/sol-failure.jpg",
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
  {
    id: "multi-body-dynamics",
    icon: GaugeCircle,
    image: "/images/sol-mbd.jpg",
    title: "Multi-Body Dynamics",
    desc: "Kinematic and dynamic simulation of mechanisms, linkages, and assemblies using Adams and RecurDyn to predict loads, motion, and performance across operating conditions.",
    features: [
      "Kinematic & dynamic simulation",
      "Mechanism and linkage analysis",
      "Load prediction for downstream FEA",
      "Motion envelope verification",
      "Contact and friction modeling",
      "Flexible body dynamics",
    ],
  },
  {
    id: "prototyping",
    icon: Cog,
    image: "/images/sol-prototyping.jpg",
    title: "Prototyping Support",
    desc: "Engineering support for rapid prototyping, additive manufacturing, CNC machining specifications, and prototype validation test planning to accelerate time-to-market.",
    features: [
      "Rapid prototyping support",
      "Additive manufacturing specifications",
      "CNC machining drawings",
      "Prototype validation planning",
      "Material selection guidance",
      "Design for manufacturing (DFM)",
    ],
  },
  {
    id: "product-validation",
    icon: CheckCircle,
    image: "/images/sol-validation.jpg",
    title: "Product Validation & Testing",
    desc: "Development of test plans, instrumentation guidance, correlation of simulation models to physical test data, and regulatory compliance support for certification.",
    features: [
      "Test plan development",
      "FEA-to-test correlation",
      "Instrumentation guidance",
      "Regulatory compliance support",
      "Design certification reports",
      "Field failure reproduction",
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
    <section className="relative min-h-[55vh] md:min-h-[65vh] flex items-center pt-24 md:pt-28 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/images/hero-solutions.jpg"
          alt="Engineering solutions"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-transparent to-transparent" />
      </div>
      <div className="container-main relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent-light border border-accent/20 mb-4 md:mb-6 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-accent" />
            <span className="text-accent text-xs font-medium tracking-wider uppercase">Solution Offerings</span>
          </div>
          <h1 className="font-heading font-bold text-4xl md:text-6xl lg:text-7xl text-primary leading-tight mb-4 md:mb-6 max-w-4xl">
            Comprehensive Engineering{" "}
            <span className="text-gradient">Solutions</span>
          </h1>
          <p className="text-text-secondary text-base md:text-xl max-w-3xl leading-relaxed">
            End-to-end engineering services from concept design through
            high-fidelity simulation and optimization — delivered with precision
            and technical rigor.
          </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function SolutionsList() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="section-padding bg-bg-primary">
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
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent to-blue-500 flex items-center justify-center mb-5">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h2 className="font-heading font-bold text-2xl md:text-3xl text-primary mb-4">{sol.title}</h2>
                <p className="text-text-secondary leading-relaxed mb-6">{sol.desc}</p>
                <div className="grid sm:grid-cols-2 gap-3">
                  {sol.features.map((f) => (
                    <div key={f} className="flex items-start gap-2 text-sm text-text-secondary">
                      <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                      {f}
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex-1 w-full">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-border shadow-md">
                  <img
                    src={sol.image}
                    alt={sol.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    loading="lazy"
                  />
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
    <section ref={ref} className="section-padding gradient-accent-light text-center">
      <motion.div animate={isInView ? { opacity: 1, y: 0 } : {}} initial={{ opacity: 0, y: 20 }} transition={{ duration: 0.5 }} className="container-main">
        <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-4">Ready to Start Your Project?</h2>
        <p className="text-text-secondary text-lg mb-8 max-w-2xl mx-auto">Get a tailored engineering solution for your specific requirements</p>
        <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-white font-semibold rounded-lg hover:bg-accent-hover transition-colors shadow-lg shadow-accent/25">
          Request Engineering Consultation <ArrowRight className="w-4 h-4" />
        </Link>
      </motion.div>
    </section>
  );
}
