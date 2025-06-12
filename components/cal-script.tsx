"use client";
import Script from "next/script";

export function CalScript() {
  return (
    <Script 
      src="https://embed.cal.com/js/embed.js"
      strategy="afterInteractive"
      onLoad={() => {
        console.log('Cal.com script loaded successfully');
        console.log('Cal object on window:', typeof window !== 'undefined' ? (window as any).Cal : 'undefined');
      }}
      onError={(e) => {
        console.error('Cal.com script failed to load:', e);
      }}
    />
  );
}