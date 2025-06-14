"use client";
import { cn } from "@/lib/utils";
import { IconMenu2, IconX } from "@tabler/icons-react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import Link from "next/link";
import React, { useRef, useState } from "react";
import { Button } from "./button";
import { Logo } from "./logo";
import { ModeToggle } from "./mode-toggle";
import { BookingModal } from "./booking-modal";
import { CONSTANTS } from "@/constants/links";

interface NavbarProps {
  navItems: {
    name: string;
    link: string | null;
    action: (() => void) | null;
  }[];
  visible: boolean;
  onBookingClick: () => void;
}

export const Navbar = () => {
  const handleScrollToForm = () => {
    // Check if we're on mobile or desktop and scroll to appropriate form
    const isMobile = window.innerWidth < 768;
    const targetId = isMobile ? 'leads-form-mobile' : 'leads-form';
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const navItems = [
    {
      name: "Services",
      link: "/services",
      action: null,
    },
    {
      name: "About",
      link: "/about",
      action: null,
    },
    {
      name: "Contact",
      link: "/contact",
      action: null,
    },
  ];

  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const [visible, setVisible] = useState<boolean>(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState<boolean>(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 100) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  });

  return (
    <>
      <motion.div ref={ref} className="w-full fixed top-0 inset-x-0 z-50">
        <DesktopNav visible={visible} navItems={navItems} onBookingClick={() => setIsBookingModalOpen(true)} />
        <MobileNav visible={visible} navItems={navItems} onBookingClick={() => setIsBookingModalOpen(true)} />
      </motion.div>
      <BookingModal 
        isOpen={isBookingModalOpen} 
        onClose={() => setIsBookingModalOpen(false)} 
      />
    </>
  );
};

const DesktopNav = ({ navItems, visible, onBookingClick }: NavbarProps) => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <motion.div
      onMouseLeave={() => {
        setHovered(null);
      }}
      animate={{
        backdropFilter: visible ? "blur(10px)" : "none",
        boxShadow: visible
          ? "0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset"
          : "none",
        width: visible ? "40%" : "100%",
        y: visible ? 20 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 50,
      }}
      style={{
        minWidth: "800px",
      }}
      className={cn(
        "hidden lg:flex flex-row  self-start bg-transparent dark:bg-transparent items-center justify-between py-2 max-w-7xl mx-auto px-4 rounded-full relative z-[60] w-full",
        visible && "bg-white/80 dark:bg-neutral-950/80"
      )}
    >
      <Logo />
      <motion.div className="lg:flex flex-row flex-1 absolute inset-0 hidden items-center justify-center space-x-2 lg:space-x-2 text-sm text-zinc-600 font-medium hover:text-zinc-800 transition duration-200">
        {navItems.map((navItem: any, idx: number) => (
          navItem.action ? (
            <button
              key={`link=${idx}`}
              onMouseEnter={() => setHovered(idx)}
              onClick={navItem.action}
              className="text-neutral-600 dark:text-neutral-300 relative px-4 py-2 cursor-pointer"
            >
              {hovered === idx && (
                <motion.div
                  layoutId="hovered"
                  className="w-full h-full absolute inset-0 bg-gray-100 dark:bg-neutral-800 rounded-full"
                />
              )}
              <span className="relative z-20">{navItem.name}</span>
            </button>
          ) : (
            <Link
              onMouseEnter={() => setHovered(idx)}
              className="text-neutral-600 dark:text-neutral-300 relative px-4 py-2"
              key={`link=${idx}`}
              href={navItem.link || "#"}
            >
              {hovered === idx && (
                <motion.div
                  layoutId="hovered"
                  className="w-full h-full absolute inset-0 bg-gray-100 dark:bg-neutral-800 rounded-full"
                />
              )}
              <span className="relative z-20">{navItem.name}</span>
            </Link>
          )
        ))}
      </motion.div>
      <div className="flex items-center gap-4">
        <ModeToggle />

        <AnimatePresence mode="popLayout" initial={false}>
          {!visible && (
            <motion.div
              initial={{
                x: 100,
                opacity: 0,
              }}
              animate={{
                x: 0,
                opacity: [0, 0, 1],
              }}
              exit={{
                x: 100,
                opacity: [0, 0, 0],
              }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
              }}
            >
              <Button
                as={Link}
                href={CONSTANTS.LOGIN_LINK}
                variant="secondary"
                className="hidden md:block "
              >
                Login
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
        <button
          onClick={onBookingClick}
          className="hidden md:block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 font-medium mr-4"
          style={{ 
            position: 'relative',
            zIndex: 10
          }}
        >
          Book a call
        </button>
      </div>
    </motion.div>
  );
};

const MobileNav = ({ navItems, visible, onBookingClick }: NavbarProps) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.div
        animate={{
          backdropFilter: visible ? "blur(10px)" : "none",
          boxShadow: visible
            ? "0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset"
            : "none",
          width: visible ? "90%" : "100%",
          y: visible ? 20 : 0,
          borderRadius: open ? "4px" : "2rem",
          paddingRight: visible ? "12px" : "0px",
          paddingLeft: visible ? "12px" : "0px",
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 50,
        }}
        className={cn(
          "flex relative flex-col lg:hidden w-full justify-between items-center bg-transparent   max-w-[calc(100vw-2rem)] mx-auto px-0 py-1 z-50",
          visible && "bg-white/80 dark:bg-neutral-950/80"
        )}
      >
        <div className="flex flex-row justify-between items-center w-full">
          <Logo />
          <div className="px-1 py-0.5 mr-4">
            {open ? (
              <IconX
                className="text-black dark:text-white w-6 h-6"
                onClick={() => setOpen(!open)}
              />
            ) : (
              <IconMenu2
                className="text-black dark:text-white w-6 h-6"
                onClick={() => setOpen(!open)}
              />
            )}
          </div>
        </div>

        <AnimatePresence>
          {open && (
            <>
              {/* Backdrop overlay with blur */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
                onClick={() => setOpen(false)}
              />
              
              {/* Menu container with smooth slide animation */}
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.95,
                  y: -20,
                }}
                animate={{ 
                  opacity: 1,
                  scale: 1,
                  y: 0,
                }}
                exit={{ 
                  opacity: 0,
                  scale: 0.95,
                  y: -20,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                  duration: 0.3
                }}
                className="flex rounded-xl absolute top-16 bg-white/95 dark:bg-neutral-950/95 backdrop-blur-xl inset-x-0 z-50 flex-col items-start justify-start gap-2 w-full px-6 py-6 shadow-2xl border border-neutral-200/50 dark:border-neutral-800/50"
              >
              {navItems.map((navItem: any, idx: number) => (
                <motion.div
                  key={`nav-item-${idx}`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{
                    delay: idx * 0.1,
                    type: "spring",
                    stiffness: 300,
                    damping: 25
                  }}
                  className="w-full"
                >
                  {navItem.action ? (
                    <button
                      onClick={() => {
                        navItem.action();
                        setOpen(false);
                      }}
                      className="w-full text-left py-3 px-4 rounded-lg text-neutral-700 dark:text-neutral-200 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 dark:hover:from-blue-950/30 dark:hover:to-purple-950/30 transition-all duration-200 font-medium cursor-pointer group"
                    >
                      <span className="group-hover:translate-x-1 transition-transform duration-200 inline-block">
                        {navItem.name}
                      </span>
                    </button>
                  ) : (
                    <Link
                      href={navItem.link || "#"}
                      onClick={() => setOpen(false)}
                      className="block w-full py-3 px-4 rounded-lg text-neutral-700 dark:text-neutral-200 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 dark:hover:from-blue-950/30 dark:hover:to-purple-950/30 transition-all duration-200 font-medium group"
                    >
                      <span className="group-hover:translate-x-1 transition-transform duration-200 inline-block">
                        {navItem.name}
                      </span>
                    </Link>
                  )}
                </motion.div>
              ))}
              
              {/* Separator line */}
              <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ opacity: 1, scaleX: 1 }}
                exit={{ opacity: 0, scaleX: 0 }}
                transition={{
                  delay: navItems.length * 0.1 + 0.1,
                  type: "spring",
                  stiffness: 300,
                  damping: 25
                }}
                className="w-full h-px bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-2"
              />
              
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{
                  delay: navItems.length * 0.1 + 0.2,
                  type: "spring",
                  stiffness: 300,
                  damping: 25
                }}
                className="w-full"
              >
                <Button
                  as={Link}
                  onClick={() => setOpen(false)}
                  href={CONSTANTS.LOGIN_LINK}
                  variant="primary"
                  className="block md:hidden w-full mb-3 hover:scale-[1.02] transition-transform duration-200"
                >
                  Login
                </Button>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{
                  delay: navItems.length * 0.1 + 0.3,
                  type: "spring",
                  stiffness: 300,
                  damping: 25
                }}
                className="w-full"
              >
                <button
                  onClick={() => {
                    onBookingClick();
                    setOpen(false);
                  }}
                  className="block md:hidden w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-200 font-medium text-center group"
                >
                  <span className="group-hover:scale-105 transition-transform duration-200 inline-block">
                    Book a call
                  </span>
                </button>
              </motion.div>
            </motion.div>
            </>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
};
