"use client";
import React from "react";
import { useCalEmbed } from "./useCalEmbed";
import { CALCOM_CONSTANTS } from "./constants";

interface BookingButtonProps {
  children?: React.ReactNode;
  className?: string;
  // Override default constants if needed
  namespace?: string;
  brandColor?: string;
  layout?: "month_view" | "week_view" | "day_view";
}

export function BookingButton({ 
  children = "Book a Call", 
  className = "",
  namespace = CALCOM_CONSTANTS.NAMESPACE,
  brandColor = CALCOM_CONSTANTS.BRAND_COLOR,
  layout = CALCOM_CONSTANTS.LAYOUT
}: BookingButtonProps) {
  
  const calOptions = useCalEmbed({
    namespace: namespace,
    styles: {
      branding: {
        brandColor: brandColor,
      },
    },
    hideEventTypeDetails: CALCOM_CONSTANTS.HIDE_EVENT_TYPE_DETAILS,
    layout: layout,
  });

  const handleBooking = () => {
    // Trigger Cal.com booking modal
    if (typeof window !== "undefined" && (window as any).Cal) {
      (window as any).Cal("openModal", {
        calLink: CALCOM_CONSTANTS.LINK,
        config: {
          layout: calOptions.layout,
        },
      });
    }
  };

  return (
    <button
      onClick={handleBooking}
      className={`bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors ${className}`}
    >
      {children}
    </button>
  );
}