
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";


export default function Page() {
  return (
    <main className="scroll-smooth">
      <Navbar />
      
      <section id="hero">
        <Hero />
      </section>

      {/* <section id="about">
        <about />
      </section>

      <section id="doing">
        <doing />
      </section>

      <section id="contact">
        <contact />
      </section> */}
    </main>
  );
}

