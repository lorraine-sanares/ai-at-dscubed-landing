import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import About from "@/components/About"
import Doing from "@/components/Doing";
import Signup from "@/components/Signup";

export default function Page() {
  return (
    <main className="scroll-smooth">
      <section id="hero" className="relative">
        <Hero />
      </section>
      <Navbar />

      <section id="about">
        <About />
      </section>

      <section id="doing">
        <Doing />
      </section>

      <section id="signup">
        <Signup />
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-6 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto flex items-center justify-center space-x-4">
          <img src="/iconlogo.png" alt="Logo" className="h-6 w-auto" />
          <p className="text-zinc-400 text-sm">© {new Date().getFullYear()} DSCubed. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}

