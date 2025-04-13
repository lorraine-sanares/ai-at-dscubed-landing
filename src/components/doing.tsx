"use client";

import React from "react";
import Image from "next/image";
import { BackgroundGradient } from "@/components/ui/background-gradient"; // adjust path if needed

const Doing: React.FC = () => {
  return (
    <section className="bg-[#fdfcfb] dark:bg-[#060C14] py-24 px-18">
      <div className="max-w-6xl mx-auto space-y-24">

        <h1 className="text-4xl md:text-5xl font-bold mb-30 text-white">
            Our Projects
        </h1>

        {/* Block 1 */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-black dark:text-white">
              llmgine
            </h2>
            <ul className="list-disc list-inside text-zinc-700 dark:text-zinc-300 space-y-2">
              <p>
              A versatile modular framework designed to build production-ready large language 
              model (LLM) applications with unmatched customizability.
              </p>
            </ul>
          </div>

          {/* Image wrapped in BackgroundGradient */}
          <BackgroundGradient className="rounded-2xl p-6 bg-white dark:bg-zinc-900">
            <Image
              src="/dummycode.png"
              alt="Prompt editor"
              width={600}
              height={400}
              className="rounded-md shadow-xl object-contain"
            />
          </BackgroundGradient>
        </div>

        {/* Block 2 */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image wrapped in BackgroundGradient */}
          <BackgroundGradient className="rounded-2xl p-6 bg-white dark:bg-zinc-900">
            <Image
              src="/darcy.png"
              alt="OGRE CLI"
              width={600}
              height={400}
              className="rounded-md shadow-xl object-contain"
            />
          </BackgroundGradient>

          {/* Text & CTA */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-black dark:text-white">
              Darcy
            </h2>
            <p className="text-zinc-700 dark:text-zinc-300 mb-6">
                DSCubed’s dynamic AI assistant, now streamlining tasks between Discord 
                and Notion, with more cutting-edge features soon to launch.
            </p>
            <button className="border border-black dark:border-white px-5 py-2 rounded-full font-semibold hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition">
              Join the preview
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Doing;
