"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { Send, Mail, Phone, MapPin, Clock, ArrowRight } from "lucide-react";

const inquiryTypes = [
  "Simulation Services",
  "Talent Solutions",
  "Career Inquiry",
  "Partnership",
  "General Inquiry",
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    inquiryType: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const updateField = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form:", formData);
    setSubmitted(true);
  };

  const contactInfo = [
    { icon: Mail, label: "Email", value: "contact@deltasim.com" },
    { icon: Phone, label: "Phone", value: "+1 (888) 000-0000" },
    { icon: MapPin, label: "Location", value: "Bengaluru, India" },
    { icon: Clock, label: "Response Time", value: "Within 24 hours" },
  ];

  if (submitted) {
    return (
      <section className="min-h-screen flex items-center pt-24 md:pt-28 bg-bg-primary">
        <div className="container-main text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="w-16 h-16 rounded-full bg-accent-light flex items-center justify-center mx-auto mb-6">
              <Send className="w-8 h-8 text-accent" />
            </div>
            <h2 className="font-heading font-bold text-3xl text-primary mb-4">Thank You!</h2>
            <p className="text-text-secondary text-lg">We&apos;ll review your inquiry and respond within 24 hours.</p>
            <Link href="/" className="inline-flex items-center gap-2 mt-8 text-accent font-semibold hover:gap-3 transition-all">
              Back to Home <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="min-h-[40vh] md:min-h-[45vh] flex items-center gradient-accent-light pt-20 md:pt-24">
        <div className="container-main">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent-light border border-accent/20 mb-4 md:mb-6">
              <span className="w-2 h-2 rounded-full bg-accent" />
              <span className="text-accent text-xs font-medium tracking-wider uppercase">Contact</span>
            </div>
            <h1 className="font-heading font-bold text-3xl md:text-5xl lg:text-6xl text-primary leading-tight mb-4 md:mb-6">
              Let&apos;s Discuss Your{" "}
              <span className="text-gradient">Engineering Needs</span>
            </h1>
            <p className="text-text-secondary text-base md:text-xl max-w-3xl leading-relaxed">
              Whether you need simulation services, engineering talent, or have a
              technical challenge — we&apos;re here to help.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-bg-primary">
        <div className="container-main">
          <div className="grid lg:grid-cols-5 gap-10 lg:gap-16">
            <div className="lg:col-span-2">
              <h2 className="font-heading font-bold text-2xl text-primary mb-6">
                Contact Information
              </h2>
              <p className="text-text-secondary mb-8 leading-relaxed">
                Reach out to our engineering team. We typically respond within 24
                hours on business days.
              </p>
              <div className="space-y-4">
                {contactInfo.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label} className="flex items-center gap-4 p-4 rounded-xl bg-bg-secondary border border-border">
                      <Icon className="w-5 h-5 text-accent flex-shrink-0" />
                      <div>
                        <div className="text-xs text-text-muted uppercase tracking-wider">{item.label}</div>
                        <div className="text-primary font-medium text-sm">{item.value}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="lg:col-span-3">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-1.5">Name</label>
                    <input type="text" value={formData.name} onChange={(e) => updateField("name", e.target.value)} required className="w-full px-4 py-3 rounded-lg border border-border bg-white text-primary focus:outline-none focus:border-accent transition-colors" placeholder="Your name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-1.5">Company</label>
                    <input type="text" value={formData.company} onChange={(e) => updateField("company", e.target.value)} className="w-full px-4 py-3 rounded-lg border border-border bg-white text-primary focus:outline-none focus:border-accent transition-colors" placeholder="Company name" />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-1.5">Email</label>
                    <input type="email" value={formData.email} onChange={(e) => updateField("email", e.target.value)} required className="w-full px-4 py-3 rounded-lg border border-border bg-white text-primary focus:outline-none focus:border-accent transition-colors" placeholder="email@company.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-1.5">Phone</label>
                    <input type="tel" value={formData.phone} onChange={(e) => updateField("phone", e.target.value)} className="w-full px-4 py-3 rounded-lg border border-border bg-white text-primary focus:outline-none focus:border-accent transition-colors" placeholder="+1 (888) 000-0000" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-1.5">Inquiry Type</label>
                  <div className="flex flex-wrap gap-2">
                    {inquiryTypes.map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => updateField("inquiryType", type)}
                        className={`px-4 py-2 rounded-lg border text-sm font-medium transition-colors ${
                          formData.inquiryType === type
                            ? "bg-accent text-white border-accent"
                            : "bg-bg-tertiary text-text-secondary border-border hover:bg-border"
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-1.5">Message</label>
                  <textarea
                    rows={5}
                    value={formData.message}
                    onChange={(e) => updateField("message", e.target.value)}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-white text-primary focus:outline-none focus:border-accent transition-colors resize-none"
                    placeholder="Describe your project or requirements..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-accent text-white font-semibold rounded-lg hover:bg-accent-hover transition-colors shadow-lg shadow-accent/25"
                >
                  Send Message <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
