import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import About from "../components/About"
import Doing from "../components/Doing";
import Signup from "../components/Signup";

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
      <footer className="bg-black text-white py-8 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center space-x-3">
              <img src="/iconlogo.png" alt="Logo" className="h-8 w-auto" />
              <p className="text-zinc-300 text-sm">© {new Date().getFullYear()} DSCubed. All rights reserved.</p>
            </div>

            {/* Social Media Icons */}
            <div className="flex items-center space-x-6">
              {/* X (Twitter) Icon */}
              <a href="https://x.com/ai_at_dscubed" className="text-zinc-400 hover:text-white transition-colors" aria-label="X (Twitter)">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                  <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
                </svg>
              </a>

              {/* Email Icon */}
              <a href="mailto:ai@dscubed.org.au" className="text-zinc-400 hover:text-white transition-colors" aria-label="Email">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </a>

              {/* Instagram Icon */}
              <a href="https://www.instagram.com/ai_at_dscubed/" className="text-zinc-400 hover:text-white transition-colors" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

