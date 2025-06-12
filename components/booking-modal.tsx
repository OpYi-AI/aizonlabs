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
      <div className="relative w-full h-full flex items-center justify-center p-4 md:p-6">
        {/* Go back arrow - top left */}
        <button
          onClick={onClose}
          className="absolute top-6 left-6 z-60 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm transition-all duration-200 hover:scale-105"
          title="Go back"
        >
          <IconArrowLeft className="w-6 h-6" />
        </button>

        {/* Close button - top right */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-60 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm transition-all duration-200 hover:scale-105"
          title="Close"
        >
          <IconX className="w-6 h-6" />
        </button>
        
        {/* Cal.com modal container with improved styling */}
        <div 
          className="relative w-full max-w-6xl h-[90vh] md:h-[85vh] bg-white dark:bg-neutral-900 rounded-2xl shadow-2xl overflow-hidden"
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