# ANVAYA — Brand, Marketing & SEO Foundation

**Document type:** Master reference for branding, SEO, domain, social, Next.js metadata, and B2B go-to-market  
**Product:** School Management ERP  
**Status:** Foundational — use this as the single source of truth while building and marketing  
**Last updated:** November 2026

---

## 1. Brand Foundation

### 1.1 Core Identity

| Element             | Value                                                           |
| ------------------- | --------------------------------------------------------------- |
| **Brand Name**      | ANVAYA                                                          |
| **Pronunciation**   | Un-vuh-yuh / Ahn-vuh-yuh                                        |
| **Origin**          | Sanskrit (अन्वय)                                                 |
| **Meaning**         | Connection, logical connection, integration, concordance, order |
| **Primary Tagline** | Every School Function, Connected.                               |
| **Supporting Line** | One Platform. One Campus.                                       |
| **Category**        | School Management ERP / Education ERP                           |

### 1.2 Brand Philosophy

> We are not building another school software.  
> We are building the **connected core** of a school — the system that brings academic, administrative, and financial operations into logical order.

ANVAYA represents how every part of a school works together as one system. The name itself carries the idea of connection and order. The product must live up to that meaning.

### 1.3 Positioning Statement

**For** school leaders, administrators, and trustees  
**Who** struggle with fragmented systems, data silos, and operational chaos  
**ANVAYA** is a modern School Management ERP  
**That** unifies academics, administration, fees, attendance, communication, and reporting into one connected platform  
**Unlike** legacy ERPs and point solutions that create more complexity  
**ANVAYA** brings clarity, order, and connection to every campus function.

### 1.4 Short Descriptions (Reusable)

**One-liner (website, social bio):**  
ANVAYA is a School Management ERP that connects every school function into one seamless platform.

**Elevator pitch (30 seconds):**  
Most schools run on multiple disconnected tools — one for fees, one for attendance, one for academics, spreadsheets for everything else. ANVAYA brings all of it into one connected system so the school can run with clarity instead of chaos.

**About (website footer / LinkedIn):**  
ANVAYA is a modern School Management Enterprise Resource Planning (ERP) system. Inspired by the Sanskrit idea of connection and logical order, ANVAYA unifies daily academic, administrative, and financial operations into one seamless platform.

---

## 2. Domain & URL Strategy

### 2.1 Domain Priority List

`anvaya.com` is taken. Use this order of preference:

| Priority | Domain           | Notes                          |
| -------- | ---------------- | ------------------------------ |
| 1        | anvaya.app       | Clean, modern, product-focused |
| 2        | getanvaya.com    | Action-oriented, easy to say   |
| 3        | anvayaerp.com    | Clear category signal          |
| 4        | useanvaya.com    | Strong CTA feel                |
| 5        | anvayaschool.com | Category + product clarity     |
| 6        | anvaya.io        | Tech feel                      |
| 7        | anvaya.co        | Short alternative              |

**Action:** Buy the best available primary domain + 1–2 defensive variants immediately.

### 2.2 URL Structure (Recommended)

```
https://[primary-domain]/
https://[primary-domain]/features
https://[primary-domain]/features/attendance
https://[primary-domain]/features/fees
https://[primary-domain]/features/academics
https://[primary-domain]/pricing
https://[primary-domain]/about
https://[primary-domain]/blog
https://[primary-domain]/blog/[slug]
https://[primary-domain]/demo
https://[primary-domain]/contact
https://[primary-domain]/docs          (or docs.anvaya.app)
https://[primary-domain]/status        (or status.anvaya.app)
```

**Rules:**

- Prefer clean, readable paths
- Avoid query parameters for main pages
- Keep feature URLs consistent (`/features/[module]`)
- Use trailing slash consistently (decide once and stick to it)

---

## 3. Social Media & Handles

### 3.1 Preferred Handles

| Platform    | Preferred                | Fallback Options                      |
| ----------- | ------------------------ | ------------------------------------- |
| X (Twitter) | @getanvaya               | @anvayaerp, @anvayaschool, @anvayaapp |
| Instagram   | @getanvaya               | @anvayaerp, @anvayaschool             |
| LinkedIn    | Company: ANVAYA          | —                                     |
| Facebook    | /getanvaya or /anvayaerp | —                                     |
| YouTube     | @getanvaya               | @anvayaerp                            |
| GitHub      | anvaya-org or getanvaya  | —                                     |

**Rule:** Use the **same handle** across platforms whenever possible. Consistency builds recognition.

### 3.2 Profile Setup Guidelines

- **Display name:** ANVAYA
- **Bio template:**  
  `School Management ERP → Every School Function, Connected.  
One Platform. One Campus.`
- **Website link:** Primary domain
- **Profile image:** Logo mark (square)
- **Banner:** Brand visual + tagline

---

## 4. Visual Identity (Foundation)

### 4.1 Logo Requirements

Create these versions early:

- Primary wordmark (ANVAYA)
- Logo mark / icon (for favicon, app icon, social)
- Horizontal lockup (icon + wordmark)
- Stacked version
- Monochrome (black / white)
- Favicon set: 16×16, 32×32, 180×180, 512×512

### 4.2 Color Direction (Suggested Starting Point)

| Role            | Suggested Direction                           | Notes                     |
| --------------- | --------------------------------------------- | ------------------------- |
| Primary         | Deep teal / indigo / navy                     | Trust + education         |
| Accent          | Warm coral or soft gold                       | Energy without aggression |
| Background      | Off-white / soft gray                         | Clean SaaS feel           |
| Text            | Near-black + muted gray                       | High readability          |
| Success / Error | Standard green / red with accessible contrast | —                         |

Finalize exact hex values later and document them here.

### 4.3 Typography Direction

- **Headings:** Clean geometric or modern humanist sans (e.g. Inter, Geist, Satoshi, or similar)
- **Body:** Highly readable sans (Inter, System UI, or equivalent)
- Avoid decorative or overly “Indian traditional” fonts for the product UI — keep the product modern; cultural story can live in marketing copy.

---

## 5. Next.js SEO Metadata (Ready to Use)

### 5.1 Root Layout Metadata (`app/layout.tsx`)

```tsx
import type { Metadata } from "next";

const siteConfig = {
  name: "ANVAYA",
  tagline: "Every School Function, Connected.",
  description:
    "ANVAYA is a modern School Management ERP that unifies academics, administration, fees, attendance, and communication into one connected platform.",
  url: "https://your-primary-domain.com", // ← replace
  ogImage: "https://your-primary-domain.com/og.png",
  links: {
    twitter: "https://x.com/getanvaya",
    linkedin: "https://linkedin.com/company/anvaya",
  },
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} – School Management ERP | ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "school management software",
    "school ERP",
    "education ERP",
    "school administration software",
    "student information system",
    "school fees management",
    "attendance management system",
    "ANVAYA",
  ],
  authors: [{ name: "ANVAYA" }],
  creator: "ANVAYA",
  publisher: "ANVAYA",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteConfig.url,
    title: `${siteConfig.name} – ${siteConfig.tagline}`,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "ANVAYA – Every School Function, Connected.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} – ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@getanvaya",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};
```

### 5.2 Page-Level Metadata Example

```tsx
// app/features/attendance/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Attendance Management",
  description:
    "Track student and staff attendance in real time with ANVAYA. Automated reports, parent notifications, and seamless integration with the rest of your school operations.",
  openGraph: {
    title: "Attendance Management | ANVAYA",
    description: "Track student and staff attendance in real time with ANVAYA.",
  },
};
```

### 5.3 Dynamic Metadata (Blog / Docs)

```tsx
export async function generateMetadata({ params }): Promise<Metadata> {
  const post = await getPost(params.slug);

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.publishedAt,
      images: [post.coverImage],
    },
  };
}
```

---

## 6. Open Graph & Social Sharing Assets

### 6.1 Required Images

| Asset                 | Size          | File Suggestion         | Notes                   |
| --------------------- | ------------- | ----------------------- | ----------------------- |
| Default OG Image      | 1200 × 630 px | `/og.png`               | Homepage + fallback     |
| Twitter Card          | 1200 × 600 px | `/twitter-card.png`     | Optional separate       |
| Feature OG templates  | 1200 × 630 px | `/og/[feature].png`     | Optional                |
| Favicon               | 32×32, etc.   | `/favicon.ico`          | Multiple sizes          |
| Apple Touch Icon      | 180 × 180 px  | `/apple-touch-icon.png` | —                       |
| Social Profile Avatar | 400 × 400 px  | —                       | Logo mark               |
| Social Banner         | 1500 × 500 px | —                       | X / LinkedIn / Facebook |

### 6.2 OG Image Content Guidelines

- Logo + wordmark
- Primary tagline: “Every School Function, Connected.”
- Clean, high-contrast design
- Minimal text (readable at small sizes)
- Consistent brand colors

---

## 7. Structured Data (JSON-LD)

### 7.1 Organization Schema

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "ANVAYA",
  "url": "https://your-primary-domain.com",
  "logo": "https://your-primary-domain.com/logo.png",
  "description": "School Management ERP that connects every school function into one platform.",
  "sameAs": [
    "https://x.com/getanvaya",
    "https://linkedin.com/company/anvaya",
    "https://www.facebook.com/getanvaya"
  ]
}
```

### 7.2 SoftwareApplication Schema

```json
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "ANVAYA",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Web",
  "description": "Modern School Management ERP for academic, administrative, and financial operations.",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "INR"
  },
  "url": "https://your-primary-domain.com"
}
```

Add these via `<script type="application/ld+json">` in the layout or using Next.js `JSON-LD` patterns.

---

## 8. Technical SEO Checklist

### 8.1 On-Page

- [ ] Unique title + meta description on every important page
- [ ] Proper heading hierarchy (H1 → H2 → H3)
- [ ] Descriptive alt text for images
- [ ] Internal linking between features, blog, and pricing
- [ ] Canonical URLs set correctly
- [ ] Mobile-first responsive design
- [ ] Fast Core Web Vitals (LCP, CLS, INP)

### 8.2 Technical

- [ ] `sitemap.xml` (auto-generated via `next-sitemap` or App Router)
- [ ] `robots.txt`
- [ ] HTTPS everywhere
- [ ] Clean 404 page
- [ ] Proper redirects (301) for any old URLs
- [ ] XML sitemap submitted to Google Search Console
- [ ] Google Search Console + Bing Webmaster Tools verified

### 8.3 Content SEO (Long-term)

Target topics:

- School management software
- School ERP India
- Student information system
- Fee management software for schools
- Attendance management system for schools
- How to choose a school ERP
- School administration best practices

Create comparison, alternative, and problem-solution content over time.

---

## 9. B2B Marketing & Go-to-Market Foundation

### 9.1 Primary Audience

| Segment                  | Role                | Pain Points                          | Key Message               |
| ------------------------ | ------------------- | ------------------------------------ | ------------------------- |
| School Owners / Trustees | Decision makers     | Cost, control, long-term reliability | Clarity + ownership       |
| Principals               | Operational leaders | Daily chaos, lack of visibility      | One system, less friction |
| Administrators           | Daily users         | Manual work, errors, multiple tools  | Speed + accuracy          |
| IT / Coordinators        | Implementers        | Integration, support, training       | Simple to run             |

### 9.2 Core Marketing Messages

**Problem side:**

- Schools are drowning in disconnected tools and spreadsheets
- Data lives in silos
- Staff waste time on repetitive admin work
- Leaders lack real-time visibility

**Solution side:**

- One connected platform
- Logical order across functions
- Clarity for leadership
- Less chaos for staff

**Emotional angle:**

- Calm instead of chaos
- Control instead of confusion
- Connection instead of fragmentation

### 9.3 Key Channels (B2B Priority)

1. **LinkedIn** — Primary channel for school decision makers
2. **Google Search (SEO + limited ads)** — High intent
3. **Direct outreach** — Principals, trustees, school groups
4. **WhatsApp / Email sequences** — Common in Indian education sales
5. **Webinars / Demo sessions**
6. **Education associations & events** (later)
7. **Content (blog + guides)** — SEO + trust

### 9.4 Sales & Demo Narrative

**Demo flow suggestion:**

1. Start with the pain: “Most schools run on 5–7 different tools…”
2. Show the connected view (dashboard / core modules)
3. Walk through 2–3 high-pain modules (Fees + Attendance + Communication)
4. Show how data flows between modules
5. End with clarity: “This is what order looks like.”

**Trial / Pilot offer ideas:**

- Free pilot for one term
- Implementation support included
- Data migration assistance

---

## 10. Messaging Bank (Copy You Can Reuse)

### Headlines

- Every School Function, Connected.
- One Platform. One Campus.
- School management without the chaos.
- Bring order to your campus.
- The connected core of your school.

### Feature Framing

- **Attendance** → Know who’s present, in real time, across the campus.
- **Fees** → Collect, track, and reconcile without spreadsheets.
- **Academics** → Marks, reports, and progress — connected to everything else.
- **Communication** → Reach parents and staff from one place.
- **Administration** → Staff, students, transport, inventory — unified.

### Trust Lines

- Built for Indian schools.
- Designed for clarity, not complexity.
- One system your whole team can actually use.

---

## 11. Launch Readiness Checklist

### Before Public Launch

- [ ] Primary domain purchased and configured
- [ ] Social handles secured
- [ ] Logo + favicon + OG images ready
- [ ] Next.js metadata implemented
- [ ] Organization + SoftwareApplication schema added
- [ ] Google Search Console verified
- [ ] Basic privacy policy + terms pages
- [ ] Contact / Demo request flow working
- [ ] LinkedIn company page created
- [ ] Core messaging finalized and consistent

### Post-Launch (First 90 Days)

- [ ] Start publishing helpful content (SEO)
- [ ] Collect early testimonials
- [ ] Set up basic analytics (Vercel Analytics / Plausible / GA4)
- [ ] Create case study template
- [ ] Build simple email nurture sequence
- [ ] Monitor brand searches and fix issues early

---

## 12. Future-Proof Notes

- Keep the **name + meaning** story consistent. Do not dilute “connection + order”.
- Avoid adding random product names that break the brand architecture.
- When expanding modules, frame them as “connected functions” under ANVAYA, not separate brands.
- Document any new messaging or positioning changes in this file.
- Revisit this document every 6 months or before major marketing pushes.

---

## 13. Quick Reference Card

```
Brand:        ANVAYA
Tagline:      Every School Function, Connected.
Supporting:   One Platform. One Campus.
Category:     School Management ERP
Core Idea:    Connection + Logical Order
Primary Channel: LinkedIn + SEO + Direct
Domain Priority: anvaya.app → getanvaya.com → anvayaerp.com
```

---

**End of Document**

This file is the single source of truth for ANVAYA branding, SEO, metadata, and early go-to-market decisions. Update it as the product and positioning evolve.
