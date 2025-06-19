# Baba's Pantry Website

This repository contains the codebase for Baba's Pantry website, a Palestinian restaurant/pantry showcasing their food, menu, and story. The website features a horizontal scrolling layout with multiple sections presenting the restaurant's offerings.

## Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Component Architecture](#component-architecture)
- [Mobile Responsiveness Implementation](#mobile-responsiveness-implementation)
- [Arabic Headers Implementation](#arabic-headers-implementation)
- [Custom Fonts](#custom-fonts)
- [Deployment](#deployment)

## Overview

Baba's Pantry website is built with Next.js and features:
- Horizontally scrolling sections with snap points
- Animated transitions using GSAP
- Arabic text elements displayed as both fonts and SVG images
- Multiple sections for welcome, menu, bakery, delivery, catering, etc.
- Custom navigation and fullscreen menu

## Tech Stack

- **Framework**: Next.js 15.3.2
- **Language**: TypeScript
- **Styling**: 
  - Tailwind CSS
  - CSS Modules
- **Animations**: 
  - GSAP (GreenSock Animation Platform)
  - Animate.css
- **UI Components**: Headless UI
- **Custom Fonts**: 
  - Pilot (headers)
  - Rakkas (Arabic text)
  - Plus Jakarta Sans (body text)

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   # or
   yarn
   ```
3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Available Scripts

- `npm run dev` - Run development server with turbo mode
- `npm run build` - Build the project for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint
- `npm run new:component` - Generate a new component using Plop

## Project Structure

```
/
├── app/                  # Next.js app directory with main page
├── components/           # React components
│   ├── AnimatedButton/   # Button with animations
│   ├── AnimatedMarquee/  # Scrolling marquee component
│   ├── Arabic/           # Arabic text handling component
│   ├── Content/          # Content wrapper component
│   ├── Footer/           # Footer component
│   ├── FullPage/         # Main page wrapper
│   ├── FullScreenMenu/   # Full screen navigation menu
│   ├── Hero/             # Hero section
│   ├── LayoutHorizontal/ # Horizontal layout container
│   ├── LayoutVertical/   # Vertical layout container
│   ├── Logo/             # Logo component
│   ├── Menu/             # Menu button component
│   ├── ScrollSection/    # Horizontal scrolling section
│   ├── SectionBakery/    # Bakery section
│   ├── SectionCatering/  # Catering section
│   ├── SectionDelivery/  # Delivery section
│   ├── SectionOne/       # Welcome section
│   ├── SectionSlide/     # Base slide component for sections
│   ├── SectionThree/     # Menu section
│   ├── SectionTwo/       # Press section
│   ├── Slide/            # Slide component
│   └── Text/             # Text component with formatting
├── interfaces/           # TypeScript interfaces
├── public/               # Static assets
│   ├── images/           # Image assets
│   │   └── SVG/          # SVG assets
│   └── *.ttf, *.woff     # Font files
├── styles/               # Global styles
└── templates/            # Component templates for Plop
```

## Component Architecture

The website uses a component-based architecture with the following key components:

### Main Structure

- `FullPage`: Main container for the website
- `LayoutHorizontal`: Handles the horizontal layout
- `ScrollSection`: Manages the horizontal scrolling behavior with GSAP

### Content Sections

All content sections use the base `SectionSlide` component which accepts:
- `title`: Section title
- `arabicWord`: Arabic translation (text or SVG image)
- `content`: Main content
- `imageSrc`: Optional image
- `imagePosition`: Controls image position (left/right)

### Navigation

- `Menu`: Hamburger menu button
- `FullScreenMenu`: Full-screen navigation overlay

## Mobile Responsiveness Implementation

The website is partially responsive but needs to be fully optimized for mobile devices. Here's how to implement mobile responsiveness:

### 1. Update the Horizontal Scroll Logic

Modify the `ScrollSection.tsx` component to handle mobile differently:

```typescript
// In ScrollSection.tsx
useGSAP(() => {
  // Determine if mobile view
  const isMobile = window.innerWidth < 768;
  
  if (isMobile) {
    // Disable horizontal scrolling on mobile
    // Switch to vertical layout
    container.style.flexDirection = 'column';
    container.style.width = '100vw';
    container.style.height = 'auto';
    
    // Remove GSAP horizontal scrolling
    sections.forEach((section) => {
      section.style.width = '100vw';
      section.style.height = 'auto';
      section.style.minHeight = '100vh';
    });
    
    // Disable pin
    if (scrollTrigger) {
      scrollTrigger.kill();
    }
  } else {
    // Original horizontal scrolling code for desktop
    // ...
  }
}, [sections.length, snapEnabled, scrubSmoothness]);
```

### 2. Update Section Components

Modify each section component to handle mobile layout:

```tsx
// Example for SectionSlide.tsx
// Update the layout to be more stack-friendly on mobile
<section className="w-screen min-h-screen flex flex-col md:flex-row overflow-hidden relative">
  {/* Image Left - Full width on mobile */}
  {hasImage && isImageLeft && (
    <div className="md:w-1/2 w-full h-80 md:h-full overflow-hidden">
      <img
        src={imageSrc}
        alt={imageAlt}
        className="object-cover w-full h-full border-[1px] border-violet"
      />
    </div>
  )}

  {/* Content - Full width on mobile */}
  <div
    className={`${
      hasImage ? "md:w-1/2 w-full md:h-full" : "w-full h-full"
    } bg-lilac px-4 md:px-16 py-8 flex flex-col justify-center items-start text-left space-y-6 ${contentClassName}`}
  >
    {/* Content here */}
  </div>

  {/* Image Right */}
  {/* ... similar updates */}
</section>
```

### 3. Update Font Sizes

Ensure text is readable on small screens:

```css
/* In globals.css */
:root {
  --headline-font-size: min(max(32px, 6vw), 70px);
  --paragraph-font-size: min(max(16px, 4vw), 22px);
  /* Other responsive variables */
}
```

### 4. Navigation Updates

Enhance mobile menu experience:

```tsx
// In Menu.tsx, update the positioning and size
<div
  onClick={props.toggleOpen}
  className={
    styles.MenuComponent +
    " cursor-pointer fixed top-[8px] right-[8px] z-10 p-3 rounded-full bg-[#dbcaea]"
  }
>
  <img
    width={40}
    className="animate__animated animate__shakeY"
    src="/images/menu.svg"
  ></img>
</div>
```

### 5. Add Media Queries

Add additional media queries in component CSS modules as needed:

```css
/* Example for responsive adjustments */
@media (max-width: 768px) {
  .sectionContent {
    padding: 1rem;
  }
  
  .sectionTitle {
    font-size: 2rem;
  }
  
  /* Other mobile-specific styles */
}
```

### 6. Test on Multiple Devices

Test the site on various devices and screen sizes to ensure the layout, images, and text remain properly formatted.

## Arabic Headers Implementation

The site uses both Arabic fonts and SVG images for Arabic text. To implement the Arabic headers with their respective SVG images:

### 1. Identify SVG Image Files

The following SVG files contain Arabic headers:
- `/public/images/menu-arabic.svg` - Menu header in Arabic
- `/public/images/arabic-welcome.svg` - Welcome header in Arabic
- `/public/images/contact-arabic.svg` - Contact header in Arabic
- `/public/images/merch-arabic.svg` - Merchandise header in Arabic
- `/public/images/pantry_arabic.svg` - Pantry header in Arabic
- `/public/images/press-arabic.svg` - Press header in Arabic

### 2. Replace Text with SVG Images

In each section component, update the `arabicWord` property to use the SVG image instead of text:

```tsx
// Before:
arabicWord="القائمة"

// After:
// In SectionThree.tsx (Menu section)
return (
  <SectionSlide
    title="Menu"
    // Replace with SVG instead of text
    arabicImage="/images/menu-arabic.svg" // Add this prop to SectionSlide
    // Remove or comment out the arabicWord prop
    // arabicWord="القائمة"
    // Other props...
  />
);
```

### 3. Update the SectionSlide Component

Modify the `SectionSlide.tsx` component to handle SVG images for Arabic text:

```tsx
// In SectionSlide.tsx
interface SectionSlideProps {
  title: string;
  subtitle?: string;
  arabicWord?: string;
  arabicImage?: string; // Add this new prop
  // Other props...
}

export const SectionSlide: React.FC<SectionSlideProps> = ({
  title,
  subtitle,
  arabicWord,
  arabicImage, // Include in props
  // Other props...
}) => {
  return (
    <section className="...">
      {/* ... */}
      <header className="space-y-6">
        {inlineTitle ? (
          <>
            <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
              {arabicImage ? (
                <img 
                  src={arabicImage} 
                  alt="Arabic text" 
                  className="h-12 md:h-16" 
                />
              ) : arabicWord ? (
                <p className="text-5xl font-arabic text-blue !stroke-violet !stroke-2">
                  {arabicWord}
                </p>
              ) : null}
              <h2 className="text-6xl font-header text-purple-900">{title}</h2>
            </div>
            {/* ... */}
          </>
        ) : (
          <>
            {arabicImage ? (
              <img 
                src={arabicImage} 
                alt="Arabic text" 
                className="h-16 md:h-20" 
              />
            ) : arabicWord ? (
              <p className="text-6xl font-arabic text-blue !stroke-violet !stroke-2">
                {arabicWord}
              </p>
            ) : null}
            <h2 className="text-7xl font-header text-purple-900">{title}</h2>
            {/* ... */}
          </>
        )}
        {/* ... */}
      </header>
      {/* ... */}
    </section>
  );
};
```

### 4. Apply to All Sections

Update all section components to use the appropriate SVG images:

- SectionOne (Welcome): `/images/arabic-welcome.svg`
- SectionTwo (Press): `/images/press-arabic.svg`
- SectionThree (Menu): `/images/menu-arabic.svg`
- SectionBakery: `/images/pantry_arabic.svg`
- SectionDelivery: `/images/menu-arabic_1.svg` or appropriate image
- SectionCatering: `/images/menu-arabic_2.svg` or appropriate image

## Custom Fonts

The website uses several custom fonts located in the `/public` directory:

1. **Pilot** (`Pilot-SemiBold.woff2`, `Pilot-SemiBold.woff`)
   - Used for headers 
   - Applied with Tailwind class: `font-header`

2. **Rakkas/ArefRuqaa** (`ArefRuqaa-Regular.woff2`, `ArefRuqaa-Regular.woff`, `ArefRuqaa-Bold.ttf`, `ArefRuqaa-Regular.ttf`, `rakkas-regular-webfont.woff2`, `rakkas-regular-webfont.woff`, `Rakkas-Regular.ttf`)
   - Used for Arabic text
   - Applied with Tailwind class: `font-arabic`

3. **Plus Jakarta Sans** (`PlusJakartaSans-VariableFont_wght.ttf`)
   - Used for body text
   - Applied as the default font

### Font Usage Guidelines

1. For English headings, use: `className="font-header text-[size]"`
2. For Arabic text, use: `className="font-arabic text-[size]"`
3. For body text, no specific class is needed as it uses the default font

The fonts are defined in:
1. `tailwind.config.js` for the font family classes
2. `styles/globals.css` for the @font-face declarations

## Deployment

To deploy the website:

1. Build the project:
   ```bash
   npm run build
   ```

2. Test the production build locally:
   ```bash
   npm run start
   ```

3. Deploy to your preferred hosting platform:
   - Vercel (recommended for Next.js)
   - Netlify
   - AWS Amplify
   - Traditional hosting via FTP

## Completion Checklist

- [ ] Implement mobile responsiveness
- [ ] Replace all Arabic text with respective SVG images
- [ ] Test on various devices and browsers
- [ ] Optimize images for better performance
- [ ] Ensure all links and navigation work correctly
- [ ] Check for any console errors or warnings
- [ ] Validate HTML and accessibility
- [ ] Final testing and quality assurance
