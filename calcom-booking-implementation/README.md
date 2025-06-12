# Cal.com Booking Implementation

A complete Cal.com booking integration that you can easily copy into your website.

## Files Included

- `useCalEmbed.ts` - React hook for Cal.com integration
- `constants.ts` - Configuration constants
- `BookingButton.tsx` - Button component that opens booking modal
- `InlineBooking.tsx` - Inline booking calendar component

## Installation

1. Install the Cal.com React package:
```bash
npm install @calcom/embed-react
```

2. Copy all files from this folder to your project

3. Update the constants in `constants.ts` with your Cal.com details:
```typescript
export const CALCOM_CONSTANTS = {
  NAMESPACE: "your-namespace", // Your Cal.com namespace
  BRAND_COLOR: "#your-color", // Your brand color
  LINK: "your-username/your-event-type", // Your Cal.com booking link
};
```

## Usage

### Booking Button (Modal)
```tsx
import { BookingButton } from './BookingButton';

function MyComponent() {
  return (
    <BookingButton className="my-custom-class">
      Schedule a Meeting
    </BookingButton>
  );
}
```

### Inline Calendar
```tsx
import { InlineBooking } from './InlineBooking';

function MyComponent() {
  return (
    <InlineBooking 
      height="700px"
      className="my-custom-class"
    />
  );
}
```

## Customization

Both components accept these props:
- `namespace` - Override the default Cal.com namespace
- `brandColor` - Override the default brand color
- `layout` - Calendar layout: "month_view", "week_view", or "day_view"
- `className` - Additional CSS classes

## Requirements

- React 18+
- Next.js (if using "use client" directive)
- Tailwind CSS (for default styling, or update the styles as needed)

## Getting Your Cal.com Details

1. Go to [Cal.com](https://cal.com) and create an account
2. Set up your event types
3. Your namespace is usually your username
4. Your booking link format is: `username/event-type-name`