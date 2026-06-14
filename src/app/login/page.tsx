"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { LogIn, Mail, Lock, Eye, EyeOff, Sparkles } from "lucide-react";

export default function LoginPage() {
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
      const res = await fetch("http://localhost:8000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (!res.ok) {
        setMessage({ type: "error", text: data.detail || "Login failed" });
      } else {
        setMessage({ type: "success", text: `Welcome back, ${data.user.name}!` });
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
              <span className="text-cyan text-xs font-medium tracking-wider uppercase">Welcome Back</span>
            </div>
            <h1 className="font-heading font-bold text-3xl md:text-4xl text-white mb-2">Sign In</h1>
            <p className="text-grey-400 text-sm">Access your DeltaSim account</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5 bg-white/[0.03] border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
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
                <input type={showPassword ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)} required className="w-full pl-10 pr-10 py-3 rounded-lg border border-white/10 bg-white/[0.03] text-white focus:outline-none focus:border-cyan transition-colors placeholder:text-grey-500" placeholder="Enter your password" />
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
              {loading ? "Signing in..." : "Sign In"} <LogIn className="w-4 h-4" />
            </button>

            <p className="text-center text-grey-400 text-sm">
              Don&apos;t have an account?{" "}
              <Link href="/signup" className="text-cyan hover:underline">Create one</Link>
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
