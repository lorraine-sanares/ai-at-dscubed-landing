import React from "react";
import Image from "next/image";

const Hero: React.FC = () => {
  // Hero container background
  const heroBg = "#060C14";

  // Small nodes
  const nodes = [
    { left: 174, top: 168 },
    { left: 57,  top: 269 },
    { left: 27,  top: 102 },
    { left: 349, top: 32 },
    { left: 453, top: 62 },
  ];

  // Big nodes
  const circles = [
    { left: 145, top: 39, color: "#37ADF3", gradient: false },
    { left: 305, top: 146, color: "#4CB7FE", gradient: false },
    { left: 240, top: 250, color: "#78B9F9", gradient: false },
    { left: 402, top: 240, gradient: true, gradientColors: ["#79B7FF", "#7A86D7"] },
    { left: 541, top: 88, color: "#50C1FF", gradient: false },
    { left: 344, top: 400, color: "#E1AEEF", gradient: false },
    { left: 188, top: 481, color: "#CCA6EA", gradient: false },
    { left: 64,  top: 611, color: "#DAA3FC", gradient: false },
    { left: 122, top: 326, color: "#97C2FD", gradient: false },
    { left: 48,  top: 442, color: "#9EA1ED", gradient: false },
    { left: 720, top: -29, color: "#37ADF3", gradient: false },
    { left: -3312, top: -85, color: "#37ADF3", gradient: false },
    { left: 286, top: 656, color: "#E3A5F9", gradient: false },
    { left: 570, top: 254, color: "#7A86D7", gradient: false },
  ];

  return (

    // Dimensions of container
      <section
        className="relative w-full h-screen mx-auto"
        style={{ backgroundColor: heroBg }}
      >

    
      {/* Rendering small nodes */}
      {nodes.map((node, index) => (
        <div
          key={`node-${index}`}
          style={{
            position: "absolute",
            width: "14px",
            height: "14px",
            left: `${node.left}px`,
            top: `${node.top}px`,
            backgroundColor: "#2463AF",
            borderRadius: "50%",
          }}
        />
      ))}

      {/* Rendering big nodes */}
      {circles.map((circle, index) => {
        if (!circle.gradient) {
          return (
            <div
              key={`circle-${index}`}
              style={{
                position: "absolute",
                width: "58px",
                height: "58px",
                left: `${circle.left}px`,
                top: `${circle.top}px`,
                borderRadius: "50%",
                backgroundColor: "transparent", 
                border: "2px solid",
                borderColor: circle.color,
              }}
            />
          );
        }
        // For that one gradient node
        return (
          <div
            key={`circle-${index}`}
            style={{
              position: "absolute",
              width: "58px",
              height: "58px",
              left: `${circle.left}px`,
              top: `${circle.top}px`,
              borderRadius: "50%",
              padding: "2px", 
              background: `linear-gradient(-35deg, ${circle.gradientColors[0]}, ${circle.gradientColors[1]})`,
            }}
          >
            <div
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "50%",
                backgroundColor: heroBg,
              }}
            />
          </div>
        );
      })}

      {/* Logo and Tagline Container */}
      <div
        style={{
          position: "absolute",
          left: "453px",
          top: "355px",
          width: "907px",
        }}
      >
        {/* Logo */}
        <Image src="/logo.svg" alt="Logo" width={907} height={226} />
        {/* Tagline below the logo */}
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
    </section>
  );
};

export default Hero;



