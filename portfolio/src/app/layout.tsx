import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
    title: 'Utkarsh Srivastava — Senior Full Stack Engineer',
    description:
        'Senior Full Stack Engineer with 6+ years building enterprise-grade platforms across government, SaaS, and transportation domains.',
    openGraph: {
        title: 'Utkarsh Srivastava — Senior Full Stack Engineer',
        description:
            'Senior Full Stack Engineer with 6+ years building enterprise-grade platforms.',
        url: 'https://utkarshutt2706.github.io/utkarshutt2706',
        siteName: 'Utkarsh Srivastava',
        locale: 'en_US',
        type: 'website',
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <body>{children}</body>
        </html>
    );
}
