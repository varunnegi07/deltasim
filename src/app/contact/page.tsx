"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Send, Mail, Phone, MapPin } from "lucide-react";

const inquiryTypes = [
  "Engineering Services",
  "Talent Hiring",
  "Both",
];

export default function ContactPage() {
  const [inquiryType, setInquiryType] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <HeroSection />
      <ContactFormSection
        inquiryType={inquiryType}
        setInquiryType={setInquiryType}
        submitted={submitted}
        setSubmitted={setSubmitted}
      />
    </>
  );
}

function HeroSection() {
  return (
    <section className="min-h-[40vh] md:min-h-[45vh] flex items-center gradient-navy pt-20 md:pt-24">
      <div className="container-main">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan/10 border border-cyan/20 mb-4 md:mb-6">
            <span className="w-2 h-2 rounded-full bg-cyan" />
            <span className="text-cyan text-xs font-medium tracking-wider uppercase">Contact</span>
          </div>
          <h1 className="font-heading font-bold text-3xl md:text-5xl lg:text-6xl text-white leading-tight mb-4 md:mb-6 max-w-4xl">
            Let&apos;s Discuss Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan to-blue-400">Engineering Needs</span>
          </h1>
          <p className="text-grey-300 text-base md:text-xl max-w-3xl leading-relaxed">
            Whether you need simulation services, engineering talent, or both —
            our team is ready to help.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function ContactFormSection({
  inquiryType,
  setInquiryType,
  submitted,
  setSubmitted,
}: {
  inquiryType: string;
  setInquiryType: (v: string) => void;
  submitted: boolean;
  setSubmitted: (v: boolean) => void;
}) {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form submission:", { ...formData, inquiryType });
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section className="section-padding bg-white">
        <div className="container-main max-w-lg mx-auto text-center py-20">
          <div className="w-16 h-16 rounded-full bg-cyan/10 flex items-center justify-center mx-auto mb-6">
            <Send className="w-8 h-8 text-cyan" />
          </div>
          <h2 className="font-heading font-bold text-3xl text-navy mb-4">Thank You!</h2>
          <p className="text-grey-500 text-lg">We&apos;ll review your inquiry and respond within 24 hours.</p>
        </div>
      </section>
    );
  }

  const updateField = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <section className="section-padding bg-white">
      <div className="container-main">
        <div className="grid lg:grid-cols-5 gap-8 md:gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <img
              src="/images/contact-map.svg"
              alt="Our location"
              className="w-full max-w-sm mb-6 rounded-xl"
              loading="lazy"
            />
            <h2 className="font-heading font-bold text-2xl text-navy mb-6">
              Get In Touch
            </h2>
            <p className="text-grey-500 mb-8 leading-relaxed">
              Fill out the form and our engineering team will respond within 24
              hours. For urgent inquiries, please contact us directly.
            </p>

            <div className="space-y-5">
              {[
                { icon: Mail, label: "Email", value: "info@deltasimengineering.com" },
                { icon: Phone, label: "Phone", value: "+91-7889231302" },
                { icon: MapPin, label: "Website", value: "www.deltasimengineering.com" },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="flex items-center gap-4 p-4 rounded-xl bg-grey-50 border border-grey-200">
                    <Icon className="w-5 h-5 text-cyan flex-shrink-0" />
                    <div>
                      <div className="text-xs text-grey-400 uppercase tracking-wider">{item.label}</div>
                      <div className="text-navy font-medium text-sm">{item.value}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4 md:gap-5">
                <div>
                  <label className="block text-sm font-medium text-navy mb-1.5">Name</label>
                  <input type="text" value={formData.name} onChange={(e) => updateField("name", e.target.value)} required className="w-full px-4 py-3 rounded-lg border border-grey-200 bg-white text-navy focus:outline-none focus:border-cyan transition-colors" placeholder="Your name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-navy mb-1.5">Company</label>
                  <input type="text" value={formData.company} onChange={(e) => updateField("company", e.target.value)} className="w-full px-4 py-3 rounded-lg border border-grey-200 bg-white text-navy focus:outline-none focus:border-cyan transition-colors" placeholder="Company name" />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4 md:gap-5">
                <div>
                  <label className="block text-sm font-medium text-navy mb-1.5">Email</label>
                  <input type="email" value={formData.email} onChange={(e) => updateField("email", e.target.value)} required className="w-full px-4 py-3 rounded-lg border border-grey-200 bg-white text-navy focus:outline-none focus:border-cyan transition-colors" placeholder="email@company.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-navy mb-1.5">Phone</label>
                  <input type="tel" value={formData.phone} onChange={(e) => updateField("phone", e.target.value)} className="w-full px-4 py-3 rounded-lg border border-grey-200 bg-white text-navy focus:outline-none focus:border-cyan transition-colors" placeholder="+1 (888) 000-0000" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-navy mb-1.5">Inquiry Type</label>
                <div className="flex flex-wrap gap-3">
                  {inquiryTypes.map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setInquiryType(type)}
                      className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                        inquiryType === type
                          ? "bg-cyan text-navy"
                          : "bg-grey-100 text-grey-600 hover:bg-grey-200"
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-navy mb-1.5">Message</label>
                <textarea
                  rows={5}
                  value={formData.message}
                  onChange={(e) => updateField("message", e.target.value)}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-grey-200 bg-white text-navy focus:outline-none focus:border-cyan transition-colors resize-none"
                  placeholder="Describe your engineering requirements..."
                />
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-cyan text-navy font-semibold rounded-lg hover:bg-cyan-dark transition-colors"
              >
                Request Engineering Consultation <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
