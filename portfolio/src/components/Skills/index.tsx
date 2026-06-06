import FadeIn from '@/components/FadeIn';
import { SKILLS } from '@/data';
import './styles.css';

export default function Skills() {
    return (
        <>
            <section id='skills'>
                <FadeIn>
                    <div className='sec-label'>Tech stack</div>
                    <h2 className='section-heading'>Skills</h2>
                </FadeIn>

                <div className='skills-grid'>
                    {Object.entries(SKILLS).map(([category, skills], i) => (
                        <FadeIn key={category} delay={i * 80}>
                            <div>
                                <div className='skill-category-label'>
                                    {category}
                                </div>
                                <div>
                                    {skills.map((skill) => (
                                        <span
                                            key={skill}
                                            className='skill-chip'
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </section>
        </>
    );
}
