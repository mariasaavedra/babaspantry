"use client";
import React, { useRef, useMemo } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";

import SectionWelcome from "@/components/SectionOne/SectionOne";
import SectionPress from "@/components/SectionTwo/SectionTwo";
import SectionMenu from "@/components/SectionThree/SectionThree";
import SectionBakery from "@/components/SectionBakery/SectionBakery";
import SectionDelivery from "@/components/SectionDelivery/SectionDelivery";
import SectionCatering from "@/components/SectionCatering/SectionCatering";

// Register GSAP plugins once at module level
gsap.registerPlugin(ScrollTrigger, SplitText);

// Define section configuration for better maintainability
const sectionConfig = [
  { component: SectionWelcome, key: "welcome" },
  { component: SectionPress, key: "press" },
  { component: SectionMenu, key: "menu" },
  { component: SectionBakery, key: "bakery" },
  { component: SectionDelivery, key: "delivery" },
  { component: SectionCatering, key: "catering" },
] as const;

interface ScrollSectionProps {
  className?: string;
  snapEnabled?: boolean;
  scrubSmoothness?: number;
}

export default function ScrollSection({ 
  className = "",
  snapEnabled = true,
  scrubSmoothness = 1 
}: ScrollSectionProps) {
  const triggerRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Memoize sections array to prevent unnecessary re-renders
  const sections = useMemo(() => 
    sectionConfig.map(({ component: Component, key }) => ({
      Component,
      key
    })), []
  );

  useGSAP(() => {
    const container = containerRef.current;
    const trigger = triggerRef.current;
    
    if (!container || !trigger) {
      console.warn("ScrollSection: Required refs not available");
      return;
    }

    // Calculate scroll distance with error handling
    const totalWidth = container.scrollWidth;
    const viewportWidth = window.innerWidth;
    const scrollDistance = Math.max(0, totalWidth - viewportWidth);

    if (scrollDistance === 0) {
      console.warn("ScrollSection: No scroll distance calculated");
      return;
    }

    // Create ScrollTrigger animation
    const scrollTrigger = gsap.to(container, {
      x: -scrollDistance,
      ease: "none",
      scrollTrigger: {
        trigger,
        start: "top top",
        end: `+=${scrollDistance}`,
        scrub: scrubSmoothness,
        pin: true,
        anticipatePin: 1,
        ...(snapEnabled && {
          snap: {
            snapTo: 1 / (sections.length - 1),
            duration: { min: 0.2, max: 0.4 },
            delay: 0.1,
            ease: "power1.inOut",
          },
        }),
        onUpdate: (self) => {
          // Optional: Add progress tracking or other updates
          const progress = self.progress;
          // You can dispatch custom events or update state here
        },
        onRefresh: () => {
          // Recalculate on window resize
          ScrollTrigger.refresh();
        }
      },
    });

    // Cleanup function
    return () => {
      scrollTrigger.scrollTrigger?.kill();
    };
  }, [sections.length, snapEnabled, scrubSmoothness]);

  // Custom debounce function
  const debounce = <T extends (...args: any[]) => void>(
    func: T,
    delay: number
  ): ((...args: Parameters<T>) => void) => {
    let timeoutId: NodeJS.Timeout;
    return (...args: Parameters<T>) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => func(...args), delay);
    };
  };

  // Handle window resize for responsive behavior
  useGSAP(() => {
    const handleResize = debounce(() => {
      ScrollTrigger.refresh();
    }, 150);

    window.addEventListener("resize", handleResize);
    
    return () => {
      window.removeEventListener("resize", handleResize);
      // Note: debounced timeouts will be cleared automatically when component unmounts
    };
  }, []);

  return (
    <section 
      ref={triggerRef} 
      className={`scroll-section-outer ${className}`}
      aria-label="Horizontal scrolling sections"
    >
      <div
        ref={containerRef}
        className="scroll-section-inner"
        style={{
          display: "flex",
          width: `${sections.length * 100}vw`,
          height: "100vh",
          willChange: "transform", // Optimize for animations
        }}
      >
        {sections.map(({ Component, key }, index) => (
          <div
            key={key}
            className="scroll-section"
            style={{ 
              width: "100vw", 
              flexShrink: 0,
              // Improve performance with GPU acceleration
              transform: "translateZ(0)",
            }}
            aria-label={`Section ${index + 1}: ${key}`}
          >
            <Component />
          </div>
        ))}
      </div>
    </section>
  );
}

// Optional: Export hook for external scroll progress tracking
export function useScrollProgress() {
  const progressRef = useRef(0);
  
  useGSAP(() => {
    ScrollTrigger.create({
      trigger: ".scroll-section-outer",
      start: "top top",
      end: "bottom top",
      onUpdate: (self) => {
        progressRef.current = self.progress;
      }
    });
  }, []);
  
  return progressRef.current;
}