"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { BookOpen, Building2, GraduationCap, CreditCard, CheckCircle } from "lucide-react";

const categories = [
  {
    id: "cae",
    title: "CAE Academic Courses",
    icon: BookOpen,
    description: "Comprehensive CAE academic programs designed to equip students and professionals with cutting-edge simulation skills for modern engineering challenges.",
    courses: [
      {
        title: "CAE Master Program",
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
    <section className="min-h-[40vh] md:min-h-[50vh] flex items-center gradient-navy pt-20 md:pt-24">
      <div className="container-main">
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
              <div className="w-48 h-32 flex items-center justify-center">
                <GraduationCap className="w-24 h-24 text-cyan/30" />
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
    <section className="section-padding bg-white">
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
        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan to-blue-500 flex items-center justify-center mb-5">
          <Icon className="w-7 h-7 text-white" />
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

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className={`relative rounded-2xl border p-8 flex flex-col ${
        isSold
          ? "border-grey-200 bg-grey-50"
          : "border-grey-200 bg-white hover-lift hover:border-cyan/20"
      }`}
    >
      {course.badge && (
        <span
          className={`absolute -top-3 right-6 px-4 py-1 rounded-full text-xs font-semibold uppercase tracking-wider ${
            isSold
              ? "bg-grey-300 text-grey-700"
              : "bg-gradient-to-r from-cyan to-blue-500 text-white"
          }`}
        >
          {course.badge}
        </span>
      )}
      <h3 className="font-heading font-bold text-xl md:text-2xl text-navy mb-3 pr-24">
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
              : "bg-cyan text-navy hover:bg-cyan-dark"
          }`}
        >
          {isSold ? "Sold Out" : "Enroll Now"}
          {!isSold && <CreditCard className="w-4 h-4" />}
        </button>
      </div>
    </motion.div>
  );
}
