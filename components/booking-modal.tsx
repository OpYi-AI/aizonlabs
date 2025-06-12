"use client";
import React from "react";
import { InlineBooking } from "./inline-booking";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function BookingModal({ isOpen, onClose }: BookingModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 p-6" onClick={onClose}>
      {/* Close button positioned exactly like in original */}
      <button
        onClick={onClose}
        className="absolute top-8 right-8 text-white hover:text-gray-300 z-50 w-10 h-10 flex items-center justify-center transition-colors"
        style={{ fontSize: '28px', lineHeight: '1', fontWeight: '300' }}
      >
        ×
      </button>
      
      {/* Cal.com Inline Booking - Match original size and positioning */}
      <div 
        className="w-full max-w-5xl h-[85vh] rounded-2xl overflow-auto"
        onClick={(e) => e.stopPropagation()}
        style={{ maxWidth: '1200px' }}
      >
        <InlineBooking height="100%" className="w-full h-full" />
      </div>
      
      {/* Invisible background to catch clicks */}
      <div 
        className="absolute inset-0 -z-10"
        onClick={onClose}
      />
    </div>
  );
}