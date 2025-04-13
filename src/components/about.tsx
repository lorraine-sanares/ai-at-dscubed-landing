"use client";
import Image from "next/image";
import React from "react";
import { GlowingEffect } from "@/components/ui/glowing-effect";

const About: React.FC = () => {
  return (
    <div className="bg-[#060C14] min-h-screen px-18 py-20 text-gray-800">
      {/* Header Section */}
      <section className="bg-[#060C14] text-black py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center gap-12">
            {/* Text Content */}
            <div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                Who Are We?
            </h1>
            <p className="text-md leading-relaxed mb-8 max-w-xl text-white">
                We are a visionary branch of DSCubed, specializing in the transformative
                fields of Artificial Intelligence and Generative AI. Our mission is to
                empower the University of Melbourne’s students to harness emerging AI
                technologies, unlocking endless possibilities for innovation and discovery.
            </p>
            <div className="flex gap-4">
                <button className="px-5 py-3 rounded-full bg-white text-black hover:opacity-90 transition">
                Join Our Mission
                </button>
                <button className="px-5 py-3 rounded-full border text-white border-white hover:bg-white hover:text-black transition">
                Explore Projects
                </button>
            </div>
            </div>

            {/* Illustration or Placeholder */}
            <div className="flex justify-right md:justify-end">
                <Image
                    src="/network.png"
                    alt="network"
                    width={500}
                    height={600}
                    className="rounded-md shadow-xl object-contain"
                />
            </div>
        </div>
        </section>



      <h1 className="text-2xl md:text-4xl font-bold mb-15 mt-20 text-white text-center">
        What we offer
      </h1>

      {/* Glowing Info Cards */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {/* Card 1 */}
        <GlowingCard
          emoji="🧠"
          title="Cutting-edge AI Resources"
          description="Stay informed with the latest breakthroughs, tools, and trends in the fast-moving world of AI."
        />

        {/* Card 2 */}
        <GlowingCard
          emoji="🤝"
          title="Supportive AI Community"
          description="Join a network of passionate learners, creators, and collaborators pushing boundaries together."
        />

        {/* Card 3 */}
        <GlowingCard
          emoji="🛠️"
          title="Advanced Tools & Techniques"
          description="Level up with APIs, fine-tuning workflows, and technical tutorials made for devs and builders."
        />

        {/* Card 4 */}
        <GlowingCard
          emoji="✨"
          title="No-Code AI Solutions"
          description="We make AI accessible for everyone — no programming required to unlock your creative power."
        />

        {/* Card 5 */}
        <GlowingCard
          emoji="🎓"
          title="Smarter Study with AI"
          description="Boost your learning, assignments, and research with intelligent tools and study strategies."
        />
      </section>
    </div>
  );
};

interface GlowingCardProps {
  emoji: string;
  title: string;
  description: string;
}

const GlowingCard: React.FC<GlowingCardProps> = ({ emoji, title, description }) => (
  <div className="relative p-6 rounded-2xl bg-white dark:bg-zinc-900 shadow-md hover:shadow-lg transition duration-300 ease-in-out">
    <GlowingEffect
      glow
      blur={40}
      spread={40}
      proximity={100}
      disabled={false}
    />
    <div className="relative z-10">
      <div className="text-5xl mb-4">{emoji}</div>
      <h3 className="font-semibold text-xl mb-2 text-black dark:text-white">
        {title}
      </h3>
      <p className="text-zinc-700 dark:text-zinc-300">
        {description}
      </p>
    </div>
  </div>
);

export default About;
