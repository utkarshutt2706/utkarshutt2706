'use client';

import { useEffect, useState } from 'react';

import { NAV_LINKS, SOCIAL_LINKS } from '@/data';
import './styles.css';

export default function Navbar() {
    const [activeSection, setActiveSection] = useState('About');

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY + 100;
            NAV_LINKS.forEach((link) => {
                const el = document.getElementById(link.toLowerCase());
                if (el && el.offsetTop <= scrollY) {
                    setActiveSection(link);
                }
            });
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollTo = (id: string) => {
        document
            .getElementById(id.toLowerCase())
            ?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <>
            <nav className='navbar'>
                <div
                    className='navbar-logo'
                    onClick={() => scrollTo('About')}
                    role='button'
                    tabIndex={0}
                    onKeyDown={(e) => e.key === 'Enter' && scrollTo('About')}
                >
                    US<span>.</span>
                </div>

                <div className='navbar-links'>
                    {NAV_LINKS.map((link) => (
                        <button
                            key={link}
                            className={`nav-btn ${activeSection === link ? 'active' : ''}`}
                            onClick={() => scrollTo(link)}
                        >
                            {link}
                        </button>
                    ))}
                </div>

                <a href={`mailto:${SOCIAL_LINKS.email}`} className='hire-btn'>
                    Hire me
                </a>
            </nav>
        </>
    );
}
