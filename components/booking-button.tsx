"use client";
import React from "react";
import { CONSTANTS } from "@/constants/links";

interface BookingButtonProps {
  children?: React.ReactNode;
  className?: string;
}

export function BookingButton({ 
  children = "Book a Call", 
  className = ""
}: BookingButtonProps) {

  const handleClick = (e: React.MouseEvent) => {
    console.log('BookingButton clicked!');
    
    // Open Cal.com in a popup window
    const calUrl = `https://cal.com/${CONSTANTS.CALCOM_LINK}`;
    const popup = window.open(
      calUrl,
      'cal-booking',
      'width=900,height=700,scrollbars=yes,resizable=yes'
    );
    
    // Focus the popup window
    if (popup) {
      popup.focus();
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`${className} hover:-translate-y-0.5 transition-all duration-200 cursor-pointer`}
    >
      {children}
    </button>
  );
}