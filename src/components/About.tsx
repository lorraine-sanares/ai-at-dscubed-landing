"use client";
import Image from "next/image";
import React, { useRef, useEffect } from "react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { motion } from "framer-motion";

const About: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <div className="bg-[#060C14] min-h-screen py-24 text-gray-800">
      {/* Header Section */}
      <section className="bg-[#060C14] text-black py-20 relative overflow-hidden">
        {/* Background design elements */}
        <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-blue-500/5 to-transparent"></div>
        <div className="absolute bottom-20 left-10 w-20 h-20 rounded-full bg-gradient-to-tr from-blue-500/10 to-purple-500/5 blur-2xl"></div>
        
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center gap-12 relative">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative z-10"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent">
                Who We Are
              </h1>
              <p className="text-md leading-relaxed mb-8 max-w-xl text-zinc-300">
                We are a visionary branch of DSCubed, specializing in the transformative
                fields of Artificial Intelligence and Generative AI. Our mission is to
                empower University of Melbourne students to harness cutting-edge AI
                technologies, unlocking endless possibilities for innovation and discovery.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#signup">
                  <button className="px-5 py-3 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white hover:shadow-lg hover:shadow-blue-500/20 transition-all">
                    Join Our Mission
                  </button>
                </a>

                <a href="#doing">
                  <button className="px-5 py-3 rounded-full bg-transparent backdrop-blur-sm border text-white border-white/20 hover:bg-white/10 hover:border-white/40 transition-all">
                    Explore Projects
                  </button>
                </a>
              </div>
            </motion.div>

            {/* Illustration with animation */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex justify-center md:justify-end relative"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg blur-xl opacity-50 animate-pulse"></div>
                <Image
                  src="/network.png"
                  alt="AI Network Visualization"
                  width={500}
                  height={600}
                  className="rounded-lg shadow-xl object-contain relative z-10"
                />
              </div>
            </motion.div>
        </div>
      </section>

      {/* What We Offer Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative mt-24 mb-20"
      >
        <h2 className="text-3xl md:text-5xl font-bold text-white text-center mb-16 bg-gradient-to-r from-white via-blue-300 to-white bg-clip-text text-transparent">
          What We Offer
        </h2>
        
        {/* Curved line connector effect */}
        <div className="absolute left-1/2 transform -translate-x-1/2 top-24 bottom-0 w-1 bg-gradient-to-b from-blue-500/50 to-transparent hidden md:block"></div>

        {/* Glowing Info Cards */}
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <GlowingCardAnimated
            emoji="🧠"
            title="Cutting-edge AI Resources"
            description="Stay informed with the latest breakthroughs, tools, and trends in the fast-moving world of AI."
            delay={0.1}
          />

          <GlowingCardAnimated
            emoji="🤝"
            title="Supportive AI Community"
            description="Join a network of passionate learners, creators, and collaborators pushing boundaries together."
            delay={0.2}
          />

          <GlowingCardAnimated
            emoji="🛠️"
            title="Advanced Tools & Techniques"
            description="Level up with APIs, fine-tuning workflows, and technical tutorials made for devs and builders."
            delay={0.3}
          />

          <GlowingCardAnimated
            emoji="✨"
            title="No-Code AI Solutions"
            description="We make AI accessible for everyone — no programming required to unlock your creative power."
            delay={0.4}
          />

          <GlowingCardAnimated
            emoji="🎓"
            title="Smarter Study with AI"
            description="Boost your learning, assignments, and research with intelligent tools and study strategies."
            delay={0.5}
          />
          
          <GlowingCardAnimated
            emoji="🚀"
            title="AI Industry Connections"
            description="Connect with industry partners and gain real-world experience through our professional network."
            delay={0.6}
          />
        </div>
      </motion.div>
    </div>
  );
};

interface GlowingCardProps {
  emoji: string;
  title: string;
  description: string;
  delay?: number;
}

const GlowingCardAnimated: React.FC<GlowingCardProps> = ({ emoji, title, description, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true }}
    whileHover={{ y: -5, transition: { duration: 0.2 } }}
  >
    <div className="relative p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-xl hover:shadow-blue-500/10 transition duration-300 ease-in-out h-full">
      <GlowingEffect
        glow
        blur={40}
        spread={40}
        proximity={100}
        disabled={false}
      />
      <div className="relative z-10">
        <div className="text-5xl mb-4">{emoji}</div>
        <h3 className="font-semibold text-xl mb-2 text-white">
          {title}
        </h3>
        <p className="text-zinc-300">
          {description}
        </p>
      </div>
    </div>
  </motion.div>
);

export default About;