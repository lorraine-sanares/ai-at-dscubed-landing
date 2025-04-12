import React from "react";
import Image from "next/image";

const Hero: React.FC = () => {
    return (
      
      <section className="flex flex-col items-center justify-center text-center mt-43 mb-32">
        <div className="mb-4">
          <Image
            src="/longlogo.png" // Replace with your actual image path
            alt="AI DSCUBED Logo"
            width={600}
            height={100}
          />
        </div>
        <p className="text-lg text-white">Intelligence at your fingertips</p>
      </section>
  );
};

export default Hero;
