# SHREE FITNESS STUDIO — COMPLETE DESIGN & TECHNICAL SPECIFICATION

> **Document Version:** 1.0.0  
> **Last Updated:** September 5, 2026  
> **Studio:** Shree Fitness Studio (Unisex Fitness Centre A/C), Porur, Chennai  
> **Founder & Master Coach:** Sakthi Master  

---

## Table of Contents
1. [Business & Brand Identity](#1-business--brand-identity)
2. [Design Philosophy & Aesthetic Standard](#2-design-philosophy--aesthetic-standard)
3. [Color Palette & Tokens](#3-color-palette--tokens)
4. [Background & Lighting Architecture](#4-background--lighting-architecture)
5. [Typography Hierarchy](#5-typography-hierarchy)
6. [UI Components & Layout Structure (Top to Bottom)](#6-ui-components--layout-structure-top-to-bottom)
7. [Official Content & Copywriting Directory](#7-official-content--copywriting-directory)
8. [Media Assets & Vector Iconography](#8-media-assets--vector-iconography)
9. [Technical Architecture & SEO Engine](#9-technical-architecture--seo-engine)
10. [Local Preview & Zero-Cost Deployment](#10-local-preview--zero-cost-deployment)

---

## 1. Business & Brand Identity

| Attribute | Specification Details |
| :--- | :--- |
| **Brand Name** | **SHREE FITNESS STUDIO** |
| **Category** | Elite Unisex Air-Conditioned Fitness Centre (A/C) |
| **Founder & Head Coach** | **Sakthi Master** (20+ Years Bodybuilding & Athletic Conditioning Experience) |
| **Primary Calling Line** | `+91 8778642342` |
| **Secondary Line / WhatsApp** | `+91 9566099329` |
| **Official Studio Address** | No. 3, Sakthi Nagar 4th Street, Somasundaram Avenue, Porur, Chennai - 600 116, Tamil Nadu, India |
| **Key Landmarks** | Opposite to **Super Saravana Stores**, **BSNL Telephone Exchange Upstairs** |
| **Operating Hours** | **Monday – Saturday:** 5:30 AM – 9:30 PM<br>**Sunday:** 7:00 AM – 11:00 AM |
| **Flagship Slogan** | **TRAIN HARD. BE STRONG. NO EXCUSES.** |
| **Target Audience** | Men & women seeking authentic strength training, natural bodybuilding, physique transformation, and guided lifestyle fitness in Porur & West Chennai. |

---

## 2. Design Philosophy & Aesthetic Standard

To avoid generic AI templates, portfolio-style resumes, and boxy dashboard containers, the interface is engineered around four core tenets:

1. **Commercial Club Prestige (Not a Freelancer Portfolio)**:
   - Repositioned the website around **SHREE FITNESS STUDIO** as an elite athletic facility.
   - Sakthi Master is featured with the authority of the studio's Founder and Chief Coach.
2. **De-Boxed Editorial Layout**:
   - Zero nested card wrappers around whole sections.
   - Full-bleed transitions, generous vertical spacing, and natural visual breathing room.
3. **Pure Atmospheric Lighting (Zero Pixelated Grids)**:
   - Stripped all 28px square mesh patterns, dots, and graph-paper grids.
   - Built on a deep obsidian floor with smooth, theatrical warm-amber ambient spotlights.
4. **Strictly Vector-Crafted (Zero Cartoon Emojis)**:
   - Every badge, status, and feature uses bespoke, scalable SVG vector paths with a consistent 2px stroke weight.

---

## 3. Color Palette & Tokens

### Core Brand Swatches

| Role / Token Name | Hex Code | Visual Reference | Usage & Application |
| :--- | :--- | :--- | :--- |
| **Obsidian Deep (Body Base)** | `#07070A` | Dark Charcoal Black | Primary screen background canvas |
| **Surface Dark** | `#101017` | Subtle Elevated Black | Section cards, inputs, secondary pills |
| **Surface Elevated** | `#14141E` | Frosted Obsidian | Dropdowns, dialogs, map floating card |
| **Border Subtle** | `rgba(255, 255, 255, 0.08)` | Translucent White | Dividers, card boundaries, input strokes |
| **Border Dark** | `#232332` | Charcoal Indigo | Frame lines, footer separators |
| **Metallic Gold Primary** | `#E5A93C` | Rich Warm Gold | Main brand accents, borders, star icons |
| **Gold Highlight** | `#FDE68A` | Bright Amber Cream | Button gradient highlights, badge texts |
| **Gold Deep Bronze** | `#B88214` | Antique Bronze | Gradient base, drop shadow depths |
| **Athletic Crimson** | `#E63946` | Vivid Racing Red | Conditioning badge, ambient heat glow |
| **WhatsApp Emerald** | `#10B981` | Vibrant Green | WhatsApp CTA buttons, admission status |
| **Slate Light (Primary Text)** | `#F1F5F9` | Crisp Off-White | Main headlines, titles, active labels |
| **Slate Muted (Body Text)** | `#CBD5E1` | Soft Neutral Gray | Paragraphs, feature checklists, descriptions |
| **Slate Dark (Subtle Info)** | `#94A3B8` | Steel Gray | Timestamps, landmark subtexts, copyright |

### Specialized Gradients

- **Gold Gradient Text (`.gold-gradient-text`)**:
  ```css
  background: linear-gradient(135deg, #FFF7D6 0%, #E5A93C 50%, #B88214 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  ```
- **Metallic Ember Button (`.ember-btn`)**:
  ```css
  background: linear-gradient(135deg, #FDE68A 0%, #E5A93C 50%, #A07817 100%);
  box-shadow: 0 4px 24px rgba(229, 169, 60, 0.30);
  ```
- **VIP Pass Glass Card (`.vip-glass-card`)**:
  ```css
  background: linear-gradient(180deg, rgba(28, 23, 14, 0.95) 0%, rgba(14, 14, 20, 0.95) 100%);
  border: 2px solid #E5A93C;
  box-shadow: 0 16px 48px rgba(229, 169, 60, 0.18);
  ```

---

## 4. Background & Lighting Architecture

The background utilizes multi-layered, smooth hardware-accelerated radial spotlights without pixelated patterns:

```css
body {
  background-color: #07070a;
  background-image: 
    /* Top Center Theatrical Amber Halo */
    radial-gradient(ellipse 90% 55% at 50% 0%, rgba(229, 169, 60, 0.11) 0%, transparent 65%),
    /* Mid-Left Crimson Energy Glow */
    radial-gradient(circle at 10% 45%, rgba(230, 57, 70, 0.04) 0%, transparent 50%),
    /* Mid-Right Gold Ambient Spotlight */
    radial-gradient(circle at 90% 65%, rgba(229, 169, 60, 0.05) 0%, transparent 50%),
    /* Bottom Center Footlight Glow */
    radial-gradient(ellipse 80% 40% at 50% 100%, rgba(229, 169, 60, 0.07) 0%, transparent 60%);
  background-attachment: fixed;
}
```

---

## 5. Typography Hierarchy

| Role | Font Family | Weights Used | Letter Spacing | Styling / Examples |
| :--- | :--- | :--- | :--- | :--- |
| **Display Headings** | **Montserrat** | `800`, `900` (Black) | `tracking-tight` (-0.025em) | Uppercase, punchy athletic impact |
| **Section Eyebrows** | **Montserrat** | `800` (Extra Bold) | `tracking-widest` (+0.1em) | `★ ELITE UNISEX A/C GYM` in Gold |
| **Pricing Figures** | **Montserrat** | `900` (Black) | Normal | `₹6,666`, `₹5,000` |
| **Body Copy** | **Plus Jakarta Sans** | `400` (Regular), `500` (Medium) | Normal | Clean 1.6x line-height readability |
| **Buttons & Labels** | **Montserrat** | `700`, `800` | `tracking-wider` (+0.05em) | Uppercase bold call-to-actions |
| **Technical & Badges**| **Plus Jakarta Sans** | `600`, `700` (Semi-bold) | `tracking-wide` | Address, timings, phone links |

---

## 6. UI Components & Layout Structure (Top to Bottom)

### Grid Standard
All sections share the exact same outer container constraint:
`max-w-6xl mx-auto w-full px-4 sm:px-6 lg:px-8`  
This guarantees mathematical alignment between the header, hero, curriculum, pricing, coach, map, and footer.

---

### Component 1: Sticky Commercial Athletic Header
- **Layout**: Fixed `top-0 z-40`, glass blur (`backdrop-blur-xl bg-[#07070a]/92 border-b border-white/[0.06]`).
- **Left Side**:
  - Official brand logo ([assets/logo.png](file:///c:/Users/KARTHIK/Desktop/SHREE_FITNESS_STUDIO/assets/logo.png), 48px height) with subtle gold drop shadow.
  - Wordmark: `SHREE FITNESS STUDIO` in bold uppercase.
  - Subtitle: `Porur, Chennai • Unisex A/C Centre`.
- **Right Side**:
  - Polished **"Join Now"** ember button linking to `#plans`.
  - Zero cluttered text links or distracting badges.

---

### Component 2: Commercial Hero Arena
- **Layout**: Two-column responsive grid (`lg:grid-cols-12`) with theatrical radial backlights.
- **Left Column (Content)**:
  - Badge: `★ ELITE UNISEX A/C GYM • SAKTHI NAGAR, PORUR`.
  - Headline: `THE BENCHMARK OF STRENGTH & PHYSIQUE IN PORUR`.
  - Motto: `★ TRAIN HARD. BE STRONG. NO EXCUSES. ★` in gold gradient.
  - Value Ticker: 3-column pill strip highlighting *100% A/C Climate*, *₹6,666 / 1 Year*, and *Sakthi Master Mentorship*.
  - Action Buttons:
    - Primary: **"View Membership Passes"** (`.ember-btn`).
    - Secondary: **"WhatsApp Sakthi Master"** (Emerald with WhatsApp vector icon).
- **Right Column (Brand Emblem Showcase)**:
  - Large-format official Arnold Schwarzenegger dumbbell curl transparent logo (up to 352px).
  - Framed with an ambient golden halo glow and subtle zoom on hover.
  - Quick landmark caption: *Sakthi Nagar 4th St, Porur • Opp. Super Saravana Stores*.

---

### Component 3: Club Curriculum & Disciplines
- **Layout**: 3-column responsive grid (`grid-cols-1 md:grid-cols-3`).
- **Discipline 1 — Weight Training**:
  - Dumbbell vector icon inside gold pill.
  - Focus: Compound movements, barbell squat/deadlift mechanics, bone density, functional core power.
- **Discipline 2 — Body Building (Flagship)**:
  - Gold Trophy vector icon with `SIGNATURE` badge.
  - Gold border (`border-2 border-brand-gold/50`) with golden elevation glow.
  - Focus: Hypertrophy splits, muscle isolation, stage conditioning, and direct floor mentorship.
- **Discipline 3 — Fitness Workout**:
  - Crimson Flame vector icon.
  - Focus: High-energy cardio, stamina, core conditioning, and unisex metabolic burn.

---

### Component 4: Membership Passes (Switched Side-by-Side Layout)
- **Layout**: 2-column comparison cards (`max-w-4xl mx-auto`).
- **Card 1 (First / Flagship): 1 Year VIP Plan — ₹6,666**:
  - Badge: `★ BEST VALUE VIP` gradient ribbon at top right.
  - Pricing: `₹6,666 / 1 Full Year` (`~₹555/month` value breakdown).
  - Styling: Luxury dark gradient (`.vip-glass-card`) with 2px gold border.
  - Inclusions:
    - 365 Days Unlimited A/C Access
    - Free Weights & Resistance Stations
    - Custom Hypertrophy/Fat Loss Split
    - Dietary Structure & Form Correction
    - Direct Daily Floor Mentorship by Sakthi Master
  - Actions: **"Select 1-Year VIP (₹6,666)"** + **"Confirm 1-Yr via WhatsApp"**.
- **Card 2 (Second): 6 Months Plan — ₹5,000**:
  - Pricing: `₹5,000 / 6 Months` (`~₹833/month` value breakdown).
  - Styling: Crisp dark glass card (`.standard-glass-card`).
  - Inclusions: Full A/C Access, Weight Training & Machines, Split Guidance, Floor Assistance.
  - Actions: **"Select 6-Month Plan (₹5,000)"** + **"Confirm 6-Mo via WhatsApp"**.

---

### Component 5: Head Coach & Founder Spotlight
- **Layout**: Split grid (`lg:grid-cols-12`).
- **Left**: Framed gold portrait avatar of the official Arnold logo + Sakthi Master title badge.
- **Right**:
  - Title: `Real Strength. Strict Form. Zero Excuses.`
  - Narrative: 20+ years of natural bodybuilding pedigree, biomechanical form correction, and direct coaching.
  - Credentials: *Form Biomechanics*, *Progressive Overload*, *Drug-Free Natural Muscle*.
  - Direct Phone Action Buttons: Call lines for `8778642342` and `9566099329`.

---

### Component 6: Admission Enquiry & Visit Scheduler
- **Layout**: Clean centered form container (`max-w-3xl mx-auto`).
- **Fields**:
  1. Full Name input
  2. WhatsApp / Phone Number input
  3. Plan Dropdown (*1 Year VIP*, *6 Months*, *Personal Training*, *Walk-in Consultation*)
  4. Shift Dropdown (*Morning 5:30–9:30 AM*, *Evening 4:30–9:30 PM*, *Sunday 7:00–11:00 AM*, *Flexible*)
- **Submission**: Directly opens WhatsApp with a cleanly formatted admission request text to Sakthi Master.

---

### Component 7: Studio Location & Turn-by-Turn Map
- **Layout**: Responsive split grid (`lg:grid-cols-12`).
- **Left Column**:
  - Official Address Card: *No. 3, Sakthi Nagar 4th Street, Somasundaram Avenue, Porur, Chennai - 600 116*.
  - Landmark highlights: *Opp. Super Saravana Stores & BSNL Exchange Upstairs*.
  - Quick Info Cards: Timings (*5:30 AM – 9:30 PM*) & Direct Hotline (*8778642342 / 9566099329*).
  - Action Trio:
    - **"Open Exact Location Pin"** (Google Maps query)
    - **"Get Directions"** (Google Maps turn-by-turn routing)
    - **"Copy Full Address"** (1-click clipboard copy with toast feedback)
- **Right Column**:
  - Embedded Google Maps iframe with high-contrast grayscale filter and floating quick-link pill.

---

### Component 8: Commercial Footer
- Brand logo + `Shree Fitness Studio` + `Unisex A/C Gym`.
- Copyright and Porur address notice.
- Aligned to the exact 6XL grid standard.

---

### Component 9: Docked Mobile 5-Tab App Bar
- Fixed bottom dock (`fixed bottom-0 left-0 right-0 z-50 bg-[#07070a]/95 backdrop-blur-xl h-14 md:hidden`).
- 5 Tabs:
  1. **Home** (`#home` + Home Icon)
  2. **Programs** (`#curriculum` + Dumbbell Icon)
  3. **Plans** (`#plans` + Membership Card Icon)
  4. **Coach** (`#coach` + Coach Silhouette Icon)
  5. **Location** (`#location` + Map Pin Icon)
- Real-time scroll observer activates the gold indicator for the current section.

---

## 7. Official Content & Copywriting Directory

### Flagship Slogans
- `TRAIN HARD. BE STRONG. NO EXCUSES.`
- `PORUR'S PREMIER UNISEX A/C FITNESS CENTRE`
- `THE BENCHMARK OF STRENGTH & PHYSIQUE IN PORUR`

### WhatsApp Routing Templates

#### General Hero Chat:
```text
Hi Sakthi Master! I want to inquire about admission at Shree Fitness Studio in Porur.
```

#### 1 Year VIP Plan Confirmation:
```text
Hi Sakthi Master! I want to confirm the 1 Year VIP Plan for ₹6,666 at Shree Fitness Studio.
```

#### 6 Months Plan Confirmation:
```text
Hi Sakthi Master! I want to confirm the 6 Months Plan for ₹5,000 at Shree Fitness Studio.
```

#### Admission Form Submission:
```text
Hi Sakthi Master! I would like to join Shree Fitness Studio (Porur).

• Name: [Visitor Name]
• Contact: [Visitor Phone]
• Selected Plan: [Selected Plan]
• Preferred Shift: [Selected Batch]

Please let me know the admission procedure.
```

---

## 8. Media Assets & Vector Iconography

### 1. Raster & Vector Assets
- **[assets/logo.png](file:///c:/Users/KARTHIK/Desktop/SHREE_FITNESS_STUDIO/assets/logo.png)**:
  - The client's official transparent PNG logo.
  - Elements: Arnold Schwarzenegger bicep pose with dumbbell, gold halo ring, gold "SHREE", crisp white "FITNESS STUDIO", 3 gold stars, and gold chevron/shield.
- **[assets/banner.png](file:///c:/Users/KARTHIK/Desktop/SHREE_FITNESS_STUDIO/assets/banner.png)**:
  - Real photograph of the physical street signboard.
- **[assets/banner_digital.svg](file:///c:/Users/KARTHIK/Desktop/SHREE_FITNESS_STUDIO/assets/banner_digital.svg)**:
  - 1600x900 standalone vector banner embedding the base64 official logo, program cards, timings, and credentials without grid dots.

### 2. SVG Vector Icons Library
All icons are custom SVG vectors defined with `stroke-width="2"`, `stroke="currentColor"`, and `fill="none"`:
- `Icons.Dumbbell`: Barbell and dumbbell plates
- `Icons.ShieldCheck`: Gym quality guarantee
- `Icons.Flame`: Dynamic fitness metabolic energy
- `Icons.Snowflake`: Air-conditioned climate badge
- `Icons.Trophy`: Bodybuilding signature award
- `Icons.Phone`: Direct hotline dialer
- `Icons.MapPin`: Porur studio geolocation
- `Icons.Clock`: Studio operating hours
- `Icons.WhatsApp`: Official WhatsApp brand glyph
- `Icons.Check`: Membership benefit checkmarks
- `Icons.Directions`: Google Maps turn navigation arrow
- `Icons.Copy`: Clipboard address duplication

---

## 9. Technical Architecture & SEO Engine

### 1. Technology Stack
- **Architecture**: Zero-build, 100% self-contained Single-Page Application (SPA).
- **Core Runtime**: React 18 & ReactDOM 18 (Production CDN build).
- **Compilation**: Babel Standalone for in-browser JSX parsing (instant file editing).
- **Styling**: Tailwind CSS 3.4 CDN + Custom CSS design tokens.
- **Source Code Sync**: [src/App.jsx](file:///c:/Users/KARTHIK/Desktop/SHREE_FITNESS_STUDIO/src/App.jsx) is 100% identical in layout and functionality to [index.html](file:///c:/Users/KARTHIK/Desktop/SHREE_FITNESS_STUDIO/index.html).

### 2. SEO & Schema.org Structured Data
- **Canonical URL**: `https://shreefitnessstudio.com/`
- **Geo Coordinates**: `13.0336 N, 80.1603 E` (Porur, Chennai, Tamil Nadu)
- **JSON-LD Schema**:
  - `@type`: `["ExerciseGym", "HealthClub"]`
  - Name: `Shree Fitness Studio`
  - Founder: `Sakthi Master`
  - Price Range: `₹5,000 - ₹6,666`
  - Operating Hours: Mon–Sat (05:30 to 21:30) & Sun (07:00 to 11:00)

---

## 10. Local Preview & Zero-Cost Deployment

### Local Network Mobile Preview
1. Double-click [`start_mobile_preview.bat`](file:///c:/Users/KARTHIK/Desktop/SHREE_FITNESS_STUDIO/start_mobile_preview.bat).
2. It automatically detects your local Wi-Fi IP address (e.g., `http://192.168.1.X:3000`).
3. Connect your smartphone to the same Wi-Fi and open that link in mobile Chrome or Safari.

### 100% Free Hosting Options (Zero Monthly/Annual Cost)

#### Option A: Vercel (Recommended — Fastest)
1. Push this folder to a free GitHub repository.
2. Sign in to [vercel.com](https://vercel.com) using GitHub.
3. Click **"Add New Project"** and select `SHREE_FITNESS_STUDIO`.
4. Click **Deploy**. Vercel will instantly generate a free global HTTPS link (e.g., `shreefitnessstudio.vercel.app`).
5. You can connect a custom domain (`shreefitnessstudio.com`) for free anytime.

#### Option B: Netlify
1. Drag and drop the `SHREE_FITNESS_STUDIO` folder directly into [app.netlify.com/drop](https://app.netlify.com/drop).
2. Your site is live worldwide in under 10 seconds.

---

*Authored and validated for Shree Fitness Studio (Porur, Chennai).*
