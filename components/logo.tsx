"use client";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  imageClassName?: string;
  textClassName?: string;
  showText?: boolean;
}

export const Logo = ({ 
  className,
  imageClassName,
  textClassName,
  showText = true
}: LogoProps) => {
  return (
    <Link
      href="/"
      className={cn(
        "font-normal flex space-x-2 items-center text-sm mr-4 text-black px-2 py-1 relative z-20",
        className
      )}
    >
      <Image
        src="/aizonlabs_logo.png"
        alt="AizonLabs logo"
        width={90}
        height={90}
        className={cn("w-18 h-18 md:w-20 md:h-20", imageClassName)}
      />
      {showText && (
        <span className={cn("font-medium text-black dark:text-white", textClassName)}>
          AizonLabs
        </span>
      )}
    </Link>
  );
};
