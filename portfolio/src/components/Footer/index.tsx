import { SOCIAL_LINKS } from '@/data';
import './styles.css';

export default function Footer() {
    return (
        <>
            <footer>
                <div className='site-footer'>
                    <p className='footer-copy'>
                        © {new Date().getFullYear()} Utkarsh Srivastava · Built
                        with Next.js
                    </p>
                    <div className='footer-links'>
                        <a
                            href={`mailto:${SOCIAL_LINKS.email}`}
                            className='footer-link'
                        >
                            Email
                        </a>
                        <a
                            href={SOCIAL_LINKS.linkedin}
                            target='_blank'
                            rel='noreferrer'
                            className='footer-link'
                        >
                            LinkedIn
                        </a>
                        <a
                            href={SOCIAL_LINKS.github}
                            target='_blank'
                            rel='noreferrer'
                            className='footer-link'
                        >
                            GitHub
                        </a>
                    </div>
                </div>
            </footer>
        </>
    );
}
