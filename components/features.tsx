"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import createGlobe from "cobe";

export function Features() {
  return (
    <div
      id="features"
      className="w-full mx-auto bg-white dark:bg-neutral-950 py-20 px-4 md:px-8"
    >
      <Header>
        <h2 className="font-sans text-bold text-xl text-center md:text-4xl w-fit mx-auto font-bold tracking-tight text-neutral-8000 dark:text-neutral-100 text-neutral-800">
          Our Services: AI for Your Business Growth
        </h2>
      </Header>
      <p className="max-w-2xl text-sm text-neutral-600 text-center mx-auto mt-4 dark:text-neutral-400">
        Automate your sales pipeline with AI lead gen, chatbots, and email outreach—all in one place.
      </p>
      <div className="mt-20  grid cols-1 md:grid-cols-5 gap-4 md:auto-rows-[25rem] max-w-7xl mx-auto">
        <Card className="flex flex-col justify-between md:col-span-3">
          <CardSkeletonBody>
            <LeadGenSkeleton />
          </CardSkeletonBody>
          <CardContent className="h-40">
            <CardTitle>AI-Driven Lead Generation</CardTitle>
            <CardDescription>
              We automatically find, qualify, and deliver warm leads for you—so your pipeline never dries up.
            </CardDescription>
          </CardContent>
        </Card>

        <Card className="flex flex-col justify-between md:col-span-2">
          <CardContent className="h-40">
            <CardTitle>24/7 AI Chatbots</CardTitle>
            <CardDescription>
              Convert visitors and answer questions around the clock. Our custom chatbots engage, nurture, and book leads for you.
            </CardDescription>
          </CardContent>
          <CardSkeletonBody>
            <div className="w-full h-full p-4 rounded-lg bg-neutral-100 border border-neutral-200 dark:bg-neutral-800 dark:border-neutral-700 ml-6 mt-2">
              <Image
                src="/chatbot.jpg"
                alt="AI Chatbot Dashboard"
                width={500}
                height={500}
                className="w-full object-cover rounded-lg"
              />
            </div>
          </CardSkeletonBody>
        </Card>

        <Card className="flex flex-col justify-between md:col-span-2">
          <CardContent className="h-40">
            <CardTitle>Automated AI Email Outreach</CardTitle>
            <CardDescription>
              Send hyper-personalized campaigns that get replies. Automate follow-ups and boost conversions with zero manual work.
            </CardDescription>
          </CardContent>
          <CardSkeletonBody>
            <div className="w-full h-full p-4 rounded-lg bg-neutral-100 border border-neutral-200 dark:bg-neutral-800 dark:border-neutral-700 ml-6 mt-2">
              <Image
                src="/n8n_picture.png"
                alt="Email Automation Dashboard"
                width={500}
                height={500}
                className="w-full object-cover rounded-lg"
              />
            </div>
          </CardSkeletonBody>
        </Card>
        <Card className="flex flex-col justify-between md:col-span-3">
          <CardContent className="h-40">
            <CardTitle>Ready to Scale Your Business?</CardTitle>
            <CardDescription>
              Book a strategy call and discover how AI can 3x your leads and sales in the next 90 days.
            </CardDescription>
          </CardContent>
          <CardSkeletonBody>
            <SkeletonTwo />
          </CardSkeletonBody>
          
        </Card>
      </div>
    </div>
  );
}

const Header = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative w-fit mx-auto p-4 flex items-center justify-center">
      <motion.div
        initial={{
          width: 0,
          height: 0,
          borderRadius: 0,
        }}
        whileInView={{
          width: "100%",
          height: "100%",
        }}
        style={{
          transformOrigin: "top-left",
        }}
        transition={{
          duration: 1,
          ease: "easeInOut",
        }}
        className="absolute inset-0 h-full border border-neutral-200 dark:border-neutral-800 w-full"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.1, ease: "easeInOut" }}
          className="absolute -top-1 -left-1 h-2 w-2 dark:bg-neutral-800 bg-neutral-200"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.1, ease: "easeInOut" }}
          className="absolute -top-1 -right-1 h-2 w-2 dark:bg-neutral-800 bg-neutral-200"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.1, ease: "easeInOut" }}
          className="absolute -bottom-1 -left-1 h-2 w-2 dark:bg-neutral-800 bg-neutral-200"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.1, ease: "easeInOut" }}
          className="absolute -bottom-1 -right-1 h-2 w-2 dark:bg-neutral-800 bg-neutral-200"
        />
      </motion.div>
      {children}
    </div>
  );
};

// Service Icons
const LeadGenIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="64"
      height="64"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-16 w-16 text-blue-600 dark:text-blue-400"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="m19 8-5 5-3-3" />
    </svg>
  );
};

const ChatbotIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="64"
      height="64"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-16 w-16 text-green-600 dark:text-green-400"
    >
      <path d="M12 6V2H8" />
      <path d="m8 18-4 4V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2Z" />
      <path d="M2 12h2" />
      <path d="M9 11v2" />
      <path d="M15 11v2" />
      <path d="M20 12h2" />
    </svg>
  );
};

const EmailIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="64"
      height="64"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-16 w-16 text-purple-600 dark:text-purple-400"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-10 5L2 7" />
      <path d="M12 11l-8 4.5" />
      <path d="M12 11l8 4.5" />
    </svg>
  );
};

// Skeletons

export const LeadGenSkeleton = () => {
  const Container = ({
    children,
    ...props
  }: { children: React.ReactNode } & React.ComponentProps<
    typeof motion.div
  >) => {
    return (
      <motion.div
        {...props}
        className={cn(
          "w-full h-14 md:h-40 p-2 rounded-lg relative shadow-lg flex items-center bg-gradient-to-b from-white to-white dark:from-neutral-800 dark:to-neutral-700 justify-center",
          props.className
        )}
      >
        {children}
      </motion.div>
    );
  };
  return (
    <div className="relative flex items-center justify-center  w-full h-full">
      <svg
        width="128"
        height="69"
        viewBox="0 0 128 69"
        fill="none"
        className="absolute left-1/2 -translate-x-[90%]  -top-2 text-neutral-200 dark:text-neutral-800"
      >
        <path
          d="M1.00002 0.5L1.00001 29.5862C1 36.2136 6.37259 41.5862 13 41.5862H115C121.627 41.5862 127 46.9588 127 53.5862L127 75"
          stroke="currentColor"
          strokeWidth="1"
        />
        <motion.path
          d="M1.00002 0.5L1.00001 29.5862C1 36.2136 6.37259 41.5862 13 41.5862H115C121.627 41.5862 127 46.9588 127 53.5862L127 75"
          stroke="url(#gradient-2)"
          strokeWidth="1"
        />

        <defs>
          <motion.linearGradient
            initial={{
              x1: "0%",
              y1: "0%",
              x2: "0%",
              y2: "0%",
            }}
            animate={{
              x1: "100%",
              y1: "90%",
              x2: "120%",
              y2: "120%",
            }}
            id="gradient-2"
            transition={{
              duration: Math.random() * (7 - 2) + 2,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            <stop stopColor="#001AFF" stopOpacity={`0`} />
            <stop offset="1" stopColor="#6DD4F5" />
            <stop offset="1" stopColor="#6DD4F5" stopOpacity="0" />
          </motion.linearGradient>
        </defs>
      </svg>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="62"
        height="105"
        viewBox="0 0 62 105"
        fill="none"
        className="absolute left-1/2 -translate-x-0  -bottom-2 dark:text-neutral-800 text-neutral-200"
      >
        <path
          d="M1.00001 -69L1 57.5C1 64.1274 6.37258 69.5 13 69.5H49C55.6274 69.5 61 74.8726 61 81.5L61 105"
          stroke="currentColor"
          strokeWidth="1"
        />
        <motion.path
          d="M1.00001 -69L1 57.5C1 64.1274 6.37258 69.5 13 69.5H49C55.6274 69.5 61 74.8726 61 81.5L61 105"
          stroke="url(#gradient-1)"
          strokeWidth="1"
        />
        <defs>
          <motion.linearGradient
            initial={{
              x1: "0%",
              y1: "0%",
              x2: "0%",
              y2: "0%",
            }}
            animate={{
              x1: "100%",
              y1: "90%",
              x2: "120%",
              y2: "120%",
            }}
            id="gradient-1"
            transition={{
              duration: Math.random() * (7 - 2) + 2,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            <stop stopColor="#001AFF" stopOpacity={`0`} />
            <stop offset="1" stopColor="#6DD4F5" />
            <stop offset="1" stopColor="#6DD4F5" stopOpacity="0" />
          </motion.linearGradient>
        </defs>
      </svg>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-lg mx-auto w-full relative z-30 [perspective:1000px] [transform-style:preserve-3d] p-8 sm:p-0">
        <Container
          initial={{ y: 0 }}
          animate={{ y: [0, -10, 0], rotateX: [0, 10, 0] }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
            repeatDelay: 6,
          }}
          className="overflow-hidden px-2 flex-col justify-center font-mono items-start text-neutral-800 dark:text-neutral-300"
        >
          <p className="text-[8px] bg-transparent ">Scanning leads...</p>
          <p className="text-[8px] bg-transparent">
            Qualifying prospects
          </p>
          <p className="text-[8px] bg-transparent">Adding to pipeline</p>
        </Container>
        <Container
          initial={{ y: 0 }}
          animate={{ y: [0, -10, 0], rotateX: [0, 10, 0] }}
          transition={{
            duration: 2,
            delay: 2,
            ease: "easeInOut",
            repeat: Infinity,
            repeatDelay: 6,
          }}
        >
          <LeadGenIcon />
        </Container>
        <Container
          initial={{ y: 0 }}
          animate={{ y: [0, -10, 0], rotateX: [0, 10, 0] }}
          transition={{
            duration: 2,
            delay: 4,
            ease: "easeInOut",
            repeat: Infinity,
            repeatDelay: 6,
          }}
          className="flex flex-col justify-center items-center"
        >
          <LeadGenIcon />
          <p className="text-[8px] bg-transparent ">147 leads found ✨</p>
        </Container>
      </div>
    </div>
  );
};

export const SkeletonTwo = () => {
  return (
    <div className="h-60 md:h-60  flex flex-col items-center relative bg-transparent dark:bg-transparent mt-10">
      <Globe className="absolute -right-0 md:-right-10 -bottom-80 md:-bottom-72" />
    </div>
  );
};

export const Globe = ({ className }: { className?: string }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let phi = 0;

    if (!canvasRef.current) return;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 600 * 2,
      height: 600 * 2,
      phi: 0,
      theta: 0,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.0, 0.2, 0.6],
      markerColor: [0, 0, 1],
      glowColor: [1, 1, 1],
      markers: [
        // longitude latitude
        { location: [37.7595, -122.4367], size: 0.03 },
        { location: [40.7128, -74.006], size: 0.1 },
      ],
      onRender: (state) => {
        // Called on every animation frame.
        // `state` will be an empty object, return updated params.
        state.phi = phi;
        phi += 0.01;
      },
    });

    return () => {
      globe.destroy();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ width: 600, height: 600, maxWidth: "100%", aspectRatio: 1 }}
      className={className}
    />
  );
};

// Card structure
const CardSkeletonBody = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("overflow-hidden relative w-full h-full", className)}>
      {children}
    </div>
  );
};

const CardContent = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <div className={cn("p-6", className)}>{children}</div>;
};

const CardTitle = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h3
      className={cn(
        "font-sans  text-base font-medium tracking-tight text-neutral-700 dark:text-neutral-100",
        className
      )}
    >
      {children}
    </h3>
  );
};
const CardDescription = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <p
      className={cn(
        "font-sans max-w-xs text-base font-normal tracking-tight mt-2 text-neutral-500 dark:text-neutral-400",
        className
      )}
    >
      {children}
    </p>
  );
};

const Card = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <motion.div
      whileHover="animate"
      className={cn(
        "group isolate flex flex-col rounded-2xl bg-white dark:bg-neutral-900 shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] overflow-hidden",
        className
      )}
    >
      {children}
    </motion.div>
  );
};
