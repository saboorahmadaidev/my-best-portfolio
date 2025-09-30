# Design Guidelines: Saboor Ahmad - AI Developer Portfolio

## Design Approach

**Selected Approach:** Reference-Based (Portfolio/Tech Industry Leaders)
- **Primary References:** Linear (for typography & animations), Vercel (for minimal elegance), Apple (for premium polish)
- **Design Philosophy:** Futuristic minimal with premium animations, dark-first design with elegant light mode alternative

## Core Design Elements

### A. Color Palette

**Dark Mode (Primary):**
- Background: 220 25% 8% (deep navy-black)
- Surface: 220 20% 12% (elevated cards/sections)
- Primary: 210 100% 60% (vibrant blue for CTAs and accents)
- Text Primary: 0 0% 98%
- Text Secondary: 220 10% 70%
- Glow/Accent: 180 100% 50% (cyan glow effects)

**Light Mode:**
- Background: 0 0% 98%
- Surface: 0 0% 100%
- Primary: 210 100% 50%
- Text Primary: 220 25% 15%
- Text Secondary: 220 10% 45%

### B. Typography

**Font Families:**
- Headlines: Inter (700-800 weight)
- Body: Inter (400-500 weight)
- Code/Tech: JetBrains Mono (for tech stack badges)

**Scale:**
- Hero Headline: text-6xl md:text-7xl lg:text-8xl
- Section Headers: text-4xl md:text-5xl
- Project Titles: text-2xl md:text-3xl
- Body: text-base md:text-lg
- Small/Caption: text-sm

### C. Layout System

**Spacing Units:** 4, 8, 12, 16, 20, 24, 32 (Tailwind: p-4, p-8, p-12, p-16, p-20, p-24, p-32)
- Section padding: py-20 md:py-32
- Card padding: p-6 md:p-8
- Grid gaps: gap-8 md:gap-12

**Container:**
- Max width: max-w-7xl
- Content max width: max-w-6xl
- Text max width: max-w-3xl

### D. Component Specifications

**1. Hero Section (100vh)**
- Profile image: Circular frame (200-300px) with animated cyan glow effect using drop-shadow and subtle pulse
- Headline: Large bold text with gradient from blue to cyan
- Rotating titles: "AI Engineer | Full Stack Developer | Data Scientist | App & Web Developer" with smooth fade/slide transitions every 3 seconds
- CTA buttons: Primary "Hire Me" (filled), Secondary "View Projects" (outline with blur backdrop on dark backgrounds)
- Particles or grid pattern background animation (subtle)

**2. About Me Section**
- Bio: Left-aligned text with fade-in animation on scroll
- Skills Grid: 3-4 column grid with glassmorphic cards
- Each skill card: Icon (from Heroicons), skill name, animated progress indicator
- Hover effect: Scale up slightly with enhanced glow

**3. Projects Section**
- Masonry or grid layout: 2-3 columns on desktop
- Project cards: Image preview, title, description, tech stack badges, links
- Hover animation: Card lifts (translateY), image zooms slightly, overlay gradient appears
- Featured carousel: Auto-playing with navigation dots, swipe support

**4. Clients & Testimonials**
- Client logos: Grayscale by default, color on hover, floating animation
- Testimonials: Card slider with 1-3 visible cards, automatic rotation
- Each card: Quote, client name, company, profile image

**5. Experience Timeline**
- Vertical timeline with animated line that fills on scroll
- Timeline nodes: Circular markers with glow effect
- Content cards: Alternate left/right, fade/slide in on scroll
- Include: Education, internships, achievements with dates

**6. Chatbot Section**
- Floating chat widget (bottom-right, fixed position)
- Minimized: Circular button with AI icon and pulse animation
- Expanded: Clean chat interface with glassmorphic background
- Message bubbles: User (right, blue), AI (left, gray)
- Powered by OpenAI for answering questions about skills/projects

**7. Contact Section**
- Split layout: Form (left 60%), Info/Social (right 40%)
- Form fields: Name, Email, Message with floating labels
- Validation: Real-time with smooth error states
- Social icons: LinkedIn, GitHub, Upwork, Gmail, Discord with hover glow effects
- Submit button: Primary style with loading state animation

**8. Navigation & Footer**
- Sticky navigation: Glassmorphic background, blur effect
- Dark/Light mode toggle: Animated moon/sun icon switch
- Footer: Minimal, centered copyright text, subtle top border

### E. Animations & Interactions

**Page Load:**
- Hero elements cascade in (profile → headline → rotating text → buttons)
- Stagger delay: 100-200ms between elements

**Scroll Animations:**
- Fade in + slide up for section content (threshold: 0.2)
- Timeline line draws as user scrolls
- Skill progress bars fill when in view

**Hover Effects:**
- Cards: transform scale-105, enhanced shadow
- Buttons: Subtle scale, background brightness increase
- Social icons: Rotate slightly, glow effect intensifies

**Transitions:**
- Default: transition-all duration-300 ease-in-out
- Theme toggle: Smooth 400ms color transitions
- Page navigation: Fade transitions between sections

**Micro-interactions:**
- Button clicks: Ripple effect
- Form focus: Border glow animation
- Loading states: Skeleton screens or spinner

### F. Responsive Behavior

- Mobile: Single column, stacked layout, hamburger menu
- Tablet: 2-column grids, condensed spacing
- Desktop: Full multi-column layouts, enhanced animations
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)

## Images

**Hero Section:**
- Profile Photo: Professional headshot in circular frame (300px diameter) with animated cyan/blue glow effect

**Projects Section:**
- Project Previews: Screenshots or mockups of each project (16:9 aspect ratio, 600x400px minimum)
- Featured Projects: High-quality hero images for carousel

**Clients Section:**
- Company Logos: SVG format, monochrome versions for consistency

**Testimonials:**
- Client Photos: Small circular avatars (64px) next to testimonial quotes

## Key Principles

1. **Futuristic Feel:** Glassmorphism, glows, smooth animations
2. **Premium Quality:** Attention to detail in every interaction
3. **Performance:** Optimize animations, lazy load images
4. **Accessibility:** Proper contrast ratios, keyboard navigation, ARIA labels
5. **Mobile-First:** Ensure excellent experience on all devices