# Cal.com Booking Implementation Summary

## Overview
This document summarizes the implementation of Cal.com booking functionality for the startup landing page, including the challenges faced and final solution.

## Project Structure
- Next.js 14 application with TypeScript
- Cal.com integration using @calcom/embed-react package
- Responsive design with Tailwind CSS

## Files Created/Modified

### New Components Created:
1. `/components/booking-button.tsx` - Reusable booking button component
2. `/components/booking-modal.tsx` - Modal popup for Cal.com booking interface
3. `/components/inline-booking.tsx` - Inline Cal.com booking component
4. `/components/cal-script.tsx` - Cal.com script loader component

### Modified Files:
1. `/components/navbar.tsx` - Added booking button to navigation
2. `/app/layout.tsx` - Added Cal.com script loading
3. `/constants/links.ts` - Contains Cal.com configuration

## Cal.com Configuration (constants/links.ts)
```
CALCOM_NAMESPACE: "chat-with-manu-demo"
CALCOM_BRAND_COLOR: "#000000"
CALCOM_HIDE_EVENT_TYPE_DETAILS: false
CALCOM_LAYOUT: "month_view"
CALCOM_LINK: "manu-arora-vesr9s/chat-with-manu-demo"
```

## Implementation Approaches Tried

### 1. Complex Cal.com Embed (Initial Attempt)
- Used @calcom/embed-react with useCalEmbed hook
- Attempted data attributes approach (data-cal-link, data-cal-config)
- Tried programmatic Cal("openModal") API calls
- Issues: JavaScript execution problems, Cal.com script loading failures

### 2. Simple Link Approach (Interim Solution)
- Direct links to https://cal.com/[booking-link]
- Opened in new tabs/popup windows
- Issues: User experience not ideal, leaves main site

### 3. Modal with Iframe (Attempted)
- Custom modal component with Cal.com iframe
- Issues: Not the native Cal.com experience

### 4. Modal with InlineBooking (Final Implementation)
- Custom modal component using original InlineBooking component
- Cal.com native interface embedded in popup modal
- Issues: Modal styling and background overlay challenges

## Technical Challenges Encountered

### JavaScript Execution Issues
- Cal.com script failed to load with error: "Cal.com script failed to load: Event"
- Button click handlers not firing
- Console errors: "net::ERR_NAME_NOT_RESOLVED"
- Server/client component conflicts with Next.js Script component

### Responsive Design Issues
- Buttons hidden on smaller screens due to "hidden md:block" classes
- Mobile vs desktop button implementations
- Z-index and positioning conflicts

### Modal Styling Challenges
- Background overlay opacity adjustments
- Matching original Cal.com modal appearance
- Shadow and border styling issues
- Close button positioning and styling

## Final Working Solution

### Components Structure:
```
BookingModal (booking-modal.tsx)
├── Modal overlay (no background for transparency)
├── Close button (white X, top-right)
└── InlineBooking component (full Cal.com interface)

InlineBooking (inline-booking.tsx)
├── useCalEmbed hook integration
├── Cal("inline") API initialization
└── Full-height booking interface
```

### Navbar Integration:
- Desktop: "Book a call" button with gradient styling and hover effects
- Mobile: Full-width booking button in mobile menu
- Both trigger BookingModal component

### Key Features:
- Modal popup with Cal.com booking interface
- No background overlay (website visible behind modal)
- Responsive design for all screen sizes
- Proper close functionality (X button + click outside)
- Native Cal.com booking experience

## Dependencies
- @calcom/embed-react: ^1.5.0 (already installed)
- Next.js 14.2.5
- React 18
- Tailwind CSS

## Usage
1. Click "Book a call" button in navbar
2. Modal opens with Cal.com booking interface
3. User can select date/time and book appointment
4. Close modal with X button or click outside
5. User remains on main website throughout process

## Notes for Future Development
1. Cal.com script loading can be temperamental - the CalScript component helps ensure proper loading
2. Modal styling should remain minimal to let Cal.com handle its own interface
3. Background overlays can interfere with the native Cal.com appearance
4. The InlineBooking component provides the most native Cal.com experience
5. Consider fallback to direct Cal.com links if embed fails

## Testing Recommendations
1. Test on different screen sizes (mobile, tablet, desktop)
2. Verify Cal.com script loads properly in browser console
3. Test booking flow end-to-end
4. Check modal close functionality (X button and click outside)
5. Verify hover effects and button styling work correctly

## Troubleshooting
If booking button doesn't work:
1. Check browser console for JavaScript errors
2. Verify Cal.com script loaded successfully
3. Test with direct link fallback: https://cal.com/manu-arora-vesr9s/chat-with-manu-demo
4. Check if ad blockers or security software are blocking scripts
5. Ensure proper z-index and CSS positioning

## Configuration Updates
To change Cal.com booking details, update `/constants/links.ts`:
- CALCOM_LINK: Your Cal.com booking URL path
- CALCOM_NAMESPACE: Your Cal.com namespace/username
- CALCOM_BRAND_COLOR: Your brand color for Cal.com interface