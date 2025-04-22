"use client";

import React, { useState } from "react";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { supabase } from "@/lib/supabaseClient";
import { motion } from "framer-motion";

const Signup: React.FC = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async () => {
    if (!email || !email.trim()) {
      setStatus("error");
      return;
    }

    setStatus("loading");

    try {
      const { error } = await supabase.from("signups").insert([{ email }]);

      if (error) {
        console.error(error);
        setStatus("error");
      } else {
        setEmail("");
        setStatus("success");
      }
    } catch (e) {
      console.error(e);
      setStatus("error");
    }
  };

  return (
    <section className="bg-gradient-to-b from-[#060C14] to-black text-white min-h-screen px-6 flex items-center justify-center relative overflow-hidden">
      {/* Background design elements */}
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-blue-500/5 to-transparent"></div>
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/5 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl text-center w-full z-10 relative"
      >
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-blue-300 text-lg mb-4 font-light tracking-wide"
        >
          Step into the future of intelligence and
        </motion.p>

        <TypewriterEffect
          words={[
            { text: "Help", className: "text-white" },
            { text: "shape", className: "text-white" },
            { text: "the", className: "text-white" },
            { text: "future", className: "text-white" },
            { text: "of", className: "text-white" },
            { text: "AI", className: "text-blue-500" },
            { text: "at", className: "text-white" },
            { text: "the", className: "text-white" },
            { text: "University", className: "text-blue-500" },
            { text: "of", className: "text-blue-500" },
            { text: "Melbourne", className: "text-blue-500" },
          ]}
          className="mb-16"
          cursorClassName="bg-blue-500"
        />

        {/* Email Input + CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mx-auto max-w-md w-full p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10"
        >
          <h3 className="text-xl font-semibold mb-4">Join our community</h3>
          <p className="text-zinc-300 mb-6">
            Be the first to know about our events, workshops, and cutting-edge AI projects
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <input
              type="email"
              placeholder="jane.doe@student.unimelb.edu.au"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-5 py-3 rounded-xl text-white placeholder-gray-500 outline-none border border-white/10 focus:border-blue-500/50 bg-white/5 transition-all"
            />
            <button
              onClick={handleSubmit}
              disabled={status === "loading"}
              className="w-full sm:w-auto whitespace-nowrap px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium hover:shadow-lg hover:shadow-blue-500/20 transition-all disabled:opacity-70"
            >
              {status === "loading" ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Submitting...
                </span>
              ) : (
                "Join Waitlist"
              )}
            </button>
          </div>

          {status === "success" && (
            <motion.p
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              className="text-green-400 mt-4 bg-green-400/10 rounded-lg p-2 border border-green-400/20"
            >
              🎉 Thanks for signing up! We'll be in touch soon.
            </motion.p>
          )}

          {status === "error" && (
            <motion.p
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              className="text-red-400 mt-4 bg-red-400/10 rounded-lg p-2 border border-red-400/20"
            >
              ❌ Oops! Please enter a valid email address and try again.
            </motion.p>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="mt-12 text-sm text-zinc-500"
        >
          <p>By joining, you'll receive exclusive updates from AI³ at the University of Melbourne</p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Signup;