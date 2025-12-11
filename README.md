# Due - Subscription Tracker Landing Page

**Due** is a modern, high-performance landing page for a subscription tracking application. It is designed to help users manage their recurring payments, cancel unwanted subscriptions, and gain financial clarity.

## 🚀 Features

-   **Sleek Dark Mode Design**: A premium, dark-themed aesthetic with neon accents and glassmorphism effects.
-   **Interactive Hero Section**: Features floating 3D-style icons and a dynamic background glow.
-   **Bento Grid Layout**: A modern, responsive grid showcasing key features like calendar views, analytics, and mobile app mockups.
-   **Pricing Toggle**: Interactive monthly/annual pricing switch with real-time price updates.
-   **GSAP Animations**: Smooth entrance animations and scroll-triggered effects for a polished user experience.
-   **Responsive**: Fully optimized for desktop, tablet, and mobile devices.

## 🛠️ Tech Stack

-   **HTML5**: Semantic structure.
-   **CSS3**: Custom properties (variables), Flexbox, Grid, and animations. No external CSS frameworks were used, ensuring a lightweight footprint.
-   **JavaScript (ES6+)**: Handles interactivity and DOM manipulation.
-   **GSAP (GreenSock Animation Platform)**: Powers the complex animations and scroll effects.
-   **FontAwesome**: Provides the vector icons used throughout the site.
-   **Google Fonts**: Uses 'Inter' for a clean, modern typography.

## 📂 Architecture & File Structure

The project follows a simple, standard web development structure to ensure ease of maintenance and deployment.

```
SUBTRACKER/
├── css/
│   └── style.css       # Main stylesheet: Contains all styling rules and design system variables.
├── js/
│   └── main.js         # Application logic: Handles GSAP animations, pricing toggle, and FAQ.
├── index.html          # Main landing page: Semantic HTML5 structure.
└── README.md           # Project documentation
```

## 🧩 Key Components

### Hero Section
The entry point of the site. It features a headline, subheadline, call-to-action (CTA), and a dynamic background.
-   **Implementation**: Uses `position: relative` for the container and `position: absolute` for the floating icons to create a layered depth effect.

### Bento Grid (Features)
A modular grid layout that showcases different aspects of the product (Calendar, Analytics, Mobile App, AI).
-   **Implementation**: Built using CSS Grid (`display: grid`). The `.bento-card` class provides a unified glassmorphic look, while specific modifier classes (e.g., `.calendar-card`) handle unique internal layouts.

### Pricing Section
Displays three tiers of pricing with a toggle for monthly vs. annual billing.
-   **Implementation**: The toggle uses a simple checkbox logic visually represented by a sliding circle. JavaScript listens for clicks, toggles a class, and updates the DOM text for prices.

## 🎨 Design System

-   **Colors**:
    -   Background: `#050505` (Deep Black) for an OLED-friendly, premium look.
    -   Primary Text: `#F5F5F7` (Off-white) for readability without eye strain.
    -   Accents: Neon gradients (Cyan to Purple) used sparingly for focus.
-   **Typography**: 'Inter' font family for a clean, neutral, and highly legible interface.
-   **Effects**:
    -   **Glassmorphism**: `backdrop-filter: blur(20px)` and semi-transparent backgrounds create a sense of hierarchy and depth.
    -   **Glows**: `box-shadow` and radial gradients are used to create "light sources" behind elements.

## 💡 Thought Process & Design Decisions

Here is the rationale behind the significant effects and features added to the landing page:

### Why Dark Mode & Neon Accents?
**Goal**: To convey "Premium Utility" and "Focus".
**Reasoning**: Financial tools can often feel boring or stressful (white spreadsheets). By using a deep dark mode with subtle neon glows, we transform the experience into something that feels high-tech, secure, and "cool". It mimics the aesthetic of modern developer tools and premium SaaS products, appealing to a tech-savvy audience.

### Why Floating 3D Icons in the Hero?
**Goal**: To visualize "Controlled Chaos".
**Reasoning**: The problem statement is "too many subscriptions". Instead of just saying that, we visualized it. The icons (Netflix, Spotify, etc.) float around the user, representing the cloud of services they pay for. The central text ("Keep your subscriptions under control") anchors the composition, visually demonstrating that the product brings order to this floating chaos.

### Why a Bento Grid for Features?
**Goal**: To show "Multifaceted Value" at a glance.
**Reasoning**: A standard list of features can be boring. The "Bento Grid" (popularized by Apple and linear.app) allows us to show *visual proofs* of the features simultaneously.
-   The **Calendar** shows *planning*.
-   The **Chart** shows *analytics*.
-   The **Phone** shows *mobility*.
By arranging them in a grid, the user perceives the product as a complete ecosystem rather than just a list of functions.

### Why the "Lightning" Separator?
**Goal**: To guide the eye and add energy.
**Reasoning**: A straight line separator is functional but dull. The curved, glowing line acts as a visual path, leading the user's eye from the Hero section down into the Features. The "energy" of the line reinforces the idea of the product being active and powerful.

### Why GSAP Animations?
**Goal**: To create a "Silky Smooth" feel.
**Reasoning**: Standard CSS transitions are great for hovers, but for complex entrance sequences (elements fading in one by one), GSAP provides superior control. The staggered animations on load (Navbar -> Text -> Buttons) make the page feel like it's "booting up", reinforcing the software/tech theme.

### Why Glassmorphism?
**Goal**: To maintain context and depth.
**Reasoning**: In a dark interface, solid cards can feel heavy and blocky. Glassmorphism (semi-transparent backgrounds with blur) allows the background glow to bleed through slightly. This makes the UI elements feel lightweight and floating, keeping the interface airy despite the dark color palette.

## 📦 Setup & Usage

1.  **Clone or Download** the repository.
2.  **Open `index.html`** in your preferred web browser.
3.  No build step or server is required for the basic version, but a local server (like Live Server) is recommended for the best experience with assets and routing.

## 📄 License

This project is open-source and available for personal and commercial use.
