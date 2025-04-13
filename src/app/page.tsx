
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import About from "@/components/About"
import Doing from "@/components/Doing";
import Signup from "@/components/Signup";

export default function Page() {
  return (
    <main className="scroll-smooth">
      {/* <Navbar /> */}
      
      <section id="hero">
        <Hero />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="doing">
        <Doing />
      </section>

      <section id="signup">
        <Signup />
      </section>

    </main>
  );
}

