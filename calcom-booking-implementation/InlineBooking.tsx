"use client";
import React, { useEffect } from "react";
import { useCalEmbed } from "./useCalEmbed";
import { CALCOM_CONSTANTS } from "./constants";

interface InlineBookingProps {
  className?: string;
  // Override default constants if needed
  namespace?: string;
  brandColor?: string;
  layout?: "month_view" | "week_view" | "day_view";
  height?: string;
}

export function InlineBooking({ 
  className = "",
  namespace = CALCOM_CONSTANTS.NAMESPACE,
  brandColor = CALCOM_CONSTANTS.BRAND_COLOR,
  layout = CALCOM_CONSTANTS.LAYOUT,
  height = "600px"
}: InlineBookingProps) {
  
  useCalEmbed({
    namespace: namespace,
    styles: {
      branding: {
        brandColor: brandColor,
      },
    },
    hideEventTypeDetails: CALCOM_CONSTANTS.HIDE_EVENT_TYPE_DETAILS,
    layout: layout,
  });

  useEffect(() => {
    // Initialize inline Cal.com embed
    if (typeof window !== "undefined" && (window as any).Cal) {
      (window as any).Cal("inline", {
        elementOrSelector: `#cal-inline-${namespace}`,
        calLink: CALCOM_CONSTANTS.LINK,
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