"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import VideoPlayer from "@/components/VideoPlayer";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Mr. Gaurav D. Upneja",
    role: "SME – Vehicle Testing, Nexteer",
    quote:
      "DeltaSim's simulation expertise helped us reduce our physical prototyping cycles by 40%. Their FEA team delivered exceptional accuracy on our steering system analysis.",
    video: "/videos/testimonial-nexteer.mp4",
  },
  {
    name: "Mr. Rupeshkumar Patel",
    role: "Engineering Director, Inteva Products",
    quote:
      "The DeltaSim team integrated seamlessly with our engineering department. Their CFD analysis on our closure systems exceeded expectations in both accuracy and turnaround time.",
    video: "/videos/testimonial-inteva.mp4",
  },
  {
    name: "Mr. T. Mizuno",
    role: "Chief Engineer, Subaru Corporation",
    quote:
      "We partnered with DeltaSim for our NVH simulation needs and were impressed by their depth of technical knowledge and commitment to precision.",
    video: "/videos/testimonial-subaru.mp4",
  },
];

export default function ClientTestimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-white">
      <div className="container-main">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-navy mb-4">
            What Our Clients Say
          </h2>
          <p className="text-grey-500 text-lg max-w-2xl mx-auto">
            Trusted by engineering leaders across global industries
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex flex-col"
            >
              <div className="rounded-xl overflow-hidden border border-grey-200 mb-4">
                <VideoPlayer
                  src={t.video}
                  poster="/images/testimonial-poster.svg"
                  type="testimonial"
                />
              </div>
              <div className="flex-1 p-5 rounded-xl bg-grey-50 border border-grey-200">
                <Quote className="w-6 h-6 text-cyan/40 mb-2" />
                <p className="text-grey-600 text-sm leading-relaxed mb-4">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div>
                  <div className="font-heading font-bold text-navy text-sm">
                    {t.name}
                  </div>
                  <div className="text-grey-400 text-xs">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
