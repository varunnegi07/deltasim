"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-navy">
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-cyan rounded-full blur-[128px]" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-blue-500 rounded-full blur-[128px]" />
      </div>
      <div className="container-main relative z-10 pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan/10 border border-cyan/20 mb-6">
              <span className="w-2 h-2 rounded-full bg-cyan animate-pulse" />
              <span className="text-cyan text-xs font-medium tracking-wider uppercase">
                Engineering Excellence Since 2014
              </span>
            </div>
            <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-white leading-[1.1] tracking-tight mb-6">
              Advanced Engineering Simulation{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan to-blue-400">
                & Talent Solutions
              </span>
            </h1>
            <p className="text-grey-300 text-lg sm:text-xl leading-relaxed mb-8 max-w-xl">
              CAE | FEA | CFD | Design Engineering | Optimization | Expert
              Talent Deployment
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/solutions"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-cyan text-navy font-semibold rounded-lg hover:bg-cyan-dark transition-all"
              >
                Explore Solutions
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
              <Link
                href="/talent"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/5 transition-all"
              >
                Hire Engineering Talent
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="hidden lg:block relative"
          >
            <div className="relative aspect-square max-w-lg mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan/20 to-blue-500/20 rounded-3xl" />
              <div className="absolute inset-4 bg-navy-light rounded-2xl border border-white/10 overflow-hidden">
                <div className="p-6 space-y-4">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                    <span className="text-grey-500 text-xs ml-2">simulation.delta</span>
                  </div>
                  <div className="space-y-3">
                    {[
                      "FEA Structural Analysis - 0.02% Error",
                      "CFD Turbulence Model - Converged",
                      "Mesh Optimization - 2.4M Elements",
                      "Thermal Gradient - Validated",
                    ].map((line, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-3 px-4 py-3 rounded-lg bg-white/5"
                      >
                        <div className="w-2 h-2 rounded-full bg-cyan" />
                        <span className="text-grey-300 text-sm font-mono">
                          {line}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 p-4 rounded-lg bg-cyan/10 border border-cyan/20">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-cyan text-xs font-mono">
                        Simulation Progress
                      </span>
                      <span className="text-cyan text-xs font-mono">100%</span>
                    </div>
                    <div className="h-2 rounded-full bg-navy overflow-hidden">
                      <div className="h-full w-full bg-gradient-to-r from-cyan to-blue-400 rounded-full" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
