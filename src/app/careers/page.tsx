"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Cpu, Globe, Users, Target, ArrowRight, Upload, Send } from "lucide-react";

const roles = [
  "FEA Engineer",
  "CFD Engineer",
  "Mechanical Design Engineer",
  "Simulation Analyst",
];

const cultureValues = [
  { icon: Cpu, text: "Precision-driven engineering culture" },
  { icon: Globe, text: "Research-oriented work environment" },
  { icon: Users, text: "Collaborative, cross-functional teams" },
  { icon: Target, text: "Continuous learning and development" },
];

export default function CareersPage() {
  return (
    <>
      <HeroSection />
      <WhyJoin />
      <OpenRoles />
      <CultureSection />
      <ApplySection />
    </>
  );
}

function HeroSection() {
  return (
    <section className="min-h-[50vh] flex items-center gradient-navy pt-24">
      <div className="container-main">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan/10 border border-cyan/20 mb-6">
            <span className="w-2 h-2 rounded-full bg-cyan" />
            <span className="text-cyan text-xs font-medium tracking-wider uppercase">Careers</span>
          </div>
          <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6 max-w-4xl">
            Engineer the Future with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan to-blue-400">DeltaSim</span>
          </h1>
          <p className="text-grey-300 text-lg md:text-xl max-w-3xl leading-relaxed">
            Join a team of world-class simulation engineers working on complex
            challenges across aerospace, automotive, energy, and beyond.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function WhyJoin() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="section-padding bg-white">
      <div className="container-main">
        <motion.div animate={isInView ? { opacity: 1, y: 0 } : {}} initial={{ opacity: 0, y: 20 }} transition={{ duration: 0.5 }} className="text-center mb-12">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-navy mb-4">Why Join DeltaSim?</h2>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: Cpu, title: "Engineering Innovation", desc: "Work on real CAE projects that push the boundaries of simulation technology" },
            { icon: Globe, title: "Industry Exposure", desc: "Gain experience across aerospace, automotive, energy, and medical device sectors" },
            { icon: Users, title: "Expert Team", desc: "Collaborate with senior engineers who are leaders in their simulation domains" },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="p-6 rounded-xl bg-grey-50 border border-grey-200 text-center hover-lift"
              >
                <div className="w-14 h-14 rounded-full bg-cyan/10 flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-7 h-7 text-cyan" />
                </div>
                <h3 className="font-heading font-bold text-navy mb-2">{item.title}</h3>
                <p className="text-grey-500 text-sm">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function OpenRoles() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="section-padding bg-grey-50">
      <div className="container-main">
        <motion.div animate={isInView ? { opacity: 1, y: 0 } : {}} initial={{ opacity: 0, y: 20 }} transition={{ duration: 0.5 }} className="text-center mb-12">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-navy mb-4">Open Roles</h2>
          <p className="text-grey-500 text-lg">Current opportunities at DeltaSim</p>
        </motion.div>
        <div className="max-w-3xl mx-auto space-y-4">
          {roles.map((role, i) => (
            <motion.div
              key={role}
              initial={{ opacity: 0, x: -10 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.3, delay: i * 0.08 }}
              className="flex items-center justify-between p-5 rounded-xl bg-white border border-grey-200 hover-lift"
            >
              <div>
                <h3 className="font-heading font-bold text-navy">{role}</h3>
                <p className="text-grey-500 text-sm">Full-time | Remote/Hybrid</p>
              </div>
              <span className="px-4 py-2 text-cyan font-semibold text-sm hover:bg-cyan hover:text-navy rounded-lg transition-colors cursor-pointer">
                Apply Now
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CultureSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="section-padding bg-white">
      <div className="container-main">
        <motion.div animate={isInView ? { opacity: 1, y: 0 } : {}} initial={{ opacity: 0, y: 20 }} transition={{ duration: 0.5 }} className="text-center mb-12">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-navy mb-4">Our Culture</h2>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {cultureValues.map((cv, i) => {
            const Icon = cv.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="text-center p-6"
              >
                <div className="w-14 h-14 rounded-full bg-cyan/10 flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-7 h-7 text-cyan" />
                </div>
                <p className="text-navy font-medium text-sm">{cv.text}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ApplySection() {
  const [selectedRole, setSelectedRole] = useState("");

  return (
    <section className="section-padding bg-grey-50">
      <div className="container-main max-w-2xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-navy mb-4">Apply Now</h2>
          <p className="text-grey-500 text-lg">Send us your application</p>
        </div>
        <form className="space-y-5">
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-medium text-navy mb-1.5">Full Name</label>
              <input type="text" className="w-full px-4 py-3 rounded-lg border border-grey-200 bg-white text-navy focus:outline-none focus:border-cyan transition-colors" placeholder="John Smith" />
            </div>
            <div>
              <label className="block text-sm font-medium text-navy mb-1.5">Email</label>
              <input type="email" className="w-full px-4 py-3 rounded-lg border border-grey-200 bg-white text-navy focus:outline-none focus:border-cyan transition-colors" placeholder="john@company.com" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-navy mb-1.5">Role</label>
            <select
              value={selectedRole}
              onChange={(e) => setSelectedRole(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-grey-200 bg-white text-navy focus:outline-none focus:border-cyan transition-colors"
            >
              <option value="">Select a role</option>
              {roles.map((r) => (
                <option key={r} value={r}>{r}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-navy mb-1.5">Resume / CV</label>
            <div className="border-2 border-dashed border-grey-200 rounded-lg p-8 text-center hover:border-cyan transition-colors cursor-pointer">
              <Upload className="w-8 h-8 text-grey-400 mx-auto mb-2" />
              <p className="text-grey-500 text-sm">Click to upload or drag and drop</p>
              <p className="text-grey-400 text-xs mt-1">PDF, DOC (max 10MB)</p>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-navy mb-1.5">Cover Letter (Optional)</label>
            <textarea rows={4} className="w-full px-4 py-3 rounded-lg border border-grey-200 bg-white text-navy focus:outline-none focus:border-cyan transition-colors resize-none" placeholder="Tell us why you'd be a great fit..." />
          </div>
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-cyan text-navy font-semibold rounded-lg hover:bg-cyan-dark transition-colors"
          >
            Submit Application <Send className="w-4 h-4" />
          </button>
        </form>
      </div>
    </section>
  );
}
