"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  DraftingCompass,
  Binary,
  Thermometer,
  Atom,
  GaugeCircle,
  AlertTriangle,
} from "lucide-react";
import VideoPlayer from "@/components/VideoPlayer";

const services = [
  {
    icon: DraftingCompass,
    title: "Mechanical Design",
    description:
      "CAD modeling, DFM/DFA analysis, and complete assembly design for complex engineering systems.",
    video: "/videos/mechanical-design.mp4",
  },
  {
    icon: Binary,
    title: "FEA Structural Analysis",
    description:
      "Static & dynamic analysis, fatigue prediction, and structural integrity assessment using advanced FEA methods.",
    video: "/videos/fea-structural.mp4",
  },
  {
    icon: Thermometer,
    title: "CFD & Thermal Analysis",
    description:
      "Fluid flow simulation, heat transfer analysis, and aerodynamics optimization for thermal systems.",
    video: "/videos/cfd-thermal.mp4",
  },
  {
    icon: Atom,
    title: "Multibody Dynamics",
    description:
      "Kinematic and dynamic analysis of mechanical systems with rigid and flexible body interactions.",
    video: "/videos/multibody-dynamics.mp4",
  },
  {
    icon: GaugeCircle,
    title: "Optimization Engineering",
    description:
      "Topology optimization, design of experiments (DOE), and parametric studies for performance gains.",
    video: "/videos/optimization.mp4",
  },
  {
    icon: AlertTriangle,
    title: "Failure Analysis",
    description:
      "Root cause investigation, warranty analysis, and material failure assessment for product reliability.",
    video: "/videos/failure-analysis.mp4",
  },
];

export default function CoreServices() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-grey-50">
      <div className="container-main">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-navy mb-4">
            Core Engineering Services
          </h2>
          <p className="text-grey-500 text-lg max-w-2xl mx-auto">
            End-to-end simulation and design capabilities backed by 10+ years of
            engineering excellence
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <div className="group p-6 lg:p-8 rounded-xl bg-white border border-grey-200 hover-lift">
                  <VideoPlayer
                    src={service.video}
                    poster="/images/solution-poster.svg"
                    type="card"
                    className="mb-4"
                  />
                  <div className="w-12 h-12 rounded-lg bg-cyan/10 flex items-center justify-center mb-4 group-hover:bg-cyan group-hover:text-white transition-all">
                    <Icon className="w-6 h-6 text-cyan group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-navy mb-2">
                    {service.title}
                  </h3>
                  <p className="text-grey-500 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
