"use client";

import React from "react";
import Image from "next/image";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { motion } from "framer-motion";

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

        {/* Project 1 */}
        <motion.div 
          className="grid md:grid-cols-2 gap-16 items-center min-h-[80vh] py-12"
          variants={item}
        >
          {/* Text */}
          <div>
            <h2 className="text-2xl md:text-4xl font-bold mb-4 text-white">
              llmgine
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mb-6"></div>
            <p className="text-zinc-300 mb-6 text-lg">
              A versatile modular framework designed to build production-ready large language 
              model (LLM) applications with unmatched customizability.
            </p>
            <ul className="space-y-2 text-zinc-400">
              <li className="flex items-center">
                <svg className="h-5 w-5 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Seamless integration with popular LLM providers
              </li>
              <li className="flex items-center">
                <svg className="h-5 w-5 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Extensible plugin architecture
              </li>
              <li className="flex items-center">
                <svg className="h-5 w-5 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Enterprise-grade reliability and performance
              </li>
            </ul>
          </div>

          {/* Image wrapped in BackgroundGradient */}
          <BackgroundGradient className="rounded-xl p-6 bg-black/30 backdrop-blur-sm">
            <Image
              src="/dummycode.png"
              alt="llmgine framework example"
              width={600}
              height={400}
              className="rounded-lg shadow-2xl object-contain hover:scale-105 transition-transform duration-500"
            />
          </BackgroundGradient>
        </motion.div>

        {/* Project 2 */}
        <motion.div 
          className="grid md:grid-cols-2 gap-16 items-center min-h-[80vh] py-12"
          variants={item}
        >
          {/* Image wrapped in BackgroundGradient */}
          <BackgroundGradient className="rounded-xl p-6 bg-black/30 backdrop-blur-sm md:order-1 order-2">
            <Image
              src="/darcy.png"
              alt="Darcy AI Assistant"
              width={600}
              height={400}
              className="rounded-lg shadow-2xl object-contain hover:scale-105 transition-transform duration-500"
            />
          </BackgroundGradient>

          {/* Text & CTA */}
          <div className="md:order-2 order-1">
            <h2 className="text-2xl md:text-4xl font-bold mb-4 text-white">
              Darcy
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full mb-6"></div>
            <p className="text-zinc-300 mb-6 text-lg">
              DSCubed's dynamic AI assistant, now streamlining tasks between Discord 
              and Notion, with more cutting-edge features soon to launch.
            </p>
            <ul className="space-y-2 text-zinc-400">
              <li className="flex items-center">
                <svg className="h-5 w-5 text-purple-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Intelligent task automation
              </li>
              <li className="flex items-center">
                <svg className="h-5 w-5 text-purple-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Cross-platform integration
              </li>
              <li className="flex items-center">
                <svg className="h-5 w-5 text-purple-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                AI-powered workflow optimization
              </li>
            </ul>
            <div className="mt-8">
              <a href="#signup">
                <button className="px-6 py-3 bg-transparent border border-purple-500/40 text-white rounded-full hover:bg-purple-500/10 transition-all group">
                  Join the preview
                  <svg className="inline-block ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Coming Soon */}
        <motion.div 
          className="text-center mt-24 pt-12 pb-24 border-t border-white/10 min-h-[40vh] flex flex-col justify-center"
          variants={item}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">More exciting projects coming soon</h3>
          <p className="text-zinc-400 max-w-2xl mx-auto mb-8">
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