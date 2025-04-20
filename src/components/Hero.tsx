import React from "react";
import Image from "next/image";

interface HeroUIProps {
  /** Background color of the hero section */
  heroBg: string;
}

const HeroUI: React.FC<HeroUIProps> = ({ heroBg }) => (
  <div
    className="relative w-full h-screen"
    style={{ backgroundColor: heroBg }}
  >
    {/* Position the SVG group exactly as in Figma */}
    <div
      style={{
        position: "absolute",
        left: "-1.41px",
        top: "0px",
        width: "779.41px",
        height: "761px",
      }}
    >
      <Image
        src="/hero-graphic.svg"
        alt="Decorative hero graphic"
        width={779.41}
        height={761}
        style={{ objectFit: "none" }}
      />
    </div>

    {/* Logo and tagline positioned as before */}
    <div
      style={{
        position: "absolute",
        left: "453px",
        top: "355px",
        width: "907px",
      }}
    >
      <Image src="/logo.svg" alt="Logo" width={907} height={226} />
      <p
        style={{
          marginTop: "10px",
          fontFamily: "Inter, sans-serif",
          fontWeight: 600,
          fontSize: "30px",
          textAlign: "center",
          color: "#ffffff",
        }}
      >
        Intelligence at your fingertips
      </p>
    </div>
  </div>
);

export default HeroUI;






