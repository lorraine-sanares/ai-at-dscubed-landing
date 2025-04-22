"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface HeroProps {
  heroBg?: string;
}

// Network visualization component
const NetworkVisualization = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Handle canvas visibility
  useEffect(() => {
    // Delay showing the canvas to prevent jarring transitions
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas to full screen
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    // Mouse position with default value (center of screen)
    let mouseX = canvas.width / 2;
    let mouseY = canvas.height / 2;

    // Track mouse position
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Define node positions based on original SVG layout
    // These are predefined anchor positions for key nodes
    const keyNodePositions = [
      { x: 0.21, y: 0.18 },   // top left
      { x: 0.22, y: 0.38 },   // mid left
      { x: 0.13, y: 0.65 },   // bottom left
      { x: 0.35, y: 0.25 },   // top center-left
      { x: 0.45, y: 0.38 },   // center
      { x: 0.36, y: 0.5 },    // mid center-left
      { x: 0.41, y: 0.7 },    // bottom center-left
      { x: 0.6, y: 0.3 },     // top center-right
      { x: 0.65, y: 0.5 },    // mid center-right
      { x: 0.75, y: 0.2 },    // top right
      { x: 0.8, y: 0.38 },    // mid right
      { x: 0.68, y: 0.75 },   // bottom right
    ];

    // Node class to represent each point in the network
    class Node {
      x: number;
      y: number;
      originalX: number;
      originalY: number;
      radius: number;
      color: string;
      connections: Node[];
      isAnchor: boolean;

      constructor(x: number, y: number, isAnchor = false) {
        this.originalX = x;
        this.originalY = y;
        this.x = x;
        this.y = y;
        this.radius = isAnchor ? Math.random() * 4 + 5 : Math.random() * 2 + 2;
        this.connections = [];
        this.isAnchor = isAnchor;

        // Generate a color in blue/purple range
        const hue = Math.random() * 60 + 210; // 210-270 (blue to purple)
        const sat = Math.random() * 30 + 70; // 70-100%
        const light = Math.random() * 30 + 50; // 50-80%
        this.color = `hsl(${hue}, ${sat}%, ${light}%)`;
      }

      update() {
        if (!canvas) return;

        // Calculate distance from mouse
        const dx = mouseX - this.x;
        const dy = mouseY - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        // Mouse gravity effect - inverse square law
        const forceDirection = {
          x: dx / distance,
          y: dy / distance
        };

        // Apply attraction or repulsion based on distance
        let force = 0;
        const gravityRadius = 200;

        if (distance < gravityRadius) {
          // Close to mouse: repel slightly (subtle push away)
          force = -0.5 * (1 - distance / gravityRadius);
        } else {
          // Far from mouse: attract very slightly
          force = 0.05 * (distance - gravityRadius) / canvas.width;
        }

        // Always try to return to original position with stronger force
        const returnForce = {
          x: (this.originalX - this.x) * 0.02,
          y: (this.originalY - this.y) * 0.02
        };

        // Apply forces
        if (!this.isAnchor || distance < 100) {  // Only move non-anchor nodes or if mouse is very close
          this.x += forceDirection.x * force + returnForce.x;
          this.y += forceDirection.y * force + returnForce.y;
        }
      }

      draw() {
        if (!ctx) return;

        // Draw node
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();

        // Draw glow
        ctx.shadowBlur = 10;
        ctx.shadowColor = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      drawConnections() {
        if (!ctx) return;

        // Draw connections to other nodes
        this.connections.forEach(other => {
          const gradient = ctx.createLinearGradient(this.x, this.y, other.x, other.y);
          gradient.addColorStop(0, this.color);
          gradient.addColorStop(1, other.color);

          ctx.beginPath();
          ctx.moveTo(this.x, this.y);
          ctx.lineTo(other.x, other.y);
          ctx.strokeStyle = gradient;
          ctx.globalAlpha = 0.5;
          ctx.lineWidth = this.isAnchor || other.isAnchor ? 1 : 0.5;
          ctx.stroke();
          ctx.globalAlpha = 1;
        });
      }
    }

    // Create nodes - first the key anchor nodes
    const nodes: Node[] = [];

    // Create anchor nodes
    keyNodePositions.forEach(pos => {
      nodes.push(new Node(pos.x * canvas.width, pos.y * canvas.height, true));
    });

    // Create additional random nodes
    const additionalNodeCount = Math.max(30, Math.floor(window.innerWidth * window.innerHeight / 25000));
    for (let i = 0; i < additionalNodeCount; i++) {
      // Random position but weighted toward being closer to anchor nodes
      let x, y;
      if (Math.random() < 0.7) { // 70% chance to be near an anchor
        const randomAnchor = nodes[Math.floor(Math.random() * nodes.length)];
        const angle = Math.random() * Math.PI * 2;
        const distance = Math.random() * 100 + 30;
        x = randomAnchor.x + Math.cos(angle) * distance;
        y = randomAnchor.y + Math.sin(angle) * distance;

        // Keep within bounds
        x = Math.max(0, Math.min(canvas.width, x));
        y = Math.max(0, Math.min(canvas.height, y));
      } else {
        // Completely random position
        x = Math.random() * canvas.width;
        y = Math.random() * canvas.height;
      }

      nodes.push(new Node(x, y, false));
    }

    // Create connections between nodes
    const maxConnections = 5;
    nodes.forEach(node => {
      // Sort other nodes by distance
      const others = [...nodes].filter(n => n !== node);
      others.sort((a, b) => {
        const distA = Math.hypot(a.x - node.x, a.y - node.y);
        const distB = Math.hypot(b.x - node.x, b.y - node.y);
        return distA - distB;
      });

      // Anchor nodes get more connections
      const connectCount = node.isAnchor ?
        Math.floor(Math.random() * 3) + 3 : // 3-5 connections for anchors
        Math.floor(Math.random() * 2) + 1;  // 1-2 connections for normal nodes

      for (let i = 0; i < connectCount && i < others.length; i++) {
        if (Math.random() > 0.2) { // 80% chance to connect to this node
          node.connections.push(others[i]);
        }
      }
    });

    // Animation loop
    const animate = () => {
      if (!ctx) return;

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw connections first (so they're behind nodes)
      nodes.forEach(node => {
        node.update();
        node.drawConnections();
      });

      // Draw nodes on top
      nodes.forEach(node => {
        node.draw();
      });

      // Dynamic connections based on proximity
      nodes.forEach(node => {
        nodes.forEach(other => {
          if (node !== other && !node.connections.includes(other) && !other.connections.includes(node)) {
            const dist = Math.hypot(other.x - node.x, other.y - node.y);
            // If nodes are close enough and not already connected
            if (dist < 100 && node.connections.length < maxConnections) {
              if (Math.random() < 0.0005) { // Very small chance to add connection
                node.connections.push(other);
              }
            }
          }
        });
      });

      requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full transition-opacity duration-1000"
      style={{ opacity: isVisible ? 0.9 : 0 }}
    />
  );
};

const Hero: React.FC<HeroProps> = ({ heroBg = "#060C14" }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Wait for client-side hydration to complete
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 50);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className="relative w-full h-screen overflow-hidden"
      style={{ backgroundColor: heroBg }}
    >
      {/* Dynamic network visualization */}
      <NetworkVisualization />

      {/* Overlay gradient for better text contrast */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#060C14] via-[#060C1490] to-transparent opacity-70" />

      {/* Logo and tagline - centered in the screen */}
      <div className="absolute inset-0 flex flex-col justify-center items-center z-10">
        <div
          className="max-w-3xl w-[85%] text-center animate-fadeIn"
        >
          <div className={`relative w-[85%] mx-auto aspect-[4/1] mb-8 transition-opacity duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
            <Image
              src="/logo.svg"
              alt="AI Cubed Logo"
              fill
              priority
              className="animate-glow"
              style={{
                objectFit: "contain",
                filter: "drop-shadow(0 4px 12px rgba(0, 0, 0, 0.5))",
              }}
            />
          </div>

          <p className={`text-white text-lg md:text-xl max-w-xl mx-auto mb-8 transition-opacity duration-700 delay-[300ms] ${isLoaded ? 'opacity-60' : 'opacity-0'}`}>
            Empowering students at the University of Melbourne with cutting-edge AI technologies.
          </p>

          <div className={`flex justify-center gap-4 transition-opacity duration-700 delay-[600ms] ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
            <a href="#about"
              className="px-6 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full hover:shadow-lg hover:shadow-blue-500/30 transition-all font-medium text-sm">
              Learn More
            </a>
            <a href="#signup"
              className="px-6 py-2 bg-transparent backdrop-blur-sm border border-white/30 text-white rounded-full hover:bg-white/10 hover:border-white/70 transition-all font-medium text-sm">
              Join Our Community
            </a>
          </div>

          <div className={`absolute bottom-14 left-1/2 transform -translate-x-1/2 transition-opacity duration-700 delay-[900ms] ${isLoaded ? 'opacity-100 animate-float' : 'opacity-0'}`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 text-white/70 hover:text-white transition-colors"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* CSS animations */}
      <style jsx global>{`
      @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
      }
      
      @keyframes slideUp {
        from { 
          opacity: 0;
          transform: translateY(15px);
        }
        to { 
          opacity: 1;
          transform: translateY(0);
        }
      }
      
      @keyframes glow {
        0%, 100% { 
          filter: drop-shadow(0 4px 12px rgba(0, 0, 0, 0.5)); 
        }
        50% { 
          filter: drop-shadow(0 8px 24px rgba(76, 183, 254, 0.4)); 
        }
      }

      .animate-fadeIn {
        opacity: 0;
        animation: fadeIn 1.2s cubic-bezier(0.25, 0.1, 0.25, 1) forwards;
      }

      .animate-slideUp {
        opacity: 0;
        animation: slideUp 1.2s cubic-bezier(0.25, 0.1, 0.25, 1) 0.3s forwards;
      }

      .animate-glow {
        animation: glow 6s ease-in-out infinite;
      }
      
      @keyframes float {
        0%, 100% {
          transform: translateY(0);
        }
        50% {
          transform: translateY(-8px);
        }
      }
      
      .animate-float {
        animation: float 3s ease-in-out infinite;
      }
    `}</style>
    </div>
  );
};

export default Hero;