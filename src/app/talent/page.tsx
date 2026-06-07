"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import {
  Users,
  PenTool,
  BarChart3,
  Wind,
  Cpu,
  DraftingCompass,
  GaugeCircle,
  Zap,
  DollarSign,
  Globe,
  Target,
  ArrowRight,
} from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

export default function TalentPage() {
  return (
    <>
      <IntroSection />
      <TalentCategories />
      <EngagementModels />
      <BenefitsSection />
      <TalentCTA />
    </>
  );
}

function IntroSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <section ref={ref} className="min-h-[50vh] md:min-h-[60vh] flex items-center gradient-navy pt-20 md:pt-24">
      <div className="container-main">
        <motion.div {...fadeUp} animate={isInView ? fadeUp.animate : {}} className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan/10 border border-cyan/20 mb-4 md:mb-6">
            <span className="w-2 h-2 rounded-full bg-cyan" />
            <span className="text-cyan text-xs font-medium tracking-wider uppercase">Talent Solutions</span>
          </div>
          <h1 className="font-heading font-bold text-3xl md:text-5xl lg:text-6xl text-white leading-tight mb-4 md:mb-6">
            Engineering Workforce{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan to-blue-400">as a Service</span>
          </h1>
          <p className="text-grey-300 text-base md:text-xl leading-relaxed">
            DeltaSim provides highly skilled engineering professionals for
            project-based and long-term engagements. Scale your engineering
            capacity on demand.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function TalentCategories() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const categories = [
    { icon: PenTool, title: "Mechanical Design Engineers", desc: "Product design, CAD modeling, assembly design, and DFM/DFA analysis." },
    { icon: BarChart3, title: "FEA Analysts", desc: "Structural, thermal, and fatigue analysis using industry-leading solvers." },
    { icon: Wind, title: "CFD Engineers", desc: "Fluid dynamics, heat transfer, and aerodynamics simulation experts." },
    { icon: Cpu, title: "Simulation Specialists", desc: "Multiphysics simulation experts for complex coupled problems." },
    { icon: DraftingCompass, title: "CAD Designers", desc: "Expert 3D modeling and drafting in SolidWorks, CATIA, and NX." },
    { icon: GaugeCircle, title: "Optimization Engineers", desc: "Topology optimization, DOE, and parametric design specialists." },
  ];

  return (
    <section ref={ref} className="section-padding bg-white">
      <div className="container-main">
        <motion.div animate={isInView ? fadeUp.animate : {}} className="text-center mb-12">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-navy mb-4">Talent Categories</h2>
          <p className="text-grey-500 text-lg max-w-2xl mx-auto">
            Pre-vetted engineering professionals ready to contribute from day one
          </p>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, i) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <div className="group p-6 rounded-xl bg-white border border-grey-200 hover-lift">
                  <div className="w-12 h-12 rounded-lg bg-cyan/10 flex items-center justify-center mb-4 group-hover:bg-cyan transition-colors">
                    <Icon className="w-6 h-6 text-cyan group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-heading font-bold text-navy text-lg mb-2">{cat.title}</h3>
                  <p className="text-grey-500 text-sm leading-relaxed">{cat.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function EngagementModels() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const models = [
    { icon: Zap, title: "Project-Based Hiring", desc: "Hire experts for specific engineering projects with defined deliverables and timelines." },
    { icon: Users, title: "Contract Staffing", desc: "Augment your team with skilled engineers for short-term or long-term contracts." },
    { icon: Globe, title: "Dedicated Teams (ODC)", desc: "Set up a dedicated offshore development center with hand-picked engineers." },
    { icon: Target, title: "Short-Term Expert Support", desc: "Get specialized expertise for critical milestones, reviews, or troubleshooting." },
  ];

  return (
    <section ref={ref} className="section-padding bg-grey-50">
      <div className="container-main">
        <motion.div animate={isInView ? fadeUp.animate : {}} className="text-center mb-12">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-navy mb-4">Engagement Models</h2>
          <p className="text-grey-500 text-lg max-w-2xl mx-auto">Flexible engagement options tailored to your needs</p>
        </motion.div>
        <div className="grid sm:grid-cols-2 gap-6">
          {models.map((model, i) => {
            const Icon = model.icon;
            return (
              <motion.div
                key={model.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex gap-5 p-6 rounded-xl bg-white border border-grey-200"
              >
                <div className="w-12 h-12 rounded-lg bg-cyan/10 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-6 h-6 text-cyan" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-navy mb-1">{model.title}</h3>
                  <p className="text-grey-500 text-sm leading-relaxed">{model.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function BenefitsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const benefits = [
    { icon: Zap, title: "Rapid Deployment", desc: "Experts onboarded and operational within days" },
    { icon: DollarSign, title: "Reduced Cost", desc: "Optimize engineering spend with flexible staffing" },
    { icon: Users, title: "Scalable Workforce", desc: "Scale up or down based on project demands" },
    { icon: Target, title: "Domain Expertise", desc: "Deep industry-specific engineering knowledge" },
  ];

  return (
    <section ref={ref} className="section-padding bg-white">
      <div className="container-main">
        <motion.div animate={isInView ? fadeUp.animate : {}} className="text-center mb-12">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-navy mb-4">Why Choose DeltaSim Talent?</h2>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((b, i) => {
            const Icon = b.icon;
            return (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="text-center p-6"
              >
                <div className="w-14 h-14 rounded-full bg-cyan/10 flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-7 h-7 text-cyan" />
                </div>
                <h3 className="font-heading font-bold text-navy mb-2">{b.title}</h3>
                <p className="text-grey-500 text-sm">{b.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function TalentCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <section ref={ref} className="section-padding gradient-navy text-center">
      <motion.div animate={isInView ? fadeUp.animate : {}} className="container-main">
        <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-4">Ready to Scale Your Engineering Team?</h2>
        <p className="text-grey-300 text-lg mb-8 max-w-2xl mx-auto">Get in touch to discuss your talent requirements</p>
        <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-cyan text-navy font-semibold rounded-lg hover:bg-cyan-dark transition-colors">
          Hire Talent Now <ArrowRight className="w-4 h-4" />
        </Link>
      </motion.div>
    </section>
  );
}
