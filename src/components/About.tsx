"use client";
import Image from "next/image";
import React, { useRef, useEffect } from "react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { motion } from "framer-motion";

const About: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  // Simple animation styles for the hexagons
  const svgAnimationStyles = `
    @keyframes hexGlow {
      0%, 100% {
        filter: brightness(1) drop-shadow(0 0 10px rgba(59, 130, 246, 0.5));
      }
      50% {
        filter: brightness(1.2) drop-shadow(0 0 15px rgba(139, 92, 246, 0.7));
      }
    }
    
    .simple-hexagons polygon {
      filter: drop-shadow(0 0 8px rgba(59, 130, 246, 0.4));
      animation: hexGlow 6s ease-in-out infinite;
    }
    
    .simple-hexagons polygon:nth-child(1) {
      animation-delay: 0s;
    }
    
    .simple-hexagons polygon:nth-child(2) {
      animation-delay: 1.5s;
    }
    
    .simple-hexagons polygon:nth-child(3) {
      animation-delay: 3s;
    }
    
    .simple-hexagons polygon:nth-child(4) {
      animation-delay: 4.5s;
    }
  `;

  return (
    <div className="bg-[#060C14] min-h-screen flex flex-col text-gray-800">
      {/* Add the animation styles */}
      <style dangerouslySetInnerHTML={{ __html: svgAnimationStyles }} />

      {/* Header Section */}
      <section className="bg-[#060C14] text-black py-24 md:py-36 relative overflow-hidden min-h-screen flex items-center">
        {/* Background liminal gradients */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full filter blur-[120px] opacity-30"></div>
          <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-indigo-600/10 rounded-full filter blur-[100px] opacity-20"></div>
          <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full filter blur-[80px] opacity-30"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center gap-12 relative">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative z-10"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white bg-gradient-to-r from-white via-blue-300 to-indigo-400 bg-clip-text text-transparent">
              Who We Are
            </h1>
            <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mb-8"></div>
            <p className="text-lg leading-relaxed mb-10 max-w-xl text-zinc-300">
              We are a visionary branch of DSCubed, specializing in the transformative
              fields of <span className="text-blue-300">Artificial Intelligence</span> and <span className="text-indigo-300">Generative AI</span>.
            </p>
            <p className="text-lg leading-relaxed mb-10 max-w-xl text-zinc-300">
              Our mission is to empower University of Melbourne students to harness cutting-edge
              AI technologies, unlocking endless possibilities for innovation and discovery.
            </p>
            <div className="flex flex-wrap gap-5">
              <a href="#signup">
                <button className="px-7 py-3 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white hover:shadow-lg hover:shadow-blue-500/20 transition-all font-medium">
                  Join Our Mission
                </button>
              </a>

              <a href="#doing">
                <button className="px-7 py-3 rounded-full bg-transparent backdrop-blur-sm border text-white border-white/20 hover:bg-white/10 hover:border-white/40 transition-all group">
                  Explore Projects
                  <svg className="inline-block ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </a>
            </div>
          </motion.div>

          {/* Generated SVG Graphic */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex justify-center md:justify-end relative"
          >
            <div className="relative w-full max-w-lg">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-purple-500/10 rounded-full blur-3xl opacity-30 animate-pulse" style={{ animationDuration: "8s" }}></div>
              <svg
                viewBox="0 0 500 500"
                className="w-full h-auto relative z-10 drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]"
              >
                {/* Simple gradients */}
                <defs>
                  <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(37, 99, 235, 0.9)" />
                    <stop offset="100%" stopColor="rgba(59, 130, 246, 0.9)" />
                  </linearGradient>
                  <linearGradient id="purpleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(109, 40, 217, 0.9)" />
                    <stop offset="100%" stopColor="rgba(139, 92, 246, 0.9)" />
                  </linearGradient>
                  <linearGradient id="indigo" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(67, 56, 202, 0.9)" />
                    <stop offset="100%" stopColor="rgba(99, 102, 241, 0.9)" />
                  </linearGradient>

                  {/* Glow filter */}
                  <filter id="hexGlow" x="-50%" y="-50%" width="120%" height="120%">
                    <feGaussianBlur stdDeviation="6" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                </defs>

                {/* Just 4 simple hexagons with nice positioning */}
                <g className="simple-hexagons">
                  {/* Large blue hexagon */}
                  <motion.polygon
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    viewport={{ once: true }}
                    points="250,215 310,250 310,320 250,355 190,320 190,250"
                    fill="url(#blueGradient)"
                    filter="url(#hexGlow)"
                  >
                    <animateTransform
                      attributeName="transform"
                      type="translate"
                      values="0,0; 0,-10; 0,0"
                      dur="5s"
                      repeatCount="indefinite"
                    />
                  </motion.polygon>

                  {/* Medium purple hexagon - top right */}
                  <motion.polygon
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                    points="330,70 390,105 390,175 330,210 270,175 270,105"
                    fill="url(#purpleGradient)"
                  >
                    <animateTransform
                      attributeName="transform"
                      type="translate"
                      values="0,0; 0,-8; 0,0"
                      dur="6s"
                      repeatCount="indefinite"
                      begin="1s"
                    />
                  </motion.polygon>

                  {/* Medium indigo hexagon - bottom left */}
                  <motion.polygon
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                    viewport={{ once: true }}
                    points="140,335 200,370 200,440 140,475 80,440 80,370"
                    fill="url(#indigo)"
                  >
                    <animateTransform
                      attributeName="transform"
                      type="translate"
                      values="0,0; 0,-5; 0,0"
                      dur="4s"
                      repeatCount="indefinite"
                      begin="2s"
                    />
                  </motion.polygon>

                  {/* Small purple hexagon - far right */}
                  <motion.polygon
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 1.0 }}
                    viewport={{ once: true }}
                    points="420,285 455,305 455,345 420,365 385,345 385,305"
                    fill="url(#purpleGradient)"
                  >
                    <animateTransform
                      attributeName="transform"
                      type="translate"
                      values="0,0; 0,-7; 0,0"
                      dur="7s"
                      repeatCount="indefinite"
                      begin="0.5s"
                    />
                  </motion.polygon>
                </g>
              </svg>
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
        className="relative py-24 md:py-36 min-h-screen flex items-center"
      >
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 bg-gradient-to-r from-white via-blue-300 to-indigo-300 bg-clip-text text-transparent">
            What We Offer
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mx-auto mb-8"></div>
          <p className="text-zinc-300 max-w-2xl mx-auto text-lg">
            Join us to access a comprehensive ecosystem of AI resources, community, and practical expertise
          </p>
        </div>

        {/* 3D connector effect */}
        <div className="absolute left-1/2 transform -translate-x-1/2 top-40 bottom-0 w-[2px] bg-gradient-to-b from-blue-500/50 via-indigo-500/30 to-transparent hidden md:block"></div>
        <div className="absolute left-1/2 transform -translate-x-1/2 top-40 w-6 h-6 rounded-full bg-blue-500/20 blur-md hidden md:block"></div>

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