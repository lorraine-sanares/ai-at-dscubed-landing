"use client";

import React, { useState } from "react";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { supabase } from "@/lib/supabaseClient"; // 👈 import Supabase client

const Signup: React.FC = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async () => {
    setStatus("loading");

    const { error } = await supabase.from("signups").insert([{ email }]);

    if (error) {
      console.error(error);
      setStatus("error");
    } else {
      setEmail("");
      setStatus("success");
    }
  };

  return (
    <section className="bg-black text-white min-h-screen px-6 flex items-center justify-center">
      <div className="max-w-4xl text-center w-full">
        <p className="text-white text-base mb-4">
          Step into the future of intelligence and
        </p>

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
          className="mb-10"
          cursorClassName="bg-blue-500"
        />

        {/* Email Input + CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-xl mx-auto">
          <input
            type="email"
            placeholder="jane.doe@student.unimelb.edu.au"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-5 py-3 rounded-full text-white placeholder-gray-500 outline outline-white bg-black"
          />
          <button
            onClick={handleSubmit}
            className="px-6 py-3 text-sm width-{80} rounded-full bg-white text-black font-small hover:bg-gray-200 transition"
          >
            {status === "loading" ? "Submitting..." : "Join Waitlist"}
          </button>
        </div>

        {status === "success" && (
          <p className="text-green-400 mt-4">Thanks for signing up!</p>
        )}
        {status === "error" && (
          <p className="text-red-400 mt-4">Oops, something went wrong.</p>
        )}
      </div>
    </section>
  );
};

export default Signup;
