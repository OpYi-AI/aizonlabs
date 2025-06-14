"use client";
import React, { useEffect } from "react";
import { InlineBooking } from "./inline-booking";
import { IconX, IconArrowLeft } from "@tabler/icons-react";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function BookingModal({ isOpen, onClose }: BookingModalProps) {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      {/* Background overlay with subtle blur */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal container */}
      <div className="relative w-full h-full flex items-center justify-center p-2 md:p-6">
        {/* Go back arrow - top left */}
        <button
          onClick={onClose}
          className="absolute top-3 left-3 md:top-6 md:left-6 z-60 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-white/90 hover:bg-white text-gray-800 hover:text-gray-900 shadow-lg backdrop-blur-sm transition-all duration-200 hover:scale-105 border border-white/50"
          title="Go back"
        >
          <IconArrowLeft className="w-5 h-5 md:w-6 md:h-6" />
        </button>

        {/* Close button - top right */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 md:top-6 md:right-6 z-60 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-white/90 hover:bg-white text-gray-800 hover:text-gray-900 shadow-lg backdrop-blur-sm transition-all duration-200 hover:scale-105 border border-white/50"
          title="Close"
        >
          <IconX className="w-5 h-5 md:w-6 md:h-6" />
        </button>
        
        {/* Cal.com modal container with improved styling */}
        <div 
          className="relative w-full max-w-full md:max-w-6xl h-[96vh] md:h-[85vh] bg-white dark:bg-neutral-900 rounded-xl md:rounded-2xl shadow-2xl overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Scrollable content area */}
          <div className="w-full h-full overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-track-gray-100 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-800 dark:scrollbar-thumb-gray-600">
            <InlineBooking height="100%" className="w-full min-h-full" />
          </div>
        </div>
      </div>
    </div>
  );
}