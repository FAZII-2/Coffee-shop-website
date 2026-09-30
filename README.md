# ☕ Brewed & Beyond — Coffee Shop Website

A premium, fully static coffee shop website built with pure **HTML**, **Vanilla CSS**, and **JavaScript**. No frameworks, no build tools — just open `index.html` in any browser.

---

## 📂 Project Structure

```
/
├── index.html          ← Landing page (hero, stats, about teaser, menu carousel, testimonials)
├── menu.html           ← Full menu with category filter tabs
├── about.html          ← Brand story, team, timeline, values
├── contact.html        ← Reservation form, map, FAQ accordion
│
├── css/
│   ├── style.css       ← Design tokens, reset, typography, utilities
│   ├── animations.css  ← Keyframes, scroll-driven animations, reveal
│   └── components.css  ← All UI components (navbar, cards, buttons, footer…)
│
├── js/
│   ├── main.js         ← Navbar, mobile menu, scroll reveal, counter animation
│   ├── menu-filter.js  ← Category filter for menu.html
│   └── contact.js      ← Reservation form validation
│
└── assets/
    └── images/         ← All site images
```

## 🚀 Getting Started

1. Clone or download this project.
2. Open `index.html` in any modern browser.
3. Done! No build step required.

## ✨ Features

- **Parallax Hero** — Scroll-driven background zoom (with IntersectionObserver fallback)
- **Animated Counters** — Numbers count up on scroll into view
- **Drag-to-Scroll Carousel** — Featured menu items with mouse drag support
- **Category Filter** — Menu items filter with animated transitions
- **Scroll Reveal** — Elements fade up as you scroll
- **Glassmorphism Cards** — Backdrop-blur glass UI elements
- **Mobile Hamburger Nav** — Animated drawer on small screens
- **Form Validation** — Real-time field validation on the reservation form
- **FAQ Accordion** — Animated expand/collapse
- **Responsive** — Works on all screen sizes

## 🎨 Design System

- **Font Headings:** Playfair Display
- **Font Body:** Inter
- **Font Logo:** Dancing Script
- **Primary Accent:** `#c97d3a` (Caramel)
- **Gold Highlight:** `#d4a046`
- **Background:** `#0e0600` (Deep Espresso)

## 📄 Pages

| Page | File | Description |
|------|------|-------------|
| Home | `index.html` | Hero, featured menu, testimonials |
| Menu | `menu.html` | Full filterable menu |
| About | `about.html` | Story, team, timeline, values |
| Contact | `contact.html` | Reservation form, map, FAQ |

---

*Built with ☕ and ❤️ — Brewed & Beyond, 2026*
