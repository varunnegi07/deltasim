"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X } from "lucide-react";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("deltasim-cookies");
    if (!consent) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem("deltasim-cookies", "accepted");
    setVisible(false);
  };

  const reject = () => {
    localStorage.setItem("deltasim-cookies", "rejected");
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed bottom-0 left-0 right-0 z-[9999] p-4"
        >
          <div className="mx-auto max-w-4xl bg-primary border border-border rounded-2xl shadow-2xl p-4 md:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 md:gap-6">
            <div className="w-10 h-10 rounded-xl bg-accent-light flex items-center justify-center flex-shrink-0">
              <Cookie className="w-5 h-5 text-accent" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-white text-sm leading-relaxed">
                This website uses cookies to improve your experience. By continuing
                to browse, you agree to our{" "}
                <a
                  href="/privacy"
                  className="text-accent underline hover:text-accent-hover transition-colors"
                >
                  Privacy Policy
                </a>.
              </p>
            </div>
            <div className="flex items-center gap-3 flex-shrink-0">
              <button
                onClick={reject}
                className="px-4 py-2 text-sm text-text-muted hover:text-white transition-colors"
              >
                Decline
              </button>
              <button
                onClick={accept}
                className="px-5 py-2 text-sm font-semibold text-white bg-accent rounded-lg hover:bg-accent-hover transition-colors"
              >
                Accept All
              </button>
              <button
                onClick={reject}
                className="text-text-muted hover:text-white transition-colors"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
