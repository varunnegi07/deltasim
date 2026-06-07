"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import {
  Target,
  Lightbulb,
  Shield,
  Users,
  Award,
  ArrowRight,
} from "lucide-react";

const values = [
  { icon: Target, title: "Precision", desc: "Every simulation, every design, every report — delivered with uncompromising accuracy." },
  { icon: Lightbulb, title: "Innovation", desc: "We leverage the latest simulation technologies to solve complex engineering challenges." },
  { icon: Shield, title: "Integrity", desc: "Transparent processes, honest communication, and complete IP protection for our clients." },
  { icon: Users, title: "Collaboration", desc: "We work as an extension of your team, aligning with your engineering culture and workflows." },
  { icon: Award, title: "Excellence", desc: "500+ successful projects across 15+ industries with 98% client satisfaction." },
];

const stats = [
  { value: "500+", label: "Engineering Projects Delivered" },
  { value: "15+", label: "Industry Domains" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "10+", label: "Years of Expertise" },
];

export default function AboutPage() {
  return (
    <>
      <HeroSection />
      <MissionSection />
      <ValuesSection />
      <StatsSection />
      <AboutCTA />
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
            <span className="text-cyan text-xs font-medium tracking-wider uppercase">About Us</span>
          </div>
          <h1 className="font-heading font-bold text-3xl md:text-5xl lg:text-6xl text-white leading-tight mb-4 md:mb-6 max-w-4xl">
            Engineering Excellence, Delivered
          </h1>
          <p className="text-grey-300 text-base md:text-xl max-w-3xl leading-relaxed">
            DeltaSim is a premium engineering simulation and talent solutions
            company delivering high-performance engineering outcomes across
            global industries.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function MissionSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="section-padding bg-white">
      <div className="container-main">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-navy mb-6">Company Overview</h2>
            <p className="text-grey-500 leading-relaxed mb-6">
              DeltaSim combines deep CAE simulation expertise with a global
              talent network to deliver end-to-end engineering solutions. We
              partner with organizations across aerospace, automotive, energy,
              and medical device industries to accelerate product development
              and optimize engineering performance.
            </p>
            <p className="text-grey-500 leading-relaxed">
              Our software-agnostic approach ensures we deploy the best tools
              for every problem — from ANSYS and Abaqus to OpenFOAM and
              custom MATLAB/Python scripts — giving our clients the technical
              edge they need to succeed.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="p-8 rounded-2xl bg-grey-50 border border-grey-200"
          >
            <h3 className="font-heading font-bold text-2xl text-navy mb-4">Our Mission</h3>
            <p className="text-grey-600 text-lg leading-relaxed italic">
              &ldquo;Empower organizations with world-class simulation and
              engineering talent to solve the most complex engineering
              challenges — faster, smarter, and with absolute precision.&rdquo;
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ValuesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="section-padding bg-grey-50">
      <div className="container-main">
        <motion.div animate={isInView ? { opacity: 1, y: 0 } : {}} initial={{ opacity: 0, y: 20 }} transition={{ duration: 0.5 }} className="text-center mb-12">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-navy mb-4">Core Values</h2>
          <p className="text-grey-500 text-lg">The principles that guide every engagement</p>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {values.map((v, i) => {
            const Icon = v.icon;
            return (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="p-6 rounded-xl bg-white border border-grey-200 text-center hover-lift"
              >
                <div className="w-12 h-12 rounded-full bg-cyan/10 flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-6 h-6 text-cyan" />
                </div>
                <h3 className="font-heading font-bold text-navy mb-2">{v.title}</h3>
                <p className="text-grey-500 text-sm">{v.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function StatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="section-padding bg-white">
      <div className="container-main">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-cyan mb-1">
                {stat.value}
              </div>
              <div className="text-grey-500 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <section ref={ref} className="section-padding gradient-navy text-center">
      <motion.div animate={isInView ? { opacity: 1, y: 0 } : {}} initial={{ opacity: 0, y: 20 }} transition={{ duration: 0.5 }} className="container-main">
        <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-4">Ready to Partner with DeltaSim?</h2>
        <p className="text-grey-300 text-lg mb-8 max-w-2xl mx-auto">Let&apos;s discuss how we can help accelerate your engineering projects</p>
        <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-cyan text-navy font-semibold rounded-lg hover:bg-cyan-dark transition-colors">
          Get in Touch <ArrowRight className="w-4 h-4" />
        </Link>
      </motion.div>
    </section>
  );
}
