"use client";
import React, { useEffect } from "react";
import { useCalEmbed } from "@/app/hooks/useCalEmbed";
import { CONSTANTS } from "@/constants/links";

interface InlineBookingProps {
  className?: string;
  // Override default constants if needed
  namespace?: string;
  brandColor?: string;
  layout?: "month_view" | "week_view" | "day_view";
  height?: string;
}

// Type guard for layout values
const allowedLayouts = ["month_view", "week_view", "day_view"] as const;
const getValidLayout = (layout: string): "month_view" | "week_view" | "day_view" => {
  return allowedLayouts.includes(layout as any) 
    ? (layout as typeof allowedLayouts[number])
    : "month_view";
};

export function InlineBooking({ 
  className = "",
  namespace = CONSTANTS.CALCOM_NAMESPACE,
  brandColor = CONSTANTS.CALCOM_BRAND_COLOR,
  layout = getValidLayout(CONSTANTS.CALCOM_LAYOUT),
  height = "600px"
}: InlineBookingProps) {
  
  useCalEmbed({
    namespace: namespace,
    styles: {
      branding: {
        brandColor: brandColor,
      },
    },
    hideEventTypeDetails: CONSTANTS.CALCOM_HIDE_EVENT_TYPE_DETAILS,
    layout: layout,
  });

  useEffect(() => {
    // Initialize inline Cal.com embed
    if (typeof window !== "undefined" && (window as any).Cal) {
      (window as any).Cal("inline", {
        elementOrSelector: `#cal-inline-${namespace}`,
        calLink: CONSTANTS.CALCOM_LINK,
        config: {
          layout: layout,
        },
      });
    }
  }, [namespace, layout]);

  return (
    <div 
      id={`cal-inline-${namespace}`}
      className={`w-full ${className}`}
      style={{ height }}
    />
  );
}