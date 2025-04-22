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
    <section className="bg-gradient-to-b from-[#060C14] via-[#081020] to-black text-white min-h-screen px-6 flex items-center justify-center relative overflow-hidden py-24 md:py-36">
      {/* Background design elements - Enhanced gradient for continuity */}
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-blue-500/10 via-indigo-500/5 to-transparent"></div>
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/5 rounded-full filter blur-3xl animate-pulse" 
             style={{ animationDuration: "7s" }}></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full filter blur-3xl animate-pulse" 
             style={{ animationDelay: "1s", animationDuration: "9s" }}></div>
        <div className="absolute top-1/3 right-1/5 w-40 h-40 bg-indigo-500/5 rounded-full filter blur-3xl animate-pulse" 
             style={{ animationDelay: "2s", animationDuration: "8s" }}></div>
             
        {/* Network-like dotted background */}
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:20px_20px]"></div>
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
          className="mx-auto max-w-md w-full p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-xl"
        >
          <h3 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent">Join our community</h3>
          <p className="text-zinc-300 mb-6">
            Be the first to know about our events, workshops, and cutting-edge AI projects
          </p>
          <div className="flex flex-col space-y-5">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              </div>
              <input
                type="email"
                placeholder="jane.doe@student.unimelb.edu.au"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-5 py-4 pl-12 rounded-xl text-white placeholder-gray-400 outline-none border border-white/10 focus:border-blue-500/50 bg-white/5 transition-all"
              />
            </div>
            <button
              onClick={handleSubmit}
              disabled={status === "loading"}
              className="w-full px-6 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium hover:shadow-lg hover:shadow-blue-500/20 transition-all disabled:opacity-70 flex items-center justify-center"
            >
              {status === "loading" ? (
                <>
                  <svg className="animate-spin mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <span>Submitting...</span>
                </>
              ) : (
                <>
                  <span>Join Waitlist</span>
                  <svg className="ml-2 -mr-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </>
              )}
            </button>
          </div>

          {status === "success" && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -10 }}
              animate={{ opacity: 1, height: "auto", y: 0 }}
              transition={{ duration: 0.3 }}
              className="flex items-center text-green-400 mt-6 bg-green-400/10 rounded-xl p-4 border border-green-400/20"
            >
              <svg className="w-6 h-6 text-green-400 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span>Thanks for signing up! We'll be in touch soon with exclusive AI resources.</span>
            </motion.div>
          )}

          {status === "error" && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -10 }}
              animate={{ opacity: 1, height: "auto", y: 0 }}
              transition={{ duration: 0.3 }}
              className="flex items-start text-red-400 mt-6 bg-red-400/10 rounded-xl p-4 border border-red-400/20"
            >
              <svg className="w-6 h-6 text-red-400 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span>Please enter a valid university email address and try again. If you continue to experience issues, contact us at <span className="underline">support@aicubed.org</span>.</span>
            </motion.div>
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