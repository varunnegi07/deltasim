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
  ArrowRight,
  Sparkles,
  PenTool,
} from "lucide-react";

const categories = [
  {
    id: "cad",
    title: "CAD & Design Programs",
    icon: PenTool,
    description: "Professional CAD training programs covering 3D modeling, drafting, design engineering, and product development using industry-standard tools.",
    courses: [
      {
        title: "CAD Master Program",
        image: "/images/payments-cad.jpg",
        description: "A comprehensive master program covering 3D CAD modeling, surface design, assembly management, and detailed drafting. Includes hands-on training in SolidWorks, CATIA, and NX.",
        price: "XXXX",
        features: [
          "3D parametric modeling & surfacing",
          "Assembly & large part management",
          "GD&T and engineering drawings",
          "Capstone design project",
        ],
        badge: "Most Popular",
      },
    ],
  },
  {
    id: "cae",
    title: "CAE & Simulation Programs",
    icon: BookOpen,
    description: "Comprehensive CAE academic programs designed to equip students and professionals with cutting-edge simulation skills for modern engineering challenges.",
    courses: [
      {
        title: "CAE Academic Courses",
        image: "/images/payments-cae-academic.jpg",
        description: "Foundational CAE courses covering engineering theory, finite element methods, and practical simulation workflows. Ideal for students and early-career engineers.",
        price: "XXXX",
        features: [
          "Engineering theory & FEM fundamentals",
          "Introduction to FEA & CFD",
          "Hands-on simulation projects",
          "Certificate of completion",
        ],
        badge: "New",
      },
      {
        title: "CAE Master Program",
        image: "/images/payments-cae-master.jpg",
        description: "An intensive master-level program covering finite element analysis, computational fluid dynamics, and multiphysics simulation. Includes hands-on projects with industry-standard tools like ANSYS, Abaqus, and COMSOL.",
        price: "XXXX",
        features: [
          "Comprehensive FEA & CFD curriculum",
          "Industry-standard software training",
          "Capstone simulation project",
          "Certificate upon completion",
        ],
        badge: null,
      },
      {
        title: "CAE Modeler Courses",
        image: "/images/payments-modeler.jpg",
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
    title: "CIVIL & Structural Programs",
    icon: Building2,
    description: "Specialized civil engineering programs focused on structural analysis, design codes, and simulation-driven design for buildings, bridges, and infrastructure.",
    courses: [
      {
        title: "CIVIL Academic Structural Courses",
        image: "/images/payments-civil.jpg",
        description: "Comprehensive civil engineering courses covering structural analysis, RCC design, steel structures, and construction methodology with practical project work.",
        price: "XXXX",
        features: [
          "Structural analysis & design",
          "RCC & steel structure design",
          "Construction methodology",
          "Industry-standard code compliance",
        ],
        badge: null,
      },
      {
        title: "Master Program in Electric/Hybrid Vehicle",
        image: "/images/payments-ev.jpg",
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
    <section className="relative min-h-[60vh] md:min-h-[70vh] flex items-center pt-24 md:pt-28 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/images/payments-hero.jpg"
          alt="Engineering simulation"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050B18]/95 via-[#050B18]/80 to-[#050B18]/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1a] via-transparent to-transparent" />
      </div>
      <div className="container-main relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan/10 border border-cyan/20 mb-4 md:mb-6 backdrop-blur-sm">
              <Sparkles className="w-3.5 h-3.5 text-cyan" />
              <span className="text-cyan text-xs font-medium tracking-wider uppercase">Course Enrollment</span>
            </div>
            <h1 className="font-heading font-bold text-4xl md:text-6xl lg:text-7xl text-white leading-tight mb-4 md:mb-6">
              Academic Course{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan to-blue-400">Payments</span>
            </h1>
            <p className="text-grey-300 text-base md:text-xl max-w-3xl leading-relaxed">
              Enroll in our specialized academic programs and courses.
              Secure your spot in industry-recognized training programs.
            </p>
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
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className={`relative rounded-2xl border flex flex-col overflow-hidden group ${
        isSold
          ? "border-white/5 bg-white/[0.02]"
          : "border-white/10 bg-white/[0.03] hover:border-cyan/30 hover:bg-white/[0.06] transition-all duration-500"
      }`}
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={course.image}
          alt={course.title}
          className={`w-full h-full object-cover transition-transform duration-700 ${
            isSold ? "" : "group-hover:scale-110"
          }`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1a] via-[#0a0f1a]/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0a0f1a]/80" />
      </div>
      <div className="p-6 flex flex-col flex-1 relative">
        {course.badge && (
          <span
            className={`absolute -top-3 right-4 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider shadow-2xl ${
              isSold
                ? "bg-zinc-800 text-zinc-400 border border-zinc-700"
                : "bg-gradient-to-r from-cyan to-blue-500 text-white shadow-cyan/30"
            }`}
          >
            {course.badge}
          </span>
        )}
        <h3 className="font-heading font-bold text-lg md:text-xl text-white mb-2">
          {course.title}
        </h3>
        <p className="text-grey-400 text-sm leading-relaxed mb-5 flex-1">
          {course.description}
        </p>
        <div className="space-y-2 mb-6">
          {course.features.map((f) => (
            <div key={f} className="flex items-start gap-2.5 text-xs text-grey-400">
              <CheckCircle className={`w-3.5 h-3.5 mt-0.5 flex-shrink-0 ${isSold ? "text-zinc-600" : "text-cyan"}`} />
              {f}
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between pt-5 border-t border-white/10">
          <div>
            <span className="text-[10px] text-zinc-500 uppercase tracking-wider font-medium">Course Fee</span>
            <p className="font-heading font-bold text-2xl text-white">{course.price}</p>
          </div>
          <button
            disabled={isSold}
            className={`px-5 py-2.5 rounded-lg font-semibold text-xs transition-all flex items-center gap-2 ${
              isSold
                ? "bg-zinc-800/50 text-zinc-500 cursor-not-allowed border border-zinc-800"
                : "bg-gradient-to-r from-cyan to-blue-500 text-white hover:from-cyan-dark hover:to-blue-600 shadow-xl shadow-cyan/20 hover:shadow-cyan/30"
            }`}
          >
            {isSold ? "Sold Out" : "Enroll Now"}
            {isSold ? null : <ArrowRight className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>
    </motion.div>
  );
}
