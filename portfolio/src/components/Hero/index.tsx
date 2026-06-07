'use client';

// ─────────────────────────────────────────────────────────────────
// PHOTO INSTRUCTIONS:
//   1. Add your passport photo to: /public/photo.jpg  (or .png / .webp)
//   2. Change the PHOTO_SRC constant below to "/photo.jpg"
//   3. If you're not using Next.js Image, keep the plain <img> tag as-is.
//      If you want Next.js optimisation, swap to:
//        import Image from "next/image";
//        <Image src={PHOTO_SRC} alt="Utkarsh Srivastava" fill style={{ objectFit: "cover" }} />
// ─────────────────────────────────────────────────────────────────

import FadeIn from '@/components/FadeIn';
import { SOCIAL_LINKS, STATS } from '@/data';
import './styles.css';

// ← Replace with "/photo.jpg" once you add your image to /public
const PHOTO_SRC = 'photo.png';

export default function Hero() {
    const scrollTo = (id: string) =>
        document
            .getElementById(id.toLowerCase())
            ?.scrollIntoView({ behavior: 'smooth' });

    return (
        <>
            <section id='about'>
                <div className='hero-glow-1' />
                <div className='hero-glow-2' />

                <div className='hero-inner'>
                    {/* ── Text side ── */}
                    <div className='hero-text'>
                        <FadeIn>
                            <div className='hero-available'>
                                Available for opportunities
                            </div>
                        </FadeIn>

                        <FadeIn delay={80}>
                            <h1 className='hero-h1'>
                                Utkarsh
                                <br />
                                <span>Srivastava</span>
                            </h1>
                        </FadeIn>

                        <FadeIn delay={140}>
                            <p className='hero-desc'>
                                Senior Full Stack Engineer with{' '}
                                <strong>6+ years</strong> building
                                enterprise-grade platforms — from government
                                infrastructure serving millions, to SaaS
                                products and real-time transit systems.
                            </p>
                            <p className='hero-stack'>
                                Angular · ReactJS · Node.js · NestJS · AWS ·
                                PostgreSQL
                            </p>
                        </FadeIn>

                        <FadeIn delay={200}>
                            <div className='hero-cta'>
                                <button
                                    className='btn-primary'
                                    onClick={() => scrollTo('Projects')}
                                >
                                    View work →
                                </button>

                                <a
                                    href={SOCIAL_LINKS.linkedin}
                                    target='_blank'
                                    rel='noreferrer'
                                    className='hero-social-btn linkedin'
                                >
                                    {/* LinkedIn icon */}
                                    <svg
                                        viewBox='0 0 24 24'
                                        fill='currentColor'
                                        aria-hidden='true'
                                    >
                                        <path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' />
                                    </svg>
                                    LinkedIn
                                </a>

                                <a
                                    href={SOCIAL_LINKS.github}
                                    target='_blank'
                                    rel='noreferrer'
                                    className='hero-social-btn github'
                                >
                                    {/* GitHub icon */}
                                    <svg
                                        viewBox='0 0 24 24'
                                        fill='currentColor'
                                        aria-hidden='true'
                                    >
                                        <path d='M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12' />
                                    </svg>
                                    GitHub
                                </a>
                            </div>
                        </FadeIn>

                        <FadeIn delay={260}>
                            <div className='hero-stats'>
                                {STATS.map(({ value, label }) => (
                                    <div key={label}>
                                        <div className='hero-stat-n'>
                                            {value}
                                        </div>
                                        <div
                                            className='hero-stat-l'
                                            style={{
                                                fontSize: 12,
                                                color: '#444460',
                                                marginTop: 2,
                                            }}
                                        >
                                            {label}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </FadeIn>
                    </div>

                    {/* ── Photo side ── */}
                    <FadeIn delay={160}>
                        <div className='hero-photo-wrap'>
                            <div
                                style={{
                                    position: 'relative',
                                    display: 'inline-block',
                                }}
                            >
                                <div className='hero-photo-frame'>
                                    {PHOTO_SRC ? (
                                        <img
                                            src={PHOTO_SRC}
                                            alt='Utkarsh Srivastava'
                                        />
                                    ) : (
                                        <div className='hero-photo-placeholder'>
                                            {/* Camera icon */}
                                            <svg
                                                width='36'
                                                height='36'
                                                viewBox='0 0 24 24'
                                                fill='none'
                                                stroke='currentColor'
                                                strokeWidth='1.5'
                                            >
                                                <path d='M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z' />
                                                <circle cx='12' cy='13' r='4' />
                                            </svg>
                                            <span>
                                                Add photo.jpg
                                                <br />
                                                to /public
                                            </span>
                                        </div>
                                    )}
                                </div>
                                <div className='hero-photo-accent' />
                                <div className='hero-photo-accent-tl' />
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>
        </>
    );
}
