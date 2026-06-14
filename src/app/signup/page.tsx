"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { UserPlus, Mail, Lock, Eye, EyeOff, User, Sparkles } from "lucide-react";

export default function SignupPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);
    try {
      const res = await fetch("http://localhost:8000/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });
      const data = await res.json();
      if (!res.ok) {
        setMessage({ type: "error", text: data.detail || "Signup failed" });
      } else {
        setMessage({ type: "success", text: "Account created successfully! You can now sign in." });
      }
    } catch {
      setMessage({ type: "error", text: "Could not connect to server" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center pt-24 md:pt-28 overflow-hidden bg-[#0a0f1a]">
      <div className="container-main w-full">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-md mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan/10 border border-cyan/20 mb-4 backdrop-blur-sm">
              <Sparkles className="w-3.5 h-3.5 text-cyan" />
              <span className="text-cyan text-xs font-medium tracking-wider uppercase">Get Started</span>
            </div>
            <h1 className="font-heading font-bold text-3xl md:text-4xl text-white mb-2">Create Account</h1>
            <p className="text-grey-400 text-sm">Join DeltaSim Engineering</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5 bg-white/[0.03] border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
            <div>
              <label className="block text-sm font-medium text-grey-300 mb-1.5">Full Name</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-grey-500" />
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} required className="w-full pl-10 pr-4 py-3 rounded-lg border border-white/10 bg-white/[0.03] text-white focus:outline-none focus:border-cyan transition-colors placeholder:text-grey-500" placeholder="John Smith" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-grey-300 mb-1.5">Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-grey-500" />
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="w-full pl-10 pr-4 py-3 rounded-lg border border-white/10 bg-white/[0.03] text-white focus:outline-none focus:border-cyan transition-colors placeholder:text-grey-500" placeholder="john@company.com" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-grey-300 mb-1.5">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-grey-500" />
                <input type={showPassword ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)} required minLength={6} className="w-full pl-10 pr-10 py-3 rounded-lg border border-white/10 bg-white/[0.03] text-white focus:outline-none focus:border-cyan transition-colors placeholder:text-grey-500" placeholder="Min 6 characters" />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-grey-500 hover:text-grey-300">
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {message && (
              <div className={`px-4 py-3 rounded-lg text-sm ${
                message.type === "success" ? "bg-cyan/10 text-cyan border border-cyan/20" : "bg-red/10 text-red-400 border border-red/20"
              }`}>
                {message.text}
              </div>
            )}

            <button type="submit" disabled={loading} className="w-full flex items-center justify-center gap-2 px-8 py-3.5 bg-gradient-to-r from-cyan to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-dark hover:to-blue-600 transition-all shadow-xl shadow-cyan/20 disabled:opacity-50">
              {loading ? "Creating account..." : "Create Account"} <UserPlus className="w-4 h-4" />
            </button>

            <p className="text-center text-grey-400 text-sm">
              Already have an account?{" "}
              <Link href="/login" className="text-cyan hover:underline">Sign in</Link>
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
