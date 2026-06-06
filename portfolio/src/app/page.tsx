'use client';

import { GLOBAL_STYLES } from './styles';

import Achievements from '@/components/Achievements';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';

export default function Portfolio() {
    return (
        <div style={{ background: '#0A0A0F', minHeight: '100vh' }}>
            {/* Inject global styles */}
            <style>{GLOBAL_STYLES}</style>

            {/* Fixed navigation */}
            <Navbar />

            {/* Page sections — order matches nav */}
            <main>
                <Hero />
                <Projects />
                <Achievements />
                <Skills />
                <Contact />
            </main>

            <Footer />
        </div>
    );
}
