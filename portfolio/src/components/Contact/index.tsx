'use client';

// ─────────────────────────────────────────────────────────────────
// CONTACT FORM SETUP (Next.js):
//   This form currently does a client-side mock submission.
//   To wire up real email delivery:
//   1. Install Resend: `npm install resend`
//   2. Create /app/api/contact/route.ts (see README for template)
//   3. Change the fetch URL below to "/api/contact"
//   4. Add RESEND_API_KEY to your .env.local
// ─────────────────────────────────────────────────────────────────

import { useState } from 'react';

import FadeIn from '@/components/FadeIn';
import { SOCIAL_LINKS } from '@/data';
import './styles.css';

type Status = null | 'sending' | 'sent' | 'error';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [status, setStatus] = useState<Status>(null);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

    const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('sending');

        try {
            // ── Swap this for a real API call once you set up /api/contact ──
            // const res = await fetch("/api/contact", {
            //   method: "POST",
            //   headers: { "Content-Type": "application/json" },
            //   body: JSON.stringify(formData),
            // });
            // if (!res.ok) throw new Error("Failed");

            await new Promise((r) => setTimeout(r, 1200)); // mock delay
            setStatus('sent');
            setFormData({ name: '', email: '', message: '' });
        } catch {
            setStatus('error');
        }
    };

    return (
        <>
            <section id='contact'>
                <div className='contact-inner'>
                    <FadeIn>
                        <div className='sec-label'>Let's talk</div>
                        <h2 className='section-heading'>Get in Touch</h2>
                        <p className='contact-sub'>
                            Open to senior engineering roles, freelance
                            projects, and architectural consulting.
                        </p>
                    </FadeIn>

                    <FadeIn delay={100}>
                        {status === 'sent' ? (
                            <div className='contact-sent'>
                                <div className='contact-sent-icon'>⚠︎</div>
                                <p
                                    style={{
                                        color: '#e0ac08',
                                        fontSize: 18,
                                        fontWeight: 600,
                                    }}
                                >
                                    WIP!
                                </p>
                                <p style={{ color: '#555570', fontSize: 14 }}>
                                    Please mail me at{' '}
                                    <a
                                        style={{ color: '#e0ac08' }}
                                        href={`mailto:${SOCIAL_LINKS.email}`}
                                    >
                                        {SOCIAL_LINKS.email} ↗
                                    </a>
                                    .
                                </p>
                            </div>
                        ) : (
                            <form
                                className='contact-form'
                                onSubmit={handleSubmit}
                                noValidate
                            >
                                <input
                                    className='form-input'
                                    type='text'
                                    name='name'
                                    placeholder='Your name'
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    autoComplete='name'
                                />
                                <input
                                    className='form-input'
                                    type='email'
                                    name='email'
                                    placeholder='Email address'
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    autoComplete='email'
                                />
                                <textarea
                                    className='form-input'
                                    name='message'
                                    placeholder='Tell me about your project or role...'
                                    rows={5}
                                    style={{
                                        resize: 'vertical',
                                        minHeight: 120,
                                    }}
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                />
                                {status === 'error' && (
                                    <p className='error-msg'>
                                        Something went wrong. Please try again.
                                    </p>
                                )}
                                <button
                                    type='submit'
                                    className='contact-submit'
                                    disabled={status === 'sending'}
                                >
                                    {status === 'sending'
                                        ? 'Sending…'
                                        : 'Send message →'}
                                </button>
                            </form>
                        )}

                        <div className='contact-links'>
                            <a
                                href={`mailto:${SOCIAL_LINKS.email}`}
                                className='contact-link'
                            >
                                <svg
                                    viewBox='0 0 24 24'
                                    fill='none'
                                    stroke='currentColor'
                                    strokeWidth='1.8'
                                    aria-hidden='true'
                                >
                                    <path d='M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z' />
                                    <polyline points='22,6 12,13 2,6' />
                                </svg>
                                {SOCIAL_LINKS.email}
                            </a>
                            <a
                                href={SOCIAL_LINKS.linkedin}
                                target='_blank'
                                rel='noreferrer'
                                className='contact-link'
                            >
                                <svg
                                    viewBox='0 0 24 24'
                                    fill='currentColor'
                                    aria-hidden='true'
                                >
                                    <path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' />
                                </svg>
                                LinkedIn ↗
                            </a>
                            <a
                                href={SOCIAL_LINKS.github}
                                target='_blank'
                                rel='noreferrer'
                                className='contact-link'
                            >
                                <svg
                                    viewBox='0 0 24 24'
                                    fill='currentColor'
                                    aria-hidden='true'
                                >
                                    <path d='M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12' />
                                </svg>
                                GitHub ↗
                            </a>
                        </div>
                    </FadeIn>
                </div>
            </section>
        </>
    );
}
