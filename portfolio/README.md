# Utkarsh Srivastava — Portfolio

Built with **Next.js 14** (App Router). Deployable as a static site via GitHub Pages.

---

## Project Structure

```
portfolio/
├── page.tsx                    ← Root entry point (assembles all sections)
├── data.ts                     ← All content: projects, achievements, skills, links
├── styles.ts                   ← Shared global CSS
├── components/
│   ├── FadeIn.tsx              ← Reusable scroll-triggered fade-in animation
│   ├── Navbar.tsx              ← Fixed top navigation with active-section tracking
│   ├── Hero.tsx                ← Hero section with photo, stats, social links
│   ├── Projects.tsx            ← Project cards grid
│   ├── Achievements.tsx        ← Achievement cards with stats
│   ├── Skills.tsx              ← Skill chips grouped by category
│   ├── Contact.tsx             ← Contact form
│   └── Footer.tsx              ← Site footer
```

---

## Quick Start (Next.js)

```bash
npx create-next-app@latest portfolio --app --no-tailwind
cd portfolio

# Copy all files from this folder into the app/ directory
# page.tsx → app/page.tsx
# components/ → app/components/
# data.ts → app/data.ts
# styles.ts → app/styles.ts
```

---

## Adding Your Photo

1. Add your photo to `/public/photo.jpg` (JPG, PNG or WebP — portrait crop works best)
2. Open `components/Hero.tsx`
3. Find this line near the top:
    ```js
    const PHOTO_SRC = null;
    ```
4. Change it to:
    ```js
    const PHOTO_SRC = '/photo.jpg';
    ```
5. That's it — the placeholder disappears and your photo renders in the frame.

**For Next.js Image optimization** (optional):

```tsx
// In Hero.tsx, swap <img> for:
import Image from 'next/image';
<Image
    src={PHOTO_SRC}
    alt='Utkarsh Srivastava'
    fill
    style={{ objectFit: 'cover', objectPosition: 'top center' }}
/>;
```

---

## Adding Real Email via Resend (Contact Form)

1. Sign up at [resend.com](https://resend.com) — free tier is 3,000 emails/month
2. Install: `npm install resend`
3. Create `app/api/contact/route.ts`:

```ts
import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    const { name, email, message } = await req.json();
    await resend.emails.send({
        from: 'portfolio@yourdomain.com',
        to: 'utkarshutt2706@gmail.com',
        subject: `Portfolio contact from ${name}`,
        text: `From: ${name} <${email}>\n\n${message}`,
    });
    return NextResponse.json({ ok: true });
}
```

4. Add to `.env.local`:
    ```
    RESEND_API_KEY=re_xxxxxxxxxxxx
    ```
5. In `components/Contact.tsx`, uncomment the real fetch block and remove the mock delay.

---

## Deploying to GitHub Pages (Free)

1. Add to `next.config.ts`:

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: { unoptimized: true }, // required for static export if using next/image
};
module.exports = nextConfig;
```

2. Add `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages
on:
    push:
        branches: [main]
jobs:
    deploy:
        runs-on: ubuntu-latest
        steps:
            - uses: actions/checkout@v4
            - uses: actions/setup-node@v4
              with:
                  node-version: 20
            - run: npm ci
            - run: npm run build
            - uses: peaceiris/actions-gh-pages@v3
              with:
                  github_token: ${{ secrets.GITHUB_TOKEN }}
                  publish_dir: ./out
```

3. In GitHub repo settings → Pages → Source: `gh-pages` branch.

---

## Updating Content

All portfolio content lives in **`data.ts`** — projects, achievements, skills, and social links.
No need to touch any component file for content changes.
