import { useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";

interface CalEmbedOptions {
  namespace: string;
  styles?: {
    branding?: {
      brandColor?: string;
    };
  };
  hideEventTypeDetails?: boolean;
  layout?: "month_view" | "week_view" | "day_view" | any;
}

export const useCalEmbed = (options: CalEmbedOptions) => {
  useEffect(() => {
    console.log('useCalEmbed: Starting Cal.com initialization with options:', options);
    (async function () {
      try {
        console.log('useCalEmbed: Getting Cal API...');
        const cal = await getCalApi({ namespace: options.namespace });
        console.log('useCalEmbed: Cal API loaded successfully:', cal);
        
        cal("ui", {
          styles: options.styles,
          hideEventTypeDetails: options.hideEventTypeDetails,
          layout: options.layout,
        });
        console.log('useCalEmbed: Cal UI configured');
        
        // Check if Cal object is available on window after initialization
        setTimeout(() => {
          console.log('useCalEmbed: Cal object on window after init:', (window as any).Cal);
        }, 1000);
        
      } catch (error) {
        console.error('useCalEmbed: Error initializing Cal.com:', error);
      }
    })();
  }, [options]);

  return {
    namespace: options.namespace,
    layout: options.layout,
  };
};
