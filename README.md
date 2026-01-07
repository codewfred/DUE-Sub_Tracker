# Due - Subscription Tracker Landing Page

**Due** is a modern, high-performance landing page for a subscription tracking application. It is designed to help users manage their recurring payments, cancel unwanted subscriptions, and gain financial clarity.

## Features

-   **Sleek Dark Mode Design**: A premium, dark-themed aesthetic with neon accents and glassmorphism effects.
-   **Interactive Hero Section**: Features a dynamic brand icon list and a refined gradient text effect.
-   **Video Feature Showcase**: A high-impact, auto-playing video section demonstrating the app in action, replacing the traditional bento grid for a more immersive experience.
-   **Pricing Toggle**: Interactive monthly/annual pricing switch with real-time price updates.
-   **Refined Animations**:
    -   **FAQ**: Seamless, custom-eased cubic-bezier expansions.
    -   **ScrollTriggers**: Optimized scroll interactions for the video and other elements.
-   **Responsive**: Meticulously tuned for all devices:
    -   **Desktop**: Full layout.
    -   **Tablet**: Balanced spacing and adjusted typography ranges.
    -   **Mobile**: Fluid layouts, optimized touch targets.
    -   **Ultra-Small Mobile (<360px)**: Dedicated scaling for compact devices.

## Tech Stack

-   **HTML5**: Semantic structure.
-   **CSS3**: Custom properties (variables), Flexbox, Grid, and animations. No external CSS frameworks were used, ensuring a lightweight footprint.
-   **JavaScript (ES6+)**: Handles interactivity and DOM manipulation.
-   **GSAP (GreenSock Animation Platform)**: Powers the complex scroll effects and ScrollTrigger interactions.
-   **FontAwesome**: Provides the vector icons used throughout the site.
-   **Google Fonts**: Uses 'Inter' for a clean, modern typography.

## Key Components

### Hero Section
The entry point of the site. It features a headline, subheadline, call-to-action (CTA), and a row of brand icons representing subscription services.
-   **Refinements**: Text sizes and margins are specifically tuned for each device breakpoint. The brand icons float up with a subtle pulse animation.

### Feature Video
A prominent video frame (`fam.mp4`) that showcases the application's interface.
-   **Implementation**: A responsive video container with a custom gradient border. Use of `mix-blend-mode` or overlaid gradients ensures it sits perfectly within the dark theme.

### Pricing Section
Displays three tiers of pricing with a toggle for monthly vs. annual billing.
-   **Implementation**: The toggle uses a simple checkbox logic visually represented by a sliding circle. JavaScript listens for clicks, toggles a class, and updates the DOM text for prices.

## Design System

-   **Colors**:
    -   Background: `#050505` (Deep Black) for an OLED-friendly, premium look.
    -   Primary Text: `#F5F5F7` (Off-white) for readability without eye strain.
    -   Accents: Neon gradients (Cyan to Purple) used sparingly for focus.
-   **Typography**: 'Inter' font family for a clean, neutral, and highly legible interface.
-   **Effects**:
    -   **Glassmorphism**: `backdrop-filter: blur(20px)` and semi-transparent backgrounds create a sense of hierarchy and depth.
    -   **Glows**: `box-shadow` and radial gradients are used to create "light sources" behind elements.

## Thought Process & Design Decisions

Here is the rationale behind the significant effects and features added to the landing page:

### Why Dark Mode & Neon Accents?
**Goal**: To convey "Premium Utility" and "Focus".
**Reasoning**: Financial tools can often feel boring. By using a deep dark mode with subtle neon glows, we transform the experience into something that feels high-tech and "cool".

### Why a Video Showcase instead of Static Images?
**Goal**: To show "Living Value".
**Reasoning**: We replaced the static bento grid with a video because showing the app in motion creates a stronger emotional connection and demonstrates immediate value. The video is kept static (no scroll fly-in) to ensure it is immediately visible and accessible.

### Why "Ultra-Small" Mobile Support?
**Goal**: Universal Accessibility.
**Reasoning**: We noticed that standard mobile breakpoints often neglect older or smaller devices (like the iPhone SE). By adding a `<360px` breakpoint, we ensure the brand promise of "Control" extends to the visual stability of the page itself—no broken text or overflowing layouts, regardless of device size.

### Why Custom Bezier Curves for FAQ?
**Goal**: "Invisible" Polish.
**Reasoning**: Default linear or ease-out transitions can feel robotic. By tuning the cubic-bezier curve to `0.645, 0.045, 0.355, 1`, we mimic the physics of a high-quality mechanical switch, making the site feel faster and more responsive without changing the actual load times.

## Setup & Usage

1.  **Clone or Download** the repository.
2.  **Open `index.html`** in your preferred web browser.
3.  No build step or server is required for the basic version, but a local server (like Live Server) is recommended for the best experience with assets and routing.

## License

This project is open-source and available for personal and commercial use.
