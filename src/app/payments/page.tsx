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
  ArrowRight,
} from "lucide-react";

const categories = [
  {
    id: "cae",
    title: "CAE Academic Courses",
    icon: BookOpen,
    description: "Comprehensive CAE academic programs designed to equip students and professionals with cutting-edge simulation skills for modern engineering challenges.",
    courses: [
      {
        title: "CAE Master Program",
        icon: Cpu,
        bg: "circuit",
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
        bg: "mesh",
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
    description: "Specialized civil engineering programs focused on structural analysis, design codes, and simulation-driven design for buildings, bridges, and infrastructure.",
    courses: [
      {
        title: "Master Program in Electric/Hybrid Vehicle",
        icon: Zap,
        bg: "bolt",
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
    <section className="min-h-[45vh] md:min-h-[55vh] flex items-center pt-24 md:pt-28 relative overflow-hidden bg-[#050B18]">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628] via-[#050B18] to-[#0a1628]" />
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-blue-500/20 blur-[120px]" />
        <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-cyan-500/10 blur-[150px]" />
      </div>
      <div className="absolute inset-0 opacity-[0.12]">
        <svg width="100%" height="100%" viewBox="0 0 1200 600" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0 300H200L280 220H400L500 300H650L750 200H900L1000 300H1200" stroke="#38BDF8" strokeWidth="2" />
          <path d="M0 400H150L250 480H400L500 380H700L800 480H1000L1100 380H1200" stroke="#38BDF8" strokeWidth="1.5" />
          <path d="M0 200H100L200 120H350L450 200H600L700 120H850L950 200H1200" stroke="#38BDF8" strokeWidth="1.5" />
          <circle cx="280" cy="220" r="4" fill="#38BDF8" />
          <circle cx="500" cy="300" r="4" fill="#38BDF8" />
          <circle cx="750" cy="200" r="4" fill="#38BDF8" />
          <circle cx="250" cy="480" r="3" fill="#38BDF8" />
          <circle cx="500" cy="380" r="3" fill="#38BDF8" />
          <circle cx="800" cy="480" r="3" fill="#38BDF8" />
          <circle cx="200" cy="120" r="3" fill="#38BDF8" />
          <circle cx="450" cy="200" r="3" fill="#38BDF8" />
          <circle cx="700" cy="120" r="3" fill="#38BDF8" />
          <path d="M150 0V100H200" stroke="#38BDF8" strokeWidth="1" />
          <path d="M1050 600V500H1000" stroke="#38BDF8" strokeWidth="1" />
          <path d="M350 0V80" stroke="#38BDF8" strokeWidth="1.5" />
          <path d="M850 600V520" stroke="#38BDF8" strokeWidth="1.5" />
        </svg>
      </div>
      <div className="container-main relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-16">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan/10 border border-cyan/20 mb-4 md:mb-6">
                <span className="w-2 h-2 rounded-full bg-cyan animate-pulse" />
                <span className="text-cyan text-xs font-medium tracking-wider uppercase">Course Enrollment</span>
              </div>
              <h1 className="font-heading font-bold text-4xl md:text-6xl lg:text-7xl text-white leading-tight mb-4 md:mb-6 max-w-4xl">
                Academic Course{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan to-blue-400">Payments</span>
              </h1>
              <p className="text-grey-400 text-base md:text-xl max-w-3xl leading-relaxed">
                Enroll in our specialized academic programs and courses.
                Secure your spot in industry-recognized training programs.
              </p>
            </div>
            <div className="flex-shrink-0 hidden md:block">
              <div className="relative w-60 h-44 rounded-2xl overflow-hidden border border-blue-500/30 shadow-2xl shadow-blue-500/10">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-800 to-[#050B18]" />
                <div className="absolute inset-0 opacity-25">
                  <svg viewBox="0 0 240 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                    <path d="M0 90H60L90 60H120L150 90H180L210 60H240" stroke="#38BDF8" strokeWidth="2.5" />
                    <path d="M0 120H50L70 140H100L120 120H150L170 140H240" stroke="#38BDF8" strokeWidth="2" />
                    <path d="M0 60H40L60 40H90L110 60H140L160 40H200L240 60" stroke="#38BDF8" strokeWidth="2" />
                    <circle cx="90" cy="60" r="4" fill="#38BDF8" />
                    <circle cx="150" cy="90" r="4" fill="#38BDF8" />
                    <circle cx="210" cy="60" r="4" fill="#38BDF8" />
                    <circle cx="70" cy="140" r="3" fill="#38BDF8" />
                    <circle cx="120" cy="120" r="3" fill="#38BDF8" />
                    <circle cx="170" cy="140" r="3" fill="#38BDF8" />
                    <circle cx="60" cy="40" r="3" fill="#38BDF8" />
                    <circle cx="110" cy="60" r="3" fill="#38BDF8" />
                    <circle cx="160" cy="40" r="3" fill="#38BDF8" />
                  </svg>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center">
                    <GraduationCap className="w-8 h-8 text-cyan" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#050B18]/60 to-transparent" />
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
    <section className="section-padding bg-[#0a0f1a]">
      <div className="container-main space-y-28">
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
          <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan to-blue-500 flex items-center justify-center shadow-xl shadow-cyan/20">
            <Icon className="w-7 h-7 text-white" />
          </div>
          <div className="h-px flex-1 bg-gradient-to-r from-cyan/40 to-transparent" />
        </div>
        <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-3">
          {category.title}
        </h2>
        <p className="text-grey-400 text-lg max-w-3xl leading-relaxed">
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

const cardStyles: Record<string, { gradient: string; pattern: React.ReactNode }> = {
  circuit: {
    gradient: "from-blue-950 via-indigo-950 to-purple-950",
    pattern: (
      <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 150H100L150 100H200L250 150H400" stroke="#38BDF8" strokeWidth="2" />
        <path d="M0 200H80L120 240H180L220 200H400" stroke="#38BDF8" strokeWidth="1.5" />
        <path d="M0 100H60L90 70H150L180 100H400" stroke="#38BDF8" strokeWidth="1.5" />
        <circle cx="150" cy="100" r="4" fill="#38BDF8" />
        <circle cx="200" cy="150" r="4" fill="#38BDF8" />
        <circle cx="120" cy="240" r="3" fill="#38BDF8" />
        <circle cx="90" cy="70" r="3" fill="#38BDF8" />
        <circle cx="180" cy="100" r="3" fill="#38BDF8" />
        <circle cx="80" cy="200" r="3" fill="#38BDF8" />
        <circle cx="220" cy="200" r="3" fill="#38BDF8" />
        <path d="M300 0V80L340 120V180L300 220V300" stroke="#38BDF8" strokeWidth="1.5" />
        <circle cx="300" cy="80" r="3" fill="#38BDF8" />
        <circle cx="300" cy="220" r="3" fill="#38BDF8" />
        <circle cx="340" cy="120" r="3" fill="#38BDF8" />
        <circle cx="340" cy="180" r="3" fill="#38BDF8" />
        <path d="M50 0V50H100" stroke="#38BDF8" strokeWidth="1" />
        <path d="M350 300V250H300" stroke="#38BDF8" strokeWidth="1" />
      </svg>
    ),
  },
  mesh: {
    gradient: "from-cyan-950 via-blue-950 to-indigo-950",
    pattern: (
      <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 0L50 50L100 0L150 50L200 0L250 50L300 0L350 50L400 0" stroke="#38BDF8" strokeWidth="2" />
        <path d="M0 50L50 100L100 50L150 100L200 50L250 100L300 50L350 100L400 50" stroke="#38BDF8" strokeWidth="2" />
        <path d="M0 100L50 150L100 100L150 150L200 100L250 150L300 100L350 150L400 100" stroke="#38BDF8" strokeWidth="2" />
        <path d="M0 150L50 200L100 150L150 200L200 150L250 200L300 150L350 200L400 150" stroke="#38BDF8" strokeWidth="2" />
        <path d="M0 200L50 250L100 200L150 250L200 200L250 250L300 200L350 250L400 200" stroke="#38BDF8" strokeWidth="2" />
        <path d="M0 250L50 300L100 250L150 300L200 250L250 300L300 250L350 300L400 250" stroke="#38BDF8" strokeWidth="2" />
        <path d="M50 0V50V100V150V200V250V300" stroke="#38BDF8" strokeWidth="1" strokeDasharray="4 6" />
        <path d="M150 0V50V100V150V200V250V300" stroke="#38BDF8" strokeWidth="1" strokeDasharray="4 6" />
        <path d="M250 0V50V100V150V200V250V300" stroke="#38BDF8" strokeWidth="1" strokeDasharray="4 6" />
        <path d="M350 0V50V100V150V200V250V300" stroke="#38BDF8" strokeWidth="1" strokeDasharray="4 6" />
        <circle cx="50" cy="50" r="3" fill="#38BDF8" />
        <circle cx="150" cy="50" r="3" fill="#38BDF8" />
        <circle cx="250" cy="50" r="3" fill="#38BDF8" />
        <circle cx="350" cy="50" r="3" fill="#38BDF8" />
        <circle cx="100" cy="100" r="3" fill="#38BDF8" />
        <circle cx="200" cy="100" r="3" fill="#38BDF8" />
        <circle cx="300" cy="100" r="3" fill="#38BDF8" />
      </svg>
    ),
  },
  bolt: {
    gradient: "from-emerald-950 via-teal-950 to-cyan-950",
    pattern: (
      <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M200 20L80 170H170L140 280L300 130H210L260 20H200Z" stroke="#34D399" strokeWidth="2.5" />
        <circle cx="200" cy="20" r="4" fill="#34D399" />
        <circle cx="80" cy="170" r="4" fill="#34D399" />
        <circle cx="170" cy="170" r="3" fill="#34D399" />
        <circle cx="140" cy="280" r="4" fill="#34D399" />
        <circle cx="300" cy="130" r="4" fill="#34D399" />
        <circle cx="210" cy="130" r="3" fill="#34D399" />
        <circle cx="260" cy="20" r="3" fill="#34D399" />
        <path d="M40 40L100 40" stroke="#34D399" strokeWidth="2" />
        <path d="M100 40L130 70" stroke="#34D399" strokeWidth="2" />
        <path d="M300 40L340 40" stroke="#34D399" strokeWidth="2" />
        <path d="M340 40L340 100" stroke="#34D399" strokeWidth="2" />
        <path d="M60 260L120 260" stroke="#34D399" strokeWidth="2" />
        <path d="M120 260L120 200" stroke="#34D399" strokeWidth="2" />
        <path d="M280 260L360 260" stroke="#34D399" strokeWidth="2" />
        <path d="M360 260L360 180" stroke="#34D399" strokeWidth="2" />
        <circle cx="100" cy="40" r="3" fill="#34D399" />
        <circle cx="340" cy="40" r="3" fill="#34D399" />
        <circle cx="120" cy="260" r="3" fill="#34D399" />
        <circle cx="360" cy="260" r="3" fill="#34D399" />
      </svg>
    ),
  },
};

function CourseCard({ course, index }: { course: typeof categories[number]["courses"][number]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const isSold = course.badge === "Sold";
  const Icon = course.icon;
  const style = cardStyles[course.bg];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className={`relative rounded-2xl border flex flex-col overflow-hidden ${
        isSold
          ? "border-white/5 bg-white/[0.02]"
          : "border-white/10 bg-white/[0.03] hover:border-cyan/30 hover:bg-white/[0.06] transition-all duration-500"
      }`}
    >
      <div className={`relative h-56 flex items-center justify-center overflow-hidden bg-gradient-to-br ${style.gradient}`}>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(56,189,248,0.15),transparent_70%)]" />
        {style.pattern}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1a] via-transparent to-transparent" />
        <div className="relative z-10 flex flex-col items-center gap-3">
          <div className="w-20 h-20 rounded-2xl bg-white/[0.08] backdrop-blur-md border border-white/[0.15] flex items-center justify-center shadow-2xl">
            <Icon className="w-10 h-10 text-white" />
          </div>
          <span className="text-white/30 text-xs font-mono font-bold tracking-[0.2em] uppercase">{course.bg}</span>
        </div>
      </div>
      <div className="p-8 flex flex-col flex-1 relative">
        {course.badge && (
          <span
            className={`absolute -top-3 right-6 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider shadow-2xl ${
              isSold
                ? "bg-zinc-800 text-zinc-400 border border-zinc-700"
                : "bg-gradient-to-r from-cyan to-blue-500 text-white shadow-cyan/30"
            }`}
          >
            {course.badge}
          </span>
        )}
        <h3 className="font-heading font-bold text-xl md:text-2xl text-white mb-3">
          {course.title}
        </h3>
        <p className="text-grey-400 leading-relaxed mb-6 flex-1">
          {course.description}
        </p>
        <div className="space-y-3 mb-8">
          {course.features.map((f) => (
            <div key={f} className="flex items-start gap-3 text-sm text-grey-400">
              <CheckCircle className={`w-4 h-4 mt-0.5 flex-shrink-0 ${isSold ? "text-zinc-600" : "text-cyan"}`} />
              {f}
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between pt-6 border-t border-white/10">
          <div>
            <span className="text-xs text-zinc-500 uppercase tracking-wider font-medium">Course Fee</span>
            <p className="font-heading font-bold text-3xl text-white">{course.price}</p>
          </div>
          <button
            disabled={isSold}
            className={`px-6 py-3 rounded-lg font-semibold text-sm transition-all flex items-center gap-2 ${
              isSold
                ? "bg-zinc-800/50 text-zinc-500 cursor-not-allowed border border-zinc-800"
                : "bg-gradient-to-r from-cyan to-blue-500 text-white hover:from-cyan-dark hover:to-blue-600 shadow-xl shadow-cyan/20 hover:shadow-cyan/30"
            }`}
          >
            {isSold ? "Sold Out" : "Enroll Now"}
            {isSold ? null : <ArrowRight className="w-4 h-4" />}
          </button>
        </div>
      </div>
    </motion.div>
  );
}
