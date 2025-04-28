"use client";

import React from "react";
import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  colorFrom: string;
  colorTo: string;
  features: string[];
  description: string;
  ctaText?: string;
  ctaLink?: string;
  betaStatus?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  colorFrom,
  colorTo,
  features,
  description,
  ctaText,
  ctaLink,
  betaStatus = false
}) => {
  // Determine color classes based on props
  const gradientClass =
    colorFrom === "blue-500" ? "bg-gradient-to-r from-blue-500 to-indigo-600" :
      "bg-gradient-to-r from-purple-500 to-pink-600";

  const textColorClass =
    colorFrom === "blue-500" ? "text-blue-500" : "text-purple-500";

  const borderColorClass =
    colorFrom === "blue-500" ? "border-blue-500/40 hover:bg-blue-500/10" :
      "border-purple-500/40 hover:bg-purple-500/10";

  return (
    <div className="rounded-2xl overflow-hidden bg-black/30 border border-white/10 hover:border-white/20 transition-all duration-300 h-full flex flex-col backdrop-blur-sm shadow-lg">
      {/* Gradient Header Section */}
      <div className="w-full relative h-[80px] group overflow-hidden">
        {colorFrom === 'blue-500' ? (
          /* Blue gradient for llmgine */
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/70 via-blue-800/40 to-blue-500/20"></div>
        ) : (
          /* Purple gradient for Darcy */
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/70 via-purple-800/40 to-purple-500/20"></div>
        )}

        {/* Animated subtle pulse overlay */}
        <div className="absolute inset-0 opacity-25">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-pulse"
            style={{ animationDuration: '3s' }}></div>
        </div>

        {/* Decorative elements */}
        {colorFrom === 'blue-500' ? (
          <>
            {/* Code-like accent for llmgine */}
            <div className="absolute top-1/2 right-8 -translate-y-1/2 w-14 h-9 border border-blue-400/20 rounded bg-blue-500/5"></div>
            <div className="absolute top-8/19 right-10 -translate-y-1/6 w-6 h-1 bg-blue-400/20 rounded-sm"></div>
            <div className="absolute top-1/2 right-10 translate-y-1/6 w-8 h-1 bg-blue-400/20 rounded-sm"></div>
          </>
        ) : (
          <>
            {/* Circular accents for Darcy */}
            <div className="absolute top-1/2 right-8 -translate-y-1/2 w-10 h-10 rounded-full border border-purple-400/20"></div>
            <div className="absolute top-1/2 right-6 -translate-y-1/4 w-6 h-6 rounded-full border border-purple-400/20"></div>
            <div className="absolute top-1/2 right-12 translate-y-0 w-4 h-4 rounded-full bg-purple-400/20"></div>
          </>
        )}
      </div>

      {/* Line separator */}
      <div className={`h-[1px] w-full bg-white/10`}></div>

      {/* Content Section */}
      <div className="p-6 flex-grow flex flex-col">
        <div> {/* Top content */}
          <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
          <div className={`h-1 w-16 ${gradientClass} rounded-full mb-4`}></div>
          <p className="text-zinc-300 mb-4">{description}</p>

          {/* Features */}
          <ul className="space-y-2 text-zinc-400">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center">
                <svg className={`h-5 w-5 ${textColorClass} mr-2`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* CTA Button or Beta Status - Always at bottom */}
        <div className="mt-auto pt-6">
          {ctaText && ctaLink && !betaStatus && (
            <a href={ctaLink} target="_blank" rel="noopener noreferrer" className="inline-block">
              <button className={`px-5 py-2 bg-transparent border ${borderColorClass} text-white rounded-full transition-all group`}>
                {ctaText}
                <svg className="inline-block ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </a>
          )}

          {betaStatus && (
            <span className="inline-block px-3 py-1 bg-white/10 rounded-full text-sm text-zinc-300">
              Currently in Beta
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

const Doing: React.FC = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <section className="bg-[#060C14] py-24 md:py-36 px-6 relative overflow-hidden">
      {/* Background elements - Adjusted to create continuous gradient from About section */}
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-blue-500/10 via-indigo-500/5 to-transparent"></div>
      <div className="absolute -right-20 top-1/3 w-40 h-40 rounded-full bg-blue-500/5 blur-3xl"></div>
      <div className="absolute -left-20 bottom-1/3 w-40 h-40 rounded-full bg-purple-500/5 blur-3xl"></div>

      <motion.div
        className="max-w-6xl mx-auto space-y-24"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <motion.div variants={item}>
          <h1 className="text-4xl md:text-5xl font-bold mb-16 text-center bg-gradient-to-r from-white via-blue-300 to-white bg-clip-text text-transparent">
            Our Projects
          </h1>
        </motion.div>

        {/* Gallery Style Projects */}
        <motion.div
          className="grid md:grid-cols-2 gap-8 px-2 max-w-5xl mx-auto"
          variants={item}
        >
          {/* Project 1: llmgine */}
          <ProjectCard
            title="llmgine"
            colorFrom="blue-500"
            colorTo="indigo-600"
            features={[
              "Seamless integration with popular LLM providers",
              "Extensible plugin architecture",
              "Enterprise-grade reliability and performance"
            ]}
            description="A versatile modular framework designed to build production-ready large language model (LLM) applications focused on customisability."
            ctaText="View on GitHub"
            ctaLink="https://github.com/nathan-luo/llmgine"
          />

          {/* Project 2: Darcy */}
          <ProjectCard
            title="Darcy"
            colorFrom="purple-500"
            colorTo="pink-600"
            features={[
              "Intelligent task automation",
              "Cross-platform integration",
              "AI-powered workflow optimization"
            ]}
            description="DSCubed's dynamic AI assistant, now streamlining tasks between Discord and Notion, with more cutting-edge features soon to launch."
            betaStatus={true}
          />
        </motion.div>

        {/* Coming Soon */}
        <motion.div
          className="text-center mt-24 pt-16 border-t border-white/10 flex flex-col justify-center"
          variants={item}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">More exciting projects coming soon</h3>
          <p className="text-zinc-400 max-w-2xl mx-auto mb-10">
            Our team is constantly developing new AI innovations. Join our community to be the first to know about our latest projects.
          </p>
          <a href="#signup" className="inline-block">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full hover:shadow-lg hover:shadow-blue-500/20 transition-all">
              Stay Updated
            </button>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Doing;