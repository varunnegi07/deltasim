"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  BookOpen,
  Building2,
  GraduationCap,
  CreditCard,
  CheckCircle,
  Cpu,
  Network,
  Zap,
  Gauge,
  Cog,
  Flame,
  BrainCircuit,
} from "lucide-react";

const categories = [
  {
    id: "cae",
    title: "CAE Academic Courses",
    icon: BookOpen,
    gradient: "from-blue-900 via-navy to-indigo-900",
    accent: "from-cyan-400 to-blue-500",
    description: "Comprehensive CAE academic programs designed to equip students and professionals with cutting-edge simulation skills for modern engineering challenges.",
    courses: [
      {
        title: "CAE Master Program",
        icon: Cpu,
        pattern: "circuit",
        gradient: "from-blue-900 via-indigo-900 to-purple-900",
        description: "An intensive master-level program covering finite element analysis, computational fluid dynamics, and multiphysics simulation. Includes hands-on projects with industry-standard tools like ANSYS, Abaqus, and COMSOL.",
        price: "XXXX",
        features: [
          "Comprehensive FEA & CFD curriculum",
          "Industry-standard software training",
          "Capstone simulation project",
          "Certificate upon completion",
        ],
        badge: "Most Popular",
      },
      {
        title: "CAE Modeler Courses",
        icon: Network,
        pattern: "mesh",
        gradient: "from-cyan-900 via-blue-900 to-indigo-900",
        description: "Focused training on 3D modeling, meshing techniques, and simulation setup. Ideal for engineers looking to specialize in CAE model preparation and pre-processing workflows.",
        price: "XXXX",
        features: [
          "Advanced meshing techniques",
          "CAD cleanup & geometry preparation",
          "Contact definitions & boundary conditions",
          "Solver setup & troubleshooting",
        ],
        badge: null,
      },
    ],
  },
  {
    id: "civil",
    title: "CIVIL Academic Structural Courses",
    icon: Building2,
    gradient: "from-slate-900 via-navy to-zinc-900",
    accent: "from-emerald-400 to-teal-500",
    description: "Specialized civil engineering programs focused on structural analysis, design codes, and simulation-driven design for buildings, bridges, and infrastructure.",
    courses: [
      {
        title: "Master Program in Electric/Hybrid Vehicle",
        icon: Zap,
        pattern: "bolt",
        gradient: "from-emerald-900 via-teal-900 to-cyan-900",
        description: "An advanced program covering electric and hybrid vehicle powertrain design, battery systems, thermal management, and structural integration. Combines CAE simulation with automotive engineering principles.",
        price: "XXXX",
        features: [
          "EV/HV powertrain architecture",
          "Battery thermal management",
          "Structural analysis for automotive",
          "Industry-recognized certification",
        ],
        badge: "Sold",
      },
    ],
  },
];

const patternSvgs = {
  circuit: (
    <svg className="absolute inset-0 w-full h-full opacity-[0.06]" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 150H100L150 100H200L250 150H400" stroke="white" strokeWidth="2" />
      <path d="M0 200H80L120 240H180L220 200H400" stroke="white" strokeWidth="1.5" />
      <path d="M0 100H60L90 70H150L180 100H400" stroke="white" strokeWidth="1.5" />
      <circle cx="150" cy="100" r="4" fill="white" />
      <circle cx="200" cy="150" r="4" fill="white" />
      <circle cx="120" cy="240" r="3" fill="white" />
      <circle cx="90" cy="70" r="3" fill="white" />
      <circle cx="180" cy="100" r="3" fill="white" />
      <circle cx="80" cy="200" r="3" fill="white" />
      <circle cx="220" cy="200" r="3" fill="white" />
      <path d="M300 0V80L340 120V180L300 220V300" stroke="white" strokeWidth="1.5" />
      <circle cx="300" cy="80" r="3" fill="white" />
      <circle cx="300" cy="220" r="3" fill="white" />
      <circle cx="340" cy="120" r="3" fill="white" />
      <circle cx="340" cy="180" r="3" fill="white" />
      <path d="M50 0V50H100" stroke="white" strokeWidth="1" />
      <path d="M350 300V250H300" stroke="white" strokeWidth="1" />
    </svg>
  ),
  mesh: (
    <svg className="absolute inset-0 w-full h-full opacity-[0.06]" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 0L50 50L100 0L150 50L200 0L250 50L300 0L350 50L400 0" stroke="white" strokeWidth="1.5" />
      <path d="M0 50L50 100L100 50L150 100L200 50L250 100L300 50L350 100L400 50" stroke="white" strokeWidth="1.5" />
      <path d="M0 100L50 150L100 100L150 150L200 100L250 150L300 100L350 150L400 100" stroke="white" strokeWidth="1.5" />
      <path d="M0 150L50 200L100 150L150 200L200 150L250 200L300 150L350 200L400 150" stroke="white" strokeWidth="1.5" />
      <path d="M0 200L50 250L100 200L150 250L200 200L250 250L300 200L350 250L400 200" stroke="white" strokeWidth="1.5" />
      <path d="M0 250L50 300L100 250L150 300L200 250L250 300L300 250L350 300L400 250" stroke="white" strokeWidth="1.5" />
      <path d="M50 0V50V100V150V200V250V300" stroke="white" strokeWidth="1" strokeDasharray="4 4" />
      <path d="M150 0V50V100V150V200V250V300" stroke="white" strokeWidth="1" strokeDasharray="4 4" />
      <path d="M250 0V50V100V150V200V250V300" stroke="white" strokeWidth="1" strokeDasharray="4 4" />
      <path d="M350 0V50V100V150V200V250V300" stroke="white" strokeWidth="1" strokeDasharray="4 4" />
    </svg>
  ),
  bolt: (
    <svg className="absolute inset-0 w-full h-full opacity-[0.06]" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M200 20L80 170H170L140 280L300 130H210L260 20H200Z" stroke="white" strokeWidth="2" />
      <circle cx="200" cy="20" r="3" fill="white" />
      <circle cx="80" cy="170" r="3" fill="white" />
      <circle cx="170" cy="170" r="3" fill="white" />
      <circle cx="140" cy="280" r="3" fill="white" />
      <circle cx="300" cy="130" r="3" fill="white" />
      <circle cx="210" cy="130" r="3" fill="white" />
      <circle cx="260" cy="20" r="3" fill="white" />
      <path d="M40 40L100 40" stroke="white" strokeWidth="1.5" />
      <path d="M100 40L130 70" stroke="white" strokeWidth="1.5" />
      <path d="M300 40L340 40" stroke="white" strokeWidth="1.5" />
      <path d="M340 40L340 100" stroke="white" strokeWidth="1.5" />
      <path d="M60 260L120 260" stroke="white" strokeWidth="1.5" />
      <path d="M120 260L120 200" stroke="white" strokeWidth="1.5" />
      <path d="M280 260L360 260" stroke="white" strokeWidth="1.5" />
      <path d="M360 260L360 180" stroke="white" strokeWidth="1.5" />
      <path d="M40 260L40 200" stroke="white" strokeWidth="1" />
      <path d="M40 200L80 200" stroke="white" strokeWidth="1" />
    </svg>
  ),
};

export default function PaymentsPage() {
  return (
    <>
      <HeroSection />
      <CourseCategories />
    </>
  );
}

function HeroSection() {
  return (
    <section className="min-h-[40vh] md:min-h-[50vh] flex items-center gradient-navy pt-20 md:pt-24 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]">
        <svg className="w-full h-full" viewBox="0 0 1000 600" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 300H200L300 200H400L500 300H600L700 200H800L900 300H1000" stroke="white" strokeWidth="2" />
          <path d="M0 400H150L250 500H400L550 400H700L800 500H1000" stroke="white" strokeWidth="1.5" />
          <path d="M0 200H100L200 100H350L450 200H600L700 100H850L1000 200" stroke="white" strokeWidth="1.5" />
          <circle cx="300" cy="200" r="5" fill="white" />
          <circle cx="500" cy="300" r="5" fill="white" />
          <circle cx="700" cy="200" r="5" fill="white" />
          <circle cx="250" cy="500" r="4" fill="white" />
          <circle cx="550" cy="400" r="4" fill="white" />
          <circle cx="800" cy="500" r="4" fill="white" />
          <circle cx="200" cy="100" r="4" fill="white" />
          <circle cx="450" cy="200" r="4" fill="white" />
          <circle cx="700" cy="100" r="4" fill="white" />
          <path d="M150 0V100H200" stroke="white" strokeWidth="1" />
          <path d="M850 600V500H800" stroke="white" strokeWidth="1" />
        </svg>
      </div>
      <div className="container-main relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan/10 border border-cyan/20 mb-4 md:mb-6">
                <span className="w-2 h-2 rounded-full bg-cyan" />
                <span className="text-cyan text-xs font-medium tracking-wider uppercase">Course Enrollment</span>
              </div>
              <h1 className="font-heading font-bold text-3xl md:text-5xl lg:text-6xl text-white leading-tight mb-4 md:mb-6 max-w-4xl">
                Academic Course{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan to-blue-400">Payments</span>
              </h1>
              <p className="text-grey-300 text-base md:text-xl max-w-3xl leading-relaxed">
                Enroll in our specialized academic programs and courses.
                Secure your spot in industry-recognized training programs.
              </p>
            </div>
            <div className="flex-shrink-0 hidden md:block">
              <div className="relative w-56 h-40 rounded-2xl bg-gradient-to-br from-cyan-900/40 to-blue-900/40 border border-cyan/20 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 opacity-[0.08]">
                  <svg viewBox="0 0 200 150" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                    <path d="M0 75H50L75 50H100L125 75H150L175 50H200" stroke="white" strokeWidth="2" />
                    <path d="M0 100H40L60 120H90L110 100H140L160 120H200" stroke="white" strokeWidth="1.5" />
                    <circle cx="75" cy="50" r="3" fill="white" />
                    <circle cx="125" cy="75" r="3" fill="white" />
                    <circle cx="175" cy="50" r="3" fill="white" />
                    <circle cx="60" cy="120" r="2.5" fill="white" />
                    <circle cx="110" cy="100" r="2.5" fill="white" />
                    <circle cx="160" cy="120" r="2.5" fill="white" />
                  </svg>
                </div>
                <GraduationCap className="w-20 h-20 text-cyan/40 relative z-10" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function CourseCategories() {
  return (
    <section className="section-padding bg-grey-50">
      <div className="container-main space-y-24">
        {categories.map((cat) => (
          <CategorySection key={cat.id} category={cat} />
        ))}
      </div>
    </section>
  );
}

function CategorySection({ category }: { category: typeof categories[number] }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const Icon = category.icon;

  return (
    <div ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="mb-10"
      >
        <div className="flex items-center gap-4 mb-5">
          <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan to-blue-500 flex items-center justify-center shadow-lg shadow-cyan/20">
            <Icon className="w-7 h-7 text-white" />
          </div>
          <div className="h-0.5 flex-1 bg-gradient-to-r from-cyan/30 to-transparent" />
        </div>
        <h2 className="font-heading font-bold text-3xl md:text-4xl text-navy mb-3">
          {category.title}
        </h2>
        <p className="text-grey-500 text-lg max-w-3xl leading-relaxed">
          {category.description}
        </p>
      </motion.div>
      <div className="grid md:grid-cols-2 gap-8">
        {category.courses.map((course, i) => (
          <CourseCard key={course.title} course={course} index={i} />
        ))}
      </div>
    </div>
  );
}

function CourseCard({ course, index }: { course: typeof categories[number]["courses"][number]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const isSold = course.badge === "Sold";
  const Icon = course.icon;
  const pattern = patternSvgs[course.pattern as keyof typeof patternSvgs];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className={`relative rounded-2xl border flex flex-col overflow-hidden ${
        isSold
          ? "border-grey-200 bg-white"
          : "border-grey-200 bg-white shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
      }`}
    >
      <div className={`relative h-52 flex items-center justify-center overflow-hidden bg-gradient-to-br ${course.gradient}`}>
        {pattern}
        <div className="relative z-10 flex flex-col items-center gap-2">
          <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
            <Icon className="w-8 h-8 text-white" />
          </div>
          <span className="text-white/40 text-xs font-mono font-bold tracking-widest uppercase">{course.pattern}</span>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/20 to-transparent" />
      </div>
      <div className="p-8 flex flex-col flex-1 relative">
        {course.badge && (
          <span
            className={`absolute -top-3 right-6 px-4 py-1 rounded-full text-xs font-semibold uppercase tracking-wider shadow-lg ${
              isSold
                ? "bg-grey-300 text-grey-700"
                : "bg-gradient-to-r from-cyan to-blue-500 text-white shadow-cyan/30"
            }`}
          >
            {course.badge}
          </span>
        )}
        <h3 className="font-heading font-bold text-xl md:text-2xl text-navy mb-3">
          {course.title}
        </h3>
        <p className="text-grey-500 leading-relaxed mb-6 flex-1">
          {course.description}
        </p>
        <div className="space-y-2.5 mb-8">
          {course.features.map((f) => (
            <div key={f} className="flex items-start gap-2.5 text-sm text-grey-600">
              <CheckCircle className={`w-4 h-4 mt-0.5 flex-shrink-0 ${isSold ? "text-grey-400" : "text-cyan"}`} />
              {f}
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between pt-6 border-t border-grey-100">
          <div>
            <span className="text-xs text-grey-400 uppercase tracking-wider font-medium">Course Fee</span>
            <p className="font-heading font-bold text-2xl text-navy">{course.price}</p>
          </div>
          <button
            disabled={isSold}
            className={`px-6 py-3 rounded-lg font-semibold text-sm transition-all flex items-center gap-2 ${
              isSold
                ? "bg-grey-200 text-grey-500 cursor-not-allowed"
                : "bg-cyan text-navy hover:bg-cyan-dark shadow-lg shadow-cyan/20"
            }`}
          >
            {isSold ? "Sold Out" : "Enroll Now"}
            {!isSold && <CreditCard className="w-4 h-4" />}
          </button>
        </div>
      </div>
    </motion.div>
  );
}
