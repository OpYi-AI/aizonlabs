"use client";
import React, { useRef, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Balancer from "react-wrap-balancer";
import Link from "next/link";
import { Button } from "./button";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const parentRef = useRef<HTMLDivElement>(null);
  return (
    <div
      ref={parentRef}
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 py-20 md:px-8 md:py-40 bg-neutral-50 dark:bg-neutral-900"
    >
      <div ref={containerRef} className="absolute inset-0 z-10" />
      <BackgroundGrids />
      <CollisionMechanism
        beamOptions={{
          initialX: 150,
          translateX: 150,
          duration: 4,
          repeatDelay: 4,
        }}
        containerRef={containerRef}
        parentRef={parentRef}
      />
      <CollisionMechanism
        beamOptions={{
          initialX: 400,
          translateX: 400,
          duration: 5,
          repeatDelay: 5,
        }}
        containerRef={containerRef}
        parentRef={parentRef}
      />
      <CollisionMechanism
        beamOptions={{
          initialX: 700,
          translateX: 700,
          duration: 4.5,
          repeatDelay: 6,
        }}
        containerRef={containerRef}
        parentRef={parentRef}
      />
      <CollisionMechanism
        beamOptions={{
          initialX: 950,
          translateX: 950,
          duration: 5.5,
          repeatDelay: 4.5,
        }}
        containerRef={containerRef}
        parentRef={parentRef}
      />
      <CollisionMechanism
        beamOptions={{
          initialX: 1200,
          translateX: 1200,
          duration: 4.8,
          repeatDelay: 5.5,
        }}
        containerRef={containerRef}
        parentRef={parentRef}
      />

      <div className="text-balance relative z-20 mx-auto mb-4 mt-4 max-w-4xl text-center text-3xl font-semibold tracking-tight text-gray-700 dark:text-neutral-300 md:text-7xl">
        <Balancer>
          <motion.h2>
            {"Unlock Growth with AI-Powered Lead Generation & Outreach."
              .split(" ")
              .map((word, index) => (
                <motion.span
                  initial={{
                    filter: "blur(10px)",
                    opacity: 0,
                    y: 10,
                  }}
                  animate={{
                    filter: "blur(0px)",
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.05,
                  }}
                  className="inline-block"
                  key={index}
                >
                  {word}&nbsp;
                </motion.span>
              ))}
          </motion.h2>
        </Balancer>
      </div>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2, delay: 0.5 }}
        className="relative z-20 mx-auto mt-4 max-w-lg px-4 text-center text-base/6 text-gray-600 dark:text-gray-200"
      >
        Supercharge your business with next-gen AI automation. Instantly deploy lead-gen bots, chatbots, and automated email outreach—without the tech headaches.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2, delay: 0.7 }}
        className="mb-10 mt-8 flex w-full justify-center px-8 md:mb-20"
      >
        <Button
          as={Link}
          href="#contact"
          variant="primary"
          className="w-48 text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-200 font-medium"
        >
          Get Free AI Audit
        </Button>
      </motion.div>
    </div>
  );
}

const BackgroundGrids = () => {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 grid h-full w-full -rotate-45 transform select-none grid-cols-2 gap-10 md:grid-cols-4">
      <div className="relative h-full w-full">
        <GridLineVertical className="left-0" />
        <GridLineVertical className="left-auto right-0" />
      </div>
      <div className="relative h-full w-full">
        <GridLineVertical className="left-0" />
        <GridLineVertical className="left-auto right-0" />
      </div>
      <div className="relative h-full w-full bg-gradient-to-b from-transparent via-neutral-100 to-transparent dark:via-neutral-800">
        <GridLineVertical className="left-0" />
        <GridLineVertical className="left-auto right-0" />
      </div>
      <div className="relative h-full w-full">
        <GridLineVertical className="left-0" />
        <GridLineVertical className="left-auto right-0" />
      </div>
    </div>
  );
};

const CollisionMechanism = React.forwardRef<
  HTMLDivElement,
  {
    containerRef: React.RefObject<HTMLDivElement>;
    parentRef: React.RefObject<HTMLDivElement>;
    beamOptions?: {
      initialX?: number;
      translateX?: number;
      initialY?: number;
      translateY?: number;
      rotate?: number;
      className?: string;
      duration?: number;
      delay?: number;
      repeatDelay?: number;
    };
  }
>(({ parentRef, containerRef, beamOptions = {} }, ref) => {
  const beamRef = useRef<HTMLDivElement>(null);
  const [collision, setCollision] = useState<{
    detected: boolean;
    coordinates: { x: number; y: number } | null;
  }>({
    detected: false,
    coordinates: null,
  });
  const [beamKey, setBeamKey] = useState(0);
  const [cycleCollisionDetected, setCycleCollisionDetected] = useState(false);

  useEffect(() => {
    const checkCollision = () => {
      if (
        beamRef.current &&
        containerRef.current &&
        parentRef.current &&
        !cycleCollisionDetected
      ) {
        const beamRect = beamRef.current.getBoundingClientRect();
        const containerRect = containerRef.current.getBoundingClientRect();
        const parentRect = parentRef.current.getBoundingClientRect();

        if (beamRect.bottom >= parentRect.bottom - 100) {
          const relativeX =
            beamRect.left - parentRect.left + beamRect.width / 2;
          const relativeY = parentRect.height - 50;

          setCollision({
            detected: true,
            coordinates: {
              x: relativeX,
              y: relativeY,
            },
          });
          setCycleCollisionDetected(true);
          if (beamRef.current) {
            beamRef.current.style.opacity = "0";
          }
        }
      }
    };

    const animationInterval = setInterval(checkCollision, 50);

    return () => clearInterval(animationInterval);
  }, [cycleCollisionDetected, containerRef]);

  useEffect(() => {
    if (collision.detected && collision.coordinates) {
      setTimeout(() => {
        setCollision({ detected: false, coordinates: null });
        setCycleCollisionDetected(false);
        // Reset beam immediately
        if (beamRef.current) {
          beamRef.current.style.opacity = "1";
        }
        setBeamKey((prevKey) => prevKey + 1);
      }, 800);
    }
  }, [collision]);

  return (
    <>
      <motion.div
        key={beamKey}
        ref={beamRef}
        animate="animate"
        initial={{
          translateY: beamOptions.initialY || "-200px",
          translateX: beamOptions.initialX || "0px",
          rotate: 0,
        }}
        variants={{
          animate: {
            translateY: beamOptions.translateY || "800px",
            translateX: beamOptions.translateX || "0px",
            rotate: 0,
          },
        }}
        transition={{
          duration: beamOptions.duration || 8,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
          delay: beamOptions.delay || 0,
          repeatDelay: beamOptions.repeatDelay || 0,
        }}
        className={cn(
          "absolute left-96 top-20 m-auto h-14 w-px rounded-full bg-gradient-to-t from-orange-500 via-yellow-500 to-transparent",
          beamOptions.className
        )}
      />
      <AnimatePresence>
        {collision.detected && collision.coordinates && (
          <Explosion
            key={`${collision.coordinates.x}-${collision.coordinates.y}`}
            className=""
            style={{
              left: `${collision.coordinates.x + 20}px`,
              top: `${collision.coordinates.y}px`,
              transform: "translate(-50%, -50%)",
            }}
          />
        )}
      </AnimatePresence>
    </>
  );
});

CollisionMechanism.displayName = "CollisionMechanism";

const Explosion = ({ className, style }: { className?: string; style?: React.CSSProperties }) => {
  const spans = Array.from({ length: 35 }, (_, index) => ({
    id: index,
    initialX: 0,
    initialY: 0,
    directionX: Math.floor(Math.random() * 200 - 100),
    directionY: Math.floor(Math.random() * 150 - 75),
  }));

  return (
    <motion.div 
      className={cn("absolute z-50 h-4 w-4", className)}
      style={style}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.1 }}
    >
      {/* Instant bright flash */}
      <motion.div
        initial={{ opacity: 1, scale: 0 }}
        animate={{ 
          opacity: [1, 0.8, 0], 
          scale: [0, 2, 3] 
        }}
        transition={{ 
          duration: 0.4, 
          ease: [0.25, 0.46, 0.45, 0.94],
          times: [0, 0.3, 1]
        }}
        className="absolute -inset-6 m-auto h-12 w-12 rounded-full bg-gradient-to-r from-orange-300 via-yellow-300 to-orange-400 blur-lg"
      ></motion.div>
      
      {/* Sharp center core */}
      <motion.div
        initial={{ opacity: 1, scale: 0 }}
        animate={{ 
          opacity: [1, 0.9, 0], 
          scale: [0, 1.2, 0.8] 
        }}
        transition={{ 
          duration: 0.25, 
          ease: "easeOut",
          times: [0, 0.4, 1]
        }}
        className="absolute -inset-1 m-auto h-6 w-6 rounded-full bg-white shadow-lg shadow-orange-500/50"
      ></motion.div>
      
      {/* Immediate particles */}
      {spans.map((span, index) => (
        <motion.span
          key={span.id}
          initial={{ 
            x: 0, 
            y: 0, 
            opacity: 1, 
            scale: 1.2 
          }}
          animate={{
            x: span.directionX,
            y: span.directionY,
            opacity: 0,
            scale: 0,
          }}
          transition={{ 
            duration: Math.random() * 1.5 + 0.8,
            ease: "easeOut",
            delay: Math.random() * 0.1
          }}
          className="absolute h-2 w-2 rounded-full bg-gradient-to-b from-orange-400 to-yellow-500 shadow-md shadow-orange-500/60"
        />
      ))}
      
      {/* Secondary particle wave */}
      {spans.slice(0, 15).map((span, index) => (
        <motion.span
          key={`secondary-${span.id}`}
          initial={{ 
            x: 0, 
            y: 0, 
            opacity: 0.8, 
            scale: 0.8 
          }}
          animate={{
            x: span.directionX * 0.6,
            y: span.directionY * 0.6,
            opacity: 0,
            scale: 0,
          }}
          transition={{ 
            duration: Math.random() * 1 + 0.5,
            ease: "easeOut",
            delay: 0.1 + Math.random() * 0.1
          }}
          className="absolute h-1 w-1 rounded-full bg-gradient-to-b from-yellow-400 to-orange-400 shadow-sm shadow-yellow-500/40"
        />
      ))}
    </motion.div>
  );
};

const GridLineVertical = ({
  className,
  offset,
}: {
  className?: string;
  offset?: string;
}) => {
  return (
    <div
      style={
        {
          "--background": "#ffffff",
          "--color": "rgba(0, 0, 0, 0.2)",
          "--height": "5px",
          "--width": "1px",
          "--fade-stop": "90%",
          "--offset": offset || "150px", //-100px if you want to keep the line inside
          "--color-dark": "rgba(255, 255, 255, 0.3)",
          maskComposite: "exclude",
        } as React.CSSProperties
      }
      className={cn(
        "absolute top-[calc(var(--offset)/2*-1)] h-[calc(100%+var(--offset))] w-[var(--width)]",
        "bg-[linear-gradient(to_bottom,var(--color),var(--color)_50%,transparent_0,transparent)]",
        "[background-size:var(--width)_var(--height)]",
        "[mask:linear-gradient(to_top,var(--background)_var(--fade-stop),transparent),_linear-gradient(to_bottom,var(--background)_var(--fade-stop),transparent),_linear-gradient(black,black)]",
        "[mask-composite:exclude]",
        "z-30",
        "dark:bg-[linear-gradient(to_bottom,var(--color-dark),var(--color-dark)_50%,transparent_0,transparent)]",
        className
      )}
    ></div>
  );
};
